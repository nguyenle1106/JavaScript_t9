var product = [
    {
        id: "SP1",
        name: "Áo dài thêu họa tiết",
        img: "s11.jpg",
        price: 122000,
    },
    {
        id: "SP7",
        name: "Váy xanh",
        img: "s23.jpg",
        price: 345000,
    },
    {
        id: "SP8",
        name: "Váy màu cam",
        img: "s24.jpg",
        price: 258000,
    },
];

// đẩy mảng product vào local
function Save() {
    localStorage.setItem('listProducts', JSON.stringify(product));
}

// lấy sản phẩm
function load() {
    product = JSON.parse(localStorage.getItem("listProducts"));
}

// xuất sản phẩm za humi
if (localStorage.getItem("listProducts") != null) {
    load();
}

var listLocal = function() {
    var listproduct = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 -3">';
        listproduct += '<div class="card product p-2" style="width:auto">';
        listproduct += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + 'đ</div>';
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '" data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks(event)">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';
        document.getElementById("banchay").innerHTML += listproduct;
    }
    Save();
};

listLocal();
