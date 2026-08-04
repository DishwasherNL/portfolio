// ══════════════════════════════════════════
// AFBEELDINGEN SCHUIVEN (SLIDER)
// ══════════════════════════════════════════

function slideNav(btn, dir) {
    var wrap = btn.parentElement;
    var slides = wrap.querySelectorAll('.slide');

    // find current active slide
    var currentIndex = 0;
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            currentIndex = i;
        }
    }

    slides[currentIndex].classList.remove('active');

    // wrap around
    var nextIndex = currentIndex + dir;
    if (nextIndex < 0) {
        nextIndex = slides.length - 1;
    }
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    slides[nextIndex].classList.add('active');
}


// ══════════════════════════════════════════
// CASE SELECTEREN (SIDEBAR NAVIGATIE)
// ══════════════════════════════════════════

function select(id) {
    var sidebarItems = document.querySelectorAll('.sidebar-item');
    for (var i = 0; i < sidebarItems.length; i++) {
        sidebarItems[i].classList.remove('active');
    }

    var panels = document.querySelectorAll('.case-panel');
    for (var j = 0; j < panels.length; j++) {
        panels[j].classList.remove('active');
    }

    var clickedItem = document.querySelector('.sidebar-item[data-case="' + id + '"]');
    clickedItem.classList.add('active');

    var panelToShow = document.getElementById(id);
    panelToShow.classList.add('active');

    document.getElementById('content').scrollTop = 0;
}


// ══════════════════════════════════════════
// CONTENT LADEN UIT content.json
// ══════════════════════════════════════════

fetch('content.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        // ── Service Portal ──────────────────────
        document.getElementById('service-portal-title').textContent = data.servicePortal.title;
        document.getElementById('service-portal-intro').textContent = data.servicePortal.intro;
        document.getElementById('service-portal-role').textContent = data.servicePortal.role;

        document.getElementById('service-portal-challenge-p1').textContent = data.servicePortal.challenge[0];
        document.getElementById('service-portal-challenge-p2').textContent = data.servicePortal.challenge[1];

        document.getElementById('service-portal-approach-p1').textContent = data.servicePortal.approach[0];
        document.getElementById('service-portal-approach-p2').textContent = data.servicePortal.approach[1];
        document.getElementById('service-portal-approach-p3').textContent = data.servicePortal.approach[2];

        document.getElementById('service-portal-result-p1').textContent = data.servicePortal.result[0];
        document.getElementById('service-portal-result-p2').textContent = data.servicePortal.result[1];


        // ── CEP Test Tool ────────────────────────
        document.getElementById('cep-title').textContent = data.cep.title;
        document.getElementById('cep-intro').textContent = data.cep.intro;
        document.getElementById('cep-role').textContent = data.cep.role;
        document.getElementById('cep-challenge').textContent = data.cep.challenge;
        document.getElementById('cep-approach').textContent = data.cep.approach;

        document.getElementById('cep-result-p1').textContent = data.cep.result[0];
        document.getElementById('cep-result-p2').textContent = data.cep.result[1];

        document.getElementById('cep-kpi1-value').textContent = data.cep.kpi1value;
        document.getElementById('cep-kpi1-label').textContent = data.cep.kpi1label;
        document.getElementById('cep-kpi2-value').textContent = data.cep.kpi2value;
        document.getElementById('cep-kpi2-label').textContent = data.cep.kpi2label;
        document.getElementById('cep-kpi3-value').textContent = data.cep.kpi3value;
        document.getElementById('cep-kpi3-label').textContent = data.cep.kpi3label;


        // ── Solar Panel Configurator ─────────────
        document.getElementById('gaslicht-solar-title').textContent = data.gaslichtSolar.title;
        document.getElementById('gaslicht-solar-intro').textContent = data.gaslichtSolar.intro;
        document.getElementById('gaslicht-solar-role').textContent = data.gaslichtSolar.role;
        document.getElementById('gaslicht-solar-challenge').textContent = data.gaslichtSolar.challenge;
        document.getElementById('gaslicht-solar-approach').textContent = data.gaslichtSolar.approach;

        document.getElementById('gaslicht-solar-result-text').textContent = data.gaslichtSolar.result + ' ';
        document.getElementById('gaslicht-solar-result-link').textContent = data.gaslichtSolar.resultLinkText;
        document.getElementById('gaslicht-solar-result-link').href = data.gaslichtSolar.resultLinkUrl;

        document.getElementById('gaslicht-solar-kpi1-value').textContent = data.gaslichtSolar.kpi1value;
        document.getElementById('gaslicht-solar-kpi1-label').textContent = data.gaslichtSolar.kpi1label;
        document.getElementById('gaslicht-solar-kpi2-value').textContent = data.gaslichtSolar.kpi2value;
        document.getElementById('gaslicht-solar-kpi2-label').textContent = data.gaslichtSolar.kpi2label;


        // ── Mijn Energie Inzicht ─────────────────
        document.getElementById('gaslicht-energie-title').textContent = data.gaslichtEnergie.title;
        document.getElementById('gaslicht-energie-intro').textContent = data.gaslichtEnergie.intro;
        document.getElementById('gaslicht-energie-role').textContent = data.gaslichtEnergie.role;
        document.getElementById('gaslicht-energie-challenge').textContent = data.gaslichtEnergie.challenge;
        document.getElementById('gaslicht-energie-approach').textContent = data.gaslichtEnergie.approach;
        document.getElementById('gaslicht-energie-result').textContent = data.gaslichtEnergie.result;

        document.getElementById('gaslicht-energie-kpi1-value').textContent = data.gaslichtEnergie.kpi1value;
        document.getElementById('gaslicht-energie-kpi1-label').textContent = data.gaslichtEnergie.kpi1label;
        document.getElementById('gaslicht-energie-kpi2-value').textContent = data.gaslichtEnergie.kpi2value;
        document.getElementById('gaslicht-energie-kpi2-label').textContent = data.gaslichtEnergie.kpi2label;


    })
    .catch(function(error) {
        console.error('Content kon niet geladen worden:', error);
    });