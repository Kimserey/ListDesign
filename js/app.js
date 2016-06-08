function toggleCardLens(el) {
    var content = document.getElementById(el.dataset.target);

    if(el.classList.contains('expend')) {
        el.classList.remove('expend');
        content.classList.remove('expend');
    } else {
        el.classList.add('expend');
        content.classList.add('expend');
    }
}

function toggleFilter() {
    var el = document.getElementById('filter');

    if(el.classList.contains('show')) {
        el.classList.remove('show');
    } else {
        el.classList.add('show');
    }
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