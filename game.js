var imgs = document.getElementsByTagName("img");

for (var i = 0; i < imgs.length; i++) {
  imgs[i].setAttribute("src", "Moon.gif");
}
var counter = 0;

for (var i = 0; i < imgs.length; i++) {
  var srcImg = [];
  var indexImg = [];
  imgs[i].addEventListener("click", function () {
    if (counter < 2) {
      srcImg.push(this.getAttribute("alt"));
      indexImg.push(Array.from(imgs).indexOf(this));
      this.setAttribute("src", srcImg[counter] + ".gif");
      counter++;
    }
    if (counter === 2) {
      if (srcImg[0] !== srcImg[1]) {
        setTimeout(function () {
          for (var j = 0; j < 2; j++) {
            imgs[indexImg[j]].setAttribute("src", "Moon.gif");
          }
          counter = 0;
          srcImg = [];
          indexImg = [];
        }, 1000);
      } else {
        counter = 0;
        srcImg = [];
        indexImg = [];
      }
    }
  });
}
