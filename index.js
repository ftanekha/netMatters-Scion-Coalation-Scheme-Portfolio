document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        //current URL pathname
        const path = document.location.pathname
        function isHomePage(){
            if(
                path == '/'
                        ||
                path == '/netMatters-Scion-Coalation-Scheme-Portfolio/index.html' 
                        || 
                path == '/index.html'
            )return true
            return false
        }
        //INITIATE HOMEPAGE FUNCTIONALITIES
        function initiateHomepageFunctionality(){
            //animate homepage arrow-down icon 
            function animateArrowDown(){
                const arrowDown = document.querySelector('.icon-arrow-down')
                with(arrowDown.style){
                    animationName = 'arrow-pulse'
                    animationDuration = 6 + 's'
                }
            }
            //DISPLAY RANDOM INITIALS
            function displayInitials(){
                const targetImage = document.querySelector('#initials-image')
                const imgSourceOptions = 
                [ 
                    "multiply", "hard-light",
                    "difference", "exclusion",
                    "plus-darker", "plus-lighter"
                ]
                // generate random blend mode on page load
                function generateRandomImageBlendMode(optionsArray){
                    const [min, max] = [0, optionsArray.length - 1]
                    const rangeFactor = max - min
                    return Math.floor(Math.random() * (rangeFactor + 1)) + min
                }
                const randomIndex = generateRandomImageBlendMode(imgSourceOptions)
                //display initials in randomised blend mode
                targetImage.style.mixBlendMode = imgSourceOptions[randomIndex]
            }
            //
            animateArrowDown()
            displayInitials()
        }
        //show/hide nav menu items/links
        function toggleMenu(){
            const menu = document.querySelector('nav > ul')
            with(menu.style){
                if(display != 'flex'){
                    display = 'flex'
                    flexDirection = 'column'
                    listStyleType = 'none'
                } else{
                    display = 'none'
                }    
            }
        }
        //animate menu icon & display initials on initial homepage load
        if( isHomePage() ){
            initiateHomepageFunctionality()
        }else{//OR
            //only toggle menu where it exists i.e. NOT homepage
            document.querySelector('.icon-menu').addEventListener(
                'click',
                toggleMenu
            )
        }
    }
)

//    console.log(menu.firstElementChild)
                        // highlight current page in nav menu
                        // determine current page link name


                        // const urlExtension = '.html'
                        // const currentPageLink = path.substring(1, path.length - urlExtension.length)
                        // console.log(currentPageLink)
                        // //target current page link item
                        // const currentPageNavListItem = document.querySelector(`.item-${currentPageLink}`)
                        // console.log(currentPageNavListItem.firstElementChild)


                        // highlight the nested anchor element
                        // currentPageNavListItem.style.backgroundColor = 'black'
                        //address problematic cases
                        // setTimeout(() => {
                        //     switch(currentPageLink){
                        //         case 'my-portfolio':
                        //             (document.querySelector('.item-my-portfolio a')).style.backgroundColor = 'black'
                        //             break
                        //         case 'scs':
                        //             (document.querySelector('.item-scs a')).style.backgroundColor = 'black'
                        //             break
                        //         default:
                        //             console.error('Error: Invalink nav-menu link!')
                        //             break
                        //     }
                        // }, 3e3);