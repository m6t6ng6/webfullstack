$(document).ready(function(){
    $('input[type=text]').focusout(function() {
        if ($(this).val() == "") {
            $(this).css('border', '1px solid red');
            $(".oculta").css('display', 'block');
            $(".oculta").addClass('feedback');
            $(".oculta").text("Debe ingresar su nombre");
        } else {
            $(this).css('border', '1px solid green');
        }
    });
});