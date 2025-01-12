function animateImage(element, animationType) {
    return new Promise((resolve) => {
        switch (animationType) {
            case 'rotate':
                element.style.transform = 'rotate(360deg)';
                break;
            case 'scale':
                element.style.transform = 'scale(1.8)';
                break;
            case 'fade':
                element.style.opacity = -3;
                break;
            default:
                break;
        }

        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

async function animateImages() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');

    await animateImage(image1, 'rotate');
    await animateImage(image2, 'scale');
    await animateImage(image3, 'fade');

    image1.style.transform = '';
    image2.style.transform = '';
    image3.style.opacity = 1;
}
window.onload = animateImages;
