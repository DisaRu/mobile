19
    window.onload = function () {
20
        var scr = $(".scroll");
21
        scr.mousedown(function () {
22
            var startX = this.scrollLeft + event.pageX;
23
            var startY = this.scrollTop + event.pageY;
24
            scr.mousemove(function () {
25
                this.scrollLeft = startX - event.pageX;
26
                this.scrollTop = startY - event.pageY;
27
                return false;
28
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
