import arrow from "../../assets/images/stories/arrow.svg";
const Card = ({ title, body, image, link }) => {
    return (
        <article className="md:!flex md:!justify-center px-3">
            <div className="flex flex-col px-5 bg-yellowBg md:bg-white py-7 rounded-3xl w-[330px] xl:w-[417px] h-[682px] md:h-[554px]">
                <h4 className="text-2xl font-bold">
                    {title}
                </h4>
                <img className="my-3" src={image} alt={title} />
                <p className="overflow-y-auto overflow-auto text-lg scrollbar-w-3 h-[auto] grow md:h-[180px] xl:h-[150px] scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    {body}
                </p>
                {
                    link
                        ? (
                            <div className="flex justify-end gap-3 mt-3">
                                <a href={link} className="">
                                    Перейти на сайт
                                </a>
                                <img src={arrow} alt="Arrow" />
                            </div>
                        )
                        : null

                }

            </div>
        </article>
    );
};

export default Card;
