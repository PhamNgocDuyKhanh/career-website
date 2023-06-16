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

// Carousel Slider 
  const carouselInner = document.getElementById('carousel-inner');
  const carouselIndicators = document.getElementById('carousel-indicators');
  const carouselItems = carouselInner.getElementsByClassName('item');

  for (let i = 0; i < carouselItems.length; i++) {
    const indicator = document.createElement('li');
    indicator.setAttribute('data-target', '#myCarousel');
    indicator.setAttribute('data-slide-to', i.toString());
    if (i === 0) {
      indicator.classList.add('active');
    }
    carouselIndicators.appendChild(indicator);
  }

// CV submit form 
  function showForm() {
    var formContainer = document.getElementById("formContainer");
    var applyNowButton = document.getElementsByClassName("apply-now-button")[0];
    
    formContainer.style.display = "block";
    applyNowButton.style.display = "none";
  }
