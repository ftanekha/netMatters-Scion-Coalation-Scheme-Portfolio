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
        //only toggle menu where display is NOT initially 'none'
        const path = document.location.pathname
         if(path != '/index.html'){
            document?.querySelector('.icon-menu')?.addEventListener(
                'click',
                ()=> toggleMenu()
            )
        }
       
    }
)