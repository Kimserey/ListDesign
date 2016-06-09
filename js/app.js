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


    console.log(el.id);
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

$(function() {
    $('.card-list-item')
        .click(function (e) {
            $(this).toggleClass('active');
            var content = $(this).data('toggle');
            var target = $(this).data('display');
            $('#' + content).toggleClass('active');
            $('.' + target).toggleClass('active');
        });

    $('.card-list-item-header-action')
        .click(function (e) {
            var content = $(this).data('toggle');
            var target = $(this).data('display');

            $(this).toggleClass('active');
            $(this).parent().toggleClass('active');
            $('#' + content).toggleClass('active');
            $('.' + target).toggleClass('active');
        });
});