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

  const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY || ''
  const prompt = prompts[category] || prompts.autres

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 1200, temperature: 0.7 },
      }),
    }
  )

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error?.message || `Erreur ${response.status}`)
  }

  const data = await response.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
  const clean = text.replace(/```json\n?|```/g, '').trim()
  const start = clean.indexOf('{')
  const end = clean.lastIndexOf('}')
  return JSON.parse(clean.slice(start, end + 1))
}
