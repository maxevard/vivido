export const ACTIVITIES = [
  /* ── SCHÉMA D'UNE ACTIVITÉ (modèle Vivido) ─────────────────────────────
     id        : identifiant unique (jamais réutilisé)
     slug      : texte de l'URL (M1) — minuscules, tirets, sans accents
     cat       : "outdoor" | "indoor"
     type      : famille — eau | rando | neige | culture | bien | gastro
     levelKey  : "easy" | "medium" | "hard"
     duration  : durée affichée (texte libre)
     saison    : tableau parmi "printemps" | "ete" | "automne" | "hiver" (M16)
     tone      : couleur du dégradé de la vignette tant qu'il n'y a pas de photo
     photo     : chemin de la vraie image — "" = on garde le dégradé (M6/M14)
     prix      : texte (ex. "CHF 80") ou null si pas de prix
     whatsapp  : message WhatsApp pré-rempli, ou null si pas de réservation
     fr        : textes français { title, location, desc }
  ───────────────────────────────────────────────────────────────────────── */

  { id: 1, slug: "kayak-paddle-lac-neuchatel",
    cat: "outdoor", type: "eau", levelKey: "easy", duration: "2-3 h",
    saison: ["printemps", "ete", "automne"], tone: "water", photo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    prix: "CHF 80",
    whatsapp: "Bonjour ! Je suis intéressé(e) par l'activité Kayak & paddle sur le lac. Pouvez-vous me donner plus d'infos ?",
    fr: { title: "Kayak & paddle sur le lac", location: "Neuchâtel · rives du lac",
      desc: "Pagayez sur les eaux turquoise du plus grand lac entièrement suisse, vue sur les Alpes les jours clairs." } },

  { id: 2, slug: "randonnee-creux-du-van",
    cat: "outdoor", type: "rando", levelKey: "hard", duration: "4-5 h",
    saison: ["printemps", "ete", "automne"], tone: "forest",photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    prix: "Sur demande",
    whatsapp: "Bonjour ! Je suis intéressé(e) par la randonnée au Creux du Van. Pouvez-vous m'indiquer les tarifs et les prochaines dates disponibles ?",
    fr: { title: "Randonnée au Creux du Van", location: "Noiraigue · Val-de-Travers",
      desc: "Le grand amphithéâtre rocheux du Jura : 160 m de falaises, bouquetins et panorama sur les trois lacs." } },

  { id: 3, slug: "gorges-de-lareuse",
    cat: "outdoor", type: "rando", levelKey: "medium", duration: "3 h",
    saison: ["printemps", "ete", "automne"], tone: "forest",photo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80", 
    prix: "Sur demande",
    whatsapp: "Bonjour ! Je souhaite en savoir plus sur la balade dans les Gorges de l'Areuse. Quels sont les tarifs et les conditions ?",
    fr: { title: "Gorges de l'Areuse", location: "Boudry -> Noiraigue",
      desc: "Un sentier le long de la rivière émeraude, entre ponts de pierre, cascades et fraîcheur de la forêt." } },

  { id: 4, slug: "ski-raquettes-bugnenets",
    cat: "outdoor", type: "neige", levelKey: "medium", duration: "Journée",
    saison: ["hiver"], tone: "snow", photo: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
    prix: "Sur demande",
    whatsapp: "Bonjour ! Je suis intéressé(e) par une journée ski & raquettes aux Bugnenets. Pouvez-vous me donner les tarifs et les disponibilités cet hiver ?",
    fr: { title: "Ski & raquettes aux Bugnenets", location: "Les Bugnenets-Savagnières",
      desc: "Pistes familiales et itinéraires raquettes sur les hauteurs du Jura neuchâtelois." } },

  { id: 5, slug: "balade-degustation-vignes",
    cat: "outdoor", type: "gastro", levelKey: "easy", duration: "2 h",
    saison: ["ete", "automne"], tone: "vine", photo: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80",
    prix: "Sur demande",
    whatsapp: "Bonjour ! La balade & dégustation dans les vignes du Littoral m'intéresse beaucoup. Quels sont les tarifs et les prochaines dates ?",
    fr: { title: "Balade & dégustation dans les vignes", location: "Littoral neuchâtelois",
      desc: "Marchez entre les rangs de vigne du Littoral et dégustez un Neuchâtel blanc chez le vigneron." } },

  { id: 6, slug: "latenium-musee-archeologie",
    cat: "indoor", type: "culture", levelKey: "easy", duration: "2 h",
    saison: ["printemps", "ete", "automne", "hiver"], tone: "stone", photo: "https://images.unsplash.com/photo-1565060169194-19fabf63012c?w=800&q=80",
    prix: "Sur demande",
    whatsapp: "Bonjour ! Je souhaite visiter le Laténium. Pouvez-vous m'indiquer les tarifs d'entrée et les horaires actuels ?",
    fr: { title: "Laténium, parc & musée d'archéologie", location: "Hauterive",
      desc: "Le plus grand musée archéologique de Suisse, au bord du lac : 50 000 ans d'histoire à ciel ouvert." } },

  { id: 7, slug: "spa-bains-lac",
    cat: "indoor", type: "bien", levelKey: "easy", duration: "1/2 journée",
    saison: ["printemps", "ete", "automne", "hiver"], tone: "water",photo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    prix: "Sur demande",
    whatsapp: "Bonjour ! Je suis intéressé(e) par une session spa & bains face au lac. Quels sont les soins disponibles et les tarifs ?",
    fr: { title: "Spa & bains face au lac", location: "Neuchâtel",
      desc: "Bassins chauds, sauna et soins pour décompresser après l'effort, le regard posé sur l'eau." } },

  { id: 8, slug: "atelier-cuisine-terroir",
    cat: "indoor", type: "gastro", levelKey: "easy", duration: "3 h",
    saison: ["printemps", "ete", "automne", "hiver"], tone: "stone",photo: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80",
    prix: "Sur demande",
    whatsapp: "Bonjour ! L'atelier cuisine du terroir m'intéresse. Pouvez-vous me donner les prochaines dates et les tarifs par personne ?",
    fr: { title: "Atelier cuisine du terroir", location: "Neuchâtel · table d'hôte",
      desc: "Mettez la main à la pâte autour des produits locaux, puis passez à table avec le chef." } },

  { id: 9, slug: "maison-de-labsinthe",
    cat: "indoor", type: "culture",
levelKey: "easy", duration: "1-2 h",
    saison: ["printemps", "ete", "automne", "hiver"], tone: "vine", photo: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80",
    prix: "Sur demande",
    whatsapp: "Bonjour ! Je souhaite visiter la Maison de l'Absinthe a Motiers. Quels sont les horaires, tarifs et options de degustation ?",
    fr: { title: "Maison de l'Absinthe", location: "Motiers - Val-de-Travers",
      desc: "L'histoire de la Fee verte la ou elle est nee - degustation comprise." } },
];    