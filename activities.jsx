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
    saison: ["printemps", "ete", "automne"], tone: "water",
    photo: "https://images.unsplash.com/photo-w58KovW_d0A?w=800&q=80",
    prix: "CHF 80",
    whatsapp: "Bonjour ! Je suis interesse(e) par l'activite Kayak & paddle sur le lac. Pouvez-vous me donner plus d'infos ?",
    fr: { title: "Kayak & paddle sur le lac", location: "Neuchatel - rives du lac",
      desc: "Pagayez sur les eaux turquoise du plus grand lac entierement suisse, vue sur les Alpes les jours clairs." } },

  { id: 2, slug: "randonnee-creux-du-van",
    cat: "outdoor", type: "rando", levelKey: "hard", duration: "4-5 h",
    saison: ["printemps", "ete", "automne"], tone: "forest",
    photo: "https://images.unsplash.com/photo-UVyOfX3v0Ls?w=800&q=80",
    prix: "Sur demande", whatsapp: "Bonjour ! Je suis interesse(e) par la randonnee au Creux du Van. Pouvez-vous m'indiquer les tarifs ?",
    fr: { title: "Randonnee au Creux du Van", location: "Noiraigue - Val-de-Travers",
      desc: "Le grand amphitheatre rocheux du Jura : 160 m de falaises, bouquetins et panorama sur les trois lacs." } },

  { id: 3, slug: "gorges-de-lareuse",
    cat: "outdoor", type: "rando", levelKey: "medium", duration: "3 h",
    saison: ["printemps", "ete", "automne"], tone: "forest",
    photo: "https://images.unsplash.com/photo-fciT7v4EYLc?w=800&q=80",
    prix: "Sur demande", whatsapp: "Bonjour ! Je souhaite en savoir plus sur la balade dans les Gorges de l'Areuse.",
    fr: { title: "Gorges de l'Areuse", location: "Boudry -> Noiraigue",
      desc: "Un sentier le long de la riviere emeraude, entre ponts de pierre, cascades et fraicheur de la foret." } },

  { id: 4, slug: "ski-raquettes-bugnenets",
    cat: "outdoor", type: "neige", levelKey: "medium", duration: "Journee",
    saison: ["hiver"], tone: "snow",
    photo: "https://images.unsplash.com/photo-ovIdoY1ZUks?w=800&q=80",
    prix: "Sur demande", whatsapp: "Bonjour ! Je suis interesse(e) par une journee ski & raquettes aux Bugnenets.",
    fr: { title: "Ski & raquettes aux Bugnenets", location: "Les Bugnenets-Savagnieres",
      desc: "Pistes familiales et itineraires raquettes sur les hauteurs du Jura neuchatelois." } },

  { id: 5, slug: "balade-degustation-vignes",
    cat: "outdoor", type: "gastro", levelKey: "easy", duration: "2 h",
    saison: ["ete", "automne"], tone: "vine",
    photo: "https://images.unsplash.com/photo-h82O8JwST9k?w=800&q=80",
    prix: "Sur demande", whatsapp: "Bonjour ! La balade & degustation dans les vignes m'interesse. Quels sont les tarifs ?",
    fr: { title: "Balade & degustation dans les vignes", location: "Littoral neuchatelois",
      desc: "Marchez entre les rangs de vigne du Littoral et degustez un Neuchatel blanc chez le vigneron." } },

  { id: 6, slug: "latenium-musee-archeologie",
    cat: "indoor", type: "culture", levelKey: "easy", duration: "2 h",
    saison: ["printemps", "ete", "automne", "hiver"], tone: "stone",
    photo: "https://images.unsplash.com/photo-R39EaZJfTgk?w=800&q=80",
    prix: "Sur demande", whatsapp: "Bonjour ! Je souhaite visiter le Latenium. Pouvez-vous m'indiquer les tarifs et horaires ?",
    fr: { title: "Latenium, parc & musee d'archeologie", location: "Hauterive",
      desc: "Le plus grand musee archeologique de Suisse, au bord du lac : 50 000 ans d'histoire a ciel ouvert." } },

  { id: 7, slug: "spa-bains-lac",
    cat: "indoor", type: "bien", levelKey: "easy", duration: "1/2 journee",
    saison: ["printemps", "ete", "automne", "hiver"], tone: "water",
    photo: "https://images.unsplash.com/photo-zZdKuvzxejM?w=800&q=80",
    prix: "Sur demande", whatsapp: "Bonjour ! Je suis