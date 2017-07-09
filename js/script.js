
        var menu = document.getElementById('openMenu');
        var menuBlock = document.getElementById('menuBlock');
        var closeMenu = document.getElementById('closeMenu');
        menu.addEventListener('click', function (event) {
            if (menuBlock.style.width == "" || menuBlock.style.width == "0%") {
                menuBlock.style.width = '40%';
            }
            else {
                menuBlock.style.width = '0%';
            }
            event.preventDefault();
        });
        closeMenu.addEventListener('click', function () {
            menuBlock.style.width = '0%';
            event.preventDefault();
        });
  