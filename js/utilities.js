export function animateMainNav(){
    const hasMainNavBeenAnimated = localStorage.getItem('hasMainNavBeenAnimated')
    if(!hasMainNavBeenAnimated){
        $('nav li').css('display', 'none').delay(2000).slideDown(2000)
        localStorage.setItem('hasMainNavBeenAnimated', true)
    }
}