const LawCardMobile = ({ title, body, image, reverse }) => {
    return (
        <div className="relative overflow-x-hidden">
            <div className={`flex-col items-center w-full min-h-[200px] h-auto ${!reverse ? 'bg-blue' : 'bg-green'} box-border px-5 py-5 rounded-2xl my-[20px] transition-all ease-linear ${reverse ? 'animate-fadeinRight' : 'animate-fadeinLeft'}  `}>
                <div className={`${reverse ? 'flex flex-row-reverse' : 'flex'} justify-between items-center`}>
                    <div className="relative flex justify-center items-center w-[120px] h-[120px]">
                        <img className="rounded-[20px] z-10 w-[80px] h-[80px]" width="100" height="100" src={image} alt="" />
                        <svg className="absolute top-0 bottom-0 left-0 right-0" width="120" height="120" viewBox="0 0 185 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.4561 26.4158C22.4561 15.3701 31.4104 6.41577 42.4561 6.41577H99.3863C119.291 6.41577 126.977 32.3272 110.292 43.1809L70.8912 68.8104C68.7745 70.1873 66.9376 71.9526 65.4778 74.013L58.775 83.473C47.5038 99.3804 22.4561 91.4061 22.4561 71.9104V26.4158Z" fill="#C688D0" />
                            <path d="M153.227 16.681C164.272 16.681 173.227 25.6353 173.227 36.681L173.227 93.6112C173.227 113.516 147.315 121.202 136.461 104.517L110.832 65.1161C109.455 62.9994 107.69 61.1626 105.629 59.7027L96.1694 52.9999C80.2619 41.7288 88.2362 16.681 107.732 16.681L153.227 16.681Z" fill="#527758" />
                            <path d="M139.991 181.733C135.493 191.822 123.669 196.354 113.58 191.857L61.5827 168.676C43.4023 160.572 46.9326 133.776 66.5918 130.657L113.014 123.29C115.508 122.895 117.904 122.03 120.077 120.743L130.05 114.832C146.822 104.892 166.453 122.374 158.514 140.18L139.991 181.733Z" fill="#8281CE" />
                            <path d="M22.4472 139.991C12.3586 135.493 7.82609 123.669 12.3235 113.58L35.5037 61.5829C43.6085 43.4025 70.4042 46.9328 73.5237 66.5919L80.8898 113.014C81.2855 115.508 82.1499 117.904 83.4374 120.077L89.3485 130.051C99.2884 146.822 81.8064 166.453 63.9999 158.515L22.4472 139.991Z" fill="#E5E29B" />
                        </svg>
                    </div>
                    
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