import Nav from "./modules/nav.js";
import Slider from "./modules/slider.js";
import Slider from "./modules/form.js";

document.addEventListener("DOMContentLoaded", () => {
  const nav = new Nav();
  const slider = new Slider();

  nav.init();
  slider.init();
});
