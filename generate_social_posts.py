import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

base_dir = '/Users/mac/.gemini/antigravity/scratch/plug_and_work_agency'
social_dir = os.path.join(base_dir, 'assets/social')
os.makedirs(social_dir, exist_ok=True)

# Fonts
font_title = ImageFont.truetype('/System/Library/Fonts/Supplemental/Futura.ttc', 56, index=2) # Bold
font_sub = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 32, index=0)
font_badge = ImageFont.truetype('/System/Library/Fonts/Supplemental/Futura.ttc', 28, index=2)
font_price = ImageFont.truetype('/System/Library/Fonts/Supplemental/Futura.ttc', 64, index=2)
font_small = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 24, index=0)
font_phone = ImageFont.truetype('/System/Library/Fonts/Supplemental/Futura.ttc', 36, index=2)

font_story_title = ImageFont.truetype('/System/Library/Fonts/Supplemental/Futura.ttc', 72, index=2)
font_story_sub = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 40, index=0)

logo_path = os.path.join(base_dir, 'assets/images/plug_and_work_profile_400x400.png')
logo_img = Image.open(logo_path).convert("RGBA") if os.path.exists(logo_path) else None

def draw_rounded_rect(draw, bbox, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill, outline=outline, width=width)

def create_post(bg_image_path, badge_text, title, subtitle, specs_list, price_text, output_name):
    W, H = 1080, 1080
    canvas = Image.new("RGB", (W, H), (15, 23, 42)) # Slate dark base
    
    # Load and crop background image
    if os.path.exists(bg_image_path):
        bg = Image.open(bg_image_path).convert("RGB")
        # Resize and center crop
        img_ratio = bg.width / bg.height
        target_ratio = W / (H * 0.68) # Leave bottom for dark card
        target_h = int(H * 0.70)
        
        scale = max(W / bg.width, target_h / bg.height)
        new_w = int(bg.width * scale)
        new_h = int(bg.height * scale)
        bg = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        crop_x = (new_w - W) // 2
        crop_y = (new_h - target_h) // 2
        bg = bg.crop((crop_x, crop_y, crop_x + W, crop_y + target_h))
        canvas.paste(bg, (0, 0))
    
    # Create dark gradient overlay from middle to bottom of image
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    
    # Gradient fade on image bottom
    for y in range(400, int(H * 0.70)):
        alpha = int(255 * ((y - 400) / (int(H * 0.70) - 400)))
        draw_ov.rectangle([0, y, W, y+1], fill=(11, 17, 32, alpha))
        
    # Solid bottom card
    draw_ov.rectangle([0, int(H * 0.65), W, H], fill=(11, 17, 32, 255))
    canvas.paste(Image.alpha_composite(Image.new("RGBA", (W, H), (0,0,0,0)), overlay), (0,0), overlay)
    
    draw = ImageDraw.Draw(canvas)
    
    # Top bar with Logo & Agency brand
    top_bar = Image.new("RGBA", (W, 110), (11, 17, 32, 210))
    canvas.paste(top_bar, (0, 0), top_bar)
    
    # Paste mini logo if available
    if logo_img:
        logo_mini = logo_img.resize((80, 80), Image.Resampling.LANCZOS)
        canvas.paste(logo_mini, (40, 15), logo_mini)
        
    draw.text((135, 24), "PLUG AND WORK AGENCY", fill=(255, 255, 255), font=font_small)
    draw.text((135, 54), "HERE TO BRING SOLUTIONS", fill=(212, 175, 55), font=font_small) # Gold
    
    # Phone pill in top right
    draw_rounded_rect(draw, (W - 320, 25, W - 40, 85), 30, fill=(20, 30, 55), outline=(212, 175, 55), width=2)
    draw.text((W - 300, 38), "📞 0661060796", fill=(255, 255, 255), font=font_small)
    
    # Badge (e.g. EXCLUSIVITÉ, PROJET NEUF)
    badge_w = draw.textlength(badge_text, font=font_badge) + 40
    badge_box = (50, 480, 50 + badge_w, 535)
    draw_rounded_rect(draw, badge_box, 12, fill=(212, 175, 55)) # Gold
    draw.text((70, 492), badge_text, fill=(11, 17, 32), font=font_badge)
    
    # Title & Subtitle
    draw.text((50, 560), title, fill=(255, 255, 255), font=font_title)
    draw.text((50, 635), subtitle, fill=(156, 163, 175), font=font_sub)
    
    # Gold decorative separator line
    draw.line([(50, 695), (W - 50, 695)], fill=(212, 175, 55, 120), width=2)
    
    # Specs chips / bullets
    chip_x = 50
    chip_y = 725
    for spec in specs_list:
        spec_text = f"✓ {spec}"
        tw = draw.textlength(spec_text, font=font_small)
        draw_rounded_rect(draw, (chip_x, chip_y, chip_x + tw + 30, chip_y + 45), 10, fill=(24, 34, 58))
        draw.text((chip_x + 15, chip_y + 10), spec_text, fill=(229, 231, 235), font=font_small)
        chip_x += int(tw + 45)
        if chip_x > W - 250:
            chip_x = 50
            chip_y += 55
            
    # Bottom section: Price & Call to action
    draw.text((50, 880), "PRIX", fill=(156, 163, 175), font=font_small)
    draw.text((50, 915), price_text, fill=(212, 175, 55), font=font_price) # Gold price
    
    # CTA button
    cta_box = (W - 440, 895, W - 50, 985)
    draw_rounded_rect(draw, cta_box, 16, fill=(16, 185, 129)) # Emerald WhatsApp green
    draw.text((W - 410, 922), "PLANIFIER UNE VISITE  ➔", fill=(255, 255, 255), font=font_badge)
    
    # Footer disclaimer
    draw.text((50, 1030), "Plug and Work S.A.R.L.A.U | Casablanca | www.plugandwork.ma | 06 61 06 07 96", fill=(107, 114, 128), font=font_small)
    
    # Outer gold border
    draw.rectangle([5, 5, W - 6, H - 6], outline=(212, 175, 55, 100), width=3)
    
    out_path = os.path.join(social_dir, output_name)
    canvas.save(out_path, "PNG", quality=95)
    print("Created:", out_path)

def create_story(bg_image_path, badge_text, headline, subheadline, points, output_name):
    W, H = 1080, 1920
    canvas = Image.new("RGB", (W, H), (11, 17, 32))
    
    # Background image
    if os.path.exists(bg_image_path):
        bg = Image.open(bg_image_path).convert("RGB")
        scale = max(W / bg.width, H / bg.height)
        new_w = int(bg.width * scale)
        new_h = int(bg.height * scale)
        bg = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
        crop_x = (new_w - W) // 2
        crop_y = (new_h - H) // 2
        bg = bg.crop((crop_x, crop_y, crop_x + W, crop_y + H))
        canvas.paste(bg, (0, 0))
        
    # Dark luxury overlay
    tint = Image.new("RGBA", (W, H), (11, 17, 32, 210))
    canvas.paste(tint, (0, 0), tint)
    
    draw = ImageDraw.Draw(canvas)
    
    # Gold border
    draw.rectangle([25, 25, W - 25, H - 25], outline=(212, 175, 55), width=3)
    
    # Top logo
    if logo_img:
        logo_large = logo_img.resize((150, 150), Image.Resampling.LANCZOS)
        canvas.paste(logo_large, ((W - 150) // 2, 80), logo_large)
        
    draw.text(((W - draw.textlength("PLUG AND WORK AGENCY", font=font_phone)) // 2, 250), "PLUG AND WORK AGENCY", fill=(255, 255, 255), font=font_phone)
    draw.text(((W - draw.textlength("HERE TO BRING SOLUTIONS", font=font_small)) // 2, 305), "HERE TO BRING SOLUTIONS", fill=(212, 175, 55), font=font_small)
    
    # Center badge
    badge_w = draw.textlength(badge_text, font=font_badge) + 60
    draw_rounded_rect(draw, ((W - badge_w) // 2, 450, (W + badge_w) // 2, 520), 16, fill=(212, 175, 55))
    draw.text(((W - draw.textlength(badge_text, font=font_badge)) // 2, 468), badge_text, fill=(11, 17, 32), font=font_badge)
    
    # Headline
    draw.text(((W - draw.textlength(headline, font=font_story_title)) // 2, 590), headline, fill=(255, 255, 255), font=font_story_title)
    draw.text(((W - draw.textlength(subheadline, font=font_story_sub)) // 2, 690), subheadline, fill=(209, 213, 219), font=font_story_sub)
    
    # Points list card
    card_y = 850
    draw_rounded_rect(draw, (80, card_y, W - 80, card_y + 450), 24, fill=(19, 29, 53, 230), outline=(212, 175, 55), width=2)
    
    curr_y = card_y + 50
    for pt in points:
        draw.text((120, curr_y), "⭐  " + pt, fill=(255, 255, 255), font=font_sub)
        curr_y += 85
        
    # Big CTA bottom
    cta_y = 1450
    draw_rounded_rect(draw, (100, cta_y, W - 100, cta_y + 110), 55, fill=(16, 185, 129))
    draw.text(((W - draw.textlength("💬 CONTACTER SUR WHATSAPP", font=font_title)) // 2, cta_y + 25), "💬 CONTACTER SUR WHATSAPP", fill=(255, 255, 255), font=font_title)
    
    # Phone bottom
    draw.text(((W - draw.textlength("Tél : 06 61 06 07 96", font=font_phone)) // 2, 1620), "Tél : 06 61 06 07 96", fill=(212, 175, 55), font=font_phone)
    draw.text(((W - draw.textlength("17 Place Charles Nicole, Casablanca", font=font_small)) // 2, 1690), "17 Place Charles Nicole, Casablanca", fill=(156, 163, 175), font=font_small)
    
    out_path = os.path.join(social_dir, output_name)
    canvas.save(out_path, "PNG", quality=95)
    print("Created:", out_path)

# --- Generate Posts ---

# --- Generate Posts ---

# Post 1: Villa Dar Bouazza (DISPONIBLE)
create_post(
    bg_image_path=os.path.join(base_dir, 'assets/properties/dar_bouazza/dar_bouazza_1.jpg'),
    badge_text="COUP DE CŒUR | EXCLUSIVITÉ",
    title="VILLA D'ARCHITECTE AVEC PISCINE",
    subtitle="Dar Bouazza, Casablanca • Cadre d'exception",
    specs_list=["Terrain 606 m²", "Construit 540 m²", "Piscine sans vis-à-vis", "Clim centralisée", "Garage 3 voitures"],
    price_text="10 000 000 DH",
    output_name="post_1_dar_bouazza.png"
)

# Post 2: Studio CFC (DÉJÀ LOUÉ)
create_post(
    bg_image_path=os.path.join(base_dir, 'assets/properties/cfc_studio/studio_cfc_1.jpg'),
    badge_text="🟢 DÉJÀ LOUÉ EN 48H | RENDEMENT 7.5%",
    title="STUDIO HAUT STANDING - CFC",
    subtitle="Casablanca Finance City • Gestion Plug & Work",
    specs_list=["Loué en 48 heures", "Loyer 7 500 DH/mois", "Rentabilité 7.5%", "Sécurité 24/7", "Parking titré"],
    price_text="LOUÉ (7 500 DH)",
    output_name="post_2_studio_cfc.png"
)

# Post 3: Résidence Gloria (DISPONIBLE / NEUF)
create_post(
    bg_image_path=os.path.join(base_dir, 'assets/properties/gloria_residence.jpg'),
    badge_text="ÉLIGIBLE SUBVENTION DE L'ÉTAT | PROGRAMME NEUF",
    title="RÉSIDENCE GLORIA 2",
    subtitle="Tétouan • Façade & Bureau de vente sur place",
    specs_list=["F3 & F4 de 65 à 108 m²", "Cuisine américaine", "Cours privative 25 m²", "Appt 90m² à 700 000 DH"],
    price_text="Dès 640 000 DH",
    output_name="post_3_gloria_residence.png"
)

# Post 4: Villa Aïn Diab (DÉJÀ VENDU)
create_post(
    bg_image_path=os.path.join(base_dir, 'assets/properties/ain_diab/ain_diab_1.jpg'),
    badge_text="🔴 DÉJÀ VENDU PAR L'AGENCE",
    title="VILLA DE MAÎTRE - AÏN DIAB",
    subtitle="Mandat Exclusif Réussi • Casablanca Anfa",
    specs_list=["Vendu en exclusivité", "Terrain 650 m²", "480 m² habitable", "Triple réception", "Mandat réussi"],
    price_text="VENDU (9,5M DH)",
    output_name="post_4_ain_diab.png"
)

# Post 5: Projet Victoria Square (DISPONIBLE / NEUF)
create_post(
    bg_image_path=os.path.join(base_dir, 'assets/properties/victoria/victoria_crea_1.png'),
    badge_text="FINITIONS STANDING | PROGRAMME NEUF",
    title="RÉSIDENCE VICTORIA SQUARE",
    subtitle="Casablanca • Commercialisation Plug & Work",
    specs_list=["F3 & F4 de 95 à 152 m²", "Terrasses privatives sud", "Garages titrés sous-sol", "Finitions nobles"],
    price_text="Dès 831 300 DH",
    output_name="post_5_victoria_square.png"
)

# Post 6: Branding Agency
create_post(
    bg_image_path=os.path.join(base_dir, 'assets/properties/dar_bouazza/dar_bouazza_1.jpg'),
    badge_text="PLUG AND WORK AGENCY",
    title="VOTRE BIEN MÉRITE L'EXCELLENCE",
    subtitle="Commercialisation exclusive & Marketing 360°",
    specs_list=["Estimation offerte 24h", "Shooting Pro & Visuels", "Diffusion ultra-ciblée", "Vente rapide garantie"],
    price_text="06 61 06 07 96",
    output_name="post_6_branding_agency.png"
)

# Story 1: Visite Privée
create_story(
    bg_image_path=os.path.join(base_dir, 'assets/properties/dar_bouazza/dar_bouazza_1.jpg'),
    badge_text="ÉVÉNEMENT EXCLUSIF",
    headline="VISITES PRIVÉES CE WEEK-END",
    subheadline="Découvrez nos villas d'exception & programmes neufs",
    points=[
        "Créneaux individuels sur rendez-vous",
        "Présentation des plans & dossiers complets",
        "Conseil en financement sur place",
        "Accès immédiat aux biens exclusifs"
    ],
    output_name="story_1_visite_privee.png"
)

# Story 2: Bien Vendu / Mandat
create_story(
    bg_image_path=os.path.join(base_dir, 'assets/properties/ain_diab/ain_diab_1.jpg'),
    badge_text="SUCCESS STORY",
    headline="VILLA VENDUE À AÏN DIAB !",
    subheadline="Merci à nos clients pour leur confiance",
    points=[
        "Mandat exclusif Plug & Work Agency",
        "Vente conclue aux conditions du vendeur",
        "Acquéreur qualifié & financement validé",
        "Vous vendez ? Contactez-nous au 0661060796"
    ],
    output_name="story_2_bien_vendu.png"
)

# Story 3: Bien Loué en 48h
create_story(
    bg_image_path=os.path.join(base_dir, 'assets/properties/cfc_studio/studio_cfc_1.jpg'),
    badge_text="RECORD DE LOCATION",
    headline="STUDIO CFC LOUÉ EN 48H !",
    subheadline="Gestion locative premium Plug and Work",
    points=[
        "Locataire qualifié avec garanties solides",
        "Zéro vacance locative pour le propriétaire",
        "Loyer sécurisé à 7 500 DH / mois",
        "Confiez-nous votre bien en gestion"
    ],
    output_name="story_3_bien_loue.png"
)

print("All social graphics created successfully!")
