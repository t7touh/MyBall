document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const position = document.getElementById("position").value;

    const formData = {
        name: name,
        phone: phone,
        position: position
    };

    // إرسال البيانات إلى البوت باستخدام التوكن
    const token = '7557746755:AAETvIv2mQ28aLIsNCKp6H9LJ3IwDHmT5i4';  // ضع التوكن الخاص بك هنا
    const chatId = '1680999699';   // ضع آيدي المحادثة هنا

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `اسم اللاعب: ${name}\nرقم الهاتف: ${phone}\nالمركز: ${position}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        // عرض الرسالة المنبثقة عند نجاح الإرسال
        alert("تم تسجيلك في القائمة! سيتم التواصل معك قريبًا.");
        document.getElementById("responseMessage").textContent = "تم التسجيل بنجاح!";
    })
    .catch(error => {
        document.getElementById("responseMessage").textContent = "حدث خطأ، يرجى المحاولة لاحقًا.";
        console.error('Error:', error);
    });
});
