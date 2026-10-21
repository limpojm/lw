(function () {
  'use strict';
  var guides = {
  "algeria": [
    "Algeria",
    "Algeria_Gateway_Guide.pdf"
  ],
  "angola": [
    "Angola",
    "Angola_Gateway_Guide.pdf"
  ],
  "benin": [
    "Benin",
    "Benin_Gateway_Guide.pdf"
  ],
  "botswana": [
    "Botswana",
    "Botswana_Gateway_Guide.pdf"
  ],
  "burkina-faso": [
    "Burkina Faso",
    "Burkina_Faso_Gateway_Guide.pdf"
  ],
  "burundi": [
    "Burundi",
    "Burundi_Gateway_Guide.pdf"
  ],
  "cabo-verde": [
    "Cape Verde",
    "Cabo_Verde_Gateway_Guide.pdf"
  ],
  "cameroon": [
    "Cameroon",
    "Cameroon_Gateway_Guide.pdf"
  ],
  "central-african-republic": [
    "Central African Republic",
    "Central_African_Republic_Gateway_Guide.pdf"
  ],
  "chad": [
    "Chad",
    "Chad_Gateway_Guide.pdf"
  ],
  "comoros": [
    "Comoros",
    "Comoros_Gateway_Guide.pdf"
  ],
  "congo-brazzaville": [
    "Congo Brazzaville",
    "Congo_Brazzaville_Gateway_Guide.pdf"
  ],
  "congo-drc": [
    "Congo DRC",
    "Congo_DRC_Gateway_Guide.pdf"
  ],
  "djibouti": [
    "Djibouti",
    "Djibouti_Gateway_Guide.pdf"
  ],
  "egypt": [
    "Egypt",
    "Egypt_Gateway_Guide.pdf"
  ],
  "equatorial-guinea": [
    "Equatorial Guinea",
    "Equatorial_Guinea_Gateway_Guide.pdf"
  ],
  "eritrea": [
    "Eritrea",
    "Eritrea_Gateway_Guide.pdf"
  ],
  "eswatini": [
    "Eswatini",
    "Eswatini_Gateway_Guide.pdf"
  ],
  "ethiopia": [
    "Ethiopia",
    "Ethiopia_Gateway_Guide.pdf"
  ],
  "gabon": [
    "Gabon",
    "Gabon_Gateway_Guide.pdf"
  ],
  "gambia": [
    "Gambia",
    "Gambia_Gateway_Guide.pdf"
  ],
  "ghana": [
    "Ghana",
    "Ghana_Gateway_Guide.pdf"
  ],
  "guinea-conakry": [
    "Guinea Conakry",
    "Guinea_Conakry_Gateway_Guide.pdf"
  ],
  "guinea-bissau": [
    "Guinea-Bissau",
    "Guinea-Bissau_Gateway_Guide.pdf"
  ],
  "ivory-coast": [
    "Ivory Coast",
    "Ivory_Coast_Gateway_Guide.pdf"
  ],
  "kenya": [
    "Kenya",
    "Kenya_Gateway_Guide.pdf"
  ],
  "lesotho": [
    "Lesotho",
    "Lesotho_Gateway_Guide.pdf"
  ],
  "liberia": [
    "Liberia",
    "Liberia_Gateway_Guide.pdf"
  ],
  "libya": [
    "Libya",
    "Libya_Gateway_Guide.pdf"
  ],
  "madagascar": [
    "Madagascar",
    "Madagascar_Gateway_Guide.pdf"
  ],
  "malawi": [
    "Malawi",
    "Malawi_Gateway_Guide.pdf"
  ],
  "mali": [
    "Mali",
    "Mali_Gateway_Guide.pdf"
  ],
  "mauritania": [
    "Mauritania",
    "Mauritania_Gateway_Guide.pdf"
  ],
  "mauritius": [
    "Mauritius",
    "Mauritius_Gateway_Guide.pdf"
  ],
  "morocco": [
    "Morocco",
    "Morocco_Gateway_Guide.pdf"
  ],
  "mozambique": [
    "Mozambique",
    "Mozambique_Gateway_Guide.pdf"
  ],
  "namibia": [
    "Namibia",
    "Namibia_Gateway_Guide.pdf"
  ],
  "niger": [
    "Niger",
    "Niger_Gateway_Guide.pdf"
  ],
  "nigeria": [
    "Nigeria",
    "Nigeria_Gateway_Guide.pdf"
  ],
  "rwanda": [
    "Rwanda",
    "Rwanda_Gateway_Guide.pdf"
  ],
  "reunion": [
    "Réunion",
    "R%C3%A9union_Gateway_Guide.pdf"
  ],
  "senegal": [
    "Senegal",
    "Senegal_Gateway_Guide.pdf"
  ],
  "seychelles": [
    "Seychelles",
    "Seychelles_Gateway_Guide.pdf"
  ],
  "sierra-leone": [
    "Sierra Leone",
    "Sierra_Leone_Gateway_Guide.pdf"
  ],
  "somalia": [
    "Somalia",
    "Somalia_Gateway_Guide.pdf"
  ],
  "south-africa": [
    "South Africa",
    "South_Africa_Gateway_Guide.pdf"
  ],
  "south-sudan": [
    "South Sudan",
    "South_Sudan_Gateway_Guide.pdf"
  ],
  "sudan": [
    "Sudan",
    "Sudan_Gateway_Guide.pdf"
  ],
  "sao-tome-and-principe": [
    "São Tomé and Príncipe",
    "S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe_Gateway_Guide.pdf"
  ],
  "tanzania": [
    "Tanzania",
    "Tanzania_Gateway_Guide.pdf"
  ],
  "togo": [
    "Togo",
    "Togo_Gateway_Guide.pdf"
  ],
  "tunisia": [
    "Tunisia",
    "Tunisia_Gateway_Guide.pdf"
  ],
  "uganda": [
    "Uganda",
    "Uganda_Gateway_Guide.pdf"
  ],
  "zambia": [
    "Zambia",
    "Zambia_Gateway_Guide.pdf"
  ],
  "zimbabwe": [
    "Zimbabwe",
    "Zimbabwe_Gateway_Guide.pdf"
  ],
  "anguilla": [
    "Anguilla",
    "Anguilla_Gateway_Guide.pdf"
  ],
  "antigua-and-barbuda": [
    "Antigua and Barbuda",
    "Antigua_and_Barbuda_Gateway_Guide.pdf"
  ],
  "argentina": [
    "Argentina",
    "Argentina_Gateway_Guide.pdf"
  ],
  "aruba": [
    "Aruba",
    "Aruba_Gateway_Guide.pdf"
  ],
  "bahamas": [
    "Bahamas",
    "Bahamas_Gateway_Guide.pdf"
  ],
  "barbados": [
    "Barbados",
    "Barbados_Gateway_Guide.pdf"
  ],
  "belize": [
    "Belize",
    "Belize_Gateway_Guide.pdf"
  ],
  "bermuda": [
    "Bermuda",
    "Bermuda_Gateway_Guide.pdf"
  ],
  "bolivia": [
    "Bolivia",
    "Bolivia_Gateway_Guide.pdf"
  ],
  "brazil": [
    "Brazil",
    "Brazil_Gateway_Guide.pdf"
  ],
  "british-virgin-islands": [
    "British Virgin Islands",
    "British_Virgin_Islands_Gateway_Guide.pdf"
  ],
  "cayman-islands": [
    "Cayman Islands",
    "Cayman_Islands_Gateway_Guide.pdf"
  ],
  "chile": [
    "Chile",
    "Chile_Gateway_Guide.pdf"
  ],
  "colombia": [
    "Colombia",
    "Colombia_Gateway_Guide.pdf"
  ],
  "costa-rica": [
    "Costa Rica",
    "Costa_Rica_Gateway_Guide.pdf"
  ],
  "cuba": [
    "Cuba",
    "Cuba_Gateway_Guide.pdf"
  ],
  "curacao": [
    "Curaçao",
    "Cura%C3%A7ao_Gateway_Guide.pdf"
  ],
  "dominica": [
    "Dominica",
    "Dominica_Gateway_Guide.pdf"
  ],
  "dominican-republic": [
    "Dominican Republic",
    "Dominican_Republic_Gateway_Guide.pdf"
  ],
  "ecuador": [
    "Ecuador",
    "Ecuador_Gateway_Guide.pdf"
  ],
  "el-salvador": [
    "El Salvador",
    "El_Salvador_Gateway_Guide.pdf"
  ],
  "falkland-islands-malvinas": [
    "Falkland Islands / Malvinas",
    "Falkland_Islands_Malvinas_Gateway_Guide.pdf"
  ],
  "french-guiana": [
    "French Guiana",
    "French_Guiana_Gateway_Guide.pdf"
  ],
  "grenada": [
    "Grenada",
    "Grenada_Gateway_Guide.pdf"
  ],
  "guadeloupe": [
    "Guadeloupe",
    "Guadeloupe_Gateway_Guide.pdf"
  ],
  "guatemala": [
    "Guatemala",
    "Guatemala_Gateway_Guide.pdf"
  ],
  "guyana": [
    "Guyana",
    "Guyana_Gateway_Guide.pdf"
  ],
  "haiti": [
    "Haiti",
    "Haiti_Gateway_Guide.pdf"
  ],
  "honduras": [
    "Honduras",
    "Honduras_Gateway_Guide.pdf"
  ],
  "jamaica": [
    "Jamaica",
    "Jamaica_Gateway_Guide.pdf"
  ],
  "martinique": [
    "Martinique",
    "Martinique_Gateway_Guide.pdf"
  ],
  "mexico": [
    "Mexico",
    "Mexico_Gateway_Guide.pdf"
  ],
  "montserrat": [
    "Montserrat",
    "Montserrat_Gateway_Guide.pdf"
  ],
  "nicaragua": [
    "Nicaragua",
    "Nicaragua_Gateway_Guide.pdf"
  ],
  "panama": [
    "Panama",
    "Panama_Gateway_Guide.pdf"
  ],
  "paraguay": [
    "Paraguay",
    "Paraguay_Gateway_Guide.pdf"
  ],
  "peru": [
    "Peru",
    "Peru_Gateway_Guide.pdf"
  ],
  "puerto-rico": [
    "Puerto Rico",
    "Puerto_Rico_Gateway_Guide.pdf"
  ],
  "saint-kitts-and-nevis": [
    "Saint Kitts and Nevis",
    "Saint_Kitts_and_Nevis_Gateway_Guide.pdf"
  ],
  "saint-lucia": [
    "Saint Lucia",
    "Saint_Lucia_Gateway_Guide.pdf"
  ],
  "saint-martin": [
    "Saint Martin",
    "Saint_Martin_Gateway_Guide.pdf"
  ],
  "saint-vincent-and-the-grenadines": [
    "Saint Vincent and the Grenadines",
    "Saint_Vincent_and_the_Grenadines_Gateway_Guide.pdf"
  ],
  "sint-maarten": [
    "Sint Maarten",
    "Sint_Maarten_Gateway_Guide.pdf"
  ],
  "suriname": [
    "Suriname",
    "Suriname_Gateway_Guide.pdf"
  ],
  "trinidad-and-tobago": [
    "Trinidad and Tobago",
    "Trinidad_and_Tobago_Gateway_Guide.pdf"
  ],
  "turks-and-caicos-islands": [
    "Turks and Caicos Islands",
    "Turks_and_Caicos_Islands_Gateway_Guide.pdf"
  ],
  "uruguay": [
    "Uruguay",
    "Uruguay_Gateway_Guide.pdf"
  ],
  "us-virgin-islands": [
    "US Virgin Islands",
    "US_Virgin_Islands_Gateway_Guide.pdf"
  ],
  "venezuela": [
    "Venezuela",
    "Venezuela_Gateway_Guide.pdf"
  ],
  "australia": [
    "Australia",
    "Australia_Gateway_Guide.pdf"
  ],
  "bangladesh": [
    "Bangladesh",
    "Bangladesh_Gateway_Guide.pdf"
  ],
  "bhutan": [
    "Bhutan",
    "Bhutan_Gateway_Guide.pdf"
  ],
  "brunei": [
    "Brunei",
    "Brunei_Gateway_Guide.pdf"
  ],
  "cambodia": [
    "Cambodia",
    "Cambodia_Gateway_Guide.pdf"
  ],
  "china": [
    "China",
    "China_Gateway_Guide.pdf"
  ],
  "india": [
    "India",
    "India_Gateway_Guide.pdf"
  ],
  "indonesia": [
    "Indonesia",
    "Indonesia_Gateway_Guide.pdf"
  ],
  "japan": [
    "Japan",
    "Japan_Gateway_Guide.pdf"
  ],
  "laos": [
    "Laos",
    "Laos_Gateway_Guide.pdf"
  ],
  "malaysia": [
    "Malaysia",
    "Malaysia_Gateway_Guide.pdf"
  ],
  "maldives": [
    "Maldives",
    "Maldives_Gateway_Guide.pdf"
  ],
  "mongolia": [
    "Mongolia",
    "Mongolia_Gateway_Guide.pdf"
  ],
  "myanmar": [
    "Myanmar",
    "Myanmar_Gateway_Guide.pdf"
  ],
  "nepal": [
    "Nepal",
    "Nepal_Gateway_Guide.pdf"
  ],
  "new-zealand": [
    "New Zealand",
    "New_Zealand_Gateway_Guide.pdf"
  ],
  "north-korea": [
    "North Korea",
    "North_Korea_Gateway_Guide.pdf"
  ],
  "pakistan": [
    "Pakistan",
    "Pakistan_Gateway_Guide.pdf"
  ],
  "papua-new-guinea": [
    "Papua New Guinea",
    "Papua_New_Guinea_Gateway_Guide.pdf"
  ],
  "philippines": [
    "Philippines",
    "Philippines_Gateway_Guide.pdf"
  ],
  "singapore": [
    "Singapore",
    "Singapore_Gateway_Guide.pdf"
  ],
  "solomon-islands": [
    "Solomon Islands",
    "Solomon_Islands_Gateway_Guide.pdf"
  ],
  "south-korea": [
    "South Korea",
    "South_Korea_Gateway_Guide.pdf"
  ],
  "sri-lanka": [
    "Sri Lanka",
    "Sri_Lanka_Gateway_Guide.pdf"
  ],
  "taiwan": [
    "Taiwan",
    "Taiwan_Gateway_Guide.pdf"
  ],
  "thailand": [
    "Thailand",
    "Thailand_Gateway_Guide.pdf"
  ],
  "east-timor": [
    "East Timor",
    "East_Timor_Gateway_Guide.pdf"
  ],
  "vietnam": [
    "Vietnam",
    "Vietnam_Gateway_Guide.pdf"
  ],
  "afghanistan": [
    "Afghanistan",
    "Afghanistan_Gateway_Guide.pdf"
  ],
  "armenia": [
    "Armenia",
    "Armenia_Gateway_Guide.pdf"
  ],
  "azerbaijan": [
    "Azerbaijan",
    "Azerbaijan_Gateway_Guide.pdf"
  ],
  "georgia": [
    "Georgia",
    "Georgia_Gateway_Guide.pdf"
  ],
  "kazakhstan": [
    "Kazakhstan",
    "Kazakhstan_Gateway_Guide.pdf"
  ],
  "kyrgyzstan": [
    "Kyrgyzstan",
    "Kyrgyzstan_Gateway_Guide.pdf"
  ],
  "russia": [
    "Russia",
    "Russia_Gateway_Guide.pdf"
  ],
  "tajikistan": [
    "Tajikistan",
    "Tajikistan_Gateway_Guide.pdf"
  ],
  "turkey": [
    "Turkey",
    "Turkey_Gateway_Guide.pdf"
  ],
  "turkmenistan": [
    "Turkmenistan",
    "Turkmenistan_Gateway_Guide.pdf"
  ],
  "uzbekistan": [
    "Uzbekistan",
    "Uzbekistan_Gateway_Guide.pdf"
  ],
  "bahrain": [
    "Bahrain",
    "Bahrain_Gateway_Guide.pdf"
  ],
  "iran": [
    "Iran",
    "Iran_Gateway_Guide.pdf"
  ],
  "iraq": [
    "Iraq",
    "Iraq_Gateway_Guide.pdf"
  ],
  "israel": [
    "Israel",
    "Israel_Gateway_Guide.pdf"
  ],
  "jordan": [
    "Jordan",
    "Jordan_Gateway_Guide.pdf"
  ],
  "kuwait": [
    "Kuwait",
    "Kuwait_Gateway_Guide.pdf"
  ],
  "lebanon": [
    "Lebanon",
    "Lebanon_Gateway_Guide.pdf"
  ],
  "oman": [
    "Oman",
    "Oman_Gateway_Guide.pdf"
  ],
  "palestine": [
    "Palestine (West Bank and Gaza)",
    "Palestine_%28West_Bank_and_Gaza%29_Gateway_Guide.pdf"
  ],
  "qatar": [
    "Qatar",
    "Qatar_Gateway_Guide.pdf"
  ],
  "saudi-arabia": [
    "Saudi Arabia",
    "Saudi_Arabia_Gateway_Guide.pdf"
  ],
  "syria": [
    "Syria",
    "Syria_Gateway_Guide.pdf"
  ],
  "united-arab-emirates": [
    "United Arab Emirates",
    "United_Arab_Emirates_Gateway_Guide.pdf"
  ],
  "yemen": [
    "Yemen",
    "Yemen_Gateway_Guide.pdf"
  ]
};
  var country = new URLSearchParams(location.search).get('country');
  var guide = Object.prototype.hasOwnProperty.call(guides, country) ? guides[country] : null;
  var title = document.getElementById('guide-title');
  var status = document.getElementById('guide-status');
  var frame = document.getElementById('guide-frame');
  var pdf = document.getElementById('guide-pdf');
  if (!guide) {
    title.textContent = 'Guide not found';
    status.textContent = 'Choose a country from the country list to read its guide.';
    return;
  }
  title.textContent = guide[0];
  document.title = guide[0] + ' | Lord Waverley Gateway Guide';
  frame.title = guide[0] + ' Gateway Guide';
  pdf.href = 'assets/guides/pdf/' + guide[1];
  pdf.setAttribute('aria-label', 'Download the PDF guide to ' + guide[0]);
  pdf.hidden = false;
  function unavailable() {
    frame.hidden = true;
    status.hidden = false;
    status.textContent = 'The online guide could not be loaded. You can still download the PDF above.';
  }
  frame.addEventListener('error', unavailable);
  frame.addEventListener('load', function () {
    try {
      var doc = frame.contentDocument;
      if (!doc || !doc.querySelector('.sheet')) { unavailable(); return; }
      // Navigation belongs to this shared page; the source guide stays unchanged.
      var style = doc.createElement('style');
      style.textContent = 'nav.back{display:none !important}html,body{overflow-y:hidden}';
      doc.head.appendChild(style);
      // Links within the document should navigate the full page, not the embedded frame.
      Array.prototype.forEach.call(doc.querySelectorAll('a'), function (link) {
        if (link.getAttribute('href').charAt(0) !== '#') link.target = '_top';
      });
      frame.hidden = false;
      status.hidden = true;
      function resize() {
        frame.style.height = Math.ceil(Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)) + 'px';
      }
      resize();
      if (typeof ResizeObserver !== 'undefined') {
        var observer = new ResizeObserver(resize);
        observer.observe(doc.body);
      }
      window.addEventListener('resize', resize);
      if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(resize);
    } catch (error) {
      // Local file previews may restrict access to the embedded document.
      frame.hidden = false;
      status.hidden = true;
    }
  });
  frame.src = 'assets/guides/html/' + country + '.html';
})();
