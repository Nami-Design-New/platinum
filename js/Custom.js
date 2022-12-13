$(document).ready(function () {
  // // side menu
  // $(".sideBtn").click(function () {
  //   $(this).toggleClass("active");
  //   $(".sideMenu").toggleClass("active");
  // });
  // show all
  $(".showAll").on("click", function (event) {
    // $(this).parent().siblings().removeClass('open');
    $(this).parent().toggleClass("open");
  });
  //MainSlider
  var mainSlider = new Swiper(".mainSliderContainer", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainsliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainsliderPrev",
    },
  });
  // services slider
  var servicesSlider = new Swiper(".servicesSlider", {
    navigation: {
      nextEl: ".servicesSliderNext",
      prevEl: ".servicesSliderPrev",
    },
    pagination: {
      el: ".servicesSlidePagination",
      clickable: true,
    },
    spaceBetween: 10,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  $(".servicesSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  //Categories Slider
  var referencesSlider = new Swiper(".referencesSlider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
  // services slider
  var cvSlider = new Swiper(".cvSlider", {
    navigation: {
      nextEl: ".cvSliderNext",
      prevEl: ".cvSliderPrev",
    },
    pagination: {
      el: ".cvSliderPagination",
      clickable: true,
    },
    speed: 600,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  $(".cvSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  // workerCvSlider
  var workerCvSlider = new Swiper(".workerCvSlider", {
    spaceBetween: 0,
    centeredSlides: true,
    // loop: true,
    speed: 1000,
    pagination: {
      el: ".workerCvSliderpagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".workerCvSliderNext",
      prevEl: ".workerCvSliderPrev",
    },
  });
  $(".workerCvSlider").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  // // wow delay
  // function addWowDelay() {
  //   $(" .statistics .wow , .steps .wow ").each(function (i) {
  //     d = i * 0.10;
  //     $(this).attr("data-wow-delay", d + "s");
  //   });
  // }
  // addWowDelay();
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".loader ").fadeOut("slow");
  //WOW js
  new WOW().init();
  // select2
  $(".select2search").select2();
  $(".select2").select2({
    minimumResultsForSearch: -1,
  });
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// custom cursor
var cursor = document.querySelector(".customCursor");
var cursorinner = document.querySelector(".customCursorInner");
var a = document.querySelectorAll("a");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});
document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("customClick");
});
document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("customClick");
});
a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("customHover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("customHover");
  });
});
// validation
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// multi step
//DOM elements
const DOMstrings = {
  stepsBtnClass: "multiSteps__progress-btn",
  stepsBtns: document.querySelectorAll(`.multiSteps__progress-btn`),
  stepsBar: document.querySelector(".multiSteps__progress"),
  stepsForm: document.querySelector(".multiSteps__form"),
  stepsFormTextareas: document.querySelectorAll(".multiSteps__textarea"),
  stepFormPanelClass: "multiSteps__panel",
  stepFormPanels: document.querySelectorAll(".multiSteps__panel"),
  stepPrevBtnClass: "js-btn-prev",
  stepNextBtnClass: "js-btn-next",
};
//remove class from a set of items
const removeClasses = (elemSet, className) => {
  elemSet.forEach((elem) => {
    elem.classList.remove(className);
  });
};
//return exect parent node of the element
const findParent = (elem, parentClass) => {
  let currentNode = elem;
  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }
  return currentNode;
};
//get active button step number
const getActiveStep = (elem) => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};
//set all steps before clicked (and clicked too) to active
const setActiveStep = (activeStepNum) => {
  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, "js-active");
  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {
    if (index <= activeStepNum) {
      elem.classList.add("js-active");
    }
  });
};
//get active panel
const getActivePanel = () => {
  let activePanel;
  DOMstrings.stepFormPanels.forEach((elem) => {
    if (elem.classList.contains("js-active")) {
      activePanel = elem;
    }
  });
  return activePanel;
};
//open active panel (and close unactive panels)
const setActivePanel = (activePanelNum) => {
  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, "js-active");
  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {
      elem.classList.add("js-active");
      setFormHeight(elem);
    }
  });
};
//set form height equal to current panel height
const formHeight = (activePanel) => {
  const activePanelHeight = activePanel.offsetHeight;
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};
const setFormHeight = () => {
  const activePanel = getActivePanel();
  formHeight(activePanel);
};
//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener("click", (e) => {
  //check if click target is a step button
  const eventTarget = e.target;
  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return;
  }
  //get active button step number
  const activeStep = getActiveStep(eventTarget);
  //set all steps before clicked (and clicked too) to active
  setActiveStep(activeStep);
  //open active panel
  setActivePanel(activeStep);
});
//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener("click", (e) => {
  const eventTarget = e.target;
  //check if we clicked on `PREV` or NEXT` buttons
  if (
    !(
      eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ||
      eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)
    )
  ) {
    return;
  }
  //find active panel
  const activePanel = findParent(
    eventTarget,
    `${DOMstrings.stepFormPanelClass}`
  );
  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(
    activePanel
  );
  //set active step and active panel onclick
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    activePanelNum--;
  } else {
    activePanelNum++;
  }
  setActiveStep(activePanelNum);
  setActivePanel(activePanelNum);
});
//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener("load", setFormHeight, false);
//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener("resize", setFormHeight, false);











// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
/* ---- particles.js config ---- */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 200,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
/* ---- stats.js config ---- */
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
