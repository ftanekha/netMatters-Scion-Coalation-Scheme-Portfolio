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
         if(path != '/index.html'){
            //only toggle menu where display is NOT initially 'none'
            document?.querySelector('.icon-menu')?.addEventListener(
                'click',
                ()=> toggleMenu()
            )
        }else{
            //animate homepage arrow-down icon 
            const arrowDown = document.querySelector('.icon-arrow-down') 
            with(arrowDown.style){
                animationName = 'arrow-pulse'
                animationDuration = 5 + 's'
            }
        }
       
    }
)