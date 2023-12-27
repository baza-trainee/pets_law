import { useState } from "react"
import { useEffect } from "react"
const Link = ({children, to, className}) => {
    const [scrollElement, setScrollElement] = useState(null)
   useEffect(()=>{
    setScrollElement(document.getElementById(to))
   }, [to])
   const handleScroll = () => {
    const elementOffSetTop = scrollElement.getBoundingClientRect().top
    window.scrollTo({
        top: elementOffSetTop + window.pageYOffset - 100,
        behavior: 'smooth'
    })
}
    return <a className={className} onClick={handleScroll}>{children}</a>
}

export default Link