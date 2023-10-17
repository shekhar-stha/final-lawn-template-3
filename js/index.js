
AOS.init();


$('.testimonials-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-chevron-left left-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right right-arrow"></i>',
  dots: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: false,
      }
    }
  ]
});


window.addEventListener('load', function () {
  if (window.innerWidth > 992) {
    const sectionPairs = document.querySelectorAll('.about-us-flex');

    sectionPairs.forEach(pair => {
      const imgSection = pair.querySelector('.img-div');
      const infoSection = pair.querySelector('.info-div');

      const infoHeight = infoSection.clientHeight;
      imgSection.style.height = `${infoHeight}px`;
    });
  }
});
let showAll = true;

function toggleReviews() {
  showAll = !showAll;

  const reviews = document.querySelectorAll('.review');
  const showMoreBtn = document.querySelector('.show-more-btn');

  reviews.forEach((review, index) => {
    if (showAll || index < 10) {
      review.style.display = 'block';
    } else {
      review.style.display = 'none';
    }
  });

  if (showAll) {
    showMoreBtn.textContent = 'Show Less';
  } else {
    showMoreBtn.textContent = 'Show All';
  }
}


$(document).ready(function () {
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });
});

document.addEventListener("DOMContentLoaded", function () {


  var paragraphs = document.querySelectorAll(".testimonial-slider .data");

  function setEqualHeight(columns) {
    if (window.innerWidth > 992) {
      var tallestColumn = 0;
      columns.forEach(function (column) {
        column.style.height = "auto";
        var columnHeight = column.offsetHeight;
        if (columnHeight > tallestColumn) {
          tallestColumn = columnHeight;
        }
      });
      columns.forEach(function (column) {
        column.style.height = tallestColumn + "px";
      });
    }
  }

  var columns = document.querySelectorAll(".testimonial-slider .column");
  setEqualHeight(columns);

  window.addEventListener("resize", function () {
    setEqualHeight(columns);
  });

  toggleReviews();
});
