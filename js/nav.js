function toggleFilter() {
    var filter = document.getElementById('filter');
    
    var show = function () {
        filter.classList.add('show');
    }
    
    var hide = function () {
        filter.classList.remove('show');
    }
    
    if(filter.classList.contains('show')) {
        hide();
    } else {
        show();
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