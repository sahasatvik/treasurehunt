var input = document.getElementById("answer");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submitButton").click();
    }
});

function validate() {
    var answer = input.value;
    answer = answer.trim().toLowerCase();
    if (answer.length == 0) {
        return;
    }
    var title = document.title;
    var hash = sha1(title + answer);
    window.location.href = "../" + hash + "/";
}
