//* Bài Tập 1:
const calculateResult = document.getElementById("calculateResult");
calculateResult.onclick = function(){

    const subject1 = (document.getElementById("subject1").value) || 0;
    const subject2 = (document.getElementById("subject2").value) || 0;
    const subject3 = (document.getElementById("subject3").value) || 0;
    const region = (document.getElementById("region").value) || 0;
    const target = (document.getElementById("target").value) || 0;

    // Kiểm tra điều kiện để xác định kết quả
    if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
        pResult.innerHTML = "Rớt do có môn điểm 0.";
    } else if (subject1 + subject2 + subject3 + region + target >= 30) {
        pResult.innerHTML = "Đậu!";
    } else {
        pResult.innerHTML = "Rớt do tổng điểm không đủ.";
    }
}

//* Bài Tập 2:
const btnTienDien = document.getElementById("btnTienDien");
btnTienDien.onclick = function(){
    const name = document.getElementById("name").value;
    const consumption = parseFloat(document.getElementById("consumption").value);

    if (isNaN(consumption)) {
        pTienDien.innerHTML = "Số Kw tiêu thụ không hợp lệ.";
    } else {
        var cost = 0;

        if (consumption <= 50) {
            cost = consumption * 500;
        } else if (consumption <= 100) {
            cost = 50 * 500 + (consumption - 50) * 650;
        } else if (consumption <= 150) {
            cost = 50 * 500 + 50 * 650 + (consumption - 100) * 850;
        } else {
            cost = 50 * 500 + 50 * 650 + 50 * 850 + (consumption - 150) * 1100;
        }

        pTienDien.innerHTML = `Họ và tên: ${name}\nTiền điện cần trả: ${cost}đ`;
    }
}

//* Bài Tập 3:
const btnTienThue = document.getElementById("btnTienThue");
        btnTienThue.onclick = function(){
            const name = document.getElementById("name").value;
            const income =(document.getElementById("income").value);
            const dependents =(document.getElementById("dependents").value); 

            const TienThue = document.getElementById("TienThue");

            if (isNaN(income)) {
                TienThue.innerHTML = "Vui lòng nhập số tiền hợp lệ.";
            } else {
                var tax = 0;

                if (income <= 5000000) {
                    tax = income * 0.05;
                } else if (income <= 10000000) {
                    tax = 5000000 * 0.05 + (income - 5000000) * 0.1;
                } else if (income <= 18000000) {
                    tax = 5000000 * 0.05 + 5000000 * 0.1 + (income - 10000000) * 0.15;
                } else {
                    tax = 5000000 * 0.05 + 5000000 * 0.1 + 8000000 * 0.15 + (income - 18000000) * 0.2;
                }
                tax -= dependents * 4000000;
                if (tax < 0) {
                    tax = 0;
                }

                const formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
                const formattedTax = formatter.format(tax);

                TienThue.innerHTML = `Họ và tên: ${name}<br>Thuế thu nhập cá nhân cần trả: ${formattedTax}`;
            }
        }

//* Bài Tập 2:
function updateInputVisibility() {
    const customerType = document.getElementById("customerType").value;
    const connectionCountDiv = document.getElementById("connectionCountDiv");

    if (customerType === "business") {
        connectionCountDiv.style.display = "block";
    } else {
        connectionCountDiv.style.display = "none";
    }
}

const btnTinhTienCap = document.getElementById("btnTinhTienCap");
btnTinhTienCap.onclick = function() {
    const customerType = document.getElementById("customerType").value;
    const connectionCount = parseInt(document.getElementById("connectionCount").value) || 0;
    const TienCap = document.getElementById("TienCap");

    let totalCost = 0;

    if (customerType === "business") {
        // For business customers
        totalCost = 75; // Base cost for 10 connections
        if (connectionCount > 10) {
            totalCost += (connectionCount - 10) * 5;
        }
    } else {
        // For individual customers
        totalCost = 50; // Fixed cost for individual customers
    }

    TienCap.innerHTML = `Tổng tiền cáp cần trả: $${totalCost}`;
};