function toggle(el) {
    if(el.classList.contains('show')) {
        el.classList.remove('show');
    } else {
        el.classList.add('show');
    }
}

function toggleCardLens(el) {
    toggle(document.getElementById(el.dataset.target));
}

function toggleFilter() {
    toggle(document.getElementById('filter'));
}

function toggleMenu() {
    var mask = document.getElementById('mask');
    var menu = document.getElementById('side-menu');
    var body = document.body;
    
    var show = function () {
        mask.classList.add('show');
        menu.classList.add('show');
        body.classList.add("disable-scroll");
    }
    
    var hide = function () {
        mask.classList.remove('show');
        menu.classList.remove('show');
        body.classList.remove('disable-scroll');
    }
    
    if(mask.classList.contains('show')) {
        hide();
    } else {
        show();
    }
}