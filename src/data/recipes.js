export const RECIPES = {

/* ═══════════════════════════════════════════
   COCKTAILS — UNFORGETTABLES & CONTEMPORAINS
═══════════════════════════════════════════ */

"alexander":{
  glass:"Coupe à cocktail réfrigérée",
  ingredients:[
    {name:"Cognac",amount:"3cl",alternatives:["Brandy de qualité","Armagnac"]},
    {name:"Crème de cacao brun",amount:"3cl",alternatives:["Crème de cacao blanc (plus doux)","Kahlúa en dépannage"]},
    {name:"Crème fraîche liquide",amount:"3cl",alternatives:["Crème de coco pour version exotique","Lait concentré sucré dilué"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe réfrigérée","Râpe à noix de muscade"],
    debrouille:["Bocal hermétique comme shaker","Passoire cuisine","Verre à vin","Noix de muscade râpée grossièrement"],
    rien:["Mélanger vigoureusement dans le verre avec une cuillère","Saupoudrer muscade en poudre"]
  },
  steps:[
    "Réfrigérer la coupe au congélateur 5 min ou la remplir de glace.",
    "Mettre tous les ingrédients dans le shaker avec beaucoup de glace.",
    "Shaker vigoureusement 12-15 secondes jusqu'à ce que le shaker soit givré.",
    "Vider la coupe, double-filtrer et verser.",
    "Râper généreusement de la noix de muscade sur le dessus."
  ],
  variations:[
    {name:"Brandy Alexander",recipe:"Identique mais avec brandy espagnol, plus fruité"},
    {name:"Alexander's Sister",recipe:"Remplacer la crème de cacao par crème de menthe verte"},
    {name:"Alexander chaud",recipe:"Servir dans une tasse, ajouter café chaud en fin de préparation"}
  ],
  tips:"La noix de muscade fraîche râpée au dernier moment fait toute la différence. Ce cocktail est une fin de repas idéale."
},

"americano":{
  glass:"Verre old fashioned ou highball",
  ingredients:[
    {name:"Campari",amount:"3cl",alternatives:["Aperol pour version plus douce","Bitter Lemon pour version sans alcool"]},
    {name:"Vermouth rouge",amount:"3cl",alternatives:["Vermouth blanc pour version plus sèche","Martini Rosso","Cinzano Rosso"]},
    {name:"Eau gazeuse",amount:"Compléter",alternatives:["Tonic water pour plus d'amertume","Ginger ale pour version épicée"]}
  ],
  equipment:{
    ideal:["Verre old fashioned","Cuillère de bar","Épluche-légumes pour zeste"],
    debrouille:["N'importe quel verre","Cuillère classique","Couteau pour le zeste"],
    rien:["Tout dans le verre, mélanger avec une paille"]
  },
  steps:[
    "Remplir le verre de glaçons.",
    "Verser le Campari puis le vermouth.",
    "Compléter avec l'eau gazeuse bien froide.",
    "Mélanger délicatement 2-3 fois.",
    "Garnir d'une tranche d'orange et d'un zeste de citron."
  ],
  variations:[
    {name:"Negroni",recipe:"Remplacer l'eau gazeuse par 3cl de gin — le grand frère"},
    {name:"Americano Blanc",recipe:"Utiliser vermouth blanc + bitter orange au lieu du Campari"},
    {name:"Boulevardier",recipe:"Remplacer l'eau gazeuse par du bourbon"}
  ],
  tips:"L'Americano est l'apéritif parfait pour commencer une soirée sans trop d'alcool. James Bond le commandait avant le Martini."
},

"angel-face":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Gin",amount:"3cl",alternatives:["Gin London Dry","Hendrick's pour notes florales"]},
    {name:"Brandy d'abricot",amount:"3cl",alternatives:["Apricot liqueur","Amaretto + 1cl de cognac"]},
    {name:"Calvados",amount:"3cl",alternatives:["Cognac","Apple brandy américain","Armagnac"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe réfrigérée"],
    debrouille:["Bocal fermé","Passoire cuisine","Verre à vin"],
    rien:["Mélanger avec glace dans un verre, filtrer en versant doucement"]
  },
  steps:[
    "Refroidir la coupe.",
    "Verser les 3 ingrédients dans le shaker avec glace.",
    "Shaker 10-12 secondes.",
    "Filtrer dans la coupe froide.",
    "Pas de garniture — la clarté du cocktail est sa signature."
  ],
  variations:[
    {name:"Angel Face Smoky",recipe:"Remplacer le Calvados par du Calvados vieilli ou un whisky tourbé léger"},
    {name:"Angel Face Doux",recipe:"Ajouter 1cl de sirop de miel pour adoucir"}
  ],
  tips:"Cocktail IBA 1930, court et puissant à 30% ABV. La qualité du Calvados est déterminante — utilisez un vrai Calvados AOP normand."
},

"aviation":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Gin",amount:"4.5cl",alternatives:["Gin floral type Bombay Sapphire","Gin London Dry"]},
    {name:"Marasquin",amount:"1.5cl",alternatives:["Kirsch + sucre","Cerises au sirop mixées (approximatif)"]},
    {name:"Crème de violette",amount:"1cl",alternatives:["Quelques gouttes de sirop de fleur de sureau","Omettre si introuvable — goût différent mais bon"]},
    {name:"Jus de citron frais",amount:"2cl",alternatives:["Jus de citron vert","Jus de citron en bouteille (moins bon)"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire fine","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Mélanger avec cuillère dans verre avec glace, filtrer"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Mettre tous les ingrédients avec glace dans le shaker.",
    "Shaker vigoureusement 12 secondes.",
    "Double-filtrer dans la coupe — la couleur lilas doit être belle.",
    "Garnir d'une cerise au marasquin."
  ],
  variations:[
    {name:"Aviation sans violette",recipe:"Supprimer la crème de violette — goût plus citronné, couleur jaune"},
    {name:"Blue Moon",recipe:"Remplacer marasquin par crème de violette uniquement"}
  ],
  tips:"La crème de violette (Rothman & Winter ou Monin) donne la couleur lilas caractéristique. Sans elle, c'est un bon sour de gin mais pas un Aviation authentique."
},

"between-sheets":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Rhum blanc",amount:"3cl",alternatives:["Rhum agricole blanc","Cachaça"]},
    {name:"Cognac",amount:"3cl",alternatives:["Brandy espagnol","Armagnac"]},
    {name:"Triple sec / Cointreau",amount:"3cl",alternatives:["Grand Marnier","Curaçao orange"]},
    {name:"Jus de citron frais",amount:"1.5cl",alternatives:["Citron vert","Jus en bouteille"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Mélanger avec glace, filtrer délicatement"]
  },
  steps:[
    "Refroidir la coupe.",
    "Tout dans le shaker avec glace.",
    "Shaker 10-12 secondes.",
    "Filtrer dans la coupe.",
    "Zeste de citron en garniture."
  ],
  variations:[
    {name:"Sidecar",recipe:"Omettre le rhum — la version originale au cognac pur"},
    {name:"XYZ",recipe:"Rhum blanc uniquement, citron, triple sec — version caraïbéenne"}
  ],
  tips:"Cocktail parisien des années 20. Riche et complexe grâce à la combinaison rhum + cognac. Le Cointreau est préférable au triple sec basique."
},

"boulevardier":{
  glass:"Verre old fashioned ou verre à mélange",
  ingredients:[
    {name:"Bourbon",amount:"4.5cl",alternatives:["Rye whiskey pour version plus épicée","Scotch blended"]},
    {name:"Campari",amount:"3cl",alternatives:["Aperol pour version plus douce","Bitter orange artisanal"]},
    {name:"Vermouth rouge",amount:"3cl",alternatives:["Martini Rosso","Cinzano","Punt e Mes pour plus d'amertume"]}
  ],
  equipment:{
    ideal:["Verre à mélange","Cuillère de bar","Passoire","Verre old fashioned","Zesteur"],
    debrouille:["Grand verre","Cuillère à café","Passoire","Verre quelconque"],
    rien:["Tout dans le verre avec glace, mélanger avec paille"]
  },
  steps:[
    "Remplir le verre à mélange de glace.",
    "Verser bourbon, Campari et vermouth.",
    "Mélanger 30 secondes avec la cuillère de bar.",
    "Filtrer dans le verre old fashioned avec 1 gros glaçon.",
    "Exprimer un zeste d'orange sur le dessus, frotter le bord du verre."
  ],
  variations:[
    {name:"Negroni",recipe:"Remplacer le bourbon par du gin — la version originale"},
    {name:"Old Pal",recipe:"Rye whiskey + Campari + vermouth sec — version plus sèche"},
    {name:"Rosita",recipe:"Tequila + Campari + vermouth rouge et blanc"}
  ],
  tips:"Le Boulevardier est plus doux et plus chaleureux que le Negroni grâce au bourbon. Choisir un bourbon avec du caractère (Woodford Reserve, Buffalo Trace)."
},

"bramble":{
  glass:"Verre old fashioned avec glace pilée",
  ingredients:[
    {name:"Gin",amount:"4cl",alternatives:["Gin London Dry","Plymouth gin"]},
    {name:"Jus de citron frais",amount:"2cl",alternatives:["Jus de citron vert","Citron en bouteille"]},
    {name:"Sirop de sucre",amount:"1.5cl",alternatives:["Miel dilué 50/50","Sirop d'agave"]},
    {name:"Crème de mûre",amount:"1.5cl",alternatives:["Sirop de mûre","Crème de cassis","Mûres fraîches mixées + sucre"]}
  ],
  equipment:{
    ideal:["Shaker","Verre old fashioned","Glace pilée","Paille"],
    debrouille:["Bocal hermétique","Verre quelconque","Glaçons concassés avec sac congélation"],
    rien:["Mélanger dans le verre avec cuillère, ajouter glace concassée"]
  },
  steps:[
    "Shaker gin, citron et sirop avec glace.",
    "Remplir le verre de glace pilée.",
    "Filtrer le cocktail sur la glace pilée.",
    "Verser la crème de mûre en filet sur le dessus — laisser se diffuser.",
    "Garnir de 2-3 mûres fraîches et d'un quartier de citron."
  ],
  variations:[
    {name:"Blackberry Bramble",recipe:"Écraser des mûres fraîches directement dans le shaker"},
    {name:"Sloe Bramble",recipe:"Utiliser sloe gin au lieu du gin classique"}
  ],
  tips:"Créé par Dick Bradsell à Londres en 1984. La crème de mûre doit couler lentement sur la glace — c'est l'effet visuel signature. Ne pas mélanger !"
},

"caipirinha":{
  glass:"Verre old fashioned (25-30cl)",
  ingredients:[
    {name:"Cachaça",amount:"6cl",alternatives:["Rhum blanc agricole","Vodka pour Caipiroska","Sake pour version japonaise"]},
    {name:"Citron vert",amount:"1 citron entier",alternatives:["Citron jaune (moins acide)","Citron vert en bouteille 3cl"]},
    {name:"Sucre blanc ou de canne",amount:"2 cuillères à café",alternatives:["Sirop de sucre 2cl","Miel 1 c. à café","Agave"]}
  ],
  equipment:{
    ideal:["Pilon","Verre robuste","Cuillère de bar"],
    debrouille:["Cuillère à soupe pour écraser","Verre épais","Cuillère classique"],
    rien:["Presser le citron avec les mains, écraser avec le fond d'un verre"]
  },
  steps:[
    "Couper le citron vert en 8 morceaux (couper en 4, puis chaque quartier en 2).",
    "Mettre les morceaux et le sucre dans le verre.",
    "Piler fermement pour extraire le jus ET les huiles essentielles du zeste.",
    "Remplir le verre de glace pilée ou de glaçons.",
    "Verser la cachaça. Mélanger énergiquement.",
    "Servir immédiatement avec une paille courte."
  ],
  variations:[
    {name:"Caipiroska",recipe:"Remplacer cachaça par vodka"},
    {name:"Caipirissima",recipe:"Remplacer cachaça par rhum blanc"},
    {name:"Caipifruta",recipe:"Ajouter fruits frais pilés : fraises, maracuja, kiwi"}
  ],
  tips:"Le secret : piler les morceaux de citron AVEC la peau. Les huiles essentielles du zeste donnent les arômes. Ne pas trop piler sinon amertume. Le sucre cristallisé (pas en sirop) aide à l'extraction."
},

"champagne-cocktail":{
  glass:"Flûte à champagne",
  ingredients:[
    {name:"Champagne brut",amount:"Compléter la flûte (~10cl)",alternatives:["Prosecco","Crémant d'Alsace","Cava brut"]},
    {name:"Morceau de sucre blanc",amount:"1 morceau",alternatives:["1 c. à café de sucre en poudre","2cl sirop de sucre"]},
    {name:"Angostura bitters",amount:"2-3 dashs",alternatives:["Peychaud's bitters","Orange bitters"]},
    {name:"Cognac",amount:"1cl",alternatives:["Armagnac","Grand Marnier","Brandy"]}
  ],
  equipment:{
    ideal:["Flûte","Pipette à bitters ou compte-gouttes"],
    debrouille:["N'importe quel verre","Faire tomber les gouttes du bouchon de la bouteille"],
    rien:["Tout dans le verre avec une paille pour les bitters"]
  },
  steps:[
    "Imbiber le morceau de sucre avec 2-3 dashs d'Angostura.",
    "Déposer le sucre au fond de la flûte froide.",
    "Verser le cognac sur le sucre.",
    "Verser le champagne très froid doucement en inclinant la flûte.",
    "Garnir d'un zeste de citron ou d'une cerise au marasquin."
  ],
  variations:[
    {name:"Kir Royal",recipe:"Remplacer tout par : crème de cassis 1.5cl + champagne"},
    {name:"French 75",recipe:"Gin + citron + sucre + champagne — version plus dynamique"}
  ],
  tips:"Le sucre imbibé de bitters au fond crée une belle réaction avec les bulles. Utiliser du vrai champagne brut — les bulles fines sont essentielles à l'expérience."
},

"clover-club":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Gin",amount:"4.5cl",alternatives:["Gin floral","Plymouth gin"]},
    {name:"Jus de citron frais",amount:"2cl",alternatives:["Citron vert","Jus en bouteille"]},
    {name:"Sirop de framboise",amount:"2cl",alternatives:["Coulis de framboise dilué","Sirop de grenadine","Confiture de framboise diluée dans eau chaude"]},
    {name:"Blanc d'œuf",amount:"1 blanc",alternatives:["2cl de blanc d'œuf pasteurisé","Aquafaba (eau de pois chiche) 3cl"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire fine","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Fouetter dans un bol avant de mélanger"]
  },
  steps:[
    "Dry shake (sans glace) : mettre tous les ingrédients dans le shaker, shaker 15 secondes — cela émulsionne le blanc d'œuf.",
    "Ouvrir, ajouter la glace.",
    "Shaker à nouveau vigoureusement 12 secondes.",
    "Double-filtrer dans la coupe froide.",
    "La mousse rose doit être épaisse et stable. Pas de garniture ou trait de bitters."
  ],
  variations:[
    {name:"Pink Lady",recipe:"Ajouter 1cl de Calvados ou de grenadine pour version plus riche"},
    {name:"Clover Club Fraise",recipe:"Remplacer sirop framboise par sirop de fraise"}
  ],
  tips:"Le dry shake est indispensable pour la mousse. Sans lui, le blanc d'œuf ne monte pas bien. Si vous avez peur des œufs crus, l'aquafaba donne un résultat identique."
},

"corpse-reviver":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Gin",amount:"2.5cl",alternatives:["Gin London Dry","Tanqueray"]},
    {name:"Cointreau / Triple sec",amount:"2.5cl",alternatives:["Grand Marnier","Curaçao orange"]},
    {name:"Lillet Blanc",amount:"2.5cl",alternatives:["Vermouth blanc sec","Noilly Prat"]},
    {name:"Jus de citron frais",amount:"2.5cl",alternatives:["Citron vert","Jus en bouteille"]},
    {name:"Absinthe",amount:"1 rinçage",alternatives:["Pastis dilué","Quelques gouttes de Pernod"]}
  ],
  equipment:{
    ideal:["Shaker","Coupe réfrigérée","Pipette pour absinthe"],
    debrouille:["Bocal hermétique","Verre à vin","Verser absinthe directement"],
    rien:["Mélanger avec cuillère dans grand verre avec glace, filtrer"]
  },
  steps:[
    "Rincer la coupe froide avec l'absinthe — verser, faire tourner, jeter l'excès.",
    "Mettre les 4 autres ingrédients dans le shaker avec glace.",
    "Shaker vigoureusement 12 secondes.",
    "Filtrer dans la coupe rincée à l'absinthe.",
    "Pas de garniture — la propreté du cocktail est sa marque."
  ],
  variations:[
    {name:"Corpse Reviver #1",recipe:"Cognac + Calvados + vermouth doux — version plus ancienne et plus chaude"},
    {name:"Sans absinthe",recipe:"Enlever le rinçage — moins complexe mais accessible"}
  ],
  tips:"Créé en 1930. 'To be taken before 11am, or whenever steam and energy are needed.' Le rinçage à l'absinthe apporte une touche anisée subtile sans dominer."
},

"cosmopolitan":{
  glass:"Coupe à cocktail ou verre Martini",
  ingredients:[
    {name:"Vodka citron / citrus",amount:"4cl",alternatives:["Vodka nature + 5 gouttes extrait citron","Vodka classique"]},
    {name:"Triple sec / Cointreau",amount:"2cl",alternatives:["Grand Marnier","Curaçao orange"]},
    {name:"Jus de cranberry",amount:"2cl",alternatives:["Jus de grenade dilué","Jus de framboise"]},
    {name:"Jus de citron vert frais",amount:"1cl",alternatives:["Jus de citron jaune","Citron vert en bouteille"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Mélanger dans verre avec glace, filtrer"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Mettre tous les ingrédients dans le shaker avec glace.",
    "Shaker vigoureusement 12 secondes.",
    "Filtrer dans la coupe froide.",
    "Garnir d'un zeste de citron vert flambé ou d'une tranche de citron vert."
  ],
  variations:[
    {name:"White Cosmopolitan",recipe:"Remplacer cranberry par jus de pamplemousse blanc"},
    {name:"Cosmo Basil",recipe:"Ajouter 3 feuilles de basilic — shaker puis filtrer"},
    {name:"Mocktail Cosmo",recipe:"Jus de cranberry + citron vert + limonade + sirop grenadine"}
  ],
  tips:"La couleur rose pâle idéale vient d'un dosage précis du cranberry — pas trop, pas trop peu. Le Cosmo doit être froid, citronné, légèrement sucré et barely pink."
},

"cuba-libre":{
  glass:"Verre highball",
  ingredients:[
    {name:"Rhum blanc ou brun",amount:"5cl",alternatives:["Rhum agricole","Rhum épicé Captain Morgan"]},
    {name:"Coca-Cola",amount:"Compléter (~15cl)",alternatives:["Pepsi","Cola artisanal","Ginger beer pour Dark & Stormy version"]},
    {name:"Citron vert",amount:"½ citron (jus + quartier)",alternatives:["Jus de citron jaune","Jus en bouteille"]}
  ],
  equipment:{
    ideal:["Verre highball","Cuillère longue"],
    debrouille:["N'importe quel grand verre","Cuillère classique"],
    rien:["Tout dans le verre avec paille pour mélanger"]
  },
  steps:[
    "Remplir le verre de glaçons.",
    "Presser le demi-citron vert et le mettre dans le verre.",
    "Verser le rhum.",
    "Compléter avec le Coca-Cola très froid, versé lentement sur les glaçons.",
    "Mélanger très délicatement 1-2 fois. Garnir d'un quartier de citron vert."
  ],
  variations:[
    {name:"Dark & Stormy",recipe:"Rhum noir Goslings + ginger beer + citron vert"},
    {name:"Rum & Coke básico",recipe:"Sans citron — version la plus simple"},
    {name:"Cuba Libre Royal",recipe:"Ajouter 1cl de grenadine pour couleur et douceur"}
  ],
  tips:"'¡Por Cuba libre!' — le toast historique de 1900. Le citron vert EST indispensable, pas facultatif. Il équilibre le sucre du cola. Utiliser du rhum de qualité : Havana Club 3 ans minimum."
},

"daiquiri":{
  glass:"Coupe à cocktail réfrigérée",
  ingredients:[
    {name:"Rhum blanc",amount:"6cl",alternatives:["Rhum agricole blanc 50°","Rhum cubain Havana Club 3 ans"]},
    {name:"Jus de citron vert frais",amount:"2cl",alternatives:["Jus de citron jaune (moins floral)","Citron vert en bouteille — dernier recours"]},
    {name:"Sirop de sucre de canne",amount:"1.5cl",alternatives:["Miel dilué 50/50","Sirop d'agave","Sucre fin dissous dans citron"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire fine","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Mélanger vigoureusement avec cuillère, filtrer dans petit verre"]
  },
  steps:[
    "Réfrigérer la coupe au congélateur ou avec glace.",
    "Presser le citron vert — utiliser uniquement le jus frais.",
    "Mettre rhum, citron et sirop dans le shaker avec beaucoup de glace.",
    "Shaker vigoureusement 12-15 secondes.",
    "Double-filtrer dans la coupe froide.",
    "Pas de garniture ou une fine rondelle de citron vert."
  ],
  variations:[
    {name:"Strawberry Daiquiri",recipe:"Ajouter 4 fraises fraîches dans le shaker, ou blender avec glace"},
    {name:"Hemingway Daiquiri",recipe:"Ajouter 1cl marasquin + 1cl pamplemousse, enlever le sirop"},
    {name:"Banana Daiquiri",recipe:"½ banane + rhum blanc + citron vert, blender"},
    {name:"Frozen Daiquiri",recipe:"Tout au blender avec 1 verre de glace pilée"}
  ],
  tips:"La trinité parfaite : rhum / acide / sucre en ratio 4:1.5:1. Le citron vert DOIT être pressé à la minute — le jus s'oxyde en 10 minutes. Équilibrer : si trop acide ajouter sirop, si trop sucré ajouter citron."
},

"dirty-martini":{
  glass:"Coupe à Martini réfrigérée",
  ingredients:[
    {name:"Gin ou Vodka",amount:"6cl",alternatives:["Gin London Dry type Beefeater","Vodka premium type Grey Goose"]},
    {name:"Vermouth sec",amount:"1cl",alternatives:["Noilly Prat","Dolin Dry","Lillet Blanc"]},
    {name:"Saumure d'olives",amount:"1.5cl",alternatives:["Eau de cornichons (plus acide)","Jus de câpres pour version originale"]}
  ],
  equipment:{
    ideal:["Verre à mélange","Cuillère de bar","Passoire","Coupe réfrigérée"],
    debrouille:["Grand verre","Cuillère longue","Passoire","Verre à vin"],
    rien:["Mélanger avec cuillère dans n'importe quel verre"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Remplir le verre à mélange de glace.",
    "Verser gin/vodka, vermouth et saumure.",
    "Mélanger 30 secondes — ne pas shaker (le Martini doit être limpide).",
    "Filtrer dans la coupe froide.",
    "Garnir de 2-3 olives vertes dénoyautées sur pique."
  ],
  variations:[
    {name:"Dry Martini",recipe:"Enlever la saumure, réduire vermouth à 0.5cl — le classique"},
    {name:"Extra Dirty",recipe:"Doubler la saumure — 3cl"},
    {name:"Dirty Vodka Martini",recipe:"Vodka au lieu du gin — version plus neutre"}
  ],
  tips:"Mélanger, ne jamais shaker un Martini — pour éviter la dilution et les bulles. 'Shaken not stirred' de Bond est techniquement incorrect mais le rend plus froid. La saumure doit être d'olives de qualité."
},

"dry-martini":{
  glass:"Coupe à Martini très froide",
  ingredients:[
    {name:"Gin",amount:"7.5cl",alternatives:["Gin London Dry classique","Tanqueray","Beefeater","Sipsmith"]},
    {name:"Vermouth blanc sec",amount:"1.5cl",alternatives:["Noilly Prat Extra Dry","Dolin Dry","Lillet Blanc"]}
  ],
  equipment:{
    ideal:["Verre à mélange en verre","Cuillère de bar","Passoire","Coupe réfrigérée","Zesteur"],
    debrouille:["Grand verre","Cuillère longue","Passoire","Verre quelconque","Économe"],
    rien:["Mélanger dans un verre avec glaçons, filtrer en versant doucement"]
  },
  steps:[
    "Congeler la coupe 15 min à l'avance — elle doit être glacée.",
    "Remplir le verre à mélange de glace.",
    "Verser le gin froid et le vermouth.",
    "Mélanger lentement et régulièrement 45 secondes — dilution et température parfaites.",
    "Filtrer dans la coupe glacée.",
    "Exprimer un zeste de citron ou garnir d'une olive verte."
  ],
  variations:[
    {name:"Vesper Martini",recipe:"Gin 4.5cl + vodka 1.5cl + Lillet Blanc 1cl — la recette Bond"},
    {name:"Gibson",recipe:"Remplacer l'olive par un oignon cocktail au vinaigre"},
    {name:"Wet Martini",recipe:"Augmenter le vermouth à 3cl — plus aromatique"},
    {name:"50/50 Martini",recipe:"Parts égales gin et vermouth — très démodé mais savoureux"}
  ],
  tips:"LE cocktail. Ratio débattu depuis 100 ans. Winston Churchill regardait la bouteille de vermouth. James Bond le voulait shaké. La vérité : mélanger, 5:1 gin/vermouth, coupe glacée, boire immédiatement."
},

"espresso-martini":{
  glass:"Coupe à Martini",
  ingredients:[
    {name:"Vodka",amount:"5cl",alternatives:["Vodka vanille pour version plus riche","Vodka nature"]},
    {name:"Espresso frais",amount:"3cl (1 shot)",alternatives:["Café fort refroidi","Café soluble fort 1 c. à café dans 3cl eau chaude, refroidir"]},
    {name:"Kahlúa",amount:"2cl",alternatives:["Tia Maria","Mr Black Coffee Liqueur","1cl sirop café + 1cl rhum brun"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire fine","Coupe réfrigérée","Machine expresso"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin","Café fort de moka"],
    rien:["Shaker vigoureusement avec un bocal fermé, café soluble fort"]
  },
  steps:[
    "Préparer l'espresso et le laisser refroidir 2 minutes (ne pas utiliser bouillant).",
    "Réfrigérer la coupe.",
    "Mettre vodka, espresso et Kahlúa dans le shaker avec beaucoup de glace.",
    "SHAKER TRÈS VIGOUREUSEMENT 15-20 secondes — la mousse est créée par l'agitation.",
    "Double-filtrer dans la coupe — verser d'un coup pour conserver la mousse.",
    "Garnir de 3 grains de café torréfié sur la mousse."
  ],
  variations:[
    {name:"Vanilla Espresso Martini",recipe:"Vodka vanille + sirop vanille + espresso + Kahlúa"},
    {name:"Salted Caramel",recipe:"Ajouter 0.5cl sirop caramel salé"},
    {name:"Mocktail Coffee Martini",recipe:"Espresso + sirop de café + lait de coco + glace, shaker"}
  ],
  tips:"Créé par Dick Bradsell en 1983 pour une célébrité qui voulait 'wake me up and f*** me up'. La mousse (crema) se forme par l'agitation énergique — shaker plus fort que pour tout autre cocktail. L'espresso DOIT être frais."
},

"french-75":{
  glass:"Flûte à champagne",
  ingredients:[
    {name:"Gin",amount:"3cl",alternatives:["Cognac pour version originale française","Vodka pour version plus neutre"]},
    {name:"Jus de citron frais",amount:"1.5cl",alternatives:["Citron vert","Jus en bouteille"]},
    {name:"Sirop de sucre",amount:"1.5cl",alternatives:["Sucre fin","Miel dilué"]},
    {name:"Champagne",amount:"Compléter la flûte (~6cl)",alternatives:["Prosecco","Crémant","Cava","Vin blanc pétillant"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Flûte froide"],
    debrouille:["Bocal hermétique","Passoire","Verre quelconque"],
    rien:["Mélanger gin+citron+sucre dans le verre avec glace, compléter champagne"]
  },
  steps:[
    "Réfrigérer la flûte.",
    "Shaker gin, citron et sirop avec glace — vigoureusement 10 secondes.",
    "Filtrer dans la flûte froide.",
    "Compléter avec le champagne très froid, versé lentement.",
    "Mélanger délicatement 1 fois. Zeste de citron en garniture."
  ],
  variations:[
    {name:"French 95",recipe:"Bourbon à la place du gin + champagne"},
    {name:"French 76",recipe:"Vodka + citron + sucre + champagne"},
    {name:"French 77",recipe:"Elderflower liqueur + citron + champagne — très floral"}
  ],
  tips:"Nommé d'après le canon de 75mm français de WWI — 'il frappe comme un obus'. Assurer que le champagne est très froid (6°C) pour conserver les bulles. Le gin London Dry est classique, le cognac est historiquement correct."
},

"gimlet":{
  glass:"Coupe à cocktail ou verre à Martini",
  ingredients:[
    {name:"Gin",amount:"6cl",alternatives:["Plymouth gin","Gin London Dry","Hendrick's"]},
    {name:"Jus de citron vert frais",amount:"2cl",alternatives:["Sirop de citron vert Rose's (version originale)","Citron jaune"]},
    {name:"Sirop de sucre",amount:"1cl",alternatives:["Sucre fin","Sirop d'agave"]}
  ],
  equipment:{
    ideal:["Shaker ou verre à mélange","Passoire","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre quelconque"],
    rien:["Mélanger dans verre avec glace, filtrer"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Version classique (stirred) : verre à mélange + glace, mélanger 30s, filtrer.",
    "Version moderne (shaken) : shaker + glace, 12s, double-filtrer.",
    "Garnir d'un quartier ou zeste de citron vert."
  ],
  variations:[
    {name:"Gimlet à la Rose's",recipe:"Utiliser sirop Rose's Lime Cordial (1.5cl) — version historique marine"},
    {name:"Vodka Gimlet",recipe:"Remplacer gin par vodka — version plus neutre"},
    {name:"Basil Gimlet",recipe:"Ajouter 3-4 feuilles de basilic dans le shaker"}
  ],
  tips:"Inventé par la Royal Navy britannique pour forcer les marins à consommer de la vitamine C (jus de citron vert). La version authentique utilise le sirop Rose's Lime Cordial. La version moderne utilise jus frais — plus équilibrée."
},

"gin-fizz":{
  glass:"Verre highball",
  ingredients:[
    {name:"Gin",amount:"4.5cl",alternatives:["Gin London Dry","Hendrick's","Tanqueray"]},
    {name:"Jus de citron frais",amount:"2cl",alternatives:["Citron vert","Jus en bouteille"]},
    {name:"Sirop de sucre",amount:"2cl",alternatives:["Sucre fin","Miel dilué","Agave"]},
    {name:"Eau gazeuse",amount:"Compléter (~6cl)",alternatives:["Soda","Tonic water (plus amer)","Ginger ale (plus épicé)"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Verre highball"],
    debrouille:["Bocal hermétique","Passoire","Grand verre"],
    rien:["Mélanger dans le verre avec cuillère, ajouter soda"]
  },
  steps:[
    "Shaker gin, citron et sirop avec glace — 12 secondes.",
    "Remplir le verre de glaçons.",
    "Filtrer le mélange shakeré dans le verre.",
    "Compléter avec l'eau gazeuse froide, verser doucement.",
    "Mélanger délicatement 1 fois. Rondelle de citron en garniture."
  ],
  variations:[
    {name:"Silver Fizz",recipe:"Ajouter 1 blanc d'œuf avant de shaker — mousse crémeuse"},
    {name:"Golden Fizz",recipe:"Ajouter 1 jaune d'œuf — riche et velouté"},
    {name:"Royal Fizz",recipe:"Ajouter 1 œuf entier — le plus riche"},
    {name:"Sloe Gin Fizz",recipe:"Remplacer gin par sloe gin — rosé et fruité"}
  ],
  tips:"Le Fizz est l'un des styles fondamentaux de la cocktailerie. Le secret : shaker vigoureusement avant d'ajouter le soda. Ne jamais shaker avec le soda — ça explose. Servir très froid."
},

"grasshopper":{
  glass:"Coupe à cocktail réfrigérée",
  ingredients:[
    {name:"Crème de menthe verte",amount:"3cl",alternatives:["Sirop menthe + 1cl vodka","Menthe fraîche infusée dans vodka"]},
    {name:"Crème de cacao blanc",amount:"3cl",alternatives:["Crème de cacao brun (couleur différente)","Baileys dilué"]},
    {name:"Crème fraîche liquide",amount:"3cl",alternatives:["Crème de coco","Lait concentré sucré dilué"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Mélanger avec cuillère dans verre glacé"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Mettre tous les ingrédients dans le shaker avec glace.",
    "Shaker vigoureusement 15 secondes.",
    "Filtrer dans la coupe froide.",
    "Le cocktail doit être d'un vert pâle délicat."
  ],
  variations:[
    {name:"Frozen Grasshopper",recipe:"Blender avec crème glacée à la vanille et glace pilée"},
    {name:"Flying Grasshopper",recipe:"Ajouter 2cl de vodka pour plus de pêche"},
    {name:"Brown Grasshopper",recipe:"Remplacer crème de cacao blanc par brun — couleur verte plus profonde"}
  ],
  tips:"Cocktail dessert de la Nouvelle-Orléans (1918). Idéal après un repas. La couleur vert menthe tendre est sa signature. Ne pas confondre crème de cacao blanc (incolore) et brun (qui change la couleur)."
},

"hanky-panky":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Gin",amount:"4.5cl",alternatives:["Gin London Dry","Beefeater","Tanqueray"]},
    {name:"Vermouth rouge",amount:"4.5cl",alternatives:["Martini Rosso","Cinzano","Punt e Mes"]},
    {name:"Fernet-Branca",amount:"0.75cl (dash)",alternatives:["Campari (moins amer)","Amaro Averna","Quelques drops de jus de menthe"]}
  ],
  equipment:{
    ideal:["Verre à mélange","Cuillère de bar","Passoire","Coupe réfrigérée"],
    debrouille:["Grand verre","Cuillère longue","Passoire","Verre quelconque"],
    rien:["Mélanger dans verre avec glace, filtrer"]
  },
  steps:[
    "Remplir le verre à mélange de glace.",
    "Verser gin, vermouth et Fernet-Branca.",
    "Mélanger 30 secondes avec la cuillère de bar.",
    "Filtrer dans la coupe froide.",
    "Garnir d'un zeste d'orange."
  ],
  variations:[
    {name:"Negroni léger",recipe:"Remplacer Fernet par Campari, ajouter un soupçon de sucre"},
    {name:"Hanky Panky Fumé",recipe:"Utiliser gin aux notes fumées, augmenter Fernet à 1.5cl"}
  ],
  tips:"Créé par Ada Coleman au Savoy Hotel en 1925. 'That is the real hanky-panky!' dit son premier client. Le Fernet-Branca doit être subtil — juste quelques dashes. C'est lui qui crée la complexité herborisée."
},

"hemingway":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Rhum blanc",amount:"6cl",alternatives:["Rhum cubain Havana Club","Rhum agricole blanc"]},
    {name:"Jus de citron vert frais",amount:"1.5cl",alternatives:["Citron jaune","Citron vert en bouteille"]},
    {name:"Marasquin",amount:"1.5cl",alternatives:["Kirsch + sucre","Cerises au sirop"]},
    {name:"Jus de pamplemousse frais",amount:"3cl",alternatives:["Jus en bouteille (moins frais)","Mélange citron+orange en dépannage"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire fine","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Mélanger avec cuillère dans verre avec glace, filtrer"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Tout dans le shaker avec glace.",
    "Shaker vigoureusement 12 secondes.",
    "Double-filtrer dans la coupe.",
    "Quartier de pamplemousse ou de citron vert en garniture."
  ],
  variations:[
    {name:"Daiquiri Papa Doble",recipe:"Version originale Hemingway : doubler rhum et citron, zéro sucre ajouté"},
    {name:"Hemingway avec sirop",recipe:"Ajouter 1cl de sirop de sucre si trop acide"}
  ],
  tips:"Hemingway était diabétique — il a demandé un Daiquiri sans sucre. Créé au El Floridita, La Havane. Cocktail adulte et sec. Le pamplemousse DOIT être frais pour cette recette."
},

"hugo":{
  glass:"Verre à vin ou ballon",
  ingredients:[
    {name:"Prosecco",amount:"10cl",alternatives:["Champagne","Crémant","Cava","Vin blanc pétillant sec"]},
    {name:"Sirop de fleur de sureau",amount:"3cl",alternatives:["Elderflower cordial","Sirop de violette","Sirop de jasmin"]},
    {name:"Menthe fraîche",amount:"4-5 feuilles",alternatives:["Menthe séchée (la moitié)","Basilic pour variation"]},
    {name:"Soda",amount:"3cl",alternatives:["Eau gazeuse","Tonic water"]},
    {name:"Citron vert",amount:"2 rondelles",alternatives:["Citron jaune","Citron vert en rondelles"]}
  ],
  equipment:{
    ideal:["Verre ballon ou à vin","Cuillère de bar"],
    debrouille:["N'importe quel grand verre","Cuillère classique"],
    rien:["Tout dans le verre, mélanger avec paille"]
  },
  steps:[
    "Remplir le verre de glaçons.",
    "Verser le sirop de sureau.",
    "Ajouter les rondelles de citron vert.",
    "Verser le Prosecco froid doucement.",
    "Ajouter le soda.",
    "Mettre les feuilles de menthe et mélanger très doucement.",
    "Paille et garniture de citron vert."
  ],
  variations:[
    {name:"Aperol Spritz",recipe:"Remplacer sureau par Aperol — plus amer"},
    {name:"Hugo Royal",recipe:"Champagne brut à la place du Prosecco"},
    {name:"Mocktail Hugo",recipe:"Soda + sirop sureau + citron vert + menthe"}
  ],
  tips:"Né dans le Tyrol du Sud en 2005, le Hugo est devenu l'apéritif favori de toute l'Europe centrale. Le sirop de fleur de sureau (Monin ou St-Germain) est irremplaçable."
},

"irish-coffee":{
  glass:"Verre à irish coffee (manche) ou mug en verre",
  ingredients:[
    {name:"Irish Whiskey",amount:"4cl",alternatives:["Jameson","Bushmills","Tullamore Dew","Scotch blended en dernier recours"]},
    {name:"Café fort chaud",amount:"10cl",alternatives:["Espresso allongé","Café soluble fort","Café filtre très fort"]},
    {name:"Sucre brun",amount:"1-2 c. à café",alternatives:["Sucre blanc","Miel","Sirop d'érable"]},
    {name:"Crème fraîche liquide",amount:"3cl",alternatives:["Crème entière à 35%","Crème épaisse allégée"]}
  ],
  equipment:{
    ideal:["Verre à manche","Petite casserole","Fouet","Cuillère longue"],
    debrouille:["Verre résistant à la chaleur","Shaker pour fouetter la crème","Cuillère"],
    rien:["Tout dans le verre chaud, crème versée sur cuillère à l'envers"]
  },
  steps:[
    "Préchauffer le verre avec eau chaude, vider.",
    "Dissoudre le sucre dans le café chaud dans le verre.",
    "Ajouter le whiskey, mélanger.",
    "Fouetter légèrement la crème jusqu'à légère consistance (pas chantilly ferme).",
    "Verser la crème sur le dos d'une cuillère à soupe tenue sur le verre — elle doit flotter.",
    "Ne pas mélanger — boire le café chaud à travers la crème froide."
  ],
  variations:[
    {name:"Scottish Coffee",recipe:"Scotch whisky + miel à la place du sucre"},
    {name:"French Coffee",recipe:"Cognac + café + crème"},
    {name:"Jamaican Coffee",recipe:"Rhum Tia Maria + café + crème"}
  ],
  tips:"La crème qui flotte est la signature — elle ne doit PAS couler. Secret : fouetter légèrement la crème froide (elle doit couler mais être légèrement épaissie). Verser sur dos de cuillère = flottaison garantie."
},

"jungle-bird":{
  glass:"Verre tiki ou highball",
  ingredients:[
    {name:"Rhum noir (Goslings ou Appleton)",amount:"4.5cl",alternatives:["Rhum brun jamaïcain","Rhum épicé"]},
    {name:"Campari",amount:"2cl",alternatives:["Aperol (plus doux)","Bitter Lemon"]},
    {name:"Jus d'ananas",amount:"4.5cl",alternatives:["Ananas frais mixé","Jus en bouteille"]},
    {name:"Jus de citron vert frais",amount:"1.5cl",alternatives:["Citron jaune","Jus en bouteille"]},
    {name:"Sirop de sucre",amount:"1.5cl",alternatives:["Sucre de canne","Sirop d'agave"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Verre tiki ou highball"],
    debrouille:["Bocal hermétique","Passoire","Grand verre"],
    rien:["Mélanger dans le verre avec cuillère"]
  },
  steps:[
    "Mettre tous les ingrédients dans le shaker avec glace.",
    "Shaker vigoureusement 12-15 secondes.",
    "Filtrer dans le verre rempli de glace.",
    "Garnir de feuilles d'ananas ou de menthe."
  ],
  variations:[
    {name:"Jungle Bird épicé",recipe:"Ajouter 2 tranches de gingembre frais dans le shaker"},
    {name:"Jungle Bird Mezcal",recipe:"Remplacer rhum par mezcal — notes fumées + tropical"}
  ],
  tips:"Créé à Kuala Lumpur en 1978. L'amertume du Campari contre la douceur tropicale de l'ananas est inattendue et parfaite. Utiliser du rhum noir jamaïcain authentique (Appleton, Smith & Cross) pour les notes profondes."
},

"kamikaze":{
  glass:"Coupe à cocktail ou verre à shot (version shot)",
  ingredients:[
    {name:"Vodka",amount:"4cl",alternatives:["Vodka citron","Vodka nature"]},
    {name:"Triple sec / Cointreau",amount:"2cl",alternatives:["Grand Marnier","Curaçao orange"]},
    {name:"Jus de citron vert frais",amount:"2cl",alternatives:["Citron jaune","Jus en bouteille"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre quelconque"],
    rien:["Tout dans verre avec glace, mélanger"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Mettre tous les ingrédients dans le shaker avec glace.",
    "Shaker vigoureusement 12 secondes.",
    "Filtrer dans la coupe.",
    "Zeste de citron vert en garniture."
  ],
  variations:[
    {name:"Cosmopolitan",recipe:"Ajouter 1.5cl de jus de cranberry — la version célébrissime"},
    {name:"Blue Kamikaze",recipe:"Ajouter 1cl de Blue Curaçao — couleur bleue électrique"},
    {name:"Watermelon Kamikaze",recipe:"Ajouter purée de pastèque 2cl"}
  ],
  tips:"Le Kamikaze est essentiellement un Cosmo sans cranberry. Simple et direct. En shot : réduire toutes les quantités et servir dans un verre à shot froid."
},

"last-word":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Gin",amount:"2.25cl",alternatives:["Gin London Dry","Tanqueray"]},
    {name:"Chartreuse Verte",amount:"2.25cl",alternatives:["Génépi (plus léger)","Yellow Chartreuse pour version plus douce"]},
    {name:"Marasquin",amount:"2.25cl",alternatives:["Kirsch + sucre en poudre 50/50","Sirop cerise + 1cl grappa"]},
    {name:"Jus de citron vert frais",amount:"2.25cl",alternatives:["Citron jaune","Jus en bouteille"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire fine","Coupe réfrigérée"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin"],
    rien:["Mélanger avec cuillère dans verre avec glace, filtrer"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Parts strictement égales — utiliser le même doseur pour tout.",
    "Tout dans le shaker avec glace.",
    "Shaker vigoureusement 12 secondes.",
    "Double-filtrer dans la coupe.",
    "Cerise au marasquin en garniture optionnelle."
  ],
  variations:[
    {name:"Final Ward",recipe:"Remplacer gin par rye whiskey, citron vert par citron jaune"},
    {name:"Paper Plane",recipe:"Bourbon + Aperol + Amaro Nonino + citron — même structure à 4 parts égales"},
    {name:"Last Word Fumé",recipe:"Utiliser mezcal à la place du gin — spectaculaire"}
  ],
  tips:"Parts ABSOLUMENT égales — c'est la règle du Last Word. Créé à Detroit en 1916, redécouvert par Murray Stenson à Seattle en 2004. La Chartreuse verte est irremplaçable ici — ses 130 plantes créent quelque chose d'unique."
},

"lemon-drop":{
  glass:"Coupe à Martini avec bord de sucre",
  ingredients:[
    {name:"Vodka citron",amount:"5cl",alternatives:["Vodka nature + zeste citron","Vodka classique"]},
    {name:"Triple sec",amount:"2cl",alternatives:["Cointreau","Grand Marnier"]},
    {name:"Jus de citron frais",amount:"2cl",alternatives:["Citron vert","Jus en bouteille"]},
    {name:"Sucre cristallisé",amount:"Pour le bord","alternatives":["Sucre blanc fin","Sucre coloré"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe","Petite assiette pour sucre","Quartier de citron"],
    debrouille:["Bocal hermétique","Passoire","Verre à vin","Miel pour coller le sucre"],
    rien:["Tout dans verre avec glace, mélanger"]
  },
  steps:[
    "Frotter le bord de la coupe avec le quartier de citron, tremper dans le sucre cristallisé.",
    "Mettre vodka, triple sec et citron dans le shaker avec glace.",
    "Shaker vigoureusement 12 secondes.",
    "Filtrer délicatement dans la coupe sucrée sans effacer le sucre.",
    "Rondelle de citron en garniture."
  ],
  variations:[
    {name:"Berry Lemon Drop",recipe:"Ajouter 4 framboises ou fraises fraîches dans le shaker"},
    {name:"Ginger Lemon Drop",recipe:"Ajouter 2cl de ginger syrup"},
    {name:"Basil Lemon Drop",recipe:"3 feuilles de basilic dans le shaker"}
  ],
  tips:"Le bord de sucre est la signature du Lemon Drop. L'utiliser généreusement — chaque gorgée doit avoir la douceur du sucre contre l'acidité du citron. Né à San Francisco dans les années 70."
},

"long-island":{
  glass:"Verre highball (grande contenance)",
  ingredients:[
    {name:"Vodka",amount:"1.5cl",alternatives:["Vodka nature"]},
    {name:"Tequila blanche",amount:"1.5cl",alternatives:["Tequila silver"]},
    {name:"Rhum blanc",amount:"1.5cl",alternatives:["Rhum blanc cubain"]},
    {name:"Gin",amount:"1.5cl",alternatives:["Gin London Dry"]},
    {name:"Triple sec",amount:"1.5cl",alternatives:["Cointreau","Curaçao"]},
    {name:"Jus de citron frais",amount:"2.5cl",alternatives:["Citron vert","Jus en bouteille"]},
    {name:"Sirop de sucre",amount:"2.5cl",alternatives:["Sucre dissous","Miel dilué"]},
    {name:"Cola",amount:"Trait pour la couleur thé",alternatives:["Pepsi","Cola artisanal"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Grand verre highball"],
    debrouille:["Bocal hermétique","Passoire","Grand verre"],
    rien:["Tout dans le verre avec glace, mélanger"]
  },
  steps:[
    "Remplir le verre de glaçons.",
    "Mettre tous les alcools + citron + sirop dans le shaker avec glace.",
    "Shaker 12 secondes.",
    "Filtrer dans le verre.",
    "Verser juste un trait de cola pour la couleur 'thé glacé' sans en changer le goût.",
    "Rondelle de citron en garniture. Paille longue."
  ],
  variations:[
    {name:"Texas Tea",recipe:"Remplacer cola par thé glacé — version originale sans cola"},
    {name:"Long Beach Iced Tea",recipe:"Remplacer cola par jus de cranberry — version rosée"},
    {name:"Tokyo Iced Tea",recipe:"Remplacer cola par Midori — version verte melon"}
  ],
  tips:"Attention : 22% d'alcool masqués par les fruits et le cola — le plus trompeur des cocktails. La règle d'or : parts égales des 5 spiritueux. Servir avec beaucoup de glace pour diluer lentement."
},

"mai-tai":{
  glass:"Verre tiki ou old fashioned avec glace pilée",
  ingredients:[
    {name:"Rhum ambré jamaïcain vieilli",amount:"4cl",alternatives:["Appleton Estate","Mount Gay","Rhum brun de qualité"]},
    {name:"Rhum brun Martinique",amount:"2cl",alternatives:["Clément VSOP","Saint James","Rhum agricole ambré"]},
    {name:"Curaçao orange sec",amount:"2cl",alternatives:["Cointreau","Triple sec","Grand Marnier"]},
    {name:"Sirop d'orgeat",amount:"1.5cl",alternatives:["Sirop d'amande dilué avec eau d'orange","Sirop de noisette — approximatif"]},
    {name:"Jus de citron vert frais",amount:"2cl",alternatives:["Citron jaune","Jus en bouteille"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Verre tiki ou old fashioned","Glace pilée"],
    debrouille:["Bocal hermétique","Passoire","Grand verre","Glaçons concassés"],
    rien:["Mélanger dans verre avec cuillère"]
  },
  steps:[
    "Mettre tous les ingrédients dans le shaker avec glace.",
    "Shaker vigoureusement 12-15 secondes.",
    "Remplir le verre de glace pilée.",
    "Filtrer sur la glace pilée.",
    "Garnir de ½ lime pressée, branche de menthe, fleur de papier et cherry. Paille courte."
  ],
  variations:[
    {name:"Mai Tai Royal Hawai",recipe:"Ajouter 1cl de rhum noir à 54° en float sur le dessus"},
    {name:"Mai Tai sans alcool",recipe:"Jus ananas + citron vert + sirop orgeat + ginger beer + grenadine"}
  ],
  tips:"Inventé en 1944 par Trader Vic à Oakland. 'Mai Tai — Roa Ae !' signifie 'Hors du monde — le meilleur !' en tahitien. L'orgeat (sirop d'amandes) est ESSENTIEL. Sans lui ce n'est pas un Mai Tai."
},

"manhattan":{
  glass:"Coupe à Martini ou verre à cocktail",
  ingredients:[
    {name:"Rye Whiskey",amount:"6cl",alternatives:["Bourbon (plus doux et vanillé)","Canadian whisky (plus léger)"]},
    {name:"Vermouth rouge",amount:"3cl",alternatives:["Martini Rosso","Cinzano Rosso","Punt e Mes (plus amer)"]},
    {name:"Angostura bitters",amount:"2 dashs",alternatives:["Peychaud's bitters","Orange bitters","Mélange des deux"]}
  ],
  equipment:{
    ideal:["Verre à mélange","Cuillère de bar","Passoire","Coupe réfrigérée","Zesteur"],
    debrouille:["Grand verre","Cuillère longue","Passoire","Verre quelconque","Couteau"],
    rien:["Tout dans verre avec glace, mélanger 30s avec paille"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Remplir le verre à mélange de glace.",
    "Verser whiskey, vermouth et bitters.",
    "Mélanger lentement et régulièrement 30-40 secondes.",
    "Filtrer dans la coupe froide.",
    "Garnir d'une cerise au marasquin ou d'un zeste d'orange."
  ],
  variations:[
    {name:"Rob Roy",recipe:"Scotch whisky au lieu du rye — version écossaise"},
    {name:"Perfect Manhattan",recipe:"Moitié vermouth rouge, moitié vermouth blanc — plus équilibré"},
    {name:"Dry Manhattan",recipe:"Vermouth blanc sec au lieu du rouge — plus léger"},
    {name:"Black Manhattan",recipe:"Remplacer vermouth par Averna amaro — plus riche et herbacé"}
  ],
  tips:"L'archétype du cocktail stirred. NE JAMAIS shaker un Manhattan — cela le trouble et le sur-dilue. Mélanger délicatement pour une texture soyeuse. Le rye apporte du piquant, le bourbon de la douceur."
},

"margarita":{
  glass:"Coupe à Margarita ou verre old fashioned, bord de sel",
  ingredients:[
    {name:"Tequila blanco 100% agave",amount:"5cl",alternatives:["Tequila reposado pour version plus riche","Mezcal pour version fumée"]},
    {name:"Cointreau / Triple sec",amount:"3cl",alternatives:["Grand Marnier","Curaçao orange","Licor 43"]},
    {name:"Jus de citron vert frais",amount:"2cl",alternatives:["Citron jaune (moins floral)","Jus en bouteille (dernier recours)"]},
    {name:"Sel",amount:"Pour le bord","alternatives":["Sel de mer fleur de sel","Sel + zeste citron mélangé","Sel fumé pour Margarita Fumée"]}
  ],
  equipment:{
    ideal:["Shaker","Passoire","Coupe ou verre","Petite assiette pour sel","Quartier citron vert"],
    debrouille:["Bocal hermétique","Passoire","Grand verre","Sel dans assiette plate"],
    rien:["Tout dans verre avec glace, cuillère, sel sur le bord mouillé"]
  },
  steps:[
    "Frotter ½ bord du verre avec le citron vert, tremper dans le sel — ½ bord seulement pour que chacun choisisse.",
    "Remplir le verre ou shaker de glaçons.",
    "Mettre tequila, triple sec et citron vert dans le shaker.",
    "Shaker vigoureusement 12 secondes.",
    "Servir sur glace (on the rocks) ou filtrer dans la coupe.",
    "Rondelle ou quartier de citron vert."
  ],
  variations:[
    {name:"Tommy's Margarita",recipe:"Tequila 100% agave + citron vert + sirop d'agave — sans triple sec, plus pure"},
    {name:"Margarita Fraise",recipe:"Ajouter 4 fraises fraîches dans le shaker"},
    {name:"Spicy Margarita",recipe:"1 tranche de jalapeño dans le shaker, 30 secondes d'infusion"},
    {name:"Frozen Margarita",recipe:"Blender avec 1 verre de glace pilée"},
    {name:"Mezcal Margarita",recipe:"Remplacer tequila par mezcal pour notes fumées"}
  ],
  tips:"Le cocktail mexicain numéro 1 mondial. TOUJOURS tequila 100% agave (Espolòn, Patrón, Don Julio, El Jimador). La tequila mixto est pour les cocktails bas de gamme. Citron vert FRAIS obligatoire."
},

"martinez":{
  glass:"Coupe à cocktail",
  ingredients:[
    {name:"Gin (Old Tom ou London Dry)",amount:"4.5cl",alternatives:["Gin London Dry","Gin aux notes épicées"]},
    {name:"Vermouth rouge",amount:"4.5cl",alternatives:["Martini Rosso","Cinzano","Punt e Mes"]},
    {name:"Marasquin",amount:"0.75cl",alternatives:["Kirsch","Cherry Heering dilué"]},
    {name:"Orange bitters",amount:"2 dashs",alternatives:["Angostura","Peychaud's"]}
  ],
  equipment:{
    ideal:["Verre à mélange","Cuillère de bar","Passoire","Coupe réfrigérée"],
    debrouille:["Grand verre","Cuillère","Passoire","Verre quelconque"],
    rien:["Mélanger dans verre avec glace, filtrer"]
  },
  steps:[
    "Réfrigérer la coupe.",
    "Remplir le verre à mélange de glace.",
    "Verser tous les ingrédients.",
    "Mélanger 30 secondes.",
    "Filtrer dans la coupe.",
    "Cerise au marasquin et zeste de citron."
  ],
  variations:[
    {name:"Dry Martini",recipe:"Réduire vermouth, enlever marasquin — l'évolution moderne"},
    {name:"Martinez Sweet",recipe:"Old Tom gin + Punt e Mes + marasquin — version sucrée historique"}
  ],
  tips:"Le précurseur du Martini (Californie, 1860s). Plus doux et plus complexe qu'un Martini classique grâce au vermouth en proportion égale. L'Old Tom gin (légèrement sucré) était utilisé à l'époque."
},

"mimosa":{
  glass:"Flûte à champagne",
  ingredients:[
    {name:"Champagne brut",amount:"7.5cl",alternatives:["Prosecco","Crémant","Cava","Vin blanc pétillant"]},
    {name:"Jus d'orange frais pressé",amount:"7.5cl",alternatives:["Jus d'orange en brique (acceptable)","Jus de mandarine pour variation"]}
  ],
  equipment:{
    ideal:["Flûte","Presse-agrumes"],
    debrouille:["N'importe quel verre","Jus d'orange en bouteille"],
    rien:["Tout dans le verre, prêt"]
  },
  steps:[
    "Réfrigérer la flûte.",
    "Verser d'abord le jus d'orange (50%).",
    "Compléter avec le champagne très froid (50%), versé lentement.",
    "Ne pas mélanger — les bulles font le travail.",
    "Rondelle d'orange en garniture."
  ],
  variations:[
    {name:"Bellini",recipe:"Remplacer OJ par purée de pêche blanche — la version vénitienne"},
    {name:"Poinsettia",recipe:"Champagne + cranberry + orange — couleur rouge festive"},
    {name:"Mimosa Fraise",recipe:"Champagne + jus de fraise + OJ"},
    {name:"Mocktail Mimosa",recipe:"Jus d'orange + jus de pomme pétillant + quelques gouttes de grenadine"}
  ],
  tips:"Ratio parfait 50/50. Le jus d'orange frais pressé à la minute fait toute la différence. Servir au brunch ou en apéritif. Londres/Paris 1925 — mais rendu célèbre par le Buck's Club de Londres."
},

"mint-julep":{
  glass:"Mug en argent ou étain (traditionnel) ou highball",
  ingredients:[
    {name:"Bourbon",amount:"6cl",alternatives:["Rye whiskey (plus épicé)","Tennessee whiskey"]},
    {name:"Menthe fraîche",amount:"8-10 feuilles",alternatives:["Menthe poivrée (plus intense)","Sirop de menthe (dernier recours)"]},
    {name:"Sucre",amount:"1-2 c. à café",alternatives:["Sirop de sucre 2cl","Miel","Sirop d'érable"]},
    {name:"Glace pilée",amount:"Beaucoup","alternatives":["Glaçons très concassés","Glace crushed"]}
  ],
  equipment:{
    ideal:["Mug en métal","Pilon","Cuillère de bar","Glace pilée"],
    debrouille:["Verre épais","Cuillère à soupe","Sac + rouleau pour concasser glace"],
    rien:["Piler menthe et sucre avec fond de verre, ajouter bourbon et glace"]
  },
  steps:[
    "Mettre menthe et sucre dans le mug.",
    "Piler TRÈS DOUCEMENT — juste pour libérer les arômes, pas pour broyer.",
    "Remplir de glace pilée.",
    "Verser le bourbon.",
    "Mélanger délicatement de bas en haut.",
    "Ajouter plus de glace pilée jusqu'en pyramide au-dessus du bord.",
    "Garnir d'une belle branche de menthe (le nez la sentira avant la bouche). Paille courte."
  ],
  variations:[
    {name:"Peach Julep",recipe:"Ajouter 1cl sirop de pêche + 1 tranche de pêche"},
    {name:"Blackberry Julep",recipe:"Piler 4 mûres avec la menthe"},
    {name:"Gin Smash",recipe:"Même recette avec gin — la version britannique"}
  ],
  tips:"LE cocktail du Kentucky Derby depuis 1938. Le mug en argent est essentiel — il se couvre de givre et maintient le cocktail très froid. Ne jamais sur-piler la menthe : l'amertume des tiges gâche tout. La glace pilée est NON-NÉGOCIABLE."
},

"mojito":{
  glass:"Verre highball (30-40cl)",
  ingredients:[
    {name:"Rhum blanc",amount:"5cl",alternatives:["Rhum agricole blanc 50°","Cachaça pour touche brésilienne","Rhum cubain Havana Club 3 ans"]},
    {name:"Menthe fraîche",amount:"8-10 feuilles",alternatives:["Menthe poivrée séchée ½ c. à café — beaucoup moins bon","Basilic pour version italienne"]},
    {name:"Citron vert",amount:"½ citron",alternatives:["1.5cl jus citron vert en bouteille + zeste","Citron jaune (moins aromatique)"]},
    {name:"Sirop de sucre de canne",amount:"2cl",alternatives:["2 c. à café de sucre cristallisé","Miel dilué","Sirop d'agave"]},
    {name:"Eau gazeuse / soda",amount:"Compléter (~8cl)",alternatives:["Ginger beer pour version épicée","Limonade pour plus de douceur","Prosecco pour Mojito Royal"]}
  ],
  equipment:{
    ideal:["Pilon en bois ou inox","Verre highball","Cuillère de bar longue","Paille"],
    debrouille:["Cuillère à soupe pour piler","N'importe quel grand verre","Paille classique"],
    rien:["Écraser menthe entre les paumes, presser citron avec les doigts, mélanger avec paille"]
  },
  steps:[
    "Mettre les feuilles de menthe et le sucre/sirop dans le verre.",
    "Piler DÉLICATEMENT — pour libérer les huiles essentielles seulement. Ne pas déchiqueter.",
    "Ajouter les morceaux de citron vert. Presser et piler encore 2-3 coups.",
    "Remplir de glace pilée ou glaçons.",
    "Verser le rhum.",
    "Compléter avec le soda, verser en filet sur la cuillère pour conserver les bulles.",
    "Mélanger délicatement de bas en haut. Garnir de menthe. Paille."
  ],
  variations:[
    {name:"Mojito Royal",recipe:"Prosecco à la place du soda — version luxe pétillante"},
    {name:"Mojito Fraise",recipe:"Piler 4 fraises fraîches avec la menthe"},
    {name:"Mojito Ananas",recipe:"Remplacer l'eau par jus d'ananas"},
    {name:"Nojito",recipe:"Supprimer l'alcool, doubler citron vert, eau de coco + soda"},
    {name:"Mojito Coco",recipe:"Remplacer 1cl de rhum par Malibu"}
  ],
  tips:"NE PAS sur-piler la menthe — l'amertume des tiges est le piège numéro 1. Utiliser uniquement les FEUILLES. La glace pilée est idéale car elle dilue mieux qu'en glaçons. Citron vert frais obligatoire."
},

"moscow-mule":{
  glass:"Mug en cuivre (traditionnel) ou highball",
  ingredients:[
    {name:"Vodka",amount:"5cl",alternatives:["Vodka au citron","Vodka nature premium (Absolut, Smirnoff, Ketel One)"]},
    {name:"Ginger beer piquant",amount:"12cl",alternatives:["Ginger ale (beaucoup moins piquant)","Fever-Tree Ginger Beer","Ginger beer maison"]},
    {name:"Jus de citron vert frais",amount:"1.5cl",alternatives:["Citron jaune","Jus en bouteille"]}
  ],
  equipment:{
    ideal:["Mug en cuivre","Cuillère de bar"],
    debrouille:["Verre highball","Cuillère classique"],
    rien:["Tout dans le verre, mélanger avec paille"]
  },
  steps:[
    "Remplir le mug ou verre de glaçons.",
    "Presser le jus de citron vert.",
    "Verser la vodka.",
    "Compléter avec la ginger beer froide — verser lentement pour conserver les bulles.",
    "Mélanger délicatement 1-2 fois.",
    "Quartier de citron vert et tranche de gingembre en garniture."
  ],
  variations:[
    {name:"Dark 'n' Stormy",recipe:"Rhum noir (Goslings) à la place de la vodka"},
    {name:"Mexican Mule",recipe:"Tequila à la place de la vodka + sel sur le bord"},
    {name:"Kentucky Mule",recipe:"Bourbon à la place de la vodka"},
    {name:"Scottish Mule",recipe:"Scotch whisky + ginger beer + citron"}
  ],
  tips:"Inventé en 1941 à Los Angeles pour écouler des stocks de vodka et de ginger beer. Le mug en cuivre maintient le cocktail plus froid. La GINGER BEER (fermentée, piquante) est essentielle — pas le ginger ale qui est juste aromatisé."
},

/* ═══════════════════════════════════════════
   FIN PARTIE 1 — COCKTAILS A→M
═══════════════════════════════════════════ */
}
