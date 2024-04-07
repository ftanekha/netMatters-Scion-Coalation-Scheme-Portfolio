document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        //INITIATE HOMEPAGE FUNCTIONALITIES
        function initiateHomepageFunctionality(){
            //current URL pathname
            const path = document.location.pathname
            //show/hide nav menu items/links
            function toggleMenu(){
                const menu = document.querySelector('nav > ul')
                with(menu.style){
                    if(display != 'flex'){
                        display = 'flex'
                        flexDirection = 'column'
                        listStyleType = 'none'
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
                //play animation on initial homepage load
                if( isHomePage() ){
                    animateArrowDown()
                }else{//OR
                    //only toggle menu where it exists i.e. NOT homepage
                    document.querySelector('.icon-menu').addEventListener(
                        'click',
                        toggleMenu
                    )
                }
            }
        }
        initiateHomepageFunctionality()
        //////
        //DISPLAY RANDOM INITIALS
        function displayInitials(){
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
            console.log(randomIndex)
            // return targetImage.style.mixBlendMode = imgSourceOptions[randomIndex]
            try{
                return targetImage.style.mixBlendMode = imgSourceOptions[randomIndex]
            }catch(err){
                const smilyFace = '\uD83D\uDE38'
                if(err.name == 'TypeError') console.warn(`Minor error: ${err.name}. ANTICIPATED as current page NOT homepage ${smilyFace}`)
                //temporary solution as page freezes
                const timeout = setTimeout(
                    ()=> {
                        location.assign('/index.html')
                        clearTimeout(timeout)
                    }, 3e3
                )
            }
        }
        displayInitials()
        //////
    }
)