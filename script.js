document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const emoji = document.getElementById("emoji");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const rating = this.getAttribute("data-rating");
      updateStars(rating);
      updateEmoji(rating);
    });
  });

  function updateStars(rating) {
    stars.forEach((star) => {
      star.classList.remove("active");
      if (star.getAttribute("data-rating") <= rating) {
        star.classList.add("active");
      }
    });
  }

  function updateEmoji(rating) {
    let emojiChar;
    switch (rating) {
      case "1":
        emojiChar = "&#128543;"; // sad face
        break;
      case "2":
        emojiChar = "&#128542;"; // disappointed face
        break;
      case "3":
        emojiChar = "&#128528;"; // neutral face
        break;
      case "4":
        emojiChar = "&#128515;"; // smiling face
        break;
      case "5":
        emojiChar = "&#128526;"; // cool face
        break;
      default:
        emojiChar = "&#128543;"; // sad face
    }
    emoji.innerHTML = emojiChar;
  }
});
