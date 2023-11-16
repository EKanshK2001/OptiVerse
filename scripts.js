// auto growing textarea in create post

const textarea = document.getElementById("txtArea");
textarea.addEventListener("keyup", e => {
    textarea.style.height = "79px";
    let scrollHeight = e.target.scrollHeight;
    textarea.style.height = `${scrollHeight}px`;
});