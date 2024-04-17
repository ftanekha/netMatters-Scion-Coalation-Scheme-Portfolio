document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        //current URL pathname
        const path = document.location.pathname
        //check if current location === homepage
        function isHomePage(){
            if(
                path == '/'
                        ||
                path == '/index.html'
                        ||
                path == '/netMatters-Scion-Coalation-Scheme-Portfolio/'
                        ||
                path == '/netMatters-Scion-Coalation-Scheme-Portfolio/index.html' 
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
            //DISPLAY RANDOM INITIALS on homepage
            function displayInitials(){
                const targetImage = document.querySelector('#initials-image')
                const imgSourceOptions = 
                [ 
                    "multiply", "hard-light",
                    "difference", "exclusion",
                    "plus-darker", "plus-lighter"
                ]
                // generate random Initials image CSS blend mode on homepage load
                function generateRandomImageBlendMode(optionsArray){
                    const [min, max] = [0, optionsArray.length - 1]
                    const rangeFactor = max - min
                    return Math.floor(Math.random() * (rangeFactor + 1)) + min
                }
                const randomIndex = generateRandomImageBlendMode(imgSourceOptions)
                //display initials image in randomised blend mode
                targetImage.style.mixBlendMode = imgSourceOptions[randomIndex]
            }
            //
            animateArrowDown()
            displayInitials()
        }
        //show/hide nav menu items/links on pages !== homepage
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
        //animate arrow-down icon & display initials on initial homepage load
        if( isHomePage() ){
            initiateHomepageFunctionality()
        }else{//OR
            //toggle nav-menu where it exists i.e. NOT homepage
            document.querySelector('.icon-menu').addEventListener(
                'click',
                toggleMenu
            )//&&
             //highlight current page-link in nav menu
            function highlightCurrentPageLink(){
                const linkOptions =[ 
                    "about-me", "my-portfolio",
                    "code-examples", "scs",
                    "contact-me"
                ]
                //path contains the current page name
                linkOptions.forEach(
                    link => {
                        if(path.includes(link)){
                            //target current page menu list item
                            const currentPageNavListItem = document.querySelector(`.item-${link}`)
                            //target nested <a> i.e. only child el
                            const targetAnchorTag = currentPageNavListItem.firstElementChild
                            //highlight the anchor element
                            targetAnchorTag.style.backgroundColor = 'black'
                            //change text color from red to white
                            targetAnchorTag.style.color = 'white'
                        }
                    }
                )
            }
            highlightCurrentPageLink()
            
            //limit the width of nav link items to utilise space efficiently
            const navList =  [];
            (
                document.querySelectorAll('.nav-link')
            ).forEach( navItem => navList.push(navItem))
            //verify array
            // console.log(Array.isArray(navList))
            //verify nav item length
            navList.forEach( navItem => console.log(navItem.textContent.length))
            //One character is equivalent to 8 pixels, so
            const navLinksLengths = []
            navList.forEach(
                navItem => navLinksLengths.push(navItem.textContent.length * 8)
            )
            // console.log(navLinksLengths)
            //
            navList.forEach( navItem => {
                navItem.style.width = navLinksLengths[navList.indexOf(navItem)] + 'px'
                console.log(navItem.style.width)
            })
        }
    }
)                       