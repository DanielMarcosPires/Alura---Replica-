const carousel_box = document.querySelectorAll("#carousel");




function autoScroll(carousel) {
        const widthPage = carousel.clientWidth;
        const currentPosition = carousel.scrollLeft + widthPage;

        if (currentPosition >= carousel.scrollWidth) {
            carousel.scrollTo({
                left: 0,
                behavior: "smooth"
            });
            return;
        }

        console.log(widthPage)

        carousel.scrollTo({
            left: widthPage,
            behavior: "smooth"
        })
}

document.addEventListener("DOMContentLoaded", () => {
    carousel_box.forEach((carousel) => {
        time = carousel.getAttribute('data-time')
        setInterval(() => {
            autoScroll(carousel)
        }, time)
    })
});