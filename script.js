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