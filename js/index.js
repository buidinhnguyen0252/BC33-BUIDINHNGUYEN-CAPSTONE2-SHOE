function getProductApi() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product", // Đường dần BE cung cấp
    method: "GET",
  });

  //Thành công thì làm ?
  promise.then(function (result) {
    console.log("result", result.data.content);
    //Gọi hàm để từ dữ liệu tạo ra thẻ tr trên tbody
    renderProduct(result.data.content);
  });
  //Thất bại
  promise.catch(function (err) {
    console.log(err);
  });
}

//Sau khi giao diện load xong thì sẽ tự động thực thi các hàm trong function này
window.onload = function () {
  //Gọi api lấy data từ backend
  getProductApi();
};

function renderProduct(arrProduct) {
  //param : input :arrProduct
  var html = ""; //output: string html
  for (var i = 0; i < arrProduct.length; i++) {
    var pd = arrProduct[i]; //Mỗi lần duyệt lấy ra 1 object Product
    html += `
    <div class="col">
            <div class="card item-1">
              <img src="${pd.image}" alt="" />
              <div class="card-body">
                <div class="product-name-info">
                  <h1 class="name">${pd.name}</h1>
                  <p class="info">${pd.description.slice(0, 100)}</p>
                </div>
                <div class="card-button">
                <a href="./detail.html?productid=${
                  pd.id
                }"  class="btn btn-buy">Buy now</a>
                  <button class="btn btn-price">${pd.price}</button>
                </div>
              
                </div>
              </div>
          </div>
    
        `;
  }
  document.querySelector(".row").innerHTML = html;
}
