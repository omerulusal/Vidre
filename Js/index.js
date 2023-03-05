const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list")
arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if (itemNumber - (5 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 390}px)`
        }
        else {
            movieLists[i].style.transform = "translateX(0)"
        }
    })
})


// Dark MODE

const tball = document.querySelector(".tBall");
const items = document.querySelectorAll("#arkaPlan ,#navnav,#navnav a,#mode,#mode a,.category,.toggler,.tBall")
tball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active")
    })
})
