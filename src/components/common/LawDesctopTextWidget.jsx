import { useState, useEffect } from "react";
const LawDesctopTextWidget = ({elementRef, imageRef, title, body}) => {
    const [position, setPosition] = useState(null);
    const [imagePosition, setImagePosition] = useState(null)
    const [width, setWidth] = useState(null);
    useEffect(() => {
        const handleResizeWindow = () => {
            setPosition(elementRef.current.offsetLeft + imageRef.current.offsetLeft)
            setImagePosition(imageRef.current.offsetLeft)
            setWidth(window.innerWidth)
        }
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)
        
        return () => window.removeEventListener('resize', handleResizeWindow)
    }, [elementRef, imageRef, position, width])
    return (
        <div className={
            `absolute
            z-10
            flex flex-col justify-start 
          bg-blue px-5 py-5 
            w-max-[500px] w-[300px] 
            h-auto max-h-[350px] top-0
            ${width - position > 500 ? (imagePosition < 30 ? 'left-[60%]' : 'left-[100%]') : (imagePosition > 30 ? ' right-[65%] lg:right-[50%]' : 'right-[100%]')}
            rounded-2xl`}>
            <h3 className="text-center text-inter my-[10px] text-black text-[30px] underline">{title}</h3>
            <ul className="w-full pl-4">
                <li className="list-disc">{body}</li>
            </ul>
        </div>
    )
}

export default LawDesctopTextWidget;