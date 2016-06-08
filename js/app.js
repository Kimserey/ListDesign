function togglePanel() {
    $('.panel-left, .panel-right').toggleClass('active');
}

function toggleCardDetails(el) {
    $(el).toggleClass('expend');
    $('#' + el.dataset.target).toggleClass('expend');
}

function toggleFilter() {
    $('#filter').toggleClass('show');
}

function toggleMenu() {
    $('#mask, #side-menu').toggleClass('show');
    $('body').toggleClass('disable-scroll');
}