document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        //INITIATE HOMEPAGE FUNCTIONALITIES
        function initiateHomepageFunctionality(){
            //show/hide nav menu items/links
            function toggleMenu(){
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
            //animate homepage arrow-down icon 
            function animateArrowDown(){
                const arrowDown = document.querySelector('.icon-arrow-down')
                with(arrowDown.style){
                    animationName = 'arrow-pulse'
                    animationDuration = 6 + 's'
                }
            }
            function isHomePage(){
                const path = document.location.pathname
                if(
                    path == '/'
                            ||
                    path == '/netMatters-Scion-Coalation-Scheme-Portfolio/index.html' 
                            || 
                    path == '/index.html'
                ){
                    //play animation on initial homepage load
                    animateArrowDown()
                }else{
                    //only toggle menu where it exists i.e. homepage
                    document?.querySelector('.icon-menu')?.addEventListener(
                        'click',
                        toggleMenu
                    )
                }
            }
            isHomePage()
        }
        initiateHomepageFunctionality()
    }
)