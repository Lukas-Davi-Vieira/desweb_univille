function send_message() {
    let textarea = document.getElementById("main-input");
    let view = document.getElementById("comments-view");

    let data = textarea.value;

    if (data != "") {        
        let new_comment = document.createElement("div");
        new_comment.className = "message";
        new_comment.innerHTML = data;

        view.appendChild(new_comment);

        textarea.value = "";
    }
}

let textarea = document.getElementById("main-input");

textarea.addEventListener("keydown", function(event) {
    let keyname = event.key;
    if (keyname === "Enter") {
        event.preventDefault();
        document.getElementById("submit-button").click();
    }
});