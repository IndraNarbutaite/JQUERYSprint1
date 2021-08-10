$(document).ready(function() {
    $('#btn').on('click', function() {
        let width = $('#width').val();
        let height = $('#height').val();
        let color = $('#color').val();


        let block = $('<div class=block ></div>').animate({

            width: $('#width').val(),
            height: $('#height').val(),
        }).addClass($('#color').val());
        $('#container').append(block);



        $('#container').on('click', function() {
            $(this).animate({
                top: '10px',
                right: '10px',
                opacity: '50%'
            }, 200, 'linear', function() {
                $(this).animate({
                    left: '10px',
                    bottom: '30px',
                    opacity: '0%'
                }, 100);
            });
        });
    });


});