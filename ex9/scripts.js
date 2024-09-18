function open_modal(mode) {
    let modal_container = document.getElementById("modal-container");

    if (mode === 'login') {
        let dialog = document.getElementById("login-dialog");
        modal_container.style.display = "flex";
        dialog.style.display = "flex";
    } else {
        let dialog = document.getElementById("signup-dialog");
        modal_container.style.display = "flex";
        dialog.style.display = "flex";
    };
}

const signup_form = document.getElementById("signup-form");
signup_form.addEventListener("submit", function (event) {
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const emailConfirm = formData.get("email-confirm");
    const username = formData.get("username");
    const password = formData.get("pswrd");
    const passwordConfirm = formData.get("pswrd-confirm");

    if (email != emailConfirm) {
        event.preventDefault();
        alert("O e-mail de confirmação precisa ser igual ao e-mail fornecido");
    } else if (password != passwordConfirm) {
        event.preventDefault();
        alert("A confirmação da senha precisa corresponder à senha fornecida");
    } else if (email == "" || emailConfirm == "" || username == "" || password == "" || passwordConfirm == "") {
        event.preventDefault();
        alert("Todos os campos devem ser preenchidos")
    } else {
        alert("Conta criada com sucesso")
    }
});