let profPic: HTMLImageElement = document.getElementById('profile-img') as HTMLImageElement;
let inputFile: HTMLInputElement = document.getElementById('input-file') as HTMLInputElement;

inputFile.addEventListener('change', () => {
    if(inputFile) {
        let file: File = inputFile.files![0];
        let pattern = /image-*/

        if(!file.type.match(pattern)){
            alert("Invalid format, plz select image only");
            return
        }
        profPic.src = URL.createObjectURL(inputFile.files![0])
    }
})



