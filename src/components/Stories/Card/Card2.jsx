import dogImage from "../../../assets/images/stories/dog.webp";

const Card2 = () => {
  return (
    <article className="md:!flex md:!justify-center px-3">
      <div className="px-5 bg-yellowBg md:bg-white py-7 rounded-3xl w-[330px] xl:w-[417px] h-[682px] md:h-[554px]">
        <h4 className="text-2xl font-bold">Собака-рятувальник</h4>
        <img className="my-2.5 " src={dogImage} alt="dogImage" />
        <p className="overflow-y-scroll text-lg h-[420px] md:h-[275px] xl:h-[220px] xl:scrollbar-w-3 xl:scrollbar xl:scrollbar-thumb-gray-700 xl:scrollbar-track-gray-300 xl:scrollbar-thumb-rounded-full xl:scrollbar-track-rounded-full">
          Ймовірно вам знайомі фотографії величезних пухнастих собак-
          сенбернарів із невеличкими флягами алкоголю на шиї. Але ви, можливо,
          не знали, що собаки цієї породи стали гірськими рятувальниками з
          легкої руки ченців-августинців, які жили у Пеннінських Альпах. Вони
          вивели міцних та розумних собак, які не боялися морозу та вітру і,
          завдяки своєму нюху
        </p>
      </div>
    </article>
  );
};

export default Card2;
