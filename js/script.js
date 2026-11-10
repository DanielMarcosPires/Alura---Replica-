const carousel_box = document.querySelector(".carousel_box");

function autoScroll() {
    const widthPage = carousel_box.clientWidth;
    const currentPosition = carousel_box.scrollLeft + widthPage;

    if (currentPosition >= carousel_box.scrollWidth){
        carousel_box.scrollTo({
            left:0,
            behavior:"smooth"
        });
        return;
    }

    console.log(widthPage)

    carousel_box.scrollTo({
        left: widthPage,
        behavior:"smooth"
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(()=>{
        autoScroll()
    }, 5000);
});