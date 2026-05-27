# 🍸 BarGuide v3

Application complète de guide bar — tous les cocktails IBA officiels, bières, vins, cafés, mocktails, shots, sangrias et digestifs. Les recettes sont générées à la demande par l'API Claude (Anthropic), avec mise en cache session.

---

## 🚀 Démarrage rapide

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configurer l'API
```bash
cp .env.example .env
# Éditer .env et renseigner votre clé Anthropic
# https://console.anthropic.com/
```

### 3. Lancer en développement
```bash
npm run dev
# → http://localhost:3000
```

### 4. Build production
```bash
npm run build
npm run preview
```

---

## 📁 Structure du projet

```
barguide/
├── src/
│   ├── main.jsx          # Point d'entrée React
│   ├── App.jsx           # Composant principal (UI + données)
│   └── api.js            # Module de génération de recettes (Anthropic API)
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── package.json
├── .env.example          # Template variables d'environnement
├── .gitignore
└── README.md
```

---

## 🎯 Fonctionnalités

| Feature | Détail |
|---|---|
| **130+ cocktails** | 102 IBA officiels (Unforgettable, Contemporary, New Era) + ~40 populaires |
| **15 bières** | Lager, IPA, NEIPA, Stout, Blanche, Trappiste, Sour... |
| **10 vins** | Rouge, Blanc, Rosé, Champagne, Porto, Sake, Nature... |
| **15 cafés** | Espresso, Cappuccino, Latte, Cold Brew, AeroPress, Brûlot... |
| **20+ autres** | Mocktails, Shots, Sangrias, Digestifs |
| **IA-powered** | Recettes générées par Claude, cachées en session |
| **3 modes matériel** | Idéal / Débrouille / Sans rien |
| **Alternatives** | 3 alternatives par ingrédient, cliquables |
| **Mesures improvisées** | Guide de conversion cl → ustensiles du quotidien |
| **Recherche** | Recherche globale sur nom, origine, ingrédients, catégorie IBA |
| **Filtres** | Filtrage par sous-catégorie |
| **Animations** | Cartes en cascade, flottement background, modal animée, hover glow |

---

## 🔧 Développement avec Claude Code

Ce projet est conçu pour être développé avec **Claude Code** (`claude` en CLI).

### Commandes utiles
```bash
# Démarrer Claude Code dans ce dossier
claude

# Exemples de prompts à donner à Claude Code :
# "Ajoute un système de favoris persistant avec localStorage"
# "Crée une page de détail dédiée pour chaque cocktail avec URL"  
# "Ajoute un mode sombre/clair toggle"
# "Implémente un système de notes personnelles par recette"
# "Ajoute le support PWA pour utilisation offline"
```

### Variables d'environnement
```
VITE_ANTHROPIC_API_KEY  — Clé API Anthropic (requis)
VITE_API_BASE_URL       — URL proxy backend optionnel
```

---

## ⚠️ Note sécurité

En production, **ne jamais exposer la clé API Anthropic dans le code client**. Mettre en place un backend proxy (Node.js/Express ou Next.js API Routes) qui relaie les appels vers l'API Anthropic.

Exemple de backend minimal :
```bash
# Via Claude Code :
# "Crée un serveur Express proxy pour relayer les appels Anthropic API"
```

---

## 📦 Stack technique

- **React 18** + Vite 5
- **CSS-in-JS** (styles injectés via `<style>`)
- **Anthropic API** (`claude-sonnet-4-20250514`)
- **Fonts** : Cinzel + Lora (Google Fonts)
- **Animations** : CSS keyframes (pas de librairie JS)

---

*Généré avec Claude (Anthropic) — BarGuide v3*
