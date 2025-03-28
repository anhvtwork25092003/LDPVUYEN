export default class Slider {
  constructor() {
    this.DOM = {
      slider: document.getElementById("heroSlider"),
      slides: document.querySelectorAll(".hero__slide"),
      prevBtn: document.querySelector(".hero__control--prev"),
      nextBtn: document.querySelector(".hero__control--next"),
      indicators: document.querySelectorAll(".hero__indicator"),
      consultBtns: [
        document.getElementById("jsConsultBtn1"),
        document.getElementById("jsConsultBtn2"),
      ],
    };
    this.currentIndex = 0;
    this.interval = null;
  }

  init() {
    this._setupEvents();
    this._startAutoPlay();
  }

  _goToSlide(index) {
    this.currentIndex = index;

    this.DOM.slides.forEach((slide) =>
      slide.classList.remove("hero__slide--active")
    );
    this.DOM.indicators.forEach((ind) =>
      ind.classList.remove("hero__indicator--active")
    );

    this.DOM.slides[this.currentIndex].classList.add("hero__slide--active");
    this.DOM.indicators[this.currentIndex].classList.add(
      "hero__indicator--active"
    );
  }

  _nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.DOM.slides.length;
    this._goToSlide(nextIndex);
  }

  _setupEvents() {
    // Xử lý sự kiện click cho các nút
    this.DOM.prevBtn.addEventListener("click", () =>
      this._goToSlide((this.currentIndex - 1 + 2) % 2)
    );
    this.DOM.nextBtn.addEventListener("click", () => this._nextSlide());

    this.DOM.indicators.forEach((indicator) => {
      indicator.addEventListener("click", () => {
        this._goToSlide(parseInt(indicator.dataset.slide));
      });
    });

    this.DOM.consultBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        alert(
          `Đã gửi yêu cầu tư vấn ngày ${new Date().toLocaleDateString("vi-VN")}`
        );
      });
    });
  }

  _startAutoPlay() {
    this.interval = setInterval(() => this._nextSlide(), 5000);
  }
}
