const paymentRadios = document.querySelectorAll('input[name="payment"]');
const cardPaymentBox = document.getElementById('cardPaymentBox');
const cardPaymentForm = document.getElementById('card-payment-form');
const cardNumberInput = document.getElementById('card-number');
const cardCvvInput = document.getElementById('card-cvv');
const cardExpiryInput = document.getElementById('card-expiry');
// Lắng nghe sự kiện change trên tất cả radio button
paymentRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
        // Kiểm tra nếu radio "Thanh toán bằng thẻ" được chọn
        if (radio.value === 'card') {
            cardPaymentBox.style.display = 'block'; // Hiển thị form thẻ
        } else {
            cardPaymentBox.style.display = 'none'; // Ẩn form thẻ
        }
    });
});














