form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for Pre-Ordering, you will receive a email when the product is available.");
    window.location.href = "goods.html";
    }
 )

function goBack() {
    window.history.back();
}