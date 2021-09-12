
// get the modal
var modal = document.getElementById("galleryModal");

// get the image and insert inside the modal, use alt text as caption

function showImgModal(element) {
    var targetImg = element;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var audio = element.nextElementSibling;
    audio.play();

    modal.style.display = "block";
    modalImg.src = targetImg.src;
    captionText.innerHTML = targetImg.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
