document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        function toggleMenu(){
            //show/hide nav menu items/links
            const menu = document.querySelector('nav > ul')
            with(menu.style){
                if(display != 'flex'){
                    display = 'flex'
                    flexDirection = 'column'
                    listStyleType = 'none'
                }else{
                    display = 'none'
                }
            }     
        }
        const path = document.location.pathname
        console.log(path)
        //animate homepage arrow-down icon 
        function animateArrowDown(){
            const arrowDown = document.querySelector('.icon-arrow-down')
            with(arrowDown.style){
                animationName = 'arrow-pulse'
                animationDuration = 3 + 's'
            }
        }
        if(path == '/index.html'){
            //play animation on initial page load
            
            animateArrowDown()
        }else{
            //only toggle menu where it exists
            document?.querySelector('.icon-menu')?.addEventListener(
                'click',
                toggleMenu
            )
        }
    }
)