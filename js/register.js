document.querySelector(".submit").onclick = function () {
  //Lấy thông tin input từ người dùng: tạo ra format backend yêu cầu
  var register = new Register();
  register.name = document.querySelector("#name").value;
  register.phone = document.querySelector("#phone").value;
  register.password = document.querySelector("#password").value;
  register.email = document.querySelector("#email").value;
  register.passwordconfirm = document.querySelector("#passwordconfirm").value;
  register.gender = document.querySelector(
    'input[name="genderS"]:checked'
  ).value;
  console.log(register.gender);
  //   register.gender = document.querySelector("#gender").value;

  console.log("thong tin", register);

  //Gọi api đưa dữ liệu về server
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    Response: JSON,
    data: register, //Dữ liệu gửi về server format BE qui định
  });

  promise.then(function (result) {
    console.log(result.data);
  });

  promise.catch(function (error) {
    console.log(error);
  });
};
