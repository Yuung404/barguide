import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'api-dev-proxy',
        configureServer(server) {
          server.middlewares.use('/api/generate', async (req, res) => {
            if (req.method !== 'POST') {
              res.writeHead(405); res.end('Method not allowed'); return
            }
            const chunks = []
            req.on('data', c => chunks.push(c))
            req.on('end', async () => {
              try {
                const { prompt } = JSON.parse(Buffer.concat(chunks).toString())
                const apiKey = env.GOOGLE_AI_API_KEY || ''
                const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
                const upstream = await fetch(url, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { maxOutputTokens: 1200, temperature: 0.7 },
                  }),
                })
                const data = await upstream.json()
                const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
                res.writeHead(upstream.ok ? 200 : upstream.status, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(upstream.ok ? { text } : { error: data.error?.message }))
              } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err.message }))
              }
            })
          })
        },
      },
    ],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  }
})
