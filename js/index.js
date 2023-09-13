/* Create event listener for buttons with id menuItem in the nav tag */
/* If a button is clicked it should have an active class property and the other buttons with menuItem id
 should have this property removed*/

const menuItem = document.querySelectorAll(".menuItem").forEach(item => {
    item.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
            item.classList.add("active");
        };
        elseif (item.classList.contains("active")); {
            item.classList.remove("active");
        };
    });
});

