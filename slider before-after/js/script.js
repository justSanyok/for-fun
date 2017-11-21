$(document).ready(function() {	
       $('.wrapper-photo img').click(function(){
        $('.wrapper-photo img').removeClass('active');
    		    $(this).addClass('active');

            var imgSrc = $(this).attr("src");
            $('#container img[alt="before"]').attr({src: imgSrc.replace("img/","img/before_")});
            $('#container img[alt="after"]').attr({src: imgSrc});
});
});