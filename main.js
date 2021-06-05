//Bài 1:
/* SƠ ĐỒ 3 KHỐI
    Input:
        - Giá trị nhập vào 3 số nguyên
    Handle:
        - Tạo 3 biến a,b,c chứa 3 số nguyên người dùng nhập vào
        - Tạo biến temp để làm biến trung gian hoán đổi vị trí  3 số
        - Kiểm tra số nhập vào có phải là số nguyên không:
            + Đúng: Bắt đầu sắp xếp
            + Sai: Không sắp xếp và thông báo cho người dùng nhập đúng
        - Sắp xếp 3 số bằng cách hoán đổi vị trí 3 số:
            + Nếu a > b :đổi chỗ a và b
            + Nếu a > c: đổi chỗ  a và c
            + Nếu b > c: đổi chỗ b và c
    Ouput:
        - Xuất 3 số nguyên đã được sắp xếp theo thú tự tăng dần    
*/
var tinh = document.getElementById('tinh');

var temp;
tinh.onclick = function() {
    var a = Number(document.getElementById('soThuNhat').value);
    var b = Number(document.getElementById('soThuHai').value);
    var c = Number(document.getElementById('soThuBa').value);
    if( Number.isInteger(a) == true && Number.isInteger(b) == true && Number.isInteger(c) == true){
        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
    
        if (a > c) {
            temp = a;
            a = c;
            c = temp;
        }
    
        if (b > c) {
            temp = b;
            b = c;
            c = temp;
        }
    
        alert('Thứ tự tăng dần là: ' + a + ' -> ' + b + ' -> ' + c);
    }else{
        alert('Tất cả phải là số nguyên!')
    }
    
}

//Bài 2:
/* SƠ ĐỒ 3 KHỐI
    Input:
        - Người dùng nhập vào mình là ai: Bố là B, Mẹ là M, Anh trai là A, Em gái là E
    Handle:
        - Tạo biến familyRole chứa vai trò trong gia đình của người nhập
        - Nếu familyRole == B thì chào Ba
        - Nếu familyRole == M thì chào Mẹ
        - Nếu familyRole == A  thì chào Anh trai
        - Nếu familyRole == E thì chào Em Gái
        - Các trường hợp khác thì hiển thị không biết
    Ouput:
        - Hiển thị lời chào ứng với vai trò của người dùng nhập vào
 */
var familyRole = document.getElementById('familyRole').value;
document.getElementById('answer').onclick = function() {
    var familyRole = document.getElementById('familyRole').value;
    var hello = document.getElementById('hello');
    if (familyRole === 'B' || familyRole === 'b') {
        hello.innerHTML = 'Hello Ba!';
    } else if (familyRole === 'M' || familyRole === 'm') {
        hello.innerHTML = 'Hello Mẹ!';
    } else if (familyRole === 'A' || familyRole ==='a') {
        hello.innerHTML = 'Hello Anh Trai!';
    } else if (familyRole === 'E' || familyRole === 'e') {
        hello.innerHTML = 'Hello Em Gái!';
    }else{
        hello.innerHTML = 'Tui vẫn chưa biết xưng hô thế nào với bạn!';
    }
}

//Bài 3:
/* SƠ ĐỒ 3 KHỐI:
    Input:
        -Giá trị nhập vào 3 số nguyên
    Handle:
        - Tạo biến chứa giá trị các số nguyên là n1,n2,n3
        - Tạo hai biến đếm để đếm số chẵn và số lẻ: countOdd, countEven
        - Kiểm tra người dùng nhập đủ và đúng định dạng chưa: Đúng thì thực hiện tiếp sai thì thông báo ra và bắt nhập lại
        - Kiểm tra từng số nhập vào nếu là số chẵn thì countEven++, nếu là số lẻ thì countOdd++
    Output:
        - Xuất ra cho người dùng biết có bao nhiêu số chẵn bao nhiêu số lẻ
*/
var countOdd = 0;
var countEven = 0;
document.getElementById('btnCount').onclick = function() {
    var n1 = Number(document.getElementById('number1').value);
    var n2 = Number(document.getElementById('number2').value);
    var n3 = Number(document.getElementById('number3').value);

    if( Number.isInteger(n1) == true && Number.isInteger(n2) == true && Number.isInteger(n3) == true){
        if (n1 % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
        if (n2 % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
        if (n3 % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
        if (countOdd == 0) {
            alert('Không có số lẽ! Tất cả đều là số chẵn');
        } else if (countEven == 0) {
            alert('Không có số chẵn! Tất cả đều là số lẽ');
        } else {
            alert('Có ' + countOdd + ' số lẻ và ' + countEven + ' số chẵn!');
        }
    }else{
        alert('Vui lòng nhập đủ và đúng định dạng số nguyên!')
    }

    

}

//Bài 4
/* SƠ ĐỒ 3 KHỐI
    Input:
        - Độ dài 3 cạnh
    Handle:
        - Tạo biến chứa độ dài ba cạnh: c1,c2,c3
        - Xét độ dài vừa nhập vào có phải là độ dài 3 cạnh tam giác không. Nếu phải thì đi tiếp nếu không thì thông báo cho người dùng nhập lại
        - Nếu độ dài 3 cạnh c1=c2=c3 thì đây là tam giác đều
        - Nếu độ dài 2/3 cạnh bằng nhau thì xét tiếp xem đó có phải là tam giác vuông không bằng định lí Py-ta-go:
            +  Nếu đúng xuất ra đây là tam giác vuông cân
            +  Nếu không xuất ra dây là tam giác cân
         -Nếu độ dài 3 cạnh tạo thành tam giác vuông thì xét tiếp độ dài 2/3 cạnh có bằng nhau không:
            +  Nếu đúng xuất ra đây là tam giác vuông cân
            +  Nếu không xuất ra dây là tam giác vuông
        - Nếu bình phương độ dài 1 cạnh lớn hơn tổng bình phương hai cạnh còn lại thì đó là Tam giác tù
        - Các trường hợp còn lại là tam giác thường hay tam giác nhọn
    Output:
        - Xuất ra loại tam giác
 */
/* NOTE: 
    - Số đo 3 cạnh tam giác tù: 10, 15.6, 20.55 
    - Số đo 3 cạnh tam giác nhọn: 2 6 5.7
    - Số đo 3 cạnh tam giác vuông: 3 4 5
    - Số đo 3 cạnh tam giác vuông cân: tỉ lệ (1:1:căn(2))
 */
        var btnCheck = document.getElementById('btnCheck');
btnCheck.onclick = function() {
    var c1 = Number(document.getElementById('canh1').value);
    var c2 = Number(document.getElementById('canh2').value);
    var c3 = Number(document.getElementById('canh3').value);
    if( c1 > 0 && c2 > 0 && c3>0){
        if(c1 < c2+c3 && c2 < c1+ c3 && c3 < c1+ c2){
            if (c1 === c2 && c1 === c3) {
                alert('Đây là tam giác đều');
            } else if (c1 === c2 || c1 === c3 || c2 === c3) {
                if ((c1 * c1 === c2 * c2 + c3 * c3) || (c2 * c2 === c1 * c1 + c3 * c3) || (c3 * c3 === c1 * c1 + c2 * c2)) {
                    alert('Đây là tam giác vuông cân');
                }else {
                    alert('Đây là tam giác cân');
                }
            } else if ((c1 * c1 === c2 * c2 + c3 * c3) || (c2 * c2 === c1 * c1 + c3 * c3) || (c3 * c3 === c1 * c1 + c2 * c2)) {
                if (c1 === c2 || c1 === c3 || c2 === c3) {
                    alert('Đây là tam giác vuông cân');
                }
                alert('Đây là tam giác vuông');
            } else if(c1*c1 > c2*c2+c3*c3 || c2*c2 > c1*c1+c3*c3 || c3*c3 > c1*c1+c2*c2){
                alert('Đây là tam giác tù');
            } else {
                alert('Đây là tam giác nhọn')
            }
        }else{
            alert('Đây không phải là ba cạnh của một tam giác');
        }
    }else{
        alert('Số đo ba cạnh phải là số dương')
    }
    
}