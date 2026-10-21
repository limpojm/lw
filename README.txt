LORD WAVERLEY WEBSITE: DESIGN HANDOVER
=======================================

Open index.html in any web browser to view the site. No build step or server is needed.

CONTENTS
  index.html                 Homepage (hero, advisory, Country Insights, articles, biography, contact)
  country-insights.html      Country Insights page with working search and region filter
  assets/styles.css          All styling (colours are set as variables at the top of the file)
  assets/images/             Portrait photograph
  design-source/             Original design canvas files, for reference only

COLOUR PALETTE
  Navy            #0E1A2B   header, hero, footer, Paper cards
  Champagne       #DCCBA4   accent, buttons, statistics band
  Slate teal      #2F4B57   contact section, Video and Speech cards
  Bronze          #7A5C2E   small labels and links
  Paper           #F7F5F0   page background
  Region tints    Africa #F2E8D2 · Americas #F0DFE2 · Asia #DFECE6 · Eurasia #DFE6F0 · Middle East #F5E3D5

FONTS (Google Fonts)
  Cormorant Garamond (headings) and Inter (body text)

NOTES FOR THE DEVELOPER
  * Country Insights lists all 157 countries with links to the HTML and PDF Gateway Guides.
    guide.html embeds the selected guide with the site menu, a back link and PDF download.
    assets/guide-viewer.js contains the country-to-file catalogue.
    The individual source guides do not need a copy of the site menu.
  * Guide files are stored in assets/guides/html/ and assets/guides/pdf/.
  * Article links point to the existing files on www.lordwaverley.com.
  * The language selector (EN) is a placeholder for the 14 language versions.
