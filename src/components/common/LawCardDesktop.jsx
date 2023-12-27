
import { useRef, useState, useEffect } from "react";
import LawDesctopTextWidget from "./LawDesctopTextWidget";


const LawCardDesktop = ({ title, body, image, className, isShow, onClick, id }) => {
    const elementRef = useRef(null);
    const imageRef = useRef(null)

    const [isShowLaw, setIsShowLaw] = useState(isShow)
    const handleOutsideClick = (e) => {
        if (e.target !== imageRef.current) {
            setIsShowLaw(false)
        }
    }
    useEffect(() => {
        setIsShowLaw(isShow)
        window.addEventListener('click', handleOutsideClick)
        return () => window.removeEventListener('click', handleOutsideClick)
    }, [isShow])

    return (
        <div onClick={() => onClick(id)} ref={elementRef} className={"relative flex w-full h-full" + ' ' + className}>
            <img ref={imageRef} className="w-[90px] h-[90px] cursor-pointer 2xl:w-[130px] 2xl:h-[130px]" src={image} alt={title} />
            {
                isShowLaw
                    ? <LawDesctopTextWidget
                        title={title}
                        body={body}
                        elementRef={elementRef}
                        imageRef={imageRef}
                    />
                    : null
            }

        </div>
    )
}

export default LawCardDesktop