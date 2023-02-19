
window.onload = function () {

        var scr = $(".scroll");

        scr.mousedown(function () {

                var startX = this.scrollLeft + event.pageX;

                var startY = this.scrollTop + event.pageY;
                scr.mousemove(function () {

                        this.scrollLeft = startX - event.pageX;
                        this.scrollTop = startY - event.pageY;

                        return false;

                });
                29
        });
        30
        $(window).mouseup(function () {
                31
                scr.off("mousemove");
                32
        });
        33
}
