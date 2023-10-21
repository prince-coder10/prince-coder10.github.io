window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  document.addEventListener("DOMContentLoaded", () => {
    let scrollTarget = document.querySelector(".scroll-target");
    let toTop = document.getElementById("top-btn");

    toTop.addEventListener("click", () => {
      var scrollTargetPos = scrollTarget.offsetTop;
      window.scrollTo({
        top: scrollTargetPos,
        behavior: "smooth",
      });
    });
  });

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show2");
      } else {
        entry.target.classList.remove("show2");
      }
    });
  });

  const hiddenElements2 = document.querySelectorAll(".hidden2");
  hiddenElements2.forEach((el) => observer2.observe(el));

  // download button
  document.getElementById("downloadBtn").addEventListener("click", function () {
    var cvLink =
      "https://github.com/prince-coder10/my-cv/raw/94a5f844b9a85ed0d0b04811d3e827a2e74ddf33/My%20CV.pdf";

    // Create a link element
    var link = document.createElement("a");

    // Set the href attribute to the CV link
    link.href = cvLink;

    // Set the download attribute to specify the file name
    link.download = "Prince_CV.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically trigger a click event to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  });
});

let closeBtn = document.getElementById("menu-close");
let menuBtn = document.getElementById("menu");
let menuContainer = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  menuContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menuContainer.style.display = "none";
});
