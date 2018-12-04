$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('#header-nav').addClass('bg-primary');
    } else {
        $('#header-nav').removeClass('bg-primary');
    }
});

function myFunction() {
    let myVar;
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

$('.nav-link').click(function() {
    $('.nav-item').removeClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        $( this ).parent().addClass('active');
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 60
            }, 500);
            return false;
        }
    }
});