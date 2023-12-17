import IconArrow from "../common/icons/IconArrow"

const HeaderMobile = ({ isOpenMobile, isOpen, toggleMenu }) => {
    return (
        <>
            {
                isOpenMobile && (
                    <nav id='mobile_menu' className="absolute top-[100%] overflow-y-visible bg-lightBlack/[.6] left-0 z-20 w-full h-screen">
                        <div className=" h-full overflow w-[90%] mx-auto">
                            <ul className="relative pb-[90px] mx-auto">
                                <li className="mx-auto w-[98%] my-[30px]">
                                    <a className="btn btn-white h-[42px] ">
                                        Головна
                                    </a>
                                </li>
                                <li className="mx-auto w-[98%] my-[30px]">
                                    <a onClick={toggleMenu} className="btn btn-white h-[42px] ">
                                        Права тварин
                                        <IconArrow isOpen={isOpen} />
                                    </a>
                                    {
                                        isOpen && (
                                            <ul>
                                                <li className="mx-auto w-[98%] my-[30px]">
                                                    <a className="btn btn-white h-[42px] ">
                                                        Частина 1
                                                    </a>
                                                </li>
                                                <li className="mx-auto w-[98%] my-[30px]">
                                                    <a className="btn btn-white h-[42px] ">
                                                        Частина 2
                                                    </a>
                                                </li>
                                                <li className="mx-auto w-[98%] my-[30px]">
                                                    <a className="btn btn-white h-[42px] ">
                                                        Частина 3
                                                    </a>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>
                                <li className="mx-auto w-[98%] my-[30px]">
                                    <a className="btn btn-white h-[42px] ">
                                        Поради
                                    </a>
                                </li>
                                <li className="mx-auto w-[98%] my-[30px]">
                                    <a className="btn btn-white h-[42px] ">
                                        Партнери
                                    </a>
                                </li>

                                <li className="mx-auto w-[98%] my-[30px]">
                                    <a className="btn btn-white h-[42px] ">
                                        Контакти
                                    </a>
                                </li>

                                <li className="mx-auto w-[98%] mt-[60px] btn btn-orange">
                                    Підтримати проєкт
                                </li>
                            </ul>
                        </div>

                    </nav>
                )
            }</>
    )
}

export default HeaderMobile