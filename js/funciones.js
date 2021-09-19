jQuery(document).ready(listo);

alert("Bienvenido/a")

function listo(){
    jQuery(".ham").click(function(e){
        e.preventDefault();
        jQuery("header .contenedor nav").toggleClass("open");
        jQuery(".ham i").toggleClass("fa-times");

})};

jQuery("header .contenedor nav a").click(function(){

    jQuery("header .contenedor nav").removeClass("open");

    jQuery(".ham i").removeClass("fa-times");
    var lugar = jQuery(this).attr("href");
    
    jQuery("html, body").animate({
        "scrollTop": jQuery(lugar).offset().top
})
});



