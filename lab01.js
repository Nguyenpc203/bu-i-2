//bt1
console.log("bài tập 1: ")
function getCurrentDateTime() {
    // Lấy ngày và giờ hiện tại
    var currentDate = new Date();

    // Lấy thứ trong tuần
    var daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    var dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Lấy giờ hiện tại
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Chuyển đổi giờ sang định dạng 12 giờ và xác định AM/PM
    var meridiem = (hours >= 12) ? 'CH' : 'SA';
    hours = (hours % 12 == 0) ? 12 : hours % 12;

    // Thêm số 0 đằng trước nếu cần cho phút và giây
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Xây dựng chuỗi kết quả
    var currentTime = hours + ' ' + meridiem + ' : ' + minutes + ' : ' + seconds;

    // Hiển thị kết quả
    console.log('Hôm nay là: ' + dayOfWeek);
    console.log('Thời gian hiện tại là: ' + currentTime);
}

// Gọi hàm để thực thi
getCurrentDateTime();

//bt2
console.log("bài tập 2: ")
function getCurrentDate() {
    // Lấy ngày hiện tại
    var currentDate = new Date();

    // Lấy ngày, tháng và năm
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    var year = currentDate.getFullYear();

    // Định dạng ngày theo mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
    var mmddyyyy = month + '-' + day + '-' + year;
    var mmddyyyy_slash = month + '/' + day + '/' + year;
    var ddmmyyyy = day + '-' + month + '-' + year;
    var ddmmyyyy_slash = day + '/' + month + '/' + year;

    // Hiển thị các định dạng ngày
    console.log('mm-dd-yyyy: ' + mmddyyyy);
    console.log('mm/dd/yyyy: ' + mmddyyyy_slash);
    console.log('dd-mm-yyyy: ' + ddmmyyyy);
    console.log('dd/mm/yyyy: ' + ddmmyyyy_slash);
}

// Gọi hàm để thực thi
getCurrentDate();

console.log("bài tập 3: ")
function chuyenDoiNhietDo() {
    // Hàm chuyển đổi từ Celsius sang Fahrenheit
    function chuyenDoiCtoF(celsius) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        return fahrenheit;
    }

    // Hàm chuyển đổi từ Fahrenheit sang Celsius
    function chuyenDoiFtoC(fahrenheit) {
        var celsius = (fahrenheit - 32) * 5 / 9;
        return celsius;
    }

    // Độ Celsius cần chuyển đổi
    var doCelsius = 60;

    // Chuyển đổi sang độ Fahrenheit
    var doFahrenheit = chuyenDoiCtoF(doCelsius);
    console.log(doCelsius + '°C là ' + doFahrenheit.toFixed(2) + '°F');

    // Độ Fahrenheit cần chuyển đổi
    var doFahrenheit2 = 45;

    // Chuyển đổi sang độ Celsius
    var doCelsius2 = chuyenDoiFtoC(doFahrenheit2);
    console.log(doFahrenheit2 + '°F là ' + doCelsius2.toFixed(2) + '°C');
}

// Gọi hàm để thực thi
chuyenDoiNhietDo();

console.log("bài tập 4: ")
function daoNguocChuoi(chuoi) {
    // Sử dụng phương thức split() để chuyển chuỗi thành mảng các ký tự
    var mangKyTu = chuoi.split('');

    // Sử dụng phương thức reverse() để đảo ngược mảng
    var mangKyTuDaoNguoc = mangKyTu.reverse();

    // Sử dụng phương thức join() để chuyển mảng thành chuỗi
    var chuoiDaoNguoc = mangKyTuDaoNguoc.join('');

    // Trả về chuỗi đã đảo ngược
    return chuoiDaoNguoc;
}

// Chuỗi cần đảo ngược
var chuoiCanDao = "Hello, world!";

// Gọi hàm để thực thi và hiển thị kết quả
console.log("Chuỗi đảo ngược: " + daoNguocChuoi(chuoiCanDao));

console.log("bài tập 5: ")
function kiemTraBieuThuc(x, y, z) {
    // Kiểm tra biểu thức với dấu *
    if (x * y == z) {
        return "*";
    }
    // Kiểm tra biểu thức với dấu /
    if (x / y == z) {
        return "/";
    }
    // Kiểm tra biểu thức với dấu +
    if (x + y == z) {
        return "+";
    }
    // Kiểm tra biểu thức với dấu -
    if (x - y == z) {
        return "-";
    }

    // Trả về null nếu không thể thay thế
    return null;
}

// Các giá trị x, y, z
var x = 10;
var y = 30;
var z = 600;

// Gọi hàm để kiểm tra
var operator = kiemTraBieuThuc(x, y, z);

// Hiển thị kết quả
if (operator) {
    console.log("Có thể thay thế ký tự $ bằng dấu " + operator + " để thu được biểu thức đúng.");
} else {
    console.log("Không thể thay thế ký tự $ bằng bất kỳ dấu nào để thu được biểu thức đúng.");
}

console.log("bài tập 6: ")
function timPhanTuLonThuK(arr, k) {
    // Sắp xếp mảng theo thứ tự giảm dần
    arr.sort(function(a, b) {
        return b - a;
    });

    // Trả về phần tử lớn thứ k
    return arr[k - 1];
}

// Mảng số nguyên đầu vào
var mangSoNguyen = [10, 5, 8, 20, 3];
// Phần tử lớn thứ k cần tìm
var k = 3;

// Gọi hàm để tìm phần tử lớn thứ k và hiển thị kết quả
console.log("Phần tử lớn thứ " + k + " trong mảng là: " + timPhanTuLonThuK(mangSoNguyen, k));



