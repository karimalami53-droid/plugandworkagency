#!/bin/bash
# ========================================================
# LANCEUR DU SITE WEB PLUG AND WORK AGENCY
# Double-cliquez pour ouvrir votre site web dans le navigateur
# ========================================================

cd "$(dirname "$0")"

PORT=8080
# Vérifier si le port 8080 est déjà pris, sinon utiliser 8081
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    PORT=8085
fi

echo "=========================================================="
echo "  🏢 PLUG AND WORK AGENCY — SITE WEB IMMOBILIER"
echo "  « Here to bring solutions » • 06 61 06 07 96"
echo "=========================================================="
echo "Démarrage du site sur http://localhost:$PORT ..."

# Ouvrir le navigateur automatiquement
(sleep 1 && open "http://localhost:$PORT") &

# Démarrer le serveur web local Python
python3 -m http.server $PORT
