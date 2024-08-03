const rolodex = document.querySelector(".rolodex");
const dots = document.querySelectorAll(".solid-circle");
const letters = document.querySelectorAll(".letter:not(.o)");
let hiddenFound = false;
let executed = false;

rolodex.addEventListener("click", function () {
  letters.forEach((letter) => {
    if (letter.classList.contains("hidden")) {
      hiddenFound = true;
    } else {
      letter.classList.add("hidden");
    }
  });

  setTimeout(function () {
    dots[0].classList.add("merged");
    dots[1].classList.add("merged");
    if (hiddenFound && !executed) {
      generateDots();
      letters.forEach((letter) => {
        letter.classList.add("hidden");
      });
    }
  }, 1200);
});

function generateDots() {
  executed = true;
  const finaldots = document.querySelectorAll(".finaldots");
  const container = document.querySelector(".dot-container");

  const links = [
    { index: 0, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 1, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 2, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 3, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 4, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 5, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 5, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 6, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 8, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 9, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 10, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 11, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 12, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 13, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 14, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 15, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 16, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 17, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 18, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 19, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 20, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 21, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 22, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 23, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 24, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 25, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 26, name: "Item 0", url: "https://krishnatechs.com/" },
    { index: 27, name: "Item 0", url: "https://krishnatechs.com/" },
  ];

  const colors = [
    "#FF0000", "#0000FF", "#008000",
  ];

  // Generate 28 dots
  for (let i = 0; i < 28; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.display = "block";
    dot.style.cursor = "pointer";

    // Assign color based on index
    dot.style.backgroundColor = colors[i % 28];
    
    dot.onclick = function () {
      window.open(links[i].url, "_blank");
    };

    dot.addEventListener("click", () => {
      dot.style.backgroundColor = "#8B008B";
    });

    container.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");
  let intervalId;

  function moveDots() {
    dots.forEach((dot) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 260 + 120;
      const translateY = Math.sin(angle) * distance;
      const translateX = Math.cos(angle) * distance;
      dot.style.transition = "transform 5s linear";
      dot.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${
        Math.random() * 360
      }deg)`;
    });
  }

  function stopDot(dot) {
    const computedStyle = window.getComputedStyle(dot);
    const matrix = new WebKitCSSMatrix(computedStyle.transform);
    dot.style.transition = "none";
    dot.style.transform = `translate(${matrix.m41}px, ${
      matrix.m42
    }px) rotate(${Math.random() * 360}deg)`;
  }

  function resumeDot(dot) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 260 + 120;
    const translateY = Math.sin(angle) * distance;
    const translateX = Math.cos(angle) * distance;
    dot.style.transition = "transform 5s linear";
    dot.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${
      Math.random() * 360
    }deg)`;
  }

  dots.forEach((dot) => {
    dot.style.top = "50%";
    dot.style.left = "50%";
    dot.style.transform = `translate(-50%, -50%) rotate(${
      Math.random() * 360
    }deg)`;

    dot.addEventListener("mouseover", () => stopDot(dot));
    dot.addEventListener("mouseout", () => resumeDot(dot));
  });

  setTimeout(() => {
    moveDots();
    intervalId = setInterval(moveDots, 5000);

    document.querySelector(".o1").style.backgroundColor = "transparent";
    document.querySelector(".o2").style.backgroundColor = "transparent";
    finaldots.forEach((element) => {
      element.classList.add("hide");
    });
  }, 0);
}