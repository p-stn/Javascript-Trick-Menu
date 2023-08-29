const _clMenu = document.querySelector(".menu")
const _ham = document.querySelector(".ham")


_clMenu.addEventListener("mousedown", function () {
    var flag = true
    return () => {
        if (flag) {
            _ham.style.right = "0px"
        } else {
            _ham.style.right = "-300px"
        }
        flag = !flag

    }
}())