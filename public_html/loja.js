$(document).ready(function () {
    console.log("Olá, mundo!");

    $('#preco-min').on('input', function () {
        var min = $('#preco-min').val();
        console.log(`preco-min: ${min}`);
        $('#valor-min').html(min);
    });

    $('#preco-max').on('input', function () {
        var max = $('#preco-max').val();
        console.log(`preco-max: ${max}`);
        $('#valor-max').html(max);
    });

});
