// CHUNG

function formValidation() {
    var frm = document.forms["survey"];

    if (frm.fname.length == 0) {
        alert("Bạn Chưa Điền Họ Tên, Làm ơn hãy điền đầy đủ thông tin!!!");
        frm.fname.focus();
        return false;
    }

    return true;
}

// Trang Chủ

// Thêm Sản Phẩm vào Giỏ Hàng
function openCart(){
    window.location.href = "donhang.html";
}
function showCart(){
    var formatter = new Intl.NumberFormat('vi-VN',{style: 'currency', currency: 'VND'});
    var container=document.getElementById("cartDetail").getElementsByTagName('tbody')[0];
    container.innerHTML="";
    var sum=0;//tổng mỗi mặt hàng
    var totalPreTax=0;//tổng trước thuế
    var discountRate=getDiscountRate();//tỉ lệ khuyến mãi
    var taxRate=0.1;//tỉ lệ thuế
    var discount=0;//tiền giảm giá
    var tax=0;//tiền thuế.
    for(var i=0;i<window.localStorage.length;i++)
    {
        if(typeof itemList[localStorage.key(i)] === "undefined")
            continue;
        var tr=document.createElement("tr");
        var photoCell=document.createElement("td");
        var nameCell=document.createElement("td");
        var priceCell=document.createElement("td");
        var numberCell=document.createElement("td");
        var sumCell=document.createElement("td");
        var removeCell=document.createElement("td");
        var removeLink=document.createElement("a");
        var item=itemList[localStorage.key(i)];
        var number=localStorage.getItem(localStorage.key(i));
        photoCell.style.textAlign="center";
        photoCell.innerHTML="<img src='"+item.photo+"' class='round-figure'width='100px'/>";
        nameCell.innerHTML=item.name;
        priceCell.innerHTML=formatter.format(item.price);
        priceCell.style.textAlign="right";
        numberCell.innerHTML=number;
        numberCell.style.textAlign="right";
        sum=number*item.price;
        sumCell.innerHTML=formatter.format(sum);
        sumCell.style.textAlign="right";
        removeLink.innerHTML="<i class='fa fa-trash icon-pink'></i>";
        removeLink.setAttribute("href","#");
        removeLink.setAttribute("data-code",localStorage.key(i));
        removeLink.onclick=function(){
        removeCart(this.dataset.code);
        };
        removeCell.style.textAlign="center";
        removeCell.appendChild(removeLink);
        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(numberCell);
        tr.appendChild(priceCell);
        tr.appendChild(sumCell);
        tr.appendChild(removeCell);
        container.appendChild(tr);
        totalPreTax+=sum;
        }
        var discount=totalPreTax*discountRate;
        var tax=(totalPreTax-discount)*taxRate;
        document.getElementById("bill_pre_tax_total").innerHTML=formatter.for
        mat(totalPreTax);
        document.getElementById("bill_discount").innerHTML=discountRate+" x A= "+formatter.format(discount);
        document.getElementById("bill_tax").innerHTML=formatter.format(tax);
        document.getElementById("bill_total").innerHTML=formatter.format(totalPreTax-discount+tax);
    }
function addCart(code)
{
    var number=parseInt(document.getElementById(code).value);
    var name=itemList[code].name;
    if(number==0)
        return;
        if(typeof localStorage[code] === "undefined"){
        window.localStorage.setItem(code,number); }
    else{
        var current=parseInt(window.localStorage.getItem(code));
        if(current+number>100)
            {
                window.localStorage.setItem(code,100);
                alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của "+name+" này.");
                return; 
            }
            else
                window.localStorage.setItem(code,current+number);   
        }
            alert("Đã cập nhật sản phẩm "+name+" với số lượng "+number+" vào giỏ hàng. Số lượng sản phẩm "+name+" đã đặt là "+parseInt(window.localStorage.getItem(code))+".");
}

function getDiscountRate()
{
    var d=new Date();//lấy ngày hiện tại của máy tính
    var weekday=d.getDay();//lấy ngày trong tuần
    var totalMins=d.getHours()*60+d.getMinutes();//đổi thời gian hiện tại ra số phút trong ngày.
    if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
        return 0.1;
    return 0;
}
function removeCart(code)
{
if(typeof window.localStorage[code] !== "undefined")
{
//xóa sản phẩm khỏi localStorage
window.localStorage.removeItem(code);
//Xóa nội dung của phần thân của bảng (<tbody>)
document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
//Hiển thị lại nội dung của đơn hàng
showCart();
}
}
var itemList={ 
    "sp001":{
        "name":"Áo thun Paradox® RAINBOW FLOWER - Đen",
        "price":299000,
        "photo":"/asset/imgs/uudai/ao-rainbow-den.png"},
    "sp002":{
        "name":"Áo thun Paradox® RAINBOW FLOWER - Trắng",
        "price":299000,
        "photo":"/asset/imgs/uudai/ao-rainbow-trang.png"},
    "sp003":{
        "name":"Áo thun Paradox® RECOGNITION - Đen",
        "price":299000,
        "photo":"/asset/imgs/uudai/ao-recognition-den.png"},
    "sp004":{
        "name":"Áo thun Paradox® The RV",
        "price":159000,
        "photo":"/asset/imgs/uudai/sale--1.png"},
    "sp005":{
        "name":"Áo thun Paradox® L&R",
        "price":129000,
        "photo":"/asset/imgs/uudai/sale--2.png"},
    "sp006":{
        "name":"SWE Áo Khoác Winbreaker",
        "price":249000,
        "photo":"/asset/imgs/uudai/sale--3.png"},
    "sp007":{
        "name":"SWE Hunter Pants - SAND",
        "price":199000,
        "photo":"/asset/imgs/uudai/sale--4.png"},
    "sp008":{
        "name":"Áo thun Paradox® RECOGNITION - Trắng",
        "price":299000,
        "photo":"/asset/imgs/uudai/ao-recognition-trang.png"},
    "sp009":{
        "name":"Áo khoác Bomber Paradox® FIRMAMENT",
        "price":390000,
        "photo":"/asset/imgs/uudai/bomber-firmament.png"},
    "sp010":{
        "name":"Quần short Paradox® CHIC - Highclass Coll",
        "price":850000,
        "photo":"/asset/imgs/uudai/quanshort_chic.png"},
    "sp011":{
        "name":"Áo sweater Paradox® BANDS",
        "price":359000,
        "photo":"/asset/imgs/uudai/sweater-bands.png"},
    "sp012":{
        "name":"Áo thun Paradox® CHERRY BOOM",
        "price":299000,
        "photo":"/asset/imgs/uudai/cherryboom.png"},
};
function copied(){
    alert("Voucher đã được sao chép");
}


// Liên Hệ
function checkfrom() {
    const name = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const comment = document.getElementById('comment').value;

    if(name === "" || email === "" || phone === "" || comment === ""){
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    document.querySelector("form").submit();
}
document.querySelector("input[type='submit']").addEventListener("click",checkfrom);

// Ưu Đãi
