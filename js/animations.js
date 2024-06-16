import {animateMainNav} from './utilities.js'

$(()=>{
    // display my name
    $('#banner big').css('display', 'none').delay(2000).fadeIn(5000)
    //animate scroll down arrow
    $('.icon-arrow-down').css('display', 'none').delay(2000).fadeIn(4000)
    //animate main nav list items only once
    animateMainNav()
})