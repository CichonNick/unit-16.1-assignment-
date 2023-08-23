// question #1

alert("Lets get ready to party with jQuery!")

// question #2

const $img = $('img')

$img.addClass('image-center')

// question #3

$("#title").css("font-size", Math.random() * 100)

// question #4
$('p').last().remove();

// question #5

$('ol').prepend('<li>I just added this in here!</li>');

// question #6

$('ol').remove()
$('aside').append('<p>I apologies for the list being there.</p>')

// question #7

$(".form-control").on('keyup blur change', function(){
    let red = $(".for,-control").eq(0).val();
    let blue = $(".for,-control").eq(1).val();
    let grenn = $(".for,-control").eq(2).val();
    $("body").css("background-color", "rgb("+ red +", "+ green +", "+ blue +")");
});

// question #8
$('img').on('click', function(img){
$(img.target).remove();
});