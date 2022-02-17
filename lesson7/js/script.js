let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 60px 0px'
}

const loadImages = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
        img.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    imagesToLoad.forEach((image) => {
        observer.observe(image);
    });
} else {
    imagesToLoad.forEach((image) => {
        loadImages(image);
    });
}


