
let loadProfileImage = () => {
    let image = document.querySelector('.profile .image');
    let imageSrc = image.getAttribute('src');

    image.style.backgroundImage = `url(${imageSrc})`;
}

let init = () => {
    // Here you can initialize all the functions in the code at once
    loadProfileImage(); // Loads the profile image
}

init();



