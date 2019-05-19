// Google map custom code

function initMap() {

  var styledMapType = new google.maps.StyledMapType(
    [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dadada"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#c9c9c9"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }
    ], {
      name: 'Styled Map'
    });

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 35.444395,
      lng: 139.639374
    },
    zoom: 13,
    mapTypeControl: false,
  });

  var iconBase ='https://maps.google.com/mapfiles/kml/shapes/';
  var yokohama_stadium = {lat: 35.443346, lng: 139.640061};
  var marker = new google.maps.Marker({
      position: yokohama_stadium,
      animation: google.maps.Animation.DROP,
      map: map,
      title: 'Yokohama Stadium'
    });


    marker.setMap(map);
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
}









(function($) {
  "use strict";

  // manual carousel controls
  $('.next').click(function() {
    $('.carousel').carousel('next');
    return false;
  });
  $('.prev').click(function() {
    $('.carousel').carousel('prev');
    return false;
  });

})(jQuery);

var weekday = new Array(7);
weekday[0] = "SUN";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
var months = new Array(12);
months[0] = "JAN";
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
var thismonth = months[today.getMonth()];
var todayday = weekday[today.getDay()];


$('.day').text(todayday);
$('.date').text(todaydate);
$('.month').text(thismonth);


$(document).ready(function() {
  $("select.fillters").change(function() {
    var value = $(this).children("option:selected").val();
    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }

  });
});

// $(document).ready(function(){
//
//
//
//     $(".filter-button").click(function(){
//
//         var value = $(this).attr('data-filter');
//         if(value == "all")
//         {
//             //$('.filter').removeClass('hidden');
//             $('.filter').show('1000');
//         }
//         else
//         {
// //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//             $(".filter").not('.'+value).hide('3000');
//             $('.filter').filter('.'+value).show('3000');
//
//         }
//     });
//
//     if ($(".filter-button").removeClass("active")) {
// $(this).removeClass("active");
// }
// $(this).addClass("active");
//
// });

$(document).ready(function() {

  // $('.inner_tab_container').on('click','input[type="checkbox"]',function(){
  //     var inputvalue = $(this).val();
  //     console.log(inputvalue);
  //     if($(this).is( ":checked" )){
  //
  //         $('.filter[data-'+inputvalue+']').each(function(){
  //             var attributValue = $(this).attr('data-'+inputvalue+'');
  //             if(attributValue != 't'){
  //                 $(this).hide();
  //             }
  //         });
  //     }
  //     else{
  //     //Show all (this still needs to check what other options are still selected)
  //         $('.filter[data-'+inputvalue+']').show();
  //     }
  //
  // });
  //
  // $('.drop_down_filter').on('change','.fillters', function(){
  //
  //     var selectedValue = $(this).val();
  //     $(".filter[data-category]").each(function(){
  //         var data_categ = $(this).attr('data-category');
  //         if (data_categ.indexOf(selectedValue) < 0){
  //             $(this).hide();
  //         }else{
  //             //Show all (this still needs to check what other options are still selected)
  //             $(this).show();
  //         }
  //         if(selectedValue == 'showall' || selectedValue == 'category'){
  //             //Show all (this still needs to check what other options are still selected)
  //             $(this).show();
  //         }
  //     });
  // });


  // var $products =$('.filter'),
  // $checks = $('.inner_tab_container input[type="checkbox"]'),
  // $category = $('.inner_tab_container select.fillters');
  //
  // $('.drop_down_filter').on('change','.fillters', function(){
  //   var $lis = $products,
  //   category = $category.val(),
  //   $checked = $checks.filter(':checked');
  //
  // if(category != 'showall' || category != 'category'){
  //   $lis = $lis.filter(function() {
  //       return $(this).data('category').indexOf(category) >= 0;
  //     });
  // }
  //
  //
  // if ($checked.length) {
  //     $checked.each(function() {
  //       $lis = $lis.filter('[data-' + $(this).val() + '="t"]');
  //     }).get();
  //   }
  //
  //   $lis.show();
  //    $products.not($lis).hide()
  //
  // });




});



$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {} else if ($(this).prop("checked") == false) {

    }
  });
});



$('.readmore').click(function() {
  event.preventDefault();
  var $el = $(this);
  var $p = $el.parent();
  if ($p.children('p+.mob_d')) {
    $p.children('p+.mob_d').toggleClass('mob_drop_vis mob_drop');
  }
});


//tab

$(document).ready(function() {
  $('#pills-map-tab').click(function() {
    $('#pills-map-tab img').attr('src', 'img/map_view.png');
    $('#pills-venu-tab img').attr('src', 'img/picture_view_disable.png');
    $('.drop_down_filter').css('display', 'none');
    $('.plus').css('display', 'none');
    $('.checkbox').css('display', 'none');
    $('.kids_lable').css('display', 'none');

    if ($(window).width() < 500) {
      $('.tab_container').css('width', '80px');
    } else if ($(window).width() > 500) {
      $('.tab_container').css('width', '180px');
    }

  });
  $('#pills-venu-tab').click(function() {
    $('#pills-map-tab img').attr('src', 'img/map_viewdisable.png');
    $('#pills-venu-tab img').attr('src', 'img/picture_view.png');
    $('.drop_down_filter').show();
    $('.plus').show();
    $('.checkbox').show();
    $('.kids_lable').show();

    if ($(window).width() < 500) {
      $('.tab_container').css('width', '100%');
    } else if ($(window).width() > 500 && $(window).width() <= 768) {
      $('.tab_container').css('width', '400px');
    } else if ($(window).width() > 769 && $(window).width() <= 1200) {
      $('.tab_container').css('width', '600px');
    } else if ($(window).width() > 1200) {
      $('.tab_container').css('width', '660px');
    }
  });
})









$('.checkbox').on('click', 'input[type="checkbox"]', function() {
  var inputvalue = $(this).val();
  if ($(this).is(":checked")) {
    $('li[data-' + inputvalue + ']').each(function() {
      var attributValue = $(this).attr('data-' + inputvalue + '');
      if (attributValue != 't') {
        $(this).hide();
      }
    });
  } else {
    //Show all (this still needs to check what other options are still selected)
    $('li[data-' + inputvalue + ']').show();
  }
});

$('#refine').on('change', '.category', function() {
  var selectedValue = $(this).val();
  $("li[data-category]").each(function() {
    var data_categ = $(this).attr('data-category');
    if (data_categ.indexOf(selectedValue) < 0) {
      $(this).hide();
    } else {
      //Show all (this still needs to check what other options are still selected)
      $(this).show();
    }
    if (selectedValue == 'showall') {
      //Show all (this still needs to check what other options are still selected)
      $(this).show();
    }
  });
});
