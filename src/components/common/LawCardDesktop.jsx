
import { useRef, useState, useEffect } from "react";


const LawCardDesktop = ({ title, body, image, className, isShow, onClick, id }) => {
    const elementRef = useRef(null);
    const imageRef = useRef(null)
    const [position, setPosition] = useState(null);
    const [imagePosition, setImagePosition] = useState(null)
    const [width, setWidth] = useState(null);
    useEffect(() => {
        const handleResizeWindow = () => {
            setPosition(elementRef.current.offsetLeft)
            setImagePosition(imageRef.current.offsetLeft)
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResizeWindow())
        return () => window.removeEventListener('resize', handleResizeWindow())
    }, [elementRef])

    return (
        <div onClick={() => onClick(id)} ref={elementRef} className={"relative flex w-full h-full" + ' ' + className}>
            <img ref={imageRef} className="w-[90px] h-[90px] 2xl:w-[130px] 2xl:h-[130px]" src={image} alt={title} />
            {
                isShow
                    ? (
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
                        

                    ) : null
            }

        </div>
    )
}

export default LawCardDesktop