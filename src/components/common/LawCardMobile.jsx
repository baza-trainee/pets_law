const LawCardMobile = ({ title, body, image, reverse }) => {
    return (
        <div className="relative overflow-x-hidden">
            <div className={`flex-col items-center w-full min-h-[200px] h-auto ${!reverse ? 'bg-blue' : 'bg-green'} box-border px-5 py-5 rounded-2xl my-[20px] transition-all ease-linear ${reverse ? 'animate-fadeinRight' : 'animate-fadeinLeft'}  `}>
                <div className={`${reverse ? 'flex flex-row-reverse' : 'flex'} justify-between items-center`}>
                    <img width="100" height="100" src={image} alt="" />
                    <h3 className=" grow text-center text-[25px] font-inter decoration-solid decoration-black underline">{title}</h3>
                </div>
                <div>
                    <p className="text-[16px] text-start font-inter">{body}</p>
                </div>
            </div>
        </div>

    )
}

export default LawCardMobile