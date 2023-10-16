var image = [
  "assets/img/banner.jpeg",
  "assets/img/banner2.jpg",
  "assets/img/banner3.png",
  "assets/img/banner4.jpg",
  "assets/img/banner4.jpg",
  "assets/img/banner5.jpg",
  "assets/img/banner6.jpg",
  "assets/img/banner7.jpg",
  "assets/img/banner8.jpg",
  "assets/img/banner9.jpg",
  "assets/img/banner10.jpg",
  "assets/img/banner11.jpg_large",
  "assets/img/banner12.jpg",
  "assets/img/banner13.jpg",
  "assets/img/banner14.png",
  "assets/img/banner15.jpg",
  "assets/img/banner16.jpg",
  "assets/img/banner17.jpg",
  "assets/img/banner18.jpg",
  "assets/img/banner19.jpg",
  "assets/img/banner20.jpg",
];

var index = 0;
function next() {
  index++;
  if (index >= image.length) {
    index = 0;
  }
  document.getElementById("img-feature").src = image[index];
}
function prev() {
  if (index == 0) {
    index = image.length;
  } else {
    index--;
  }
  document.getElementById("img-feature").src = image[index];
}
setInterval(function () {
  next();
}, 2000);

function changeImage(x, image) {
  if (x == 1) {
    image.src = "assets/img/box2.webp";
  }
  if (x == 2) {
    image.src = "assets/img/product2.jpg";
  }
}
function change(x, image) {
  if (x == 1) {
    image.src = "assets/img/box1.webp";
  }
  if (x == 2) {
    image.src = "assets/img/product1.jpg";
  }
}
function img(x, image) {
  if (x == 1) {
    image.src = "assets/img/box3.jpeg";
  }
  if (x == 2) {
    image.src = "assets/img/product3.jpg";
  }
}
function chuyenanh(x, image) {
  if (x == 1) {
    image.src = "assets/img/box4.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product4.jpg";
  }
}
function chuyenhinhanh(x, image) {
  if (x == 1) {
    image.src = "assets/img/box5.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product5.jpg";
  }
}
function changethis(x, image) {
  if (x == 1) {
    image.src = "assets/img/box6.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product6.jpg";
  }
}
function chuyenimg(x, image) {
  if (x == 1) {
    image.src = "assets/img/box7.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product7.jpg";
  }
}
function chuyendoihinhanh(x, image) {
  if (x == 1) {
    image.src = "assets/img/box8.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product8.jpg";
  }
}
function imgchange(x, image) {
  if (x == 1) {
    image.src = "assets/img/box9.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product9.jpg";
  }
}
function imagechange(x, image) {
  if (x == 1) {
    image.src = "assets/img/product10.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/box10.jpeg";
  }
}
function imageechange(x, image) {
  if (x == 1) {
    image.src = "assets/img/box11.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product11.jpg";
  }
}
function anhchange(x, image) {
  if (x == 1) {
    image.src = "assets/img/box12.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product12.jpg";
  }
}
function imgchange13(x, image) {
  if (x == 1) {
    image.src = "assets/img/product13.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/box13.jpg";
  }
}
function imgchange14(x, image) {
  if (x == 1) {
    image.src = "assets/img/box14.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product14.jpg";
  }
}
function imgchange15(x, image) {
  if (x == 1) {
    image.src = "assets/img/box15.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product15.jpg";
  }
}
function imgchange16(x, image) {
  if (x == 1) {
    image.src = "assets/img/box16.jpg";
  }
  if (x == 2) {
    image.src = "assets/img/product16.jpg";
  }
}
function bannerchange(x, image) {
  if (x == 1) {
    image.src = "assets/img/bannermars.jpg";
  }
  if (x == 2) {
    image.src = "./assets/img/silde.jpg";
  }
}

window.onload = function () {
  var minute = 5;
  var sec = 60;
  setInterval(function () {
    document.getElementById("timer").innerHTML = minute + ":" + sec;
    document.getElementById("timer1").innerHTML = minute + ":" + sec;
    sec--;

    if (sec == 0) {
      minute--;
      sec = 60;

      if (minute == 0) {
        minute = 5;
      }
    }
  }, 1000);
};
