const IconArrow = ({isOpen}) => {
    return (
        <svg
            className={`flex justify-start items-center duration-200 mt-[4px] ml-[6px] w-4 xl:w-6 ${isOpen ? "rotate-180 stroke-[#A7A3A3]" : ""
                }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="13"
            viewBox="0 0 24 13"
            fill="none"
        >
            <path
                className={`${isOpen ? "stroke-[#A7A3A3]" : ""}`}
                d="M1 0.5L12 11.5L23 0.5"
                stroke="#181717"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default IconArrow