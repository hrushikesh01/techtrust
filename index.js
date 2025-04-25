document.addEventListener("DOMContentLoaded", () => {
  const featureSlider = document.querySelector('.feature-slider');
  const features = document.querySelectorAll('.feature');
  let currentFeature = 0;
  const totalFeatures = features.length;

  function slideNextFeature() {
    currentFeature = (currentFeature + 1) % totalFeatures;
    featureSlider.style.transition = "transform 1s ease-in-out";
    featureSlider.style.transform = `translateX(-${currentFeature * 100}vw)`;
  }

  setInterval(slideNextFeature, 3000);

  // Redirect function for "View Details"
  window.redirectToLogin = function () {
    window.location.href = "login.html";
  };
});
