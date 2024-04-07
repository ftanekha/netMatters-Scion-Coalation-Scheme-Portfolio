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
        //////
        //DISPLAY RANDOM INITIALS
        function displayRandonInitials(){
            const targetImage = document.querySelector('#initials-image')
            const imgSourceOptions = 
            [ 
                "multiply", "hard-light",
                "difference", "exclusion",
                "plus-darker", "plus-lighter"
            ]
            // generate random source on page load
            function generateRandomImageSource(optionsArray){
                const [min, max] = [0, optionsArray.length - 1]
                const rangeFactor = max - min
                return Math.floor(Math.random() * (rangeFactor + 1)) + min
            }
            const randomIndex = generateRandomImageSource(imgSourceOptions)
            return targetImage.style.mixBlendMode = imgSourceOptions[randomIndex]
        }
        displayRandonInitials()
        //////
    }
)