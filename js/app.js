function test(el) {
    $(el).toggleClass('active');
}

function toggleCardDetails(el) {
    //reset all expended card item
    $('.card-list-item, .card-list-item-content')
        .not('#' + el.id + "," + '#' + el.dataset.target)
        .removeClass('expend');

    //expend title and details
    $(el).toggleClass('expend');
    $('#' + el.dataset.target).toggleClass('expend');
}

function toggleFilter() {
    $('#filter').toggleClass('show');
}

function toggleMask() {
    $('#mask').toggleClass('show');
    $('body').toggleClass('disable-scroll');
}

function toggleMenu() {
    $('#side-menu').toggleClass('show');
    toggleMask();
}