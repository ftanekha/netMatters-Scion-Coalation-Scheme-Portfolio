document.addEventListener(
    'DOMContentLoaded',
    ()=>{
        const hamburgerMenuIcon = document.querySelector('.icon-menu')
        hamburgerMenuIcon.addEventListener(
            'click',
            ()=>{
                //display man-nav link items if hidden
                // const mainNav = document.querySelector('nav ul')
                // if(mainNav.css('display') === 'hidden') mainNav.css('display') === 'block'

                const sectionLink = document.querySelectorAll('.section-link')
                const rotateLinks = document.querySelector('.rotateLinks')
                sectionLink.forEach(
                    link => {//toggle main-nav
                        if(link.style.visibility === 'hidden'){
                            link.style.visibility = 'visible'
                            //reposition social media icons
                            rotateLinks.style.flexDirection = 'row'
                            rotateLinks.style.marginTop = '0'
                            rotateLinks.style.marginLeft = '0'
                            
                        }else{//toggle main-nav
                            link.style.visibility = 'hidden'
                            //flip social media icons
                            //there's a delay due to the hamburger icon having a .2s trasition delay?
                            const flipTimer = setTimeout(
                                ()=> {
                                    rotateLinks.style.flexDirection = 'column'
                                    rotateLinks.style.marginTop = '-400px'
                                    rotateLinks.style.marginLeft = '-60px'
                                    rotateLinks.style.gap = '20px'
                                    clearTimeout(flipTimer)
                                }, 300
                            )
                        }
                    }
                )
            }
        )
    }
)                       