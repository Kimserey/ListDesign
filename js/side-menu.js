(function ($) {
    $(document).ready(function () {
        var _show_ = 'show';
        var $sidemenu = $('#side-menu');
        var $mask = $('#mask');

        $('#side-menu-btn').click(function () {
            $sidemenu.addClass(_show_);
            $mask.addClass(_show_);
        });

        $mask.click(function () {
            $sidemenu.removeClass(_show_);
            $mask.removeClass(_show_);
        })
    });
}(jQuery));