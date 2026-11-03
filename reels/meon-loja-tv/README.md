# MEON na loja MEO · spot estilo TV

Vídeo: `spot_TV_MEON_loja.mp4` — 1080×1920, 31,2 s, 30 fps, áudio AAC estéreo.

Mesma narração e mistura de som do spot aprovado (`../meon-m4-spot-tv/audio/`), agora passada na loja:
- 0–6 s: corredor do centro comercial, o MEON espreita ("Psst… estás a pagar, não estás?")
- 6–12 s: o MEON materializa-se em holograma à porta da loja; lower-third "Eu sou o MEON / Venho de 2050"
- 12–13 s: "Queres saber o segredo?" com cadeado a abrir
- 13–20,5 s: a câmara entra no ecrã da montra, que mostra o M4 (TV, NET, VOZ, MÓVEL), +1 €, Sport TV, 9 meses
- 20,5–24 s: pan pela fachada; o ecrã da montra mostra "Óbvio."
- 24–31 s: packshot com M4, "Só comigo", "Adere já" e aviso legal

Fotos da loja em `img/store1..6.jpg`. As imagens de recorte e o logótipo M4 estão em `../meon-m4-spot-tv/img/` (copiar para `img/` antes de voltar a gerar).
Gerar: `node render.js full`, depois ffmpeg com os frames + `../meon-m4-spot-tv` mix (narração +0,5 s).
