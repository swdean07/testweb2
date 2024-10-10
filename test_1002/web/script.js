document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Log In Sucessful!");
});

document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sign Up Complete!");
});

// 상세 페이지에서 아이템 정보를 표시하는 간단한 예
if (document.getElementById("itemId")) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    document.getElementById("itemId").innerText = id;
    document.getElementById("itemDescription").innerText = "이 아이템에 대한 설명입니다.";
}
