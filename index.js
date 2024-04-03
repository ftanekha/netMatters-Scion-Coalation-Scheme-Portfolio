document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        //toggle nav menu
        const menuIcon = document.querySelector('.icon-menu')
        menuIcon.addEventListener(
            'click',
            ()=> {
                let menu = document.querySelector('.icon-menu + ul')
                let menuDisplayMode = document.querySelector('.icon-menu + ul').style.display
                if(menuDisplayMode =='none'){
                    menu.style.display = 'flex'
                }else{
                    menu.style.display = 'none'  
                }
            }
        )
    }
)