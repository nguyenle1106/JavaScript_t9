var productAdmin = function () {
    var listproduct1 = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        listproduct1 += '<tr>';
        listproduct1 += '<td>' + data.id + '</td>';
        listproduct1 += '<td>' + data.name + '</td>';
        listproduct1 += '<td><img src="../img/' + data.img + '" alt="" style="width: 50px;"></td>';
        listproduct1 += '<td>' + data.price + '</td>';
        listproduct1 += '<td><button onclick="updateProduct(' + i + ')" class="btn btn-outline-danger" data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cog"></i></button>';
        listproduct1 += '<button onclick="deleteProduct(' + i + ')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
        listproduct1 += '</tr>';
    }
    document.getElementById("predic-admin").innerHTML = listproduct1;
    // Save();
}
var addProduct = function() {
    var Product = {
    id: "SP"+parseInt( product.length+1),
    name: document.getElementById("name").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value
    }
    product.push (Product);
    localStorage.setItem('listProduct',JSON.stringify(product));
    // Save();
    window.location.reload();
    }
    // Xóa sản phẩm
    var deleteProduct= function (i) {
    product.splice(i, 1);
    localStorage.setItem('listProduct', JSON.stringify (product));
    window.location.reload();
    }
    // sửa sản phẩm
var updateProduct = function(i) {
    var k = product[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML =
    '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate ('+i+')"> Đồng ý</button>'
    }
    var submitUpdate = function(i) {
    var k = product [i];
    k.id= document.getElementById("idd").value;
    k.name= document.getElementById("named").value;
    k.img= document.getElementById("imgd").value;
    k.price= document.getElementById("priced").value;
    // document.getElementById("idd").setAttribute("disabled", "disabled");
    localstorage.setItem('listProduct', JSON.stringify(product));
    window.location.reload();
    }