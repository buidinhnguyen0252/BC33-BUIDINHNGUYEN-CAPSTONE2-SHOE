function getProductDetailApi() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`, // Đường dần BE cung cấp
    method: "GET",
    Response: JSON,
  });

  //Thành công thì làm ?
  promise.then(function (result) {
    console.log("result", result.data.content);
    //Gọi hàm để từ dữ liệu tạo ra thẻ tr trên tbody
    // renderSize(result.data.content);
    renderProductDetail(result.data.content);
  });
  //Thất bại
  promise.catch(function (err) {
    console.log(err);
  });
}
window.onload = function () {
  //Gọi api lấy data từ backend
  getProductDetailApi();
};
function renderSize(product) {
  var Size = "";
  for (var i = 0; i < product.size.length; i++);
  {
    console.log(i); //Mỗi lần duyệt lấy ra 1 object Product
    console.log(product.size);
    var pd = product.size[i];
    Size += `
    <div class="size">
              <div class="col">
                <button class="btn-size">${pd}</button>
              </div>
    
        `;
  }
  document.querySelector(".size").innerHTML = Size;
}
function renderProductDetail(product) {
  // console.log(product);
  var html = ""; //output: string html

  html += `
      <div class="img">
              <img src="${product.image}" alt="">
            </div>
            <div class="info-product">
              <h1 class="title">${product.name}</h1>
              <p class="detail">${product.description}
              </p>
              <h2 class="title-body">Available size</h2>
              <div class="size">
               
              </div>
              <h2 class="price">${product.price}</h2>
              <div class="amounts">
                  <div class="col">
                    <button class="add">+</button>
                  </div>
                  <div class="col">
                    <h3 class="amount">1</h3>
                  </div>
                  <div class="col">
                    <button class="minus">-</button>
                  </div>
                </div>
              <button class="buy">Add to cart</button>

            `;
  document.querySelector("#product").innerHTML = html;

  var Size = "";
  for (var i = 0; i < product.size.length; i++) {
    //Mỗi lần duyệt lấy ra 1 object Product
    Size += `
    <div class="size">
              <div class="col">
                <button class="btn-size">${product.size[i]}</button>
              </div>
    
        `;
  }
  document.querySelector(".size").innerHTML = Size;
}
