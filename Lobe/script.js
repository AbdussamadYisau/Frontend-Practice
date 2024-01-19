function playVideo() {
    var modal = document.getElementById('videoModal');
    var iframe = modal.querySelector('.video-iframe');

    modal.style.display = 'block';
    iframe.src = "https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1";
}

function closeModal() {
    var modal = document.getElementById('videoModal');
    var iframe = modal.querySelector('.video-iframe');

    modal.style.display = 'none';
    iframe.src = ""; // Reset the iframe source to stop the video
}


  function openModal() {
    document.getElementById('videoModal').style.display = 'block';
  }


  document.body.addEventListener('click', function(event) {
    var modal = document.getElementById('videoModal');
    var poster = document.querySelector('.video-poster');
    var container = document.querySelector('.video-background-container');
    var image = document.querySelector('.video-image');

    // Check if the click event occurred outside of the modal and not on the video poster
    if (!modal.contains(event.target) && modal.style.display === 'block' && event.target !== poster && event.target !== container && event.target !== image) {
        closeModal();
    }
});


function clickHamburgerMenu() {
  var mobileNavLinks = document.getElementById('mobileNavLinks');
  mobileNavLinks.classList.toggle('mobile-links-active');

  var mobileHamburger = document.getElementById('mobileHamburger');
  mobileHamburger.classList.toggle('active');

  const overlay = document.getElementById('overlay');

  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
}