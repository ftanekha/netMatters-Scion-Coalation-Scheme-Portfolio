document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        function toggleMenu(){
            // show/hide nav menu items/links
            let menu = document.querySelector('.icon-menu + ul')
                let menuDisplayMode = menu.style.display
                if(menuDisplayMode == 'none'){
                    with(menu.style){
                        display = 'flex'
                        flexDirection = 'column'
                        listStyleType = 'none'
                    }
                }else{
                    menu.style.display = 'none'  
                }
        }
        //toggleMenu with menu icon
        const menuIcon = document.querySelector('.icon-menu')
        menuIcon.addEventListener(
            'click',
            ()=> {
                toggleMenu()
            }
        )
        // toggleMenu with nav menu item
        const menuItem = document.querySelector('.nav')
        menuItem.addEventListener(
            'click',
            ({target})=> {
                target.parentNode.style.display = 'none'
                toggleMenu()
            }
        )
    }
)