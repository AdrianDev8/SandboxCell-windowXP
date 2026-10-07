let sandboxOpen = false;

function openSandbox() {

    if (sandboxOpen) {
        return;
    }

    sandboxOpen = true;

    document.getElementById("sandbox").style.display = "block";
}