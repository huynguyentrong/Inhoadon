/**
 * Đầu vào
 *  - loaiXe
 *  - soKm
 *  - tgCho
 *
 * Xử lý
 *  - function layLoaiXe()
 *      + Dom tới 3 thẻ input của loại xe: radioGrabX, radioGrabSuv, radioGrabBlack
 *      + if(radioGrabX.checked){return "grabX"}
 *      + else if(radioGrabSuv.checked){return "grabSuv"}
 *      + else{return "grabBlack"}
 *  - function tinhTien()
 *      + Dom tới lấy soKm, tgCho từ 2 thẻ input
 *      + Gọi lại hàm layLoaiXe => nhận giá trị loại xe gì?
 *      + switch
 *          case "grabX":
 *
 *          case "grabSuv":
 *
 *          case "grabBlack":
 *
 *  - function tinhKmDau(soKm, giaKmDau):
 *      + return soKm * giaKmDau
 *  - function tinhKmTren1(soKm, giaKmTren1):
 *      + return (soKm - 1) * giaKmTren1;
 *  - function tinhKmTren19(soKm, giaKmTren19);
 *      + return (soKm - 19) * giaKmTren19
 *  - function tinhGiaCho(tgCho, giaCho):
 *      if(tgCgo >= 3) return Math.floor(tgCho / 3) * giaCho
 */
// GrabX
const GrabX_1 = 8000;
const GrabX_2 = 7500;
const GrabX_3 = 7000;
const GrabX_VAT = 2000;
//GrabSUV
const grabSUV_1 = 9000;
const grabSUV_2 = 8500;
const grabSUV_3 = 8000;
const grabSUV_VAT = 3000;
//GrabBlack
const GrabBlack_1 = 10000;
const GrabBlack_2 = 9500;
const GrabBlack_3 = 9000;
const GrabBlack_VAT = 3500;
var tiencho = 0;
var tienkm_1 = 0;
var tienkm_2 = 0;
var tienkm_3 = 0;
var tongtien = 0;

function layLoaiXe(){
    var grabX = document.getElementById('grabX');
    var grabSUV = document.getElementById('grabSUV');
    var grabBlack = document.getElementById('grabBlack');
    if(grabX.checked){
        return 'grabX';
    }
    if(grabSUV.checked){
        return 'grabSUV';
    }
    if(grabBlack.checked){
        return 'grabBlack';
    }
    return null;

}
document.getElementById("nut").onclick = function (){
   var soKm = document.getElementById("soKm").value;
   var tgCho = document.getElementById("thoigiancho").value;
   var loaiXe = layLoaiXe();
//    if(!loaiXe){
//     alert('vui lòng chọn loại xe');
//     return;
//    }
   switch (loaiXe) {
       case "grabX":
                tinhChiTiet(soKm,tgCho,GrabX_VAT,GrabX_1,GrabX_2,GrabX_3);
           break;
        case 'grabSUV':
            tinhChiTiet(soKm,tgCho,grabSUV_VAT,grabSUV_1,grabSUV_2,grabSUV_3);
            break;
            case "grabBlack":
                tinhChiTiet(soKm,tgCho,GrabBlack_VAT,GrabBlack_1,GrabBlack_2,GrabBlack_3);
       default:
           break;
   }
   document.getElementById("divThanhTien").style.display = "block";
   document.getElementById("xuatTien").innerHTML = tongtien;
};
function sokmdau(soKm,giaKmDau){
    return soKm * giaKmDau;
  }

  function tinhKmTren1(soKm, giaKmTren1){
       return (soKm - 1) * giaKmTren1;
   }
function tinhKm_1(soKm,giaKm_1){
    return  (soKm - 1) * giaKm_1;
}
   function tinhKmTren19(soKm, giaKmTren19){
return (soKm - 19) * giaKmTren19;
}

function tinhGiaCho(tgCho, giaCho) {
    var tich = 0;
    if (tgCho >= 3) {
      tich = Math.floor(tgCho / 3) * giaCho;
    }
    return tich;
}
function tinhChiTiet(soKm,tgCho,giaCho,giaKm_1,giaKmTren1,giaKmTren19){
    if(0 < soKm && soKm <=1){
        tiencho = tinhGiaCho(tgCho,giaCho);
        tienkm_1= tinhKm_1(soKm,giaKm_1);
        tongtien = tienkm_1 + tiencho;
    }else if(1 < soKm && soKm <=19){
        tiencho = tinhGiaCho(tgCho,giaCho);
        tienkm_1= tinhKm_1(1,giaKm_1);
        tienkm_2 = tinhKmTren1(soKm,giaKmTren1);
        tongtien = tienkm_1 + tienkm_2 + tiencho;
    }else if(19 <soKm){
        tiencho = tinhGiaCho(tgCho,giaCho);
        tienkm_1= tinhKm_1(1,giaKm_1);
        tienkm_2 = tinhKmTren1(19,giaKmTren1);
        tienkm_3 = tinhKmTren19(soKm,giaKmTren19);
        tongtien = tienkm_1 + tienkm_2 + tienkm_3 + tiencho;
    }else{
        alert('vui lòng nhập vào số hợp lệ!');
    }
}

function hienThi(a,b){
    var soKm = document.getElementById("soKm").value;
    var tgCho = document.getElementById("thoigiancho").value;
    var soKmTren1= 0;
    var soKm_1 = 1;
    var soKmTren19 = 0;
    var tongTien_hoadon = 0;
    var tongTienTren1 = 0;
    var  tongTienTren19 = 0;
    if (soKm>0 && soKm <= 1){
        tongTien_hoadon = soKm * GrabX_1;
        thanhTien =tongTien_hoadon + tinhGiaCho(tgCho,2000);
    } else if (soKm >1 && soKm <= 19){
           soKmTren1=soKm -1;
           tongTien_hoadon = GrabX_1;
           tongTienTren1 =soKmTren1 * GrabX_2;
           thanhTien =tongTien_hoadon + tinhGiaCho(tgCho,2000) + tongTienTren1;
        }else if(soKm > 19){
            soKmTren19 = soKm -19;
            tongTien_hoadon = GrabX_1;
            tongTienTren19 = soKmTren19 * GrabX_3;
            thanhTien = tongTien_hoadon + tinhGiaCho(tgCho,2000) + tongTienTren1 + tongTienTren19;
        }else{
            alert('vui lòng nhập vào số hợp lệ!');
        }
    var content = "";
    var content1 = "";
    var content2 = "";
    var content3 = "";
    var content4 = "";
    var content5 = "";
    content += "<tr>"
    content += "<td>THEO KM</td>"
    content += "<td>SỬ DỤNG</td> "
    content += "<td>ĐƠN GIÁ</td>"
    content += "<td>THÀNH TIỀN</td>"
    content += "<tr>"
    
    content1 += "<tr>"
    content1 += "<td>KM Đầu tiên</td>"
    content1 += "<td>"+ soKm_1 +"</td>"
    content1 += "<td>"+ GrabX_1 +"</td>"
    content1 += "<td>"+ tongTien_hoadon +"</td>"
    content1 += "<tr>"
    
    content2 += "<tr>"
    content2 += "<td>từ 1km đến 19 km</td>"
    content2 += "<td>"+ soKmTren1 +"</td> "
    content2 += "<td>"+ GrabX_2 +"</td>"
    content2 += "<td>"+ tongTienTren1 +"</td>"
    content2 += "<tr>"
    
    content3 += "<tr>"
    content3 += "<td>Trên 19 km</td>"
    content3 += "<td>"+ soKmTren19 + "</td> "
    content3 += "<td>"+ GrabX_3 +"</td>"
    content3 += "<td>"+ tongTienTren19 +"</td>"
    content3 += "<tr>"

    content4 += "<tr>"
    content4 += "<td>Thời gian chờ</td>"
    content4 += "<td>" + tgCho +"</td> "
    content4 += "<td>2000</td>"
    content4 += "<td>"+ tinhGiaCho(tgCho,2000) +"</td>"
    content4 += "<tr>"

    content5 += "<tr>"
    content5 += "<td>Tổng tiền :</td>"
    content5 += "<td></td>"
    content5 += "<td></td>"
    content5 += "<td>"+ thanhTien +"</td>"
    content5 += "<tr>"
    // trên 1 2 dòng , dưới 1 1 dòng, trên 19 3 dòng ;
    document.getElementById("tBodyHoaDon").innerHTML = content +content1 +content2 + content3 + content4 + content5;
}
function hienThi_1(){
    var soKm = document.getElementById("soKm").value;
    var tgCho = document.getElementById("thoigiancho").value;
    var soKmTren1_1= 0;
    var soKm_1 = 1;
    var soKmTren19_1 = 0;
    var tongTien_hoadon_1 = 0;
    var tongTienTren1_1 = 0;
    var  tongTienTren19_1 = 0;
    if (soKm>0 && soKm <= 1){
        tongTien_hoadon_1 = soKm * grabSUV_1;
        thanhTien =tongTien_hoadon_1 + tinhGiaCho(tgCho,3000);
    } else if (soKm >1 && soKm <= 19){
           soKmTren1_1=soKm -1;
           tongTien_hoadon_1 = grabSUV_1;
           tongTienTren1_1 =soKmTren1_1 * grabSUV_2;
           thanhTien =tongTien_hoadon_1 + tinhGiaCho(tgCho,3000) + tongTienTren1_1;
        }else if(soKm > 19){
            soKmTren19_1 = soKm -19;
            tongTien_hoadon_1 = grabSUV_1;
            tongTienTren19_1 = soKmTren19_1 * grabSUV_3;
            thanhTien = tongTien_hoadon_1 + tinhGiaCho(tgCho,3000) + tongTienTren1_1 + tongTienTren19_1;
        }else{
            alert('vui lòng nhập vào số hợp lệ!');
        }
    var content_1 = "";
    var content1_1 = "";
    var content2_1 = "";
    var content3_1 = "";
    var content4_1 = "";
    var content5_1 = "";
    content_1 += "<tr>"
    content_1 += "<td>THEO KM</td>"
    content_1 += "<td>SỬ DỤNG</td> "
    content_1 += "<td>ĐƠN GIÁ</td>"
    content_1 += "<td>THÀNH TIỀN</td>"
    content_1 += "<tr>"
    
    content1_1 += "<tr>"
    content1_1 += "<td>KM Đầu tiên</td>"
    content1_1 += "<td>"+ soKm_1 +"</td>"
    content1_1 += "<td>"+ grabSUV_1 +"</td>"
    content1_1 += "<td>"+ tongTien_hoadon_1 +"</td>"
    content1_1 += "<tr>"
    
    content2_1 += "<tr>"
    content2_1 += "<td>từ 1km đến 19 km</td>"
    content2_1 += "<td>"+ soKmTren1_1 +"</td> "
    content2_1 += "<td>"+ grabSUV_2 +"</td>"
    content2_1 += "<td>"+ tongTienTren1_1 +"</td>"
    content2_1 += "<tr>"
    
    content3_1 += "<tr>"
    content3_1 += "<td>Trên 19 km</td>"
    content3_1 += "<td>"+ soKmTren19_1 + "</td> "
    content3_1 += "<td>"+ grabSUV_3 +"</td>"
    content3_1 += "<td>"+ tongTienTren19_1 +"</td>"
    content3_1 += "<tr>"

    content4_1 += "<tr>"
    content4_1 += "<td>Thời gian chờ</td>"
    content4_1 += "<td>" + tgCho +"</td> "
    content4_1 += "<td>3000</td>"
    content4_1 += "<td>"+ tinhGiaCho(tgCho,3000) +"</td>"
    content4_1 += "<tr>"

    content5_1 += "<tr>"
    content5_1 += "<td>Tổng tiền :</td>"
    content5_1 += "<td></td>"
    content5_1 += "<td></td>"
    content5_1 += "<td>"+ thanhTien +"</td>"
    content5_1 += "<tr>"
    // trên 1 2 dòng , dưới 1 1 dòng, trên 19 3 dòng ;
    document.getElementById("tBodyHoaDon").innerHTML = content_1 +content1_1 +content2_1 + content3_1 + content4_1 + content5_1;
}
function hienThi_2(){
    var soKm = document.getElementById("soKm").value;
    var tgCho = document.getElementById("thoigiancho").value;
    var soKm_1 = 1;
    var soKmTren1_2= 0;
    var soKmTren19_2 = 0;
    var tongTien_hoadon_2 = 0;
    var tongTienTren1_2 = 0;
    var  tongTienTren19_2 = 0;
    if (soKm>0 && soKm <= 1){
        tongTien_hoadon_2 = soKm * GrabBlack_1;
        thanhTien =tongTien_hoadon_2 + tinhGiaCho(tgCho,3500);
    } else if (soKm >1 && soKm <= 19){
           soKmTren1_2=soKm -1;
           tongTien_hoadon_2 = GrabBlack_1;
           tongTienTren1_2 =soKmTren1_2 * GrabBlack_2;
           thanhTien =tongTien_hoadon_2 + tinhGiaCho(tgCho,3500) + tongTienTren1_2;
        }else if(soKm > 19){
            soKmTren19_2 = soKm -19;
            tongTien_hoadon_2 = GrabBlack_1;
            tongTienTren19_2 = soKmTren19_2 * GrabBlack_3;
            thanhTien = tongTien_hoadon_2 + tinhGiaCho(tgCho,3500) + tongTienTren1_2 + tongTienTren19_2;
        }else{
            alert('vui lòng nhập vào số hợp lệ!');
        }
    var content_2 = "";
    var content1_2 = "";
    var content2_2 = "";
    var content3_2 = "";
    var content4_2 = "";
    var content5_2 = "";
    content_2 += "<tr>"
    content_2 += "<td>THEO KM</td>"
    content_2 += "<td>SỬ DỤNG</td> "
    content_2 += "<td>ĐƠN GIÁ</td>"
    content_2 += "<td>THÀNH TIỀN</td>"
    content_2 += "<tr>"
    
    content1_2 += "<tr>"
    content1_2 += "<td>KM Đầu tiên</td>"
    content1_2 += "<td>"+ soKm_1 +"</td>"
    content1_2 += "<td>"+ GrabBlack_1 +"</td>"
    content1_2 += "<td>"+ tongTien_hoadon_2 +"</td>"
    content1_2 += "<tr>"
    
    content2_2 += "<tr>"
    content2_2 += "<td>từ 1km đến 19 km</td>"
    content2_2 += "<td>"+ soKmTren1_2 +"</td> "
    content2_2 += "<td>"+ GrabBlack_2 +"</td>"
    content2_2 += "<td>"+ tongTienTren1_2 +"</td>"
    content2_2 += "<tr>"
    
    content3_2 += "<tr>"
    content3_2 += "<td>Trên 19 km</td>"
    content3_2 += "<td>"+ soKmTren19_2 + "</td> "
    content3_2 += "<td>"+ GrabBlack_3 +"</td>"
    content3_2 += "<td>"+ tongTienTren19_2 +"</td>"
    content3_2 += "<tr>"

    content4_2 += "<tr>"
    content4_2 += "<td>Thời gian chờ</td>"
    content4_2 += "<td>" + tgCho +"</td> "
    content4_2 += "<td>350</td>"
    content4_2 += "<td>"+ tinhGiaCho(tgCho,3500) +"</td>"
    content4_2 += "<tr>"

    content5_2 += "<tr>"
    content5_2 += "<td>Tổng tiền :</td>"
    content5_2 += "<td></td>"
    content5_2 += "<td></td>"
    content5_2 += "<td>"+ thanhTien +"</td>"
    content5_2 += "<tr>"
    // trên 1 2 dòng , dưới 1 1 dòng, trên 19 3 dòng ;
    document.getElementById("tBodyHoaDon").innerHTML = content_2 +content1_2 +content2_2 + content3_2 + content4_2 + content5_2;
}

function inHoaDon() {
    var loaiXe = layLoaiXe();
    if (!loaiXe) {
      alert("vui lòng nhập loại xe");
      return;
    }
    switch (loaiXe) {
      case "grabX":
        hienThi();
        break;
      case "grabSUV":
        hienThi_1();
        break;
      case "grabBlack":
        hienThi_2();
        break;
    }
  }
  document.getElementById("exampleModal").onclick = function () {
    inHoaDon();
  };