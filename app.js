/**
 * PLUG AND WORK AGENCY — JAVASCRIPT APPLICATION
 * Interactive Real Estate & Instagram Studio
 */

// --- 1. Property Database (Real Data) ---
const PROPERTIES = [
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
        ]
    },
    {
        id: "ain_diab",
        category: "villa",
        title: "Villa de Maître d'Exception",
        subtitle: "Aïn Diab / Anfa, Casablanca • Adresse Rare",
        location: "Aïn Diab",
        badge: "🔴 DÉJÀ VENDU • EXCLUSIVITÉ PW",
        statusClass: "badge-sold",
        price: 9500000,
        priceDisplay: "DÉJÀ VENDU (9 500 000 DH)",
        surfaceHabitable: "480 m²",
        surfaceTerrain: "650 m²",
        chambres: 5,
        sdb: 4,
        garage: "3 Véhicules",
        description: "Propriété d'exception située dans l'enclave la plus prestigieuse d'Aïn Diab, à proximité immédiate de la Corniche et du Morocco Mall. Vendue avec succès par Plug and Work Agency en exclusivité. Vous possédez un bien d'exception à Aïn Diab ou Anfa et souhaitez le vendre au meilleur prix ? Contactez notre directeur d'agence.",
        features: ["Vendu avec succès par Plug & Work", "Triple réception", "Grand jardin arboré", "Marbre et boiseries", "Mandat exclusif réussi"],
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
        ]
    },
    {
        id: "cfc_studio",
        category: "studio",
        title: "Studio Haut Standing Neuf",
        subtitle: "Casablanca Finance City (CFC) • Tour Prestige",
        location: "CFC",
        badge: "🟢 DÉJÀ LOUÉ EN 48H",
        statusClass: "badge-rented",
        price: 1250000,
        priceDisplay: "DÉJÀ LOUÉ (7 500 DH / mois)",
        surfaceHabitable: "50 m²",
        surfaceTerrain: "50 m²",
        chambres: 1,
        sdb: 1,
        garage: "1 Place titrée",
        description: "Studio neuf loué en un temps record (48 heures) par Plug and Work Agency à Casablanca Finance City (CFC). Locataire qualifié avec garanties solides. Propriétaires à CFC : confiez-nous la gestion locative de votre studio ou appartement pour une rentabilité maximale sans vacance locative.",
        features: ["Loué en 48 heures par Plug & Work", "Sécurité & Conciergerie 24/7", "Loyer : 7 500 DH / mois", "Rentabilité locative brute 7.5%"],
        images: [
            "assets/properties/cfc_studio/studio_cfc_1.jpg",
            "assets/properties/cfc_studio/studio_cfc_2.jpg",
            "assets/properties/cfc_studio/studio_cfc_3.jpg",
            "assets/properties/cfc_studio/studio_cfc_4.jpg",
            "assets/properties/cfc_studio/studio_cfc_5.jpg",
            "assets/properties/cfc_studio/studio_cfc_6.jpg",
            "assets/properties/cfc_studio/studio_cfc_7.jpg",
            "assets/properties/cfc_studio/studio_cfc_8.jpg"
        ]
    },
    {
        id: "gloria",
        category: "appartement",
        title: "Résidence Gloria 2 — Programme Neuf",
        subtitle: "Socobet du Nord, Tétouan • Éligible Subvention",
        location: "Tétouan",
        badge: "Éligible Aide Directe au Logement",
        price: 640000,
        priceDisplay: "Dès 640 000 DH",
        surfaceHabitable: "65 à 108 m²",
        surfaceTerrain: "Cours jusqu'à 25 m²",
        chambres: "2 ou 3",
        sdb: 2,
        garage: "Parking privé",
        description: "Programme neuf de standing commercialisé par Plug and Work Agency. Façade contemporaine avec bureau de vente sur site. Appartements F3 et F4 de 65 m² à 108 m² avec finitions soignées, cuisines américaines et cours privatives jusqu'à 25 m². Appartement de 90 m² au 1er étage avec cour de 25 m² proposé à 700 000 DH (éligible à l'Aide Directe de l'État). Appartements 3 chambres de 96 m² à 940 000 DH.",
        features: ["Façade contemporaine & Bureau de vente", "Éligible subvention étatique (ex: 90m² à 700 000 DH)", "Cuisines américaines modernes", "Ascenseur & parking sécurisé", "Livraison immédiate / titres prêts", "Proche commodités et mer"],
        images: [
            "assets/properties/gloria/gloria_1.jpg",
            "assets/properties/gloria/gloria_2.jpg"
        ]
    },
    {
        id: "victoria",
        category: "appartement",
        title: "Résidence Victoria Square",
        subtitle: "Casablanca • Commercialisation Plug & Work",
        location: "Casablanca Centre",
        badge: "Finitions Standing • Terrasses",
        price: 831300,
        priceDisplay: "Dès 831 300 DH",
        surfaceHabitable: "95 à 152 m²",
        surfaceTerrain: "Terrasses 7 à 36 m²",
        chambres: "2 à 4",
        sdb: 2,
        garage: "Sous-sol titré",
        description: "Programme contemporain d'envergure commercialisé par Plug and Work Agency. Appartements familiaux aux surfaces généreuses allant de 95 m² à 152 m² avec grandes terrasses ensoleillées, parking en sous-sol et finitions nobles. Retrouvez l'intégralité des créations graphiques et photos du projet ci-dessous.",
        features: ["Créas & Campagnes exclusives Plug & Work", "Grandes terrasses plein sud", "Places de garage sécurisées en sous-sol", "Espaces optimisés", "Isolation phonique & thermique", "Facilités de paiement"],
        images: [
            "assets/properties/victoria/victoria_crea_1.png",
            "assets/properties/victoria/victoria_crea_2.png",
            "assets/properties/victoria/victoria_crea_3.png",
            "assets/properties/victoria/victoria_crea_4.png",
            "assets/properties/victoria/victoria_crea_5.png",
            "assets/properties/victoria/victoria_crea_6.png",
            "assets/properties/victoria/victoria_crea_7.png",
            "assets/properties/victoria/victoria_crea_8.png",
            "assets/properties/victoria/victoria_crea_9.png",
            "assets/properties/victoria/victoria_crea_10.png",
            "assets/properties/victoria/victoria_photo_1.jpg",
            "assets/properties/victoria/victoria_photo_2.jpg",
            "assets/properties/victoria/victoria_photo_3.jpg",
            "assets/properties/victoria/victoria_photo_4.jpg",
            "assets/properties/victoria/victoria_photo_5.jpg"
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
        description: "Portefeuille d'opportunités foncières pour promoteurs immobiliers sous compromis de vente par Plug and Work Agency. Promoteurs : confiez-nous la recherche et la commercialisation de vos futures opérations.",
        features: ["Sous compromis par Plug & Work", "Zonages urbanistiques vérifiés", "Titres fonciers sains", "Proximité axes majeurs"],
        images: [
            "assets/properties/terrain_ibnou_sina.png"
        ]
    }
];

// --- 2. Render Property Cards in DOM ---
function renderProperties(filterCategory = 'all') {
    const grid = document.getElementById('propertiesGrid');
    if (!grid) return;

    let filtered = PROPERTIES;
    if (filterCategory !== 'all') {
        filtered = PROPERTIES.filter(p => p.category === filterCategory);
    }

    grid.innerHTML = filtered.map(prop => {
        const cover = prop.images[0] || 'assets/images/plug_and_work_square_full.png';
        const photoCount = prop.images.length;
        
        return `
            <div class="property-card" data-id="${prop.id}">
                <div class="prop-media" onclick="openPropertyModal('${prop.id}')" style="cursor: pointer;">
                    <img src="${cover}" alt="${prop.title}" class="prop-img" loading="lazy">
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
                        <div class="prop-actions">
                            <button class="btn btn-sm btn-outline" onclick="openPropertyModal('${prop.id}')">Détails</button>
                            <a href="https://wa.me/212661060796?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20le%20bien%20:%20${encodeURIComponent(prop.title)}%20(${encodeURIComponent(prop.priceDisplay)})" target="_blank" class="btn btn-sm btn-outline-wa" title="WhatsApp">💬 Visite</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

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
}

// --- 3. Property Modal & Gallery Slider ---
let currentModalProp = null;
let currentModalImageIndex = 0;

function openPropertyModal(propId) {
    const prop = PROPERTIES.find(p => p.id === propId);
    if (!prop) return;

    currentModalProp = prop;
    currentModalImageIndex = 0;

    const modal = document.getElementById('propertyModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
        <div class="modal-gallery">
            <img src="${prop.images[0]}" alt="${prop.title}" class="modal-gallery-main" id="modalMainImg">
            ${prop.images.length > 1 ? `
                <button class="gallery-nav gallery-prev" onclick="changeModalImage(-1)">‹</button>
                <button class="gallery-nav gallery-next" onclick="changeModalImage(1)">›</button>
            ` : ''}
        </div>
        ${prop.images.length > 1 ? `
            <div class="gallery-thumbs" id="galleryThumbs">
                ${prop.images.map((img, idx) => `
                    <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="setModalImage(${idx})">
                        <img src="${img}" alt="Thumbnail">
                    </div>
                `).join('')}
            </div>
        ` : ''}

        <div class="modal-body">
            <div class="modal-header-info">
                <div>
                    <span class="section-tag">${prop.badge}</span>
                    <h2 class="modal-title">${prop.title}</h2>
                    <p style="color: #94A3B8; font-size: 14px;">📍 ${prop.subtitle}</p>
                </div>
                <div class="text-right">
                    <span style="font-size: 11px; text-transform: uppercase; color: #64748B;">Prix</span>
                    <div class="modal-price">${prop.priceDisplay}</div>
                </div>
            </div>

            <div class="modal-specs-grid">
                <div class="spec-item">
                    <span>Superficie Habitable :</span>
                    <strong>${prop.surfaceHabitable}</strong>
                </div>
                <div class="spec-item">
                    <span>Superficie Terrain / Cour :</span>
                    <strong>${prop.surfaceTerrain}</strong>
                </div>
                <div class="spec-item">
                    <span>Chambres :</span>
                    <strong>${prop.chambres}</strong>
                </div>
                <div class="spec-item">
                    <span>Stationnement :</span>
                    <strong>${prop.garage}</strong>
                </div>
            </div>

            <div class="modal-description">
                <h4 style="color: #FFF; margin-bottom: 8px;">Description du Bien</h4>
                <p>${prop.description}</p>
            </div>

            <div style="margin-bottom: 24px;">
                <h4 style="color: #FFF; margin-bottom: 10px;">Points Forts & Équipements</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${prop.features.map(f => `
                        <span style="background: #1E293B; color: #E2E8F0; font-size: 12px; padding: 6px 12px; border-radius: 6px;">✓ ${f}</span>
                    `).join('')}
                </div>
            </div>

            <div class="modal-contact-actions">
                <a href="https://wa.me/212661060796?text=Bonjour%20Plug%20and%20Work%20Agency,%20je%20souhaite%20planifier%20une%20visite%20pour%20:%20${encodeURIComponent(prop.title)}%20au%20prix%20de%20${encodeURIComponent(prop.priceDisplay)}" target="_blank" class="btn btn-gold btn-block" style="flex: 1.4;">
                    💬 Planifier une Visite sur WhatsApp
                </a>
                <a href="tel:0661060796" class="btn btn-outline" style="flex: 1;">
                    📞 Appeler 06 61 06 07 96
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeModalImage(delta) {
    if (!currentModalProp || currentModalProp.images.length <= 1) return;
    const len = currentModalProp.images.length;
    currentModalImageIndex = (currentModalImageIndex + delta + len) % len;
    updateModalImage();
}

function setModalImage(idx) {
    currentModalImageIndex = idx;
    updateModalImage();
}

function updateModalImage() {
    const mainImg = document.getElementById('modalMainImg');
    if (mainImg && currentModalProp) {
        mainImg.src = currentModalProp.images[currentModalImageIndex];
    }
    const thumbs = document.querySelectorAll('.thumb-item');
    thumbs.forEach((th, idx) => {
        if (idx === currentModalImageIndex) th.classList.add('active');
        else th.classList.remove('active');
    });
}

// --- 4. Interactive Mortgage Calculator ---
function initMortgageSimulator() {
    const inputPrice = document.getElementById('inputPrice');
    const inputDown = document.getElementById('inputDown');
    const inputDuration = document.getElementById('inputDuration');
    const inputRate = document.getElementById('inputRate');

    if (!inputPrice) return;

    function formatDH(num) {
        return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " DH";
    }

    function calculate() {
        const price = parseFloat(inputPrice.value);
        const downPercent = parseFloat(inputDown.value);
        const durationYears = parseInt(inputDuration.value);
        const annualRate = parseFloat(inputRate.value) / 100;

        const downAmount = price * (downPercent / 100);
        const loanAmount = price - downAmount;
        const totalMonths = durationYears * 12;
        const monthlyRate = annualRate / 12;

        let monthlyPayment = 0;
        if (monthlyRate > 0) {
            monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        } else {
            monthlyPayment = loanAmount / totalMonths;
        }

        const totalCost = (monthlyPayment * totalMonths) + downAmount;
        const recommendedSalary = monthlyPayment / 0.45; // 45% debt ratio

        // Update labels
        document.getElementById('valPrice').innerText = formatDH(price);
        document.getElementById('valDownPercent').innerText = downPercent + "%";
        document.getElementById('valDownAmount').innerText = formatDH(downAmount);
        document.getElementById('valDuration').innerText = `${durationYears} Ans (${totalMonths} mois)`;
        document.getElementById('valRate').innerText = (annualRate * 100).toFixed(2) + " %";

        document.getElementById('resultMonthly').innerHTML = `${formatDH(monthlyPayment)} <span class="per-month">/ mois</span>`;
        document.getElementById('resultLoan').innerText = formatDH(loanAmount);
        document.getElementById('resultTotalCost').innerText = formatDH(totalCost);
        document.getElementById('resultSalary').innerText = formatDH(recommendedSalary) + "/mois";
    }

    [inputPrice, inputDown, inputDuration, inputRate].forEach(input => {
        input.addEventListener('input', calculate);
    });

    calculate();
}

// --- 5. Interactive Instagram Canvas Generator ---
let canvasImageCache = {};

function initInstagramStudio() {
    const canvas = document.getElementById('instaCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const genFormat = document.getElementById('genFormat');
    const genProperty = document.getElementById('genProperty');
    const genBadge = document.getElementById('genBadge');
    const genTitle = document.getElementById('genTitle');
    const genSubtitle = document.getElementById('genSubtitle');
    const genPrice = document.getElementById('genPrice');
    const genCta = document.getElementById('genCta');
    const btnDownload = document.getElementById('btnDownloadCustom');

    const propertyImageMap = {
        dar_bouazza: "assets/properties/dar_bouazza/dar_bouazza_1.jpg",
        victoria: "assets/properties/victoria/victoria_crea_1.png",
        gloria: "assets/properties/gloria_residence.jpg",
        ain_diab: "assets/properties/ain_diab/ain_diab_1.jpg",
        cfc: "assets/properties/cfc_studio/studio_cfc_1.jpg",
        terrain: "assets/properties/terrain_ibnou_sina.png"
    };

    function drawCustomGraphic() {
        const isStory = genFormat.value === 'story';
        const W = 1080;
        const H = isStory ? 1920 : 1080;

        canvas.width = W;
        canvas.height = H;

        const wrapper = canvas.parentElement;
        if (isStory) {
            wrapper.classList.add('story-mode');
        } else {
            wrapper.classList.remove('story-mode');
        }

        // Background dark base
        ctx.fillStyle = "#0A0F1D";
        ctx.fillRect(0, 0, W, H);

        const imgSrc = propertyImageMap[genProperty.value];
        const img = new Image();
        if (window.location.protocol !== 'file:') {
            img.crossOrigin = "anonymous";
        }
        img.src = imgSrc;

        img.onload = () => {
            // Draw background image cropped
            const targetH = isStory ? H : Math.round(H * 0.70);
            const scale = Math.max(W / img.width, targetH / img.height);
            const sw = W / scale;
            const sh = targetH / scale;
            const sx = (img.width - sw) / 2;
            const sy = (img.height - sh) / 2;

            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, targetH);

            if (!isStory) {
                // Post Carré Bottom Gradient & Card
                const grad = ctx.createLinearGradient(0, 420, 0, targetH);
                grad.addColorStop(0, "rgba(11, 17, 32, 0)");
                grad.addColorStop(1, "rgba(11, 17, 32, 1)");
                ctx.fillStyle = grad;
                ctx.fillRect(0, 420, W, targetH - 420);

                ctx.fillStyle = "#0B1120";
                ctx.fillRect(0, Math.round(H * 0.65), W, Math.round(H * 0.35));

                // Top branding bar
                ctx.fillStyle = "rgba(11, 17, 32, 0.9)";
                ctx.fillRect(0, 0, W, 110);

                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 24px 'Cinzel', serif";
                ctx.fillText("PLUG AND WORK AGENCY", 50, 52);

                ctx.fillStyle = "#D4AF37";
                ctx.font = "bold 18px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("HERE TO BRING SOLUTIONS", 50, 82);

                // Phone in top right
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 22px 'Plus Jakarta Sans', sans-serif";
                ctx.textAlign = "right";
                ctx.fillText("📞 06 61 06 07 96", W - 50, 65);
                ctx.textAlign = "left";

                // Badge
                const badgeText = genBadge.value.toUpperCase();
                ctx.fillStyle = "#D4AF37";
                ctx.fillRect(50, 480, ctx.measureText(badgeText).width + 80, 50);
                ctx.fillStyle = "#0B1120";
                ctx.font = "bold 22px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText(badgeText, 70, 513);

                // Title
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 52px 'Cinzel', serif";
                ctx.fillText(genTitle.value, 50, 600);

                // Subtitle
                ctx.fillStyle = "#94A3B8";
                ctx.font = "28px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText(genSubtitle.value, 50, 655);

                // Gold separator line
                ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(50, 700);
                ctx.lineTo(W - 50, 700);
                ctx.stroke();

                // Specs bullets
                ctx.fillStyle = "#E2E8F0";
                ctx.font = "22px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("✓ Emplacement d'exception   ✓ Titre foncier prêt   ✓ Accompagnement Plug & Work", 50, 760);

                // Price
                ctx.fillStyle = "#94A3B8";
                ctx.font = "20px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("PRIX DEMANDÉ", 50, 880);

                ctx.fillStyle = "#D4AF37";
                ctx.font = "bold 60px 'Cinzel', serif";
                ctx.fillText(genPrice.value, 50, 945);

                // CTA Button
                ctx.fillStyle = "#10B981";
                const ctaText = genCta.value;
                ctx.fillRect(W - 440, 890, 390, 80);
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 24px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText(ctaText, W - 410, 940);

                // Footer legal line
                ctx.fillStyle = "#64748B";
                ctx.font = "18px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("Plug and Work S.A.R.L.A.U • 17 Place Charles Nicole, Casablanca • 0661060796", 50, 1030);

            } else {
                // STORY MODE 9:16
                // Dark tint over the whole photo
                ctx.fillStyle = "rgba(11, 17, 32, 0.85)";
                ctx.fillRect(0, 0, W, H);

                // Gold frame
                ctx.strokeStyle = "#D4AF37";
                ctx.lineWidth = 4;
                ctx.strokeRect(30, 30, W - 60, H - 60);

                // Top branding
                ctx.textAlign = "center";
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 36px 'Cinzel', serif";
                ctx.fillText("PLUG AND WORK AGENCY", W / 2, 140);

                ctx.fillStyle = "#D4AF37";
                ctx.font = "bold 22px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("HERE TO BRING SOLUTIONS", W / 2, 185);

                // Badge
                ctx.fillStyle = "#D4AF37";
                ctx.fillRect(W / 2 - 200, 340, 400, 60);
                ctx.fillStyle = "#0B1120";
                ctx.font = "bold 26px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText(genBadge.value.toUpperCase(), W / 2, 380);

                // Title & Subtitle
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 58px 'Cinzel', serif";
                ctx.fillText(genTitle.value, W / 2, 500);

                ctx.fillStyle = "#CBD5E1";
                ctx.font = "32px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText(genSubtitle.value, W / 2, 570);

                // Center specs card
                ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
                ctx.fillRect(100, 700, W - 200, 460);
                ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
                ctx.lineWidth = 2;
                ctx.strokeRect(100, 700, W - 200, 460);

                ctx.fillStyle = "#D4AF37";
                ctx.font = "bold 52px 'Cinzel', serif";
                ctx.fillText(genPrice.value, W / 2, 800);

                ctx.fillStyle = "#E2E8F0";
                ctx.font = "30px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("⭐ Visite privée sur rendez-vous", W / 2, 900);
                ctx.fillText("⭐ Dossier technique complet", W / 2, 970);
                ctx.fillText("⭐ Financement bancaire assisté", W / 2, 1040);

                // CTA
                ctx.fillStyle = "#10B981";
                ctx.fillRect(120, 1400, W - 240, 100);
                ctx.fillStyle = "#FFFFFF";
                ctx.font = "bold 32px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("💬 CONTACT SUR WHATSAPP", W / 2, 1465);

                ctx.fillStyle = "#D4AF37";
                ctx.font = "bold 36px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("📞 06 61 06 07 96", W / 2, 1600);

                ctx.fillStyle = "#94A3B8";
                ctx.font = "22px 'Plus Jakarta Sans', sans-serif";
                ctx.fillText("17 Place Charles Nicole, Casablanca", W / 2, 1660);

                ctx.textAlign = "left";
            }
        };
    }

    [genFormat, genProperty, genBadge, genTitle, genSubtitle, genPrice, genCta].forEach(el => {
        el.addEventListener('input', drawCustomGraphic);
    });

    btnDownload.addEventListener('click', () => {
        try {
            const link = document.createElement('a');
            link.download = `plug_and_work_${genProperty.value}_${genFormat.value}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast("✨ Visuel HD téléchargé avec succès !");
        } catch (e) {
            console.warn("Canvas export note:", e);
            showToast("💡 Astuce : lancez le site via le lanceur local pour exporter les visuels créés.");
        }
    });

    // Initial draw
    setTimeout(drawCustomGraphic, 300);
}

// --- 6. Clipboard Copy for Captions ---
function copyCaption(id) {
    const el = document.getElementById(`cap${id}`);
    if (!el) return;
    
    navigator.clipboard.writeText(el.innerText).then(() => {
        showToast("✨ Légende et hashtags copiés avec succès ! Prêt pour Instagram.");
    }).catch(err => {
        console.error("Erreur copie", err);
    });
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

// --- 7. Search Form & Tabs Filter Trigger ---
function initSearchFilters() {
    const btnFilter = document.getElementById('btnFilterTrigger');
    const filterCat = document.getElementById('filterCategory');
    const filterLoc = document.getElementById('filterLocation');
    const filterBud = document.getElementById('filterBudget');

    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const type = tab.getAttribute('data-type');
            renderProperties(type);
            const biensSection = document.getElementById('biens');
            if (biensSection) biensSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderProperties(filter);
        });
    });

    if (btnFilter) {
        btnFilter.addEventListener('click', () => {
            const cat = filterCat.value;
            renderProperties(cat);
            const biensSection = document.getElementById('biens');
            if (biensSection) biensSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
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

// --- 9. Estimation Form Submission ---
function initEstimationForm() {
    const form = document.getElementById('formEstimation');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('estName').value;
        const phone = document.getElementById('estPhone').value;
        const type = document.getElementById('estType').value;
        const city = document.getElementById('estCity').value;

        // Redirect to WhatsApp with pre-filled message
        const waMsg = `Bonjour Plug and Work Agency,%20je%20souhaite%20une%20estimation%20pour%20mon%20bien.%0A%0A👤%20Nom%20:%20${encodeURIComponent(name)}%0A📞%20Tél%20:%20${encodeURIComponent(phone)}%0A🏠%20Type%20:%20${encodeURIComponent(type)}%0A📍%20Ville%20:%20${encodeURIComponent(city)}`;
        window.open(`https://wa.me/212661060796?text=${waMsg}`, '_blank');
        showToast("Demande transmise avec succès ! Nous vous recontactons immédiatement.");
        form.reset();
    });
}

// --- 10. Mobile Menu & Modal Listeners ---
function initGeneralUI() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }

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
    initInstagramStudio();
    initInstaTabs();
    initEstimationForm();
    initGeneralUI();
});
