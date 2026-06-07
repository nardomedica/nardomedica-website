# Contesto Progetto

## Identità

Nardò Medica è un centro medico a Nardò che offre studi medici in affitto a medici specialisti e professionisti sanitari.

## Offerta

Il centro mette a disposizione 2 studi medici pronti all'uso, pensati per accogliere pazienti in ambienti professionali, moderni e riservati.

Gli studi sono attrezzati con:

- scrivania
- lettino
- ecografo
- altri strumenti medici utili allo svolgimento dell'attività specialistica

La proposta deve comunicare una soluzione flessibile e senza pensieri, adatta a medici specialisti che vogliono concentrarsi sulla propria attività professionale.

## Contatti

- Indirizzo: via Madonna di Costantinopoli, 13 - Nardò
- Telefono: +39 331 59 34 908
- Email: nardomedica@gmail.com
- Sito: nardomedica.it

## Struttura Sito

Il sito è una pagina statica contenuta in `index.html`.

Le sezioni principali sono:

- Home
- Studio 1
- Studio 2
- Richiedi informazioni

Il menu superiore deve puntare alle relative sezioni. I link `Studio 1` e `Studio 2` devono portare esattamente al titolo della rispettiva sezione, tenendo conto della navbar sticky. Il link `Home` deve riportare all'inizio reale della pagina, senza offset.

Su mobile il menu superiore usa un pulsante hamburger gestito da `static/menu.js`; su desktop i link restano visibili in linea.

Le immagini delle sezioni `Studio 1` e `Studio 2` si aprono in una lightbox/modale al click, gestita da `static/menu.js`.

## Asset Principali

- CSS principale: `static/style.css`
- Script menu mobile: `static/menu.js`
- Font locale: Lato in `static/fonts/lato/`
- Favicon locale: `static/favicon.ico`, `static/favicon.png`
- Icone menu locali stile Font Awesome: `static/icons/house.svg`, `static/icons/stethoscope.svg`, `static/icons/circle-info.svg`
- Immagini ottimizzate WebP: versioni `*-1600.webp` per hero/panoramiche e `*-1100.webp` per dettagli.
- Logo navbar: `static/images/logo/nardo-medica-logo-a.png`
- Logo hero: `static/images/logo/nardo-medica-logo-b-transparent.png`
- Immagine facciata hero: `static/images/facciata/nardo-medica-IMG_0881.JPG`
- Studio 1 panoramica: `static/images/studio-1/nardo-medica-studio-1-panoramica-2.jpg`
- Studio 1 dettagli: `static/images/studio-1/nardo-medica-IMG_0902.JPG`, `static/images/studio-1/nardo-medica-IMG_0905.JPG`
- Studio 2 panoramica: `static/images/studio-2/nardo-medica-studio-2-panoramica.jpg`
- Studio 2 dettagli: `static/images/studio-2/nardo-medica-IMG_0909.JPG`, `static/images/studio-2/nardo-medica-IMG_0910.JPG`

## SEO

Il sito deve essere ottimizzato per ricerche locali e professionali legate a:

- studi medici in affitto a Nardò
- affitto studi medici per medici specialisti
- centro medico Nardò
- studi pronti all'uso per specialisti

Sono già stati aggiunti:

- title SEO-oriented
- meta description
- canonical
- Open Graph e Twitter card
- JSON-LD `MedicalBusiness`
- `alt` descrittivi per le immagini
- `width`, `height`, `loading="lazy"` e `decoding="async"` dove utile
- `robots.txt`
- `sitemap.xml`
- wrapper semantico `<main>`

## Form e Spam

Il form di contatto è stato rimosso. La sezione `Richiedi Info` deve mostrare solo testo e contatti.

Se in futuro si vuole reinserire un form, evitare `mailto:` come soluzione principale. Per protezione spam valutare:

- Netlify Forms
- Formspree
- Cloudflare Pages Function + Cloudflare Turnstile

Cloudflare Turnstile richiede una verifica lato server o function: non è sufficiente inserirlo solo in HTML.
