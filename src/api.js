// ────────────────────────────────────────────────────────────
// api.js — Appels à l'Anthropic API pour la génération de recettes
// ────────────────────────────────────────────────────────────
//
// NOTE : En production, NE JAMAIS exposer une clé API côté client.
// Deux options :
//   1. Proxy backend (Node/Express/Next.js) qui relaie les appels
//   2. Utiliser un serveur BFF (Backend for Frontend)
//
// Pour dev local avec Claude Code : l'appel direct fonctionne si
// vous utilisez un proxy CORS ou un backend local.
//
// Variable d'environnement à créer dans .env :
//   VITE_ANTHROPIC_API_KEY=sk-ant-...
//   VITE_API_BASE_URL=http://localhost:3001  (si proxy backend)
// ────────────────────────────────────────────────────────────

const MODEL = 'claude-haiku-4-5-20251001'
const MAX_TOKENS = 1200

/**
 * Génère une fiche recette complète via l'API Anthropic.
 * @param {Object} item - L'item du menu (cocktail, bière, vin, café, autre)
 * @param {string} category - La catégorie ('cocktails' | 'bieres' | 'vins' | 'cafes' | 'autres')
 * @returns {Promise<Object>} - La fiche JSON parsée
 */
export async function generateRecipe(item, category) {
  const prompts = {
    cocktails: `Tu es un barman expert. Génère une fiche cocktail complète pour "${item.name}" (${item.origin}).
JSON uniquement, sans markdown ni texte supplémentaire :
{
  "glass": "type de verre exact",
  "ingredients": [{"name":"...","amount":"...cl ou unité","alternatives":["alt1 avec explication","alt2","alt3"]}],
  "equipment": {
    "ideal": ["matériel 1", "matériel 2"],
    "debrouille": ["substitution concrète 1", "substitution 2"],
    "rien": ["étape sans matériel avec mesures improvisées"]
  },
  "steps": ["étape 1 précise", "étape 2", "étape 3"],
  "variations": [{"name":"variation","recipe":"description courte"}],
  "tips": "conseil pro du barman"
}`,

    bieres: `Tu es un expert bière et sommelier. Génère une fiche service complète pour "${item.name}".
JSON uniquement :
{
  "temperature": "température exacte de service",
  "glass": "type de verre recommandé et pourquoi",
  "service_steps": ["étape pression 1", "étape 2", "étape 3"],
  "bouteille_steps": ["étape bouteille 1", "étape 2"],
  "alternatives": {"problème": "solution"},
  "accord": ["accord gastronomique 1", "accord 2", "accord 3"],
  "style_notes": "notes de dégustation en 2-3 phrases",
  "examples": ["marque/brasserie 1", "exemple 2", "exemple 3"]
}`,

    vins: `Tu es sommelier expert. Génère une fiche service complète pour "${item.name}".
JSON uniquement :
{
  "temperature": {"type de vin": "température"},
  "glass": "description du verre et remplissage",
  "service_steps": ["étape 1", "étape 2", "étape 3"],
  "decantation": "quand et combien de temps décanter",
  "alternatives": {"problème": "solution"},
  "accord": ["accord 1", "accord 2", "accord 3"],
  "cepages": ["cépage 1", "cépage 2"],
  "regions": ["région 1", "région 2"],
  "conservation": "conseils conservation"
}`,

    cafes: `Tu es barista expert. Génère une fiche complète pour "${item.name}".
JSON uniquement :
{
  "dosage": {"paramètre": "valeur"},
  "equipment": {
    "ideal": ["équipement 1", "équipement 2"],
    "debrouille": ["substitution 1", "substitution 2"],
    "rien": ["méthode sans équipement"]
  },
  "steps": ["étape 1", "étape 2", "étape 3"],
  "technique_lait": ["conseil 1", "conseil 2"],
  "alternatives_lait": ["lait alt 1 + résultat", "alt 2"],
  "variations": [{"name":"variation","recipe":"description"}],
  "tips": "conseil pro barista"
}`,

    autres: `Tu es barman expert. Génère une fiche complète pour "${item.name}" (${item.sub}).
JSON uniquement :
{
  "description_complete": "description complète en 2 phrases",
  "ingredients": [{"name":"...","amount":"...","alternatives":["..."]}],
  "equipment": {
    "ideal": ["équipement"],
    "debrouille": ["substitution"],
    "rien": ["sans matériel"]
  },
  "steps": ["étape 1", "étape 2"],
  "tips": "conseil",
  "notes": "info culturelle ou historique"
}`,
  }

  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      messages: [{ role: 'user', content: prompts[category] || prompts.autres }]
    })
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }

  const data = await response.json()
  const text = data.content.map(b => b.text || '').join('')
  const clean = text.replace(/```json|```/g, '').trim()
  const start = clean.indexOf('{')
  const end = clean.lastIndexOf('}')
  return JSON.parse(clean.slice(start, end + 1))
}
