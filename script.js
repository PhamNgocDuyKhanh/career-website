// Darkmode function
        const checkbox = document.querySelector('.checkbox');
        checkbox.addEventListener('change', function() {
          document.body.classList.toggle('dark');
          // Update text color of the banner section
          const bannerText = document.getElementById('banner');
          bannerText.classList.toggle('dark');
        });
        document.addEventListener('DOMContentLoaded', function() {
          const checkboxes = document.querySelectorAll('.toggle');
          checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', function() {
              checkboxes.forEach((c) => {
                if (c !== this) {
                  c.checked = false;
                }
              });
            });
          });
        });
        
// Job search function
        function myFunction() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myjobsTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
  // Photo slider
      const mySwiper = new Swiper('.swiper-container', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          speed: 300,
          mousewheel: true,
          coverflowEffect: {
            rotate: 30,
            slideShadows: true
          },
          // pagination
          pagination: {
            el: '.swiper-pagination',
          },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          // Slider scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
// Get all the card elements
var cards = document.querySelectorAll(".cards .card");

// Loop through each card element
for (var i = 0; i < cards.length; i++) {
// Add a touchstart event listener
cards[i].addEventListener("touchstart", function() {
// Toggle the hover class
this.classList.toggle("hover");
});
}

/* Add a hover class with the same styles as the hover selector */
.cards .card.hover {
transition: all 0.2s ease-out;
box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.3);
top: -4px;
background-color: #efefef;
}
