document.getElementById('btn-B1').onclick = function () {
    let diem1 = +domId('diem1-B1').value;
    let diem2 = +domId('diem2-B1').value;
    let diem3 = +domId('diem3-B1').value;
    let diemChuan = +domId('diemChuan-B1').value;
    let dt = domId('doiTuong-B1').value;
    let kv = domId('khuVuc-B1').value;


    let total = diem1 + diem2 + diem3 + khuVuc(kv) + doiTuong(dt);
    let result = '';
    if (total >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
        result = 'Bạn đã đậu với số điểm: ' + total;
    } else {
        result = 'Bạn đã rớt với số điểm: ' + total;
    }
    domId('result-B1').innerHTML = result;

}
function khuVuc(kv) {
    switch (kv) {
        case 'X':
            return 0;
            break;
        case 'A':
            return 2;
            break;
        case 'B':
            return 1;
            break;
        case 'C':
            return 0.5;

    }
    return diemKV;
}
function doiTuong(dt) {


    switch (dt) {
        case '0':
            return 0;
            break;
        case '1':
            return 2.5;
            break;
        case '2':
            return 1.5;
            break;
        case '3':
            return 1;

    }
}
function domId(id) {
    return document.getElementById(id);
}

// Bài 2
document.getElementById('btn-B2').onclick = function (){
    let soKw  = +domId('soKw-B2').value;
    let hoTen = domId('hoTen-B2').value;
    let total = tinhTienDien(soKw);
    let result = '';
 
    if(total>0){
        result ='Tổn tiền điện (Anh/Chị) ' + hoTen + +' cần phải thanh toán: ' +total + '.';
    } else{
        result ='(Anh/Chị) ' + hoTen + 'vui lòng nhập số kW điện đã sử dụng.'
    }
domId('resul-B2').innerHTML = result;
}
function tinhTienDien (soKw){
    let total = 0;
    if ( sokW >0){
        if(soKw<=50){
            total = soKw * 500;
        } else if(soKw<=100){
            total = 50*500 + (soKw-50)*650;
        } else if (soKw<=200){
            total = 50*500 + 50*650 + (soKw-100)*850;
        }  else if (soKw<=350){
            total = 50*500 + 50*650 + 100*850 + (sokW-200)*1100;
        } else{
            total = 50*500 + 50*650 + 100*850 + 200*1100 + (soKw-350)*1300;
        }
    }

    return total
}