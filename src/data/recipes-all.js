// Recettes statiques — chargement instantané, sans appel API
// Les catégories vides seront générées par Gemini à la demande
import { RECIPES as COCKTAIL_RECIPES } from './recipes.js';

export const RECIPES = {
  cocktails: COCKTAIL_RECIPES,
  bieres:    {},
  vins:      {},
  cafes:     {},
  autres:    {},
};
