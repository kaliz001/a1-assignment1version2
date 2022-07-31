function swap_language_image() {
    var current_image = document.getElementById("Image_To_Switch").src;
    if (current_image == "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png") {
      document.getElementById("Image_To_Switch").src =
      "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png";
    } else if (current_image == "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png") {
      document.getElementById("Image_To_Switch").src =
      "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png";
    } else {
      document.getElementById("Image_To_Switch").src =
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg";
    }
  }
  
  setInterval(swap_language_image, 2000);