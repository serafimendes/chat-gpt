# MEON · M4 + Sport TV — spot estilo TV (aprovado)

Vídeo final: `spot_TV_MEON_M4.mp4` — 1080×1920 (9:16), 31,2 s, 30 fps, -16,5 LUFS.

## Narração (ElevenLabs, voz MEON, modelo eleven_v4) — `audio/vo1.mp3` (take usado), `audio/vo2.mp3` (alternativo)
> Psst. Tu aí. Estás a pagar a Sport TV… estás a pagar, não estás?
> Eu sou o MEON. Venho de 2050. E trago campanhas que mais ninguém tem.
> Queres saber o segredo?
> Aderes ao M4. Televisão, net, voz e móvel. Juntas um euro… e a Sport TV é tua. Nove meses!
> (ri-se) Em 2050, chamamos a isto… óbvio.
> M4 com Sport TV. Só comigo. Adere já.
> Campanha sujeita a condições. Consulta todos os detalhes.

## Som (ElevenLabs Sound Effects v2)
`music1.mp3` (loop 14 s), `whoosh.mp3`, `pop.mp3`, `glitch.mp3`, `unlock.mp3`, `sting1.mp3`.

## Como voltar a gerar o vídeo
Requer Node + Playwright (Chromium) e ffmpeg.
1. `node render.js preview` — fotogramas-chave em `preview/`
2. `node render.js full` — todos os fotogramas em `frames/`
3. Codificar com ffmpeg juntando os frames à mistura de áudio (narração com +0,5 s de atraso,
   música com ducking por sidechain, efeitos nos tempos definidos em `reel.html`).

Todos os tempos das animações estão em `window.render(t)` dentro de `reel.html`.
Para uma nova oferta: troca os textos no HTML, gera nova narração, ajusta os tempos.

## Pendentes antes de veicular
- Confirmar condições da oferta (M4 + 1 € = Sport TV 9 meses).
- "Campanhas que mais ninguém tem" / "Só comigo" são alegações de exclusividade — garantir que são comprováveis.
- Versão 16:9 / 25 fps / -23 LUFS se for para emissão televisiva.
