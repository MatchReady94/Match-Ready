document.addEventListener("DOMContentLoaded", function () {
    // احصل على الفورم عند الحجز
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault(); // منع الإرسال الفعلي

            // جلب القيم من الحقول
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const fieldType = document.getElementById("field-type").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const duration = document.getElementById("duration").value;

            // التأكد من إدخال جميع القيم
            if (!name || !email || !phone || !fieldType || !date || !time || !duration) {
                alert("❌ Error: Please fill in all fields before booking.");
                return;
            }

            // رسالة تأكيد الحجز
            alert(`✅ Booking Confirmed!\nName: ${name}\nField: ${fieldType}\nDate: ${date}\nTime: ${time}\nDuration: ${duration} hour(s)`);
            
            // إعادة تعيين الحقول بعد التأكيد
            bookingForm.reset();
        });
    }
});
