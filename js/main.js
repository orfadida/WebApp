$(this).ready(function() {
    $(".tabs li").click(function() {
        $(this).css({"background":"#e2e1e1"})
        $(".tabs a").click(function() {
            $("a").css({"color":"#000"})
            })
    });
});
