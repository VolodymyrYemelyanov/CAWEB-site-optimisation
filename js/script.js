let pass1 = document.querySelector('#popUp-pass1');
let pass2 = document.querySelector('#popUp-pass2');

pass2.addEventListener('keyup', function () {
  if (pass1.value !== pass2.value) {
    pass2.style.borderBottom = '3px solid #ff7730';
  } else {
    pass2.style.borderBottom = '3px solid #55c57a';
  }
});

function initMap() {
  // The location of Uluru
  var uluru = {
    lat: 43.694794,
    lng: 7.260665,
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

$(document).ready(function () {
  $('#btn-job-category').click(function () {
    var btnCategoryText = $('#btn-job-category-text').html();
    $('#job-category-hidden').toggleClass('job-category-hidden');
    if (btnCategoryText === 'See more') {
      $('#btn-job-category-text').html('See less');
    } else {
      $('#btn-job-category-text').html('See more');
    }
  });

  $('.btn__link').click(function () {
    $('#popUp').removeClass('hide-popUp');
  });

  $('.popUp__close').click(function () {
    $('#popUp').addClass('hide-popUp');
  });
});
