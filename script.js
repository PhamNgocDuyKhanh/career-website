// Darkmode function
/*/       const checkbox = document.querySelector('.checkbox');
//        checkbox.click();
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
        */
document.addEventListener('DOMContentLoaded', function() {
  // Set dark mode as default
  document.body.classList.add('dark');
  const bannerText = document.getElementById('banner');
  bannerText.classList.add('dark');

  // Add event listener to the checkbox for toggling dark mode
  const checkbox = document.querySelector('.checkbox');
  checkbox.addEventListener('change', function() {
    document.body.classList.toggle('dark');
    bannerText.classList.toggle('dark');
  });

  // Add event listener to all toggle checkboxes
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

// CV Submit
function openEmailClient() {
  var position = "Job Position"; // Replace with the actual position value
  
  var subject = encodeURIComponent("Application for " + position);
  
  var mailtoLink = "mailto:khanh.phamngocduy@positivethinking.tech?subject=" + subject;
  
  window.open(mailtoLink);
}
