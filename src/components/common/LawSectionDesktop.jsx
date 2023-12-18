import React, { Children, useState } from "react"

const LawSectionDesktop = ({ children }) => {
    const [active, setActive] = useState(null)
    const handleUpdateActive = (id) => {
        id === active ? setActive(null) : setActive(id)
    }
    const rendrerChildren = () => {
       return Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                onClick: handleUpdateActive,
                id: index,
                isShow:  active === index
            })
        })
    }
    return (
        <div className="hidden w-full mx-auto h-[500px] md:grid grid-cols-6 grid-rows-3 row-span-2 max-w-[1440px]">
            {rendrerChildren()}
        </div>
    )
}

export default LawSectionDesktop