function el(id) { return document.getElementById(id); } // Get elem by ID

var canvas = el("floorplanner-canvas");
var context = canvas.getContext("2d");

function readImage() {
    if (this.files && this.files[0]) {
        var FR = new FileReader();
        FR.onload = function(e) {
            var img = new Image();
            img.onload = function() {
                context.drawImage(img, 700, 385);
            };
            img.src = e.target.result;
        };
        FR.readAsDataURL(this.files[0]);
    }
}

el("fileUpload").addEventListener("change", readImage, false);