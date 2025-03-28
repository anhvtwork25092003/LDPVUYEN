document
  .querySelector(".register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      name: this.querySelector('input[type="text"]').value,
      phone: this.querySelector('input[type="tel"]').value,
      propertyType: this.querySelector("select").value,
    };
    alert(
      `Đã đăng ký thành công!\nTên: ${formData.name}\nSĐT: ${
        formData.phone
      }\nLoại hình: ${formData.propertyType || "Chưa chọn"}`
    );
    this.reset();
  });
// Thêm vào form.js
const submitBtn = this.querySelector('button[type="submit"]');
submitBtn.disabled = true;
submitBtn.textContent = "Đang gửi...";
// Sau khi xong:
submitBtn.disabled = false;
submitBtn.textContent = "BẤM NHẬN THÔNG TIN";
