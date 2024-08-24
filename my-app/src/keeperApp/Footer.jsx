import  React from 'react'

const date= new Date()
    let year= date.getFullYear()
function Footer(){
    return(
        <footer>
        <p className='footer-text'>copyright &#169; chimex {year}</p>
    </footer>
    ) 
}
export default Footer;