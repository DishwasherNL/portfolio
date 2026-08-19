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

function setText(id, value) {
    var el = document.getElementById(id);
    if (el) {
        el.textContent = value;
    }
}

function setAttr(id, attr, value) {
    var el = document.getElementById(id);
    if (el) {
        el[attr] = value;
    }
}

fetch('content.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        // ── About Me ──────────────────────
        setText('about-me-title', data.aboutMe.title);

        var expContainer = document.getElementById('about-me-experience');
        data.aboutMe.experience.forEach(function (job) {
            var entry = document.createElement('div');
            entry.className = 'work-entry';
            entry.innerHTML =
                '<div class="work-logo-frame">' +
                '<img class="work-logo" src="' + job.logo + '" alt="" onerror="this.style.display=\'none\'">' +
                '</div>' +
                '<div class="work-entry-content">' +
                '<div class="work-entry-header">' +
                '<span class="work-company">' + job.company + '</span>' +
                '</div>' +
                '<p class="work-desc">' + job.description + '</p>' +
                '</div>';
            expContainer.appendChild(entry);
        });

        setText('about-me-title', data.aboutMe.title);
        setAttr('about-me-photo', 'src', data.aboutMe.photo);
        setText('about-me-email', data.aboutMe.email);

        setText('about-me-howiwork-p1', data.aboutMe.howIWork[0]);
        setText('about-me-howiwork-p2', data.aboutMe.howIWork[1]);

        setText('about-me-personal-p1', data.aboutMe.personal[0]);

        // ── Service Portal ──────────────────────
        setText('service-portal-title', data.servicePortal.title);
        setText('service-portal-intro', data.servicePortal.intro);
        setText('service-portal-role', data.servicePortal.role);

        setText('service-portal-challenge-p1', data.servicePortal.challenge[0]);
        setText('service-portal-challenge-p2', data.servicePortal.challenge[1]);

        setText('service-portal-approach-p1', data.servicePortal.approach[0]);
        setText('service-portal-approach-p2', data.servicePortal.approach[1]);
        setText('service-portal-approach-p3', data.servicePortal.approach[2]);

        setText('service-portal-result-p1', data.servicePortal.result[0]);
        setText('service-portal-result-p2', data.servicePortal.result[1]);

        // ── Control Hmi ──────────────────────
        setText('control-hmi-title', data.controlHmi.title);
        setText('control-hmi-intro', data.controlHmi.intro);
        setText('control-hmi-role', data.controlHmi.role);

        setText('control-hmi-challenge-p1', data.controlHmi.challenge[0]);

        setText('control-hmi-approach-p1', data.controlHmi.approach[0]);
        setText('control-hmi-approach-p2', data.controlHmi.approach[1]);

        setText('control-hmi-result-p1', data.controlHmi.result[0]);
        setText('control-hmi-result-p2', data.controlHmi.result[1]);

        // ── CEP Test Tool ────────────────────────
        setText('cep-title', data.cep.title);
        setText('cep-intro', data.cep.intro);
        setText('cep-role', data.cep.role);
        setText('cep-challenge', data.cep.challenge);
        setText('cep-approach', data.cep.approach);

        setText('cep-result-p1', data.cep.result[0]);
        setText('cep-result-p2', data.cep.result[1]);

        setText('cep-kpi1-value', data.cep.kpi1value);
        setText('cep-kpi1-label', data.cep.kpi1label);
        setText('cep-kpi2-value', data.cep.kpi2value);
        setText('cep-kpi2-label', data.cep.kpi2label);
        setText('cep-kpi3-value', data.cep.kpi3value);
        setText('cep-kpi3-label', data.cep.kpi3label);

        // ── Solar Panel Configurator ─────────────
        setText('gaslicht-solar-title', data.gaslichtSolar.title);
        setText('gaslicht-solar-intro', data.gaslichtSolar.intro);
        setText('gaslicht-solar-role', data.gaslichtSolar.role);
        setText('gaslicht-solar-challenge', data.gaslichtSolar.challenge);
        setText('gaslicht-solar-approach', data.gaslichtSolar.approach);

        setText('gaslicht-solar-result-text', data.gaslichtSolar.result + ' ');
        setText('gaslicht-solar-result-link', data.gaslichtSolar.resultLinkText);
        setAttr('gaslicht-solar-result-link', 'href', data.gaslichtSolar.resultLinkUrl);

        setAttr('gaslicht-solar-kpi1-icon', 'src', data.gaslichtSolar.kpi1icon);
        setText('gaslicht-solar-kpi1-value', data.gaslichtSolar.kpi1value);
        setText('gaslicht-solar-kpi1-label', data.gaslichtSolar.kpi1label);
        setText('gaslicht-solar-kpi2-value', data.gaslichtSolar.kpi2value);
        setText('gaslicht-solar-kpi2-label', data.gaslichtSolar.kpi2label);

        // ── Mijn Energie Inzicht ─────────────────
        setText('gaslicht-energie-title', data.gaslichtEnergie.title);
        setText('gaslicht-energie-intro', data.gaslichtEnergie.intro);
        setText('gaslicht-energie-role', data.gaslichtEnergie.role);
        setText('gaslicht-energie-challenge', data.gaslichtEnergie.challenge);
        setText('gaslicht-energie-approach', data.gaslichtEnergie.approach);
        setText('gaslicht-energie-result', data.gaslichtEnergie.result);

        setText('gaslicht-energie-kpi1-value', data.gaslichtEnergie.kpi1value);
        setText('gaslicht-energie-kpi1-label', data.gaslichtEnergie.kpi1label);
        setText('gaslicht-energie-kpi2-value', data.gaslichtEnergie.kpi2value);
        setText('gaslicht-energie-kpi2-label', data.gaslichtEnergie.kpi2label);

    })
    .catch(function (error) {
        console.error('Content kon niet geladen worden:', error);
    });