/*Event listener for changing nav button style based on state */

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

