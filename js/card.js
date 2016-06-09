(function ($) {
    var _active_ = 'active';

    function expendCard ($this) {
        $this.addClass(_active_);
        $('#' + $this.data().content).addClass(_active_);
    }

    function hideCard ($this) {
        $this.removeClass(_active_);
        $this$('#' + $this.data().content).removeClass(_active_);
    }

    $(document).ready(function () {
        $('.card-list-item').click(function () {
            if ($(this).hasClass(_active_)) {
                hideCard($(this));
            } else {
                expendCard($(this));
            }
        });
    });
}(jQuery));