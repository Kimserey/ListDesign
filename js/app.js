function togglePanel() {
    $('.panel-left, .panel-right').toggleClass('active');
}

function toggleCardDetails(el) {
    //reset all expended card item
    $('.card-list-item, .card-list-item-content').removeClass('expend');

    //expend title and details
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