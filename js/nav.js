/* =======================================================================
 * Toggle side menu
 * Requires: mask - side menu
 * ======================================================================= */
 
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