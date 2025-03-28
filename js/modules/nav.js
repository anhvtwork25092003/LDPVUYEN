export default class Nav {
  constructor() {
    this.DOM = {
      nav: document.getElementById("mainNav"),
      menu: document.querySelector(".nav__menu"),
      priceBtn: document.getElementById("jsPriceBtn"),
      currentDate: document.getElementById("jsCurrentDate"),
      mobileToggle: document.getElementById("jsMobileToggle"),
    };
  }

  init() {
    this._updateDate();
    this._setupEvents();
  }

  _updateDate() {
    const now = new Date();
    this.DOM.currentDate.textContent = now.toLocaleDateString("vi-VN");
  }

  _setupEvents() {
    this.DOM.mobileToggle.addEventListener("click", () => {
      this.DOM.menu.classList.toggle("nav__menu--active");
    });
  }
}
