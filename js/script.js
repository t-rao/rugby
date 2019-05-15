function initMap() {
  var uluru = {lat: 35.443899, lng: 139.640169};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}

(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

})(jQuery);

var weekday = new Array(7);
  weekday[0] =  "SUN";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  var months = new Array(12);
    months[0] =  "JAN";
    months[1] = "FRB";
    months[2] = "MAR";
    months[3] = "APR";
    months[4] = "MAY";
    months[5] = "JUN";
    months[6] = "JUl";
    months[7] = "AUG";
    months[8] = "SEP";
    months[8] = "OCT";
    months[10] = "NOV";
    months[11] = "DEC";

  var today = new Date();
  var todaydate = today.getDate();
  var thismonth =  months[today.getMonth()];
  var todayday = weekday[today.getDay()];


$('.day').text(todayday);
$('.date').text(todaydate);
$('.month').text(thismonth);


$(document).ready(function(){
    $("select.fillters").change(function(){
        var value = $(this).children("option:selected").val();
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }

    });
});

$(document).ready(function(){



    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
