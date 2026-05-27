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
                const body = Buffer.concat(chunks).toString()
                const upstream = await fetch('https://api.anthropic.com/v1/messages', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': env.ANTHROPIC_API_KEY || '',
                    'anthropic-version': '2023-06-01',
                  },
                  body,
                })
                const data = await upstream.json()
                res.writeHead(upstream.status, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(data))
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
