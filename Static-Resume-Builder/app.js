var profPic = document.getElementById('profile-img');
var inputFile = document.getElementById('input-file');
inputFile.addEventListener('change', function () {
    if (inputFile) {
        var file = inputFile.files[0];
        var pattern = /image-*/;
        if (!file.type.match(pattern)) {
            alert("Invalid format, plz select image only");
            return;
        }
        profPic.src = URL.createObjectURL(inputFile.files[0]);
    }
});
