/**
 * PLUG AND WORK AGENCY — JAVASCRIPT APPLICATION
 * Luxury Real Estate & Interactive Mobile Experience
 */

const LIVE_ASSET_BASE = "https://plugandworkagency.netlify.app/";

function resolveAsset(url) {
    if (!url) return 'assets/images/logo_masterpiece_didot.png';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return url.replace(/^\//, '');
}

// --- 1. Property Database ---
const DEFAULT_PROPERTIES = [
    {
        id: "dar_bouazza",
        category: "villa",
        title: "Villa d'Architecte avec Piscine",
        subtitle: "Dar Bouazza, Casablanca • Cadre Exceptionnel",
        location: "Dar Bouazza",
        badge: "Coup de Cœur • Exclusivité",
        price: 10000000,
        priceDisplay: "10 000 000 DH",
        surfaceHabitable: "540 m² construit",
        surfaceTerrain: "606 m² terrain",
        chambres: 5,
        sdb: 5,
        garage: "3 Voitures",
        description: "Somptueuse villa d'architecte contemporaine d'exception à Dar Bouazza, édifiée sur un superbe terrain de 606 m² avec 540 m² construits. Profitez d'un cadre de vie d'un raffinement rare : grand jardin paysager sans vis-à-vis avec magnifique piscine, vastes réceptions lumineuses, climatisation centralisée intégrée, cuisine moderne, finitions nobles et garage privé pouvant accueillir 3 voitures.",
        features: ["Piscine privée", "Jardin sans vis-à-vis", "Climatisation centralisée", "Garage 3 voitures", "Terrain 606 m²", "540 m² construit", "Finitions de prestige"],
        images: [
            "assets/properties/dar_bouazza/dar_bouazza_1.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_2.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_3.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_4.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_5.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_6.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_7.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_8.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_9.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_10.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_11.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_12.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_13.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_14.jpg",
            "assets/properties/dar_bouazza/dar_bouazza_15.jpg"
        ],
        imageCaptions: [
            "Façade contemporaine & Entrée de prestige",
            "Piscine privée chauffée & Solarium sans vis-à-vis",
            "Vaste salon moderne baigné de lumière naturelle",
            "Espace salle à manger de réception ouverte",
            "Suite parentale avec balcon privatif",
            "Dressing aménagé sur mesure de la suite principale",
            "Salle de bain en marbre noble & Baignoire îlot",
            "Cuisine équipée contemporaine avec îlot central",
            "Seconde chambre avec salle d'eau intégrée",
            "Chambre spacieuse d'enfants ou invités",
            "Salle de bain moderne & sanitaires haut de gamme",
            "Vue panoramique sur le jardin arboré",
            "Terrasse lounge extérieure & Coin barbecue",
            "Éclairage nocturne architectural & Détente",
            "Vue d'ensemble de la propriété (606 m² de terrain)"
        ]
    },
    {
        id: "ain_diab",
        category: "villa",
        title: "Villa de Maître d'Exception",
        subtitle: "Aïn Diab / Anfa, Casablanca • Adresse Rare",
        location: "Aïn Diab",
        badge: "🔴 VENDU • EXCLUSIVITÉ PW",
        statusClass: "badge-sold",
        price: 9500000,
        priceDisplay: "DÉJÀ VENDU (9 500 000 DH)",
        surfaceHabitable: "480 m²",
        surfaceTerrain: "650 m²",
        chambres: 5,
        sdb: 4,
        garage: "3 Véhicules",
        description: "Propriété d'exception située dans l'enclave la plus prestigieuse d'Aïn Diab, à proximité immédiate de la Corniche et du Morocco Mall. Vendue avec succès par plugandworkagency en exclusivité. Vous possédez un bien d'exception à Aïn Diab ou Anfa et souhaitez le vendre au meilleur prix ? Contactez notre agence.",
        features: ["Vendu avec succès par plugandworkagency", "Triple réception", "Grand jardin arboré", "Marbre et boiseries", "Mandat exclusif réussi"],
        images: [
            "assets/properties/ain_diab/ain_diab_1.jpg",
            "assets/properties/ain_diab/ain_diab_2.jpg",
            "assets/properties/ain_diab/ain_diab_3.jpg",
            "assets/properties/ain_diab/ain_diab_4.jpg",
            "assets/properties/ain_diab/ain_diab_5.jpg",
            "assets/properties/ain_diab/ain_diab_6.jpg",
            "assets/properties/ain_diab/ain_diab_7.jpg",
            "assets/properties/ain_diab/ain_diab_8.jpg",
            "assets/properties/ain_diab/ain_diab_9.jpg",
            "assets/properties/ain_diab/ain_diab_10.jpg"
        ],
        imageCaptions: [
            "Allée d'entrée majestueuse & Façade californienne",
            "Grand parc paysager arboré et allées privées",
            "Salons de réception aux volumes d'exception",
            "Espace cheminée contemporain & Boiseries nobles",
            "Suite de maître avec terrasse privée sur jardin",
            "Salle de bain principale en marbre blanc",
            "Cuisine dinatoire haut de gamme",
            "Chambre de réception & Vue dégagée",
            "Piscine & Espace lounge extérieur",
            "Vue d'ensemble du domaine (650 m² de terrain)"
        ]
    },
    {
        id: "appartement_168m2",
        category: "appartement",
        title: "Appartement de Haut Standing avec Terrasse — 168 m²",
        subtitle: "Casablanca • Résidence Sécurisée & Calme",
        location: "Casablanca",
        badge: "✨ NOUVEAU • 168 M²",
        price: 3200000,
        priceDisplay: "3 200 000 DH (3,2 MDH)",
        surfaceHabitable: "168 m²",
        surfaceTerrain: "Grande terrasse aménagée",
        chambres: 3,
        sdb: 2,
        garage: "1 Place titrée",
        description: "Superbe appartement de prestige d'une superficie de 168 m² situé dans une résidence calme et sécurisée à Casablanca. Ce bien d'exception offre des prestations de haute volée : vaste double salon de réception lumineux, 3 chambres spacieuses dont une suite parentale avec dressing sur-mesure, 2 salles de bain dont une somptueuse salle d'eau avec plan vasque en onyx rétroéclairé et marbre noble, un long couloir de distribution avec corniches et caissons lumineux à LED, ainsi qu'une magnifique terrasse privative aménagée sans vis-à-vis. Climatisation réversible intégrée, marbre au sol, menuiseries nobles et place de parking titrée au sous-sol.",
        features: [
            "Superficie généreuse de 168 m²",
            "Vaste double salon lumineux",
            "3 Chambres dont Suite Parentale",
            "Grande terrasse / Balcon aménagé",
            "Salle de bain avec plan vasque en onyx rétroéclairé",
            "Place de parking titrée au sous-sol",
            "Sols en marbre & Caissons lumineux LED",
            "Climatisation réversible intégrée",
            "Dernier prix : 3 200 000 DH"
        ],
        images: [
            "assets/properties/appartement_168m2/appt_168m2_2_salon.jpg",
            "assets/properties/appartement_168m2/appt_168m2_1_terrasse.jpg",
            "assets/properties/appartement_168m2/appt_168m2_3_hall.jpg",
            "assets/properties/appartement_168m2/appt_168m2_4_sdb.jpg",
            "assets/properties/appartement_168m2/appt_168m2_5_chambre.jpg"
        ],
        imageCaptions: [
            "Vaste double salon contemporain baigné de lumière",
            "Grande terrasse / Balcon aménagé plein sud avec vue dégagée",
            "Grand hall & Couloir marbré avec corniches lumineuses LED",
            "Salle de bain standing avec plan vasque en onyx rétroéclairé & marbre",
            "Suite parentale raffinée avec dressing sur mesure & climatisation"
        ]
    },
    {
        id: "ben_kaddour_180m2",
        category: "appartement",
        title: "Appartement de Prestige 180 m² — Ben Kaddour",
        subtitle: "Casablanca • Racine / Triangle d'Or (Abdellatif Ben Kaddour)",
        location: "Racine",
        badge: "✨ NOUVEAU • BEN KADDOUR",
        price: 3500000,
        priceDisplay: "3 500 000 DH (3,5 MDH)",
        surfaceHabitable: "180 m²",
        surfaceTerrain: "Balcon avec vue dégagée",
        chambres: 3,
        sdb: 2,
        garage: "1 Place titrée",
        description: "Rare opportunité située au cœur du quartier le plus convoité de Casablanca : rue Abdellatif Ben Kaddour (Racine / Triangle d'Or). Cet appartement d'exception d'une surface généreuse de 180 m² propose un cadre de vie de grand standing : 3 chambres spacieuses dont une superbe suite parentale avec sol en marbre et niches murales décoratives, 2 salles de bain dont une salle d'eau contemporaine avec douche à l'italienne et meuble vasque suspendu, un vaste espace séjour et un agréable balcon offrant une vue dégagée et arborée sur l'avenue. Immeuble sécurisé avec ascenseur et place de parking titrée au sous-sol. Emplacement d'exception à quelques pas des enseignes de luxe, cafés et restaurants réputés.",
        features: [
            "Superficie généreuse : 180 m²",
            "Adresse prestigieuse : Rue Abdellatif Ben Kaddour",
            "3 Chambres spacieuses dont Suite Parentale",
            "Balcon avec vue dégagée sur les palmiers",
            "Salle de bain moderne avec douche à l'italienne",
            "Place de parking titrée au sous-sol",
            "Sols en marbre noble & Faux-plafond avec spots",
            "Immeuble sécurisé avec ascenseur",
            "Prix : 3 500 000 DH (3,5 MDH)"
        ],
        images: [
            "assets/properties/ben_kaddour_180m2/ben_kaddour_1_vue_balcon.jpg",
            "assets/properties/ben_kaddour_180m2/ben_kaddour_2_suite_parentale.jpg",
            "assets/properties/ben_kaddour_180m2/ben_kaddour_3_sdb_italienne.jpg",
            "assets/properties/ben_kaddour_180m2/ben_kaddour_4_chambre.jpg"
        ],
        imageCaptions: [
            "Balcon privatif avec vue dégagée sur l'avenue Ben Kaddour et ses palmiers",
            "Grande suite parentale avec sol en marbre noble & niches décoratives",
            "Salle de bain contemporaine avec douche à l'italienne & meuble vasque bois",
            "Chambre spacieuse lumineuse avec rangements et miroir"
        ]
    },
    {
        id: "cfc_studio",
        category: "studio",
        title: "Studio Haut Standing Neuf",
        subtitle: "Casablanca Finance City (CFC) • Tour Prestige",
        location: "CFC",
        badge: "🟢 LOUÉ EN 48H",
        statusClass: "badge-rented",
        price: 1250000,
        priceDisplay: "LOUÉ (7 500 DH / mois)",
        surfaceHabitable: "50 m²",
        surfaceTerrain: "50 m²",
        chambres: 1,
        sdb: 1,
        garage: "1 Place titrée",
        description: "Studio neuf loué en un temps record (48 heures) par plugandworkagency à Casablanca Finance City (CFC). Locataire qualifié avec garanties solides. Propriétaires à CFC : confiez-nous la gestion locative de votre studio ou appartement pour une rentabilité maximale sans vacance locative.",
        features: ["Loué en 48 heures par plugandworkagency", "Sécurité & Conciergerie 24/7", "Loyer : 7 500 DH / mois", "Rentabilité locative brute 7.5%"],
        images: [
            "assets/properties/cfc_studio/studio_cfc_1.jpg",
            "assets/properties/cfc_studio/studio_cfc_2.jpg",
            "assets/properties/cfc_studio/studio_cfc_3.jpg",
            "assets/properties/cfc_studio/studio_cfc_4.jpg",
            "assets/properties/cfc_studio/studio_cfc_5.jpg",
            "assets/properties/cfc_studio/studio_cfc_6.jpg",
            "assets/properties/cfc_studio/studio_cfc_7.jpg",
            "assets/properties/cfc_studio/studio_cfc_8.jpg"
        ],
        imageCaptions: [
            "Pièce de vie lumineuse avec baies vitrées sol-plafond",
            "Cuisine américaine équipée haut de gamme",
            "Espace nuit cosy & Dressing sur mesure",
            "Salle d'eau moderne à l'italienne",
            "Terrasse privative avec vue dégagée sur CFC",
            "Hall d'accueil de la tour avec conciergerie 24/7",
            "Salon d'attente résidents & Espace coworking",
            "Façade architecturale de la tour contemporaine"
        ]
    },
    {
        id: "gloria",
        category: "appartement",
        isProgramme: true,
        title: "Résidence Gloria 2 — Programme Neuf",
        subtitle: "Casablanca • Oulad Azzouz (Axe Dar Bouazza)",
        location: "Casablanca (Oulad Azzouz)",
        badge: "Aide État Éligible (< 700 000 DH)",
        googleMapsUrl: "https://maps.google.com/?q=33.520374,-7.773057",
        coordinates: { lat: 33.520374, lng: -7.773057 },
        price: 627200,
        priceDisplay: "Dès 627 200 DH (9 800 DH/m²)",
        surfaceHabitable: "64 à 108 m²",
        surfaceTerrain: "Cours privatives jusqu'à 25 m²",
        chambres: "2 ou 3",
        sdb: 2,
        garage: "Parking titré",
        description: "Ensemble immobilier et commercial d'exception commercialisé en exclusivité par plugandworkagency à Casablanca — Oulad Azzouz (axe Dar Bouazza / Errahma). 12 lots disponibles au tarif fixe de 9 800 DH/m². Seuls les appartements sous le plafond de 700 000 DH (F3 de 64 m² à 627 200 DH) sont éligibles à l'Aide Directe de l'État.",
        features: ["Localisation : Casablanca (Oulad Azzouz)", "Tarif fixe appartements : 9 800 DH / m²", "Aide État éligible sur F3 de 64 m² (< 700 000 DH)", "9 Appartements (64 à 108 m²) & 3 Magasins", "Ascenseur & places de parking titrées", "Titres fonciers individuels disponibles"],
        images: [
            "assets/properties/gloria_residence.jpg",
            "assets/properties/gloria/gloria_real_salon_1.jpg",
            "assets/properties/gloria/gloria_real_cuisine.jpg",
            "assets/properties/gloria/gloria_real_suite_parentale.jpg",
            "assets/properties/gloria/gloria_real_sdb_marbre.jpg",
            "assets/properties/gloria/gloria_real_sdb_cabine.jpg",
            "assets/properties/gloria/gloria_real_chambre_2.jpg",
            "assets/properties/gloria/gloria_real_chambre_3.jpg",
            "assets/properties/gloria/gloria_real_hall.jpg",
            "assets/properties/gloria/gloria_real_couloir.jpg",
            "assets/properties/gloria/gloria_real_chambre_vue.jpg",
            "assets/properties/gloria/gloria_lot_9_apt_64m2_et2.jpg",
            "assets/properties/gloria/gloria_lot_12_apt_64m2_et3.jpg",
            "assets/properties/gloria/gloria_lot_7_apt_86m2_et2.jpg",
            "assets/properties/gloria/gloria_lot_10_apt_86m2_et3.jpg",
            "assets/properties/gloria/gloria_lot_6_apt_87m2_et1.jpg",
            "assets/properties/gloria/gloria_lot_8_apt_96m2_et2.jpg",
            "assets/properties/gloria/gloria_lot_11_apt_96m2_et3.jpg",
            "assets/properties/gloria/gloria_lot_4_apt_97m2_et1.jpg",
            "assets/properties/gloria/gloria_lot_5_apt_108m2_et1.jpg",
            "assets/properties/gloria/gloria_lot_1_magasin_152m2.jpg",
            "assets/properties/gloria/gloria_lot_2_magasin_45m2.jpg",
            "assets/properties/gloria/gloria_lot_3_magasin_174m2.jpg"
        ],
        imageCaptions: [
            "Façade Contemporaine & Entrée Officielle de la Résidence Gloria 2",
            "Grand Salon de Réception — Marbre & Faux-Plafond LED",
            "Cuisine Contemporaine Entièrement Équipée (Granit & Rangements)",
            "Suite Parentale avec Parquet Noble & Balcon",
            "Salle de Bain Principale — Douche à l'Italienne & Grès Cérame Effet Marbre",
            "Deuxième Salle d'Eau — Cabine en Verre Trempé Sécurit",
            "Chambre à Coucher Secondaire — Parquet & Double Vitrage",
            "Chambre d'Amis / Bureau — Espace Lumineux",
            "Hall d'Entrée & Dégagement Spacieux",
            "Couloir de Distribution avec Portes en Bois Noble",
            "Perspective Chambre avec Baie Vitrée Coulissante & Vue Dégagée",
            "Lot 9 • F3 64 m² (Étage 2) — 627 200 DH 🏛️ ÉLIGIBLE AIDE ÉTAT",
            "Lot 12 • F3 64 m² (Étage 3) — 627 200 DH 🏛️ ÉLIGIBLE AIDE ÉTAT",
            "Lot 7 • Appartement 86 m² (Étage 2) — 842 800 DH",
            "Lot 10 • Appartement 86 m² (Étage 3) — 842 800 DH",
            "Lot 6 • Appartement 87 m² (Étage 1) — 852 600 DH",
            "Lot 8 • Appartement 96 m² (Étage 2) — 940 800 DH",
            "Lot 11 • Appartement 96 m² (Étage 3) — 940 800 DH",
            "Lot 4 • Appartement 97 m² (Étage 1) — 950 600 DH",
            "Lot 5 • Appartement 108 m² (Étage 1) — 1 058 400 DH",
            "Lot 1 • Magasin Commercial 152 m² (Rez-de-chaussée)",
            "Lot 2 • Magasin Commercial 45 m² (Rez-de-chaussée)",
            "Lot 3 • Magasin Commercial 174 m² (Rez-de-chaussée Angle)"
        ]
    },
    {
        id: "victoria",
        category: "appartement",
        isProgramme: true,
        title: "Résidence Victoria Square",
        subtitle: "Casablanca Périphérie Sud • Bouskoura",
        location: "Bouskoura",
        badge: "✨ HAUT STANDING & PRESTIGE",
        price: 831300,
        priceDisplay: "Dès 831 300 DH",
        surfaceHabitable: "95 à 152 m²",
        surfaceTerrain: "Terrasses 7 à 36 m²",
        chambres: "2 à 4",
        sdb: 2,
        garage: "Sous-sol titré",
        description: "Programme contemporain d'envergure commercialisé par plugandworkagency. Appartements familiaux aux surfaces généreuses allant de 95 m² à 152 m² avec grandes terrasses ensoleillées, parking en sous-sol et finitions nobles.",
        features: ["Campagnes exclusives plugandworkagency", "Grandes terrasses plein sud", "Places de garage sécurisées en sous-sol", "Espaces optimisés", "Isolation phonique & thermique"],
        images: [
            "assets/properties/victoria/victoria_crea_1.png",
            "assets/properties/victoria/victoria_photo_1.jpg",
            "assets/properties/victoria/victoria_photo_2.jpg",
            "assets/properties/victoria/victoria_photo_3.jpg",
            "assets/properties/victoria/victoria_photo_4.jpg",
            "assets/properties/victoria/victoria_photo_5.jpg",
            "assets/properties/victoria/victoria_photo_6.jpg",
            "assets/properties/victoria/victoria_photo_7.jpg",
            "assets/properties/victoria/victoria_photo_8.jpg",
            "assets/properties/victoria/victoria_photo_9.jpg",
            "assets/properties/victoria/victoria_photo_10.jpg",
            "assets/properties/victoria/victoria_photo_11.jpg",
            "assets/properties/victoria/victoria_photo_12.jpg",
            "assets/properties/victoria/victoria_photo_13.jpg",
            "assets/properties/victoria/victoria_photo_14.jpg",
            "assets/properties/victoria/victoria_photo_15.jpg"
        ],
        imageCaptions: [
            "Perspective architecturale de la Résidence Victoria Square",
            "Façades contemporaines & Terrasses plein sud",
            "Grand salon de réception avec sol en marbre",
            "Terrasse aménagée dînatoire sans vis-à-vis",
            "Cuisine moderne intégrée haut de gamme",
            "Suite parentale avec dressing sur mesure",
            "Salle de bain contemporaine avec douche à l'italienne",
            "Chambre d'enfants / invités baignée de lumière",
            "Espaces communs et hall de standing",
            "Stationnement sécurisé titré en sous-sol",
            "Finitions nobles et menuiserie aluminium premium",
            "Double salon ouvert et espace salle à manger",
            "Balcons ensoleillés avec vue dégagée",
            "Prestations acoustiques et thermiques soignées",
            "Chambre secondaire avec placards intégrés",
            "Cadre verdoyant et calme à Bouskoura"
        ]
    },
    {
        id: "terrain_sina",
        category: "terrain",
        title: "Terrains Stratégiques & Promotion",
        subtitle: "Casablanca (Racine, Bd Anfa, Dar Bouazza, Bouskoura)",
        location: "Bouskoura",
        badge: "🟡 SOUS COMPROMIS • PROMOTION",
        statusClass: "badge-pending",
        price: 1300000,
        priceDisplay: "SOUS COMPROMIS",
        surfaceHabitable: "Zonage R+7 à Villas",
        surfaceTerrain: "600 m² à 59 000 m²",
        chambres: "-",
        sdb: "-",
        garage: "Accès voies 20-30m",
        description: "Portefeuille d'opportunités foncières pour promoteurs immobiliers sous compromis de vente par plugandworkagency. Promoteurs : confiez-nous la recherche et la commercialisation de vos futures opérations.",
        features: ["Sous compromis par plugandworkagency", "Zonages urbanistiques vérifiés", "Titres fonciers sains", "Proximité axes majeurs"],
        images: [
            "assets/properties/terrain_ibnou_sina.png"
        ],
        imageCaptions: [
            "Plan de situation & Zonage urbanistique stratégique"
        ]
    }
];

// --- IndexedDB High-Capacity Storage Engine ---
const PW_DB_NAME = 'PlugAndWorkDB';
const PW_STORE = 'properties';

function openPWDB() {
    return new Promise((resolve) => {
        if (!window.indexedDB) return resolve(null);
        try {
            const req = indexedDB.open(PW_DB_NAME, 1);
            req.onupgradeneeded = () => {
                if (!req.result.objectStoreNames.contains(PW_STORE)) {
                    req.result.createObjectStore(PW_STORE);
                }
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => resolve(null);
        } catch(e) {
            resolve(null);
        }
    });
}

async function loadFromPWDB() {
    try {
        const db = await openPWDB();
        if (!db) return null;
        return new Promise((resolve) => {
            const tx = db.transaction(PW_STORE, 'readonly');
            const req = tx.objectStore(PW_STORE).get('pw_properties');
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => resolve(null);
        });
    } catch(e) {
        return null;
    }
}

async function saveToPWDB(data) {
    try {
        const db = await openPWDB();
        if (!db) return false;
        return new Promise((resolve) => {
            const tx = db.transaction(PW_STORE, 'readwrite');
            tx.objectStore(PW_STORE).put(data, 'pw_properties');
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => resolve(false);
        });
    } catch(e) {
        return false;
    }
}

window.loadFromPWDB = loadFromPWDB;
window.saveToPWDB = saveToPWDB;

function syncPropertiesWithDefaults(props) {
    if (!Array.isArray(props)) return DEFAULT_PROPERTIES;
    const merged = props.map(p => {
        const def = DEFAULT_PROPERTIES.find(d => d.id === p.id);
        if (def) {
            if (!p.images || p.images.length < def.images.length) {
                p.images = def.images;
            }
            if (!p.imageCaptions || p.imageCaptions.length < (def.imageCaptions || []).length) {
                p.imageCaptions = def.imageCaptions;
            }
        }
        return p;
    });

    // Ensure any newly added default properties are included
    DEFAULT_PROPERTIES.forEach(def => {
        if (!merged.some(p => p.id === def.id)) {
            // Find appropriate place or insert at beginning
            const defIndex = DEFAULT_PROPERTIES.indexOf(def);
            if (defIndex >= 0 && defIndex < merged.length) {
                merged.splice(defIndex, 0, def);
            } else {
                merged.push(def);
            }
        }
    });

    return merged;
}

function loadProperties() {
    try {
        const stored = localStorage.getItem('pw_properties');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) return syncPropertiesWithDefaults(parsed);
        }
    } catch(e) {
        console.warn('LocalStorage non disponible, utilisation du catalogue par défaut', e);
    }
    return DEFAULT_PROPERTIES;
}

let PROPERTIES = loadProperties();
window.PROPERTIES = PROPERTIES;
window.DEFAULT_PROPERTIES = DEFAULT_PROPERTIES;
window.syncPropertiesWithDefaults = syncPropertiesWithDefaults;

// Asynchronously load high-capacity IndexedDB data (without quota limits)
if (typeof window !== 'undefined') {
    loadFromPWDB().then(idbProps => {
        if (Array.isArray(idbProps) && idbProps.length > 0) {
            PROPERTIES = syncPropertiesWithDefaults(idbProps);
            window.PROPERTIES = PROPERTIES;
            if (typeof renderProperties === 'function') renderProperties();
            if (typeof updateProgramsShowcase === 'function') updateProgramsShowcase();
        }
    });
}

window.refreshPropertiesFromStorage = async function() {
    const idbProps = await loadFromPWDB();
    if (Array.isArray(idbProps) && idbProps.length > 0) {
        PROPERTIES = syncPropertiesWithDefaults(idbProps);
    } else {
        PROPERTIES = loadProperties();
    }
    window.PROPERTIES = PROPERTIES;
    if (typeof renderProperties === 'function') renderProperties();
    if (typeof updateProgramsShowcase === 'function') updateProgramsShowcase();
};

// --- 2. Render Property Cards in DOM ---
function renderProperties(filterCategory = 'all', filterLocation = 'all', filterBudget = 'all') {
    const grid = document.getElementById('propertiesGrid');
    if (!grid) return;

    let filtered = PROPERTIES.filter(prop => {
        // 1. Critère Catégorie
        if (filterCategory && filterCategory !== 'all') {
            if (filterCategory === 'programme') {
                const isProg = prop.category === 'programme' || 
                               prop.id === 'gloria' || 
                               prop.id === 'victoria' || 
                               (prop.badge && prop.badge.toLowerCase().includes('programme')) ||
                               (prop.badge && prop.badge.toLowerCase().includes('aide'));
                if (!isProg) return false;
            } else if (filterCategory === 'appartement') {
                const isAppart = prop.category === 'appartement' || 
                                 prop.id === 'gloria' || 
                                 prop.id === 'victoria';
                if (!isAppart) return false;
            } else if (prop.category !== filterCategory) {
                return false;
            }
        }

        // 2. Critère Localisation
        if (filterLocation && filterLocation !== 'all') {
            const locKey = filterLocation.toLowerCase();
            const propLoc = (prop.location || '').toLowerCase();
            const propSub = (prop.subtitle || '').toLowerCase();
            const propTitle = (prop.title || '').toLowerCase();
            const matchLoc = propLoc.includes(locKey) || propSub.includes(locKey) || propTitle.includes(locKey);
            if (!matchLoc) return false;
        }

        // 3. Critère Budget Maximum
        if (filterBudget && filterBudget !== 'all') {
            const maxBudget = parseFloat(filterBudget);
            if (!isNaN(maxBudget) && prop.price > maxBudget) {
                return false;
            }
        }

        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-properties-state" style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: rgba(14, 21, 34, 0.6); border: 1px dashed var(--border-gold); border-radius: var(--radius-lg); margin: 20px 0;">
                <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
                <h3 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 20px; margin-bottom: 8px;">Aucun bien ne correspond à ces 3 critères</h3>
                <p style="color: var(--text-secondary); max-width: 520px; margin: 0 auto 20px; font-size: 14px; line-height: 1.6;">
                    Nos conseillers disposent d'opportunités confidentielles en portefeuille "Off-Market". Contactez notre équipe pour une recherche personnalisée.
                </p>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-gold" onclick="resetAllFilters()">✨ Réinitialiser les filtres</button>
                    <a href="https://wa.me/212661060796?text=Bonjour%20plugandworkagency,%20je%20recherche%20un%20bien%20avec%20des%20critères%20précis." target="_blank" class="btn btn-outline-wa">💬 Contacter sur WhatsApp</a>
                </div>
            </div>
        `;
    } else {
        grid.innerHTML = filtered.map(prop => {
            const cover = resolveAsset(prop.images[0]);
            const photoCount = prop.images.length;
            
            return `
                <div class="property-card" data-id="${prop.id}">
                    <div class="prop-media" onclick="openPropertyModal('${prop.id}')" style="cursor: pointer;">
                        <img src="${cover}" alt="${prop.title}" class="prop-img" loading="lazy" onerror="this.src='assets/properties/dar_bouazza/dar_bouazza_1.jpg'">
                        <span class="prop-badge-top ${prop.statusClass || ''}">${prop.badge}</span>
                        <span class="prop-photos-count">📷 ${photoCount} photo${photoCount > 1 ? 's' : ''}</span>
                    </div>
                    <div class="prop-content">
                        <div class="prop-location">📍 ${prop.subtitle}</div>
                        <h3 class="prop-title" onclick="openPropertyModal('${prop.id}')" style="cursor: pointer;">${prop.title}</h3>
                        
                        <div class="prop-features">
                            <span class="prop-feature">📐 ${prop.surfaceHabitable}</span>
                            ${prop.chambres !== '-' ? `<span class="prop-feature">🛏️ ${prop.chambres} Ch.</span>` : ''}
                            ${prop.sdb !== '-' ? `<span class="prop-feature">🚿 ${prop.sdb} SDB</span>` : ''}
                            <span class="prop-feature">🚗 ${prop.garage}</span>
                        </div>

                        <div class="prop-footer">
                            <div>
                                <div class="prop-price-label">Prix Demandé</div>
                                <div class="prop-price">${prop.priceDisplay}</div>
                            </div>
                            <div class="prop-actions flex items-center gap-2">
                                ${prop.id === 'gloria' ? `
                                    <a href="projet-gloria.html#lotsSection" class="px-3 py-1.5 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-xl text-xs font-bold transition shadow-sm">🏢 12 Lots</a>
                                    <button class="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/15 rounded-xl text-xs font-semibold transition" onclick="openPropertyModal('${prop.id}')">Photos</button>
                                ` : `
                                    <button class="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/15 rounded-xl text-xs font-semibold transition" onclick="openPropertyModal('${prop.id}')">Détails</button>
                                    <a href="https://wa.me/212661060796?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20le%20bien%20:%20${encodeURIComponent(prop.title)}%20(${encodeURIComponent(prop.priceDisplay)})" target="_blank" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition shadow-sm" title="WhatsApp">💬 Visite</a>
                                `}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update counts
    const countAll = document.getElementById('countAll');
    if (countAll) countAll.innerText = PROPERTIES.length;
    const countVilla = document.getElementById('countVilla');
    if (countVilla) countVilla.innerText = PROPERTIES.filter(p => p.category === 'villa').length;
    const countApt = document.getElementById('countApt');
    if (countApt) countApt.innerText = PROPERTIES.filter(p => p.category === 'appartement').length;
    const countStudio = document.getElementById('countStudio');
    if (countStudio) countStudio.innerText = PROPERTIES.filter(p => p.category === 'studio').length;
    const countTerrain = document.getElementById('countTerrain');
    if (countTerrain) countTerrain.innerText = PROPERTIES.filter(p => p.category === 'terrain').length;

    // Dynamically update showcase programs (Gloria & Victoria)
    updateProgramsShowcase();
}

function updateProgramsShowcase() {
    // 1. Sync Gloria project
    const gloria = PROPERTIES.find(p => p.id === 'gloria') || 
                   PROPERTIES.find(p => p.title && p.title.toLowerCase().includes('gloria')) ||
                   PROPERTIES.find(p => p.id && p.id.toLowerCase().includes('gloria'));
    if (gloria) {
        const imgEl = document.getElementById('gloriaShowcaseImg');
        const tagEl = document.getElementById('gloriaShowcaseTag');
        const locEl = document.getElementById('gloriaShowcaseLoc');
        const titleEl = document.getElementById('gloriaShowcaseTitle');
        const descEl = document.getElementById('gloriaShowcaseDesc');
        const priceEl = document.getElementById('gloriaShowcasePrice');
        const waEl = document.getElementById('gloriaShowcaseWa');

        if (imgEl && Array.isArray(gloria.images) && gloria.images.length > 0) {
            imgEl.src = resolveAsset(gloria.images[0]);
        }
        if (tagEl && gloria.badge) tagEl.innerText = gloria.badge;
        if (locEl && (gloria.subtitle || gloria.location)) {
            locEl.innerText = '📍 ' + (gloria.subtitle || gloria.location);
        }
        if (titleEl && gloria.title) titleEl.innerText = gloria.title;
        if (descEl && gloria.description) descEl.innerText = gloria.description;
        if (priceEl && gloria.priceDisplay) priceEl.innerText = gloria.priceDisplay;
        if (waEl && gloria.title) {
            waEl.href = `https://wa.me/212661060796?text=${encodeURIComponent('Bonjour, je souhaite la documentation sur le ' + gloria.title)}`;
        }
    }

    // 2. Sync Victoria project
    const victoria = PROPERTIES.find(p => p.id === 'victoria') || 
                     PROPERTIES.find(p => p.title && p.title.toLowerCase().includes('victoria')) ||
                     PROPERTIES.find(p => p.id && p.id.toLowerCase().includes('victoria'));
    if (victoria) {
        const imgEl = document.getElementById('victoriaShowcaseImg');
        const tagEl = document.getElementById('victoriaShowcaseTag');
        const locEl = document.getElementById('victoriaShowcaseLoc');
        const titleEl = document.getElementById('victoriaShowcaseTitle');
        const descEl = document.getElementById('victoriaShowcaseDesc');
        const priceEl = document.getElementById('victoriaShowcasePrice');
        const waEl = document.getElementById('victoriaShowcaseWa');

        if (imgEl && Array.isArray(victoria.images) && victoria.images.length > 0) {
            imgEl.src = resolveAsset(victoria.images[0]);
        }
        if (tagEl && victoria.badge) tagEl.innerText = victoria.badge;
        if (locEl && (victoria.subtitle || victoria.location)) {
            locEl.innerText = '📍 ' + (victoria.subtitle || victoria.location);
        }
        if (titleEl && victoria.title) titleEl.innerText = victoria.title;
        if (descEl && victoria.description) descEl.innerText = victoria.description;
        if (priceEl && victoria.priceDisplay) priceEl.innerText = victoria.priceDisplay;
        if (waEl && victoria.title) {
            waEl.href = `https://wa.me/212661060796?text=${encodeURIComponent('Bonjour, je souhaite des informations sur ' + victoria.title)}`;
        }
    }
}

// Helper HTML Escape
function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// --- 3. Interactive Photo Modal Gallery (Split-View Haute Définition) ---
let modalGalleryImages = [];
let modalGalleryCaptions = [];
let currentGalleryIndex = 0;

function openModal(projectIdOrPropId) {
    let images = [];
    let captions = [];
    let title = "";
    let subtitle = "";
    let badge = "";
    let priceTag = "";
    let description = "";
    let features = [];
    let specsHtml = "";
    let hasCadastreLink = false;
    let waText = "";

    const idStr = String(projectIdOrPropId || '').toLowerCase();

    if (idStr.includes('gloria')) {
        const gloriaDef = (typeof PROPERTIES !== 'undefined' && PROPERTIES.find(p => p.id === 'gloria')) || 
                          DEFAULT_PROPERTIES.find(p => p.id === 'gloria');
        title = "Résidence Gloria 2 — Programme Neuf";
        subtitle = "📍 Casablanca • Oulad Azzouz (Axe Dar Bouazza / Errahma)";
        badge = "🏛️ ÉLIGIBLE AIDE ÉTAT (< 700k DH)";
        priceTag = "Dès 627 200 DH (9 800 DH/m²)";
        description = (gloriaDef && gloriaDef.description) || "Complexe résidentiel et commercial de premier plan. Lots disponibles à 9 800 DH/m². Les appartements F3 de 64 m² (dès 627 200 DH) bénéficient pleinement du dispositif d'aide à l'acquisition. Titres fonciers individuels disponibles, ascenseur et parking titré en sous-sol.";
        features = (gloriaDef && gloriaDef.features) || [
            "Localisation : Casablanca (Oulad Azzouz)",
            "Tarif promoteur fixe : 9 800 DH / m²",
            "Éligible Aide Directe de l'État (< 700k DH)",
            "12 Lots titrés (9 appartements & 3 magasins)",
            "Parking titré au sous-sol & ascenseur",
            "Titres fonciers individuels livrables"
        ];
        hasCadastreLink = true;
        images = (gloriaDef && gloriaDef.images) ? gloriaDef.images : [
            "assets/properties/gloria_residence.jpg",
            "assets/properties/gloria/gloria_real_salon_1.jpg",
            "assets/properties/gloria/gloria_real_cuisine.jpg",
            "assets/properties/gloria/gloria_real_suite_parentale.jpg",
            "assets/properties/gloria/gloria_real_sdb_marbre.jpg",
            "assets/properties/gloria/gloria_real_sdb_cabine.jpg",
            "assets/properties/gloria/gloria_real_chambre_2.jpg",
            "assets/properties/gloria/gloria_real_chambre_3.jpg",
            "assets/properties/gloria/gloria_real_hall.jpg",
            "assets/properties/gloria/gloria_real_couloir.jpg",
            "assets/properties/gloria/gloria_real_chambre_vue.jpg",
            "assets/properties/gloria/gloria_lot_9_apt_64m2_et2.jpg",
            "assets/properties/gloria/gloria_lot_12_apt_64m2_et3.jpg",
            "assets/properties/gloria/gloria_lot_7_apt_86m2_et2.jpg",
            "assets/properties/gloria/gloria_lot_10_apt_86m2_et3.jpg",
            "assets/properties/gloria/gloria_lot_6_apt_87m2_et1.jpg",
            "assets/properties/gloria/gloria_lot_8_apt_96m2_et2.jpg",
            "assets/properties/gloria/gloria_lot_11_apt_96m2_et3.jpg",
            "assets/properties/gloria/gloria_lot_4_apt_97m2_et1.jpg",
            "assets/properties/gloria/gloria_lot_5_apt_108m2_et1.jpg",
            "assets/properties/gloria/gloria_lot_1_magasin_152m2.jpg",
            "assets/properties/gloria/gloria_lot_2_magasin_45m2.jpg",
            "assets/properties/gloria/gloria_lot_3_magasin_174m2.jpg"
        ];
        captions = (gloriaDef && gloriaDef.imageCaptions) ? gloriaDef.imageCaptions : [
            "Façade Contemporaine & Entrée Officielle de la Résidence Gloria 2",
            "Grand Salon de Réception — Marbre & Faux-Plafond LED",
            "Cuisine Contemporaine Entièrement Équipée (Granit & Rangements)",
            "Suite Parentale avec Parquet Noble & Balcon",
            "Salle de Bain Principale — Douche à l'Italienne & Grès Cérame Effet Marbre",
            "Deuxième Salle d'Eau — Cabine en Verre Trempé Sécurit",
            "Chambre à Coucher Secondaire — Parquet & Double Vitrage",
            "Chambre d'Amis / Bureau — Espace Lumineux",
            "Hall d'Entrée & Dégagement Spacieux",
            "Couloir de Distribution avec Portes en Bois Noble",
            "Perspective Chambre avec Baie Vitrée Coulissante & Vue Dégagée",
            "Lot 9 • F3 64 m² (Étage 2) — 627 200 DH 🏛️ ÉLIGIBLE AIDE ÉTAT",
            "Lot 12 • F3 64 m² (Étage 3) — 627 200 DH 🏛️ ÉLIGIBLE AIDE ÉTAT",
            "Lot 7 • Appartement 86 m² (Étage 2) — 842 800 DH",
            "Lot 10 • Appartement 86 m² (Étage 3) — 842 800 DH",
            "Lot 6 • Appartement 87 m² (Étage 1) — 852 600 DH",
            "Lot 8 • Appartement 96 m² (Étage 2) — 940 800 DH",
            "Lot 11 • Appartement 96 m² (Étage 3) — 940 800 DH",
            "Lot 4 • Appartement 97 m² (Étage 1) — 950 600 DH",
            "Lot 5 • Appartement 108 m² (Étage 1) — 1 058 400 DH",
            "Lot 1 • Magasin Commercial 152 m² (Rez-de-chaussée)",
            "Lot 2 • Magasin Commercial 45 m² (Rez-de-chaussée)",
            "Lot 3 • Magasin Commercial 174 m² (Rez-de-chaussée Angle)"
        ];
        specsHtml = `
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Tarif Promoteur</span>
                <span class="font-bold text-white text-xs">9 800 DH / m²</span>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Disponibilités</span>
                <span class="font-bold text-white text-xs">12 Lots Titrés</span>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Aide de l'État</span>
                <span class="font-bold text-[#FF8A5B] text-xs">Jusqu'à 100k DH</span>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Stationnement</span>
                <span class="font-bold text-white text-xs">Parking Titré</span>
            </div>
        `;
        waText = "Bonjour plugandworkagency, je souhaite la documentation et les disponibilités de la Résidence Gloria 2.";
    } else if (idStr.includes('victoria')) {
        const vicDef = (typeof PROPERTIES !== 'undefined' && PROPERTIES.find(p => p.id === 'victoria')) || 
                       DEFAULT_PROPERTIES.find(p => p.id === 'victoria');
        title = "Projet Victoria Square — Bouskoura";
        subtitle = "📍 Casablanca Périphérie Sud • Bouskoura";
        badge = "✨ HAUT STANDING & PRESTIGE";
        priceTag = "Dès 831 300 DH";
        description = (vicDef && vicDef.description) || "Appartements contemporains de 95 m² à 152 m² dotés de superbes terrasses ensoleillées, stationnement titré en sous-sol et finitions nobles pour un cadre de vie familial privilégié.";
        features = (vicDef && vicDef.features) || [
            "Surfaces familiales de 95 à 152 m²",
            "Grandes terrasses ensoleillées de 7 à 36 m²",
            "Stationnement sécurisé titré en sous-sol",
            "Finitions nobles, marbre et menuiserie premium",
            "Fort potentiel de valorisation patrimoniale"
        ];
        images = (vicDef && vicDef.images) ? vicDef.images : [
            "assets/properties/victoria/victoria_crea_1.png",
            "assets/properties/victoria/victoria_photo_1.jpg",
            "assets/properties/victoria/victoria_photo_2.jpg",
            "assets/properties/victoria/victoria_photo_3.jpg",
            "assets/properties/victoria/victoria_photo_4.jpg",
            "assets/properties/victoria/victoria_photo_5.jpg",
            "assets/properties/victoria/victoria_photo_6.jpg",
            "assets/properties/victoria/victoria_photo_7.jpg",
            "assets/properties/victoria/victoria_photo_8.jpg",
            "assets/properties/victoria/victoria_photo_9.jpg",
            "assets/properties/victoria/victoria_photo_10.jpg",
            "assets/properties/victoria/victoria_photo_11.jpg",
            "assets/properties/victoria/victoria_photo_12.jpg",
            "assets/properties/victoria/victoria_photo_13.jpg",
            "assets/properties/victoria/victoria_photo_14.jpg",
            "assets/properties/victoria/victoria_photo_15.jpg"
        ];
        captions = (vicDef && vicDef.imageCaptions) ? vicDef.imageCaptions : [
            "Perspective architecturale de la Résidence Victoria Square",
            "Façades contemporaines & Terrasses plein sud",
            "Grand salon de réception avec sol en marbre",
            "Terrasse aménagée dînatoire sans vis-à-vis",
            "Cuisine moderne intégrée haut de gamme",
            "Suite parentale avec dressing sur mesure",
            "Salle de bain contemporaine avec douche à l'italienne",
            "Chambre d'enfants / invités baignée de lumière",
            "Espaces communs et hall de standing",
            "Stationnement sécurisé titré en sous-sol",
            "Finitions nobles et menuiserie aluminium premium",
            "Double salon ouvert et espace salle à manger",
            "Balcons ensoleillés avec vue dégagée",
            "Prestations acoustiques et thermiques soignées",
            "Chambre secondaire avec placards intégrés",
            "Cadre verdoyant et calme à Bouskoura"
        ];
        specsHtml = `
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Surfaces</span>
                <span class="font-bold text-white text-xs">95 à 152 m²</span>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Terrasses</span>
                <span class="font-bold text-white text-xs">7 à 36 m²</span>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Stationnement</span>
                <span class="font-bold text-white text-xs">Sous-sol Titré</span>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                <span class="text-slate-400 block text-[11px] uppercase tracking-wider">Finitions</span>
                <span class="font-bold text-white text-xs">Marbre & Boiseries</span>
            </div>
        `;
        waText = "Bonjour plugandworkagency, je souhaite la plaquette officielle de Victoria Square.";
    } else {
        const prop = (typeof PROPERTIES !== 'undefined' && (
                         PROPERTIES.find(p => p.id === projectIdOrPropId) ||
                         PROPERTIES.find(p => p.id && idStr === p.id.toLowerCase()) ||
                         PROPERTIES.find(p => p.id && idStr.includes(p.id.toLowerCase())) ||
                         PROPERTIES.find(p => p.id && p.id.toLowerCase().includes(idStr)) ||
                         PROPERTIES.find(p => p.title && p.title.toLowerCase().includes(idStr))
                     )) || DEFAULT_PROPERTIES.find(p => p.id === projectIdOrPropId);

        if (prop) {
            title = prop.title;
            subtitle = "📍 " + (prop.subtitle || prop.location || 'Casablanca');
            badge = prop.badge || "IMMOBILIER DE PRESTIGE";
            priceTag = prop.priceDisplay || '';
            description = prop.description || '';
            features = prop.features || [];
            images = (Array.isArray(prop.images) && prop.images.length > 0) ? prop.images.map(resolveAsset) : ["assets/properties/dar_bouazza/dar_bouazza_1.jpg"];
            captions = (Array.isArray(prop.imageCaptions) && prop.imageCaptions.length === images.length) ? prop.imageCaptions : images.map((_, i) => `${prop.title} — Photo ${i + 1}`);

            let specs = [];
            if (prop.surfaceHabitable) specs.push({ label: "Habitable", val: prop.surfaceHabitable });
            if (prop.surfaceTerrain) specs.push({ label: "Terrain / Ext.", val: prop.surfaceTerrain });
            if (prop.chambres && prop.chambres !== '-') specs.push({ label: "Chambres", val: `${prop.chambres} Ch.` });
            if (prop.sdb && prop.sdb !== '-') specs.push({ label: "Salles de bain", val: `${prop.sdb} SDB` });
            if (prop.garage && prop.garage !== '-') specs.push({ label: "Parking", val: prop.garage });

            specsHtml = specs.map(s => `
                <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5">
                    <span class="text-slate-400 block text-[11px] uppercase tracking-wider">${s.label}</span>
                    <span class="font-bold text-white text-xs">${s.val}</span>
                </div>
            `).join('');

            waText = `Bonjour plugandworkagency, je souhaite des informations et une visite pour le bien : ${prop.title} (${prop.priceDisplay || ''}).`;
        }
    }

    if (!images || images.length === 0) return;

    modalGalleryImages = images.map(resolveAsset);
    modalGalleryCaptions = captions;
    currentGalleryIndex = 0;

    const modal = document.getElementById('photoModal');
    if (!modal) return;

    // Header info & Details
    const titleEl = document.getElementById('modalTitle');
    const subtitleEl = document.getElementById('modalSubtitle');
    const badgeEl = document.getElementById('modalBadge');
    const topBadgeEl = document.getElementById('modalTopBadge');
    const priceEl = document.getElementById('modalPriceTag');
    const photoCounterEl = document.getElementById('modalPhotoCounter');
    const counterEl = document.getElementById('imageCounter');
    const specsEl = document.getElementById('modalQuickSpecs');
    const descEl = document.getElementById('modalDescription');
    const featListEl = document.getElementById('modalFeaturesList');
    const featWrapEl = document.getElementById('modalFeaturesWrapper');
    const cadastreEl = document.getElementById('modalCadastreLink');
    const waBtn = document.getElementById('modalWhatsAppBtn');
    const callBtn = document.getElementById('modalCallBtn');

    if (titleEl) titleEl.innerText = title;
    if (subtitleEl) subtitleEl.innerText = subtitle;
    if (badgeEl) badgeEl.innerText = badge;
    if (topBadgeEl) topBadgeEl.innerText = badge;
    if (priceEl) priceEl.innerText = priceTag;
    if (photoCounterEl) photoCounterEl.innerText = `1 / ${modalGalleryImages.length} Photos`;
    if (counterEl) counterEl.innerText = `1 / ${modalGalleryImages.length}`;
    if (specsEl) specsEl.innerHTML = specsHtml;
    if (descEl) descEl.innerText = description;

    if (featListEl) {
        if (Array.isArray(features) && features.length > 0) {
            featListEl.innerHTML = features.map(f => `
                <span class="inline-flex items-center gap-1 bg-white/[0.05] border border-white/10 text-slate-200 px-2.5 py-1 rounded-lg text-[11.5px]">
                    <span class="text-[#FF8A5B]">✓</span> ${escapeHtml(f)}
                </span>
            `).join('');
            if (featWrapEl) featWrapEl.classList.remove('hidden');
        } else {
            if (featWrapEl) featWrapEl.classList.add('hidden');
        }
    }

    if (cadastreEl) {
        if (hasCadastreLink) cadastreEl.classList.remove('hidden');
        else cadastreEl.classList.add('hidden');
    }

    if (waBtn) {
        waBtn.href = `https://wa.me/212661060796?text=${encodeURIComponent(waText)}`;
    }
    if (callBtn) {
        callBtn.href = "tel:+212661060796";
    }

    // Thumbnails Strip
    const stripEl = document.getElementById('modalThumbnailsStrip');
    if (stripEl) {
        stripEl.innerHTML = modalGalleryImages.map((img, idx) => `
            <div id="thumbItem-${idx}" onclick="selectGalleryImage(${idx})" class="thumb-item flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${idx === 0 ? 'thumb-active' : 'thumb-inactive'}" title="${escapeHtml(modalGalleryCaptions[idx] || `Photo ${idx + 1}`)}">
                <img src="${img}" alt="Miniature ${idx + 1}" class="w-full h-full object-cover">
            </div>
        `).join('');
    }

    updateGalleryImage();

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.setProperty('display', 'flex', 'important');
    document.body.style.overflow = 'hidden';
}

function updateGalleryImage() {
    if (!modalGalleryImages || modalGalleryImages.length === 0) return;
    const imgEl = document.getElementById('modalMainImage');
    const photoCounterEl = document.getElementById('modalPhotoCounter');
    const counterEl = document.getElementById('imageCounter');
    const captionEl = document.getElementById('modalImageCaption');

    if (imgEl) {
        imgEl.src = modalGalleryImages[currentGalleryIndex];
    }
    const countStr = `${currentGalleryIndex + 1} / ${modalGalleryImages.length} Photos`;
    if (photoCounterEl) {
        photoCounterEl.innerText = countStr;
    }
    if (counterEl) {
        counterEl.innerText = `${currentGalleryIndex + 1} / ${modalGalleryImages.length}`;
    }
    if (captionEl) {
        captionEl.innerText = modalGalleryCaptions[currentGalleryIndex] || `Photo ${currentGalleryIndex + 1}`;
    }

    // Highlight active thumbnail
    const thumbs = document.querySelectorAll('#modalThumbnailsStrip .thumb-item');
    thumbs.forEach((th, idx) => {
        if (idx === currentGalleryIndex) {
            th.classList.remove('thumb-inactive');
            th.classList.add('thumb-active');
            th.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            th.classList.remove('thumb-active');
            th.classList.add('thumb-inactive');
        }
    });
}

function selectGalleryImage(idx) {
    if (idx < 0 || idx >= modalGalleryImages.length) return;
    currentGalleryIndex = idx;
    updateGalleryImage();
}

function selectGalleryImageAndDiaporama(idx) {
    selectGalleryImage(idx);
    switchGalleryView('diaporama');
}

function prevImage() {
    if (modalGalleryImages.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + modalGalleryImages.length) % modalGalleryImages.length;
    updateGalleryImage();
}

function nextImage() {
    if (modalGalleryImages.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % modalGalleryImages.length;
    updateGalleryImage();
}

function switchGalleryView(mode) {
    currentGalleryView = mode;
    const diaporamaView = document.getElementById('galleryDiaporamaView');
    const gridView = document.getElementById('galleryGridView');
    const btnDiaporama = document.getElementById('btnViewDiaporama');
    const btnGrid = document.getElementById('btnViewGrid');

    if (mode === 'grid') {
        if (diaporamaView) {
            diaporamaView.classList.remove('flex');
            diaporamaView.classList.add('hidden');
            diaporamaView.style.setProperty('display', 'none', 'important');
        }
        if (gridView) {
            gridView.classList.remove('hidden');
            gridView.classList.add('block');
            gridView.style.setProperty('display', 'block', 'important');
        }
        if (btnDiaporama) {
            btnDiaporama.classList.remove('bg-blue-600', 'text-white');
            btnDiaporama.classList.add('text-slate-300');
        }
        if (btnGrid) {
            btnGrid.classList.add('bg-blue-600', 'text-white');
            btnGrid.classList.remove('text-slate-300');
        }
    } else {
        if (diaporamaView) {
            diaporamaView.classList.remove('hidden');
            diaporamaView.classList.add('flex');
            diaporamaView.style.setProperty('display', 'flex', 'important');
        }
        if (gridView) {
            gridView.classList.remove('block');
            gridView.classList.add('hidden');
            gridView.style.setProperty('display', 'none', 'important');
        }
        if (btnDiaporama) {
            btnDiaporama.classList.add('bg-blue-600', 'text-white');
            btnDiaporama.classList.remove('text-slate-300');
        }
        if (btnGrid) {
            btnGrid.classList.remove('bg-blue-600', 'text-white');
            btnGrid.classList.add('text-slate-300');
        }
    }
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.style.setProperty('display', 'none', 'important');
        document.body.style.overflow = '';
    }
}

// Global Aliases & Modal Listeners
window.openModal = openModal;
window.openPhotoModal = openModal;
window.openPropertyModal = openModal;
window.closeModal = closeModal;
window.closePropertyModal = closeModal;
window.prevImage = prevImage;
window.nextImage = nextImage;
window.selectGalleryImage = selectGalleryImage;
window.selectGalleryImageAndDiaporama = selectGalleryImageAndDiaporama;
window.switchGalleryView = switchGalleryView;

// Click outside on backdrop & Keyboard navigation
document.addEventListener('click', (e) => {
    const modal = document.getElementById('photoModal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('photoModal');
    if (!modal || modal.classList.contains('hidden') || modal.style.display === 'none') return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'g' || e.key === 'G') {
        switchGalleryView(currentGalleryView === 'diaporama' ? 'grid' : 'diaporama');
    }
});

// --- 4. Interactive Mortgage Simulator ---
function initMortgageSimulator() {
    const pInput = document.getElementById('input-prix') || document.getElementById('inputPrice');
    const aInput = document.getElementById('input-apport') || document.getElementById('inputDown');
    const dInput = document.getElementById('input-duree') || document.getElementById('inputDuration');
    const tInput = document.getElementById('input-taux') || document.getElementById('inputRate');

    if (!pInput || !aInput || !dInput || !tInput) return;

    function formatDH(num) {
        return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function calculateCredit() {
        let prix = parseFloat(pInput.value) || 1250000;
        let apport = parseFloat(aInput.value) || 0;

        // Si apport est en % (legacy), convertir
        const isPercent = aInput.max <= 100;
        let apportMontant = isPercent ? (prix * (apport / 100)) : apport;

        // Sécurité si apport >= prix
        if (apportMontant >= prix) {
            apportMontant = prix - 50000;
            if (!isPercent) aInput.value = apportMontant;
        }

        let emprunt = prix - apportMontant;
        let annees = parseInt(dInput.value) || 20;
        let mois = annees * 12;
        let tauxAnnuel = parseFloat(tInput.value) || 4.5;
        let tauxMensuel = (tauxAnnuel / 100) / 12;

        // Mise à jour des labels UI
        const valPrix = document.getElementById('val-prix') || document.getElementById('valPrice');
        if (valPrix) valPrix.innerText = formatDH(prix);

        const valApport = document.getElementById('val-apport') || document.getElementById('valDownAmount');
        if (valApport) valApport.innerText = formatDH(apportMontant);

        const valDuree = document.getElementById('val-duree') || document.getElementById('valDuration');
        if (valDuree) valDuree.innerText = annees;

        const valMois = document.getElementById('val-mois');
        if (valMois) valMois.innerText = mois;

        const valTaux = document.getElementById('val-taux') || document.getElementById('valRate');
        if (valTaux) valTaux.innerText = tauxAnnuel.toFixed(2);

        // Calcul de la mensualité
        let mensualite = 0;
        if (tauxMensuel > 0) {
            mensualite = (emprunt * tauxMensuel * Math.pow(1 + tauxMensuel, mois)) / (Math.pow(1 + tauxMensuel, mois) - 1);
        } else {
            mensualite = emprunt / mois;
        }

        let totalCredit = mensualite * mois;
        let salaireRecommande = mensualite * 3.3; // Règle usuelle ~33%

        // Affichage des résultats
        const resMens = document.getElementById('res-mensualite') || document.getElementById('resultMonthly');
        if (resMens) resMens.innerText = formatDH(Math.round(mensualite));

        const resEmp = document.getElementById('res-emprunt') || document.getElementById('resultLoan');
        if (resEmp) resEmp.innerText = formatDH(emprunt) + " DH";

        const resTot = document.getElementById('res-total') || document.getElementById('resultTotalCost');
        if (resTot) resTot.innerText = formatDH(Math.round(totalCredit)) + " DH";

        const resSal = document.getElementById('res-salaire') || document.getElementById('resultSalary');
        if (resSal) resSal.innerText = formatDH(Math.round(salaireRecommande)) + " DH/mois";

        // Mise à jour dynamique du lien WhatsApp
        const btnValider = document.getElementById('btn-valider-financement');
        if (btnValider) {
            const msg = "Bonjour plugandworkagency, suite à ma simulation sur votre site :\n" +
                "- Prix du bien : " + formatDH(prix) + " DH\n" +
                "- Apport : " + formatDH(apportMontant) + " DH\n" +
                "- Emprunt : " + formatDH(emprunt) + " DH sur " + annees + " ans (" + tauxAnnuel.toFixed(2) + "%)\n" +
                "- Mensualité estimée : " + formatDH(Math.round(mensualite)) + " DH/mois\n" +
                "Je souhaite valider mon plan de financement.";
            btnValider.href = "https://wa.me/212661060796?text=" + encodeURIComponent(msg);
        }
    }

    [pInput, aInput, dInput, tInput].forEach(input => {
        input.addEventListener('input', calculateCredit);
    });

    calculateCredit();
}

// --- 5. Mobile Navigation & Drawer Handlers ---
function initMobileNavigation() {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openDrawer() {
        if (mobileDrawer) mobileDrawer.classList.add('open');
        if (drawerBackdrop) drawerBackdrop.classList.add('active');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (drawerBackdrop) drawerBackdrop.classList.remove('active');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
            closeDrawer();
        }
    });
}

// --- 6. Clipboard Copy for Captions & Toasts ---
function copyCaption(id) {
    const el = document.getElementById(`cap${id}`);
    if (!el) {
        showToast("Légende non disponible");
        return;
    }

    const text = el.innerText || el.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast("✨ Légende et hashtags copiés avec succès !");
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast("✨ Légende et hashtags copiés avec succès !");
    } catch (err) {
        console.error("Erreur copie", err);
    }
    document.body.removeChild(textarea);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// --- 7. Search Form & Tabs Filter Trigger (3 Critères Réactifs) ---
function applySearchFilters(scroll = false) {
    const filterLoc = document.getElementById('filterLocation');
    const filterCat = document.getElementById('filterCategory');
    const filterBud = document.getElementById('filterBudget');

    const locVal = filterLoc ? filterLoc.value : 'all';
    const catVal = filterCat ? filterCat.value : 'all';
    const budVal = filterBud ? filterBud.value : 'all';

    // Synchronisation active des onglets Hero
    document.querySelectorAll('.search-tab').forEach(tab => {
        const type = tab.getAttribute('data-type');
        tab.classList.toggle('active', type === catVal);
    });

    // Synchronisation active des pilules Catalogue
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        btn.classList.toggle('active', filter === catVal);
    });

    renderProperties(catVal, locVal, budVal);

    if (scroll) {
        const biensSection = document.getElementById('biens');
        if (biensSection) biensSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function resetAllFilters() {
    const filterLoc = document.getElementById('filterLocation');
    const filterCat = document.getElementById('filterCategory');
    const filterBud = document.getElementById('filterBudget');

    if (filterLoc) filterLoc.value = 'all';
    if (filterCat) filterCat.value = 'all';
    if (filterBud) filterBud.value = 'all';

    applySearchFilters(true);
}
window.resetAllFilters = resetAllFilters;

function initSearchFilters() {
    const btnFilter = document.getElementById('btnFilterTrigger') || document.getElementById('btnExploreCatalogue');
    const filterLoc = document.getElementById('filterLocation') || document.getElementById('searchLoc');
    const filterCat = document.getElementById('filterCategory') || document.getElementById('searchType');
    const filterBud = document.getElementById('filterBudget');

    // Hero Search Trigger
    if (btnFilter) {
        btnFilter.addEventListener('click', (e) => {
            const locVal = filterLoc ? filterLoc.value : 'all';
            const catVal = filterCat ? filterCat.value : 'all';
            const budVal = filterBud ? filterBud.value : 'all';

            // Mettre à jour les boutons pilules
            document.querySelectorAll('.filter-btn').forEach(btn => {
                const filter = btn.getAttribute('data-filter');
                const isMatch = filter === catVal;
                btn.classList.toggle('active', isMatch);
                if (isMatch) {
                    btn.classList.add('bg-[#0066FF]', 'text-white', 'shadow-[0_0_15px_rgba(0,102,255,0.4)]');
                    btn.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
                } else {
                    btn.classList.remove('bg-[#0066FF]', 'text-white', 'shadow-[0_0_15px_rgba(0,102,255,0.4)]');
                    btn.classList.add('bg-white/5', 'text-slate-300', 'border', 'border-white/10');
                }
            });

            renderProperties(catVal, locVal, budVal);

            const biensSection = document.getElementById('biens');
            if (biensSection) biensSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Filtres pilules de la section Catalogue
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-[#0066FF]', 'text-white', 'shadow-[0_0_15px_rgba(0,102,255,0.4)]');
                b.classList.add('bg-white/5', 'text-slate-300', 'border', 'border-white/10');
            });
            btn.classList.add('active', 'bg-[#0066FF]', 'text-white', 'shadow-[0_0_15px_rgba(0,102,255,0.4)]');
            btn.classList.remove('bg-white/5', 'text-slate-300', 'border-white/10');
            const filter = btn.getAttribute('data-filter') || 'all';
            renderProperties(filter, 'all', 'all');
        });
    });

    // Réactivité immédiate au changement des listes déroulantes
    [filterLoc, filterCat, filterBud].forEach(select => {
        if (select) {
            select.addEventListener('change', () => {
                const locVal = filterLoc ? filterLoc.value : 'all';
                const catVal = filterCat ? filterCat.value : 'all';
                renderProperties(catVal, locVal, 'all');
            });
        }
    });
}

// --- 8. Tab Panes for Instagram Studio ---
function initInstaTabs() {
    const tabs = document.querySelectorAll('.insta-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetPane = tab.getAttribute('data-tab');
            document.querySelectorAll('.insta-tab-pane').forEach(p => p.classList.remove('active'));
            const pane = document.getElementById(`pane-${targetPane}`);
            if (pane) pane.classList.add('active');
        });
    });
}

// --- 9. Estimation Form Submission (Message WhatsApp Exhaustif & Structuré) ---
function initEstimationForm() {
    const form = document.getElementById('formEstimation');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (document.getElementById('estNom') || document.getElementById('estName'))?.value.trim() || '';
        const phone = (document.getElementById('estTel') || document.getElementById('estPhone'))?.value.trim() || '';
        const type = (document.getElementById('estTypeBien') || document.getElementById('estType'))?.value.trim() || 'Non spécifié';
        const city = (document.getElementById('estLocalisation') || document.getElementById('estCity'))?.value.trim() || '';
        const surface = document.getElementById('estSurface')?.value.trim() || '';
        const price = document.getElementById('estPrice')?.value.trim() || '';
        const details = document.getElementById('estDetails')?.value.trim() || '';

        if (!name || !phone) {
            alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
            return;
        }

        const lines = [
            "✨ *DEMANDE D'ESTIMATION IMMOBILIÈRE*",
            "Agence plugandworkagency — Casablanca",
            "━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "👤 *Client :* " + name,
            "📞 *Téléphone :* " + phone,
            "🏠 *Type de bien :* " + type,
            "📍 *Ville / Secteur :* " + (city || 'Casablanca'),
            surface ? ("📐 *Superficie :* " + surface + " m²") : null,
            price ? ("💰 *Prix souhaité :* " + price) : null,
            details ? ("📝 *Détails :* " + details) : null,
            "━━━━━━━━━━━━━━━━━━━━━━━━━━",
            "💬 *Demande transmise depuis plugandworkagency*"
        ].filter(Boolean);

        const waText = encodeURIComponent(lines.join("\n"));
        window.open("https://wa.me/212661060796?text=" + waText, '_blank');
        showToast("✨ Demande transmise avec succès ! Notre expert vous contacte sous 24h.");
        form.reset();
    });
}

// --- 10. Modal Listeners ---
function initModalListeners() {
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');
    if (modalClose) modalClose.addEventListener('click', closePropertyModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closePropertyModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePropertyModal();
    });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    renderProperties();
    initSearchFilters();
    initMortgageSimulator();
    initInstaTabs();
    initEstimationForm();
    initMobileNavigation();
    initModalListeners();
});
