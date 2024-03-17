

const Banner = () => {
    return (
        <div>
            <div className="h-full w-full rounded-3xl p-5 md:p-8 lg:p-28 xl:p-40 flex justify-center items-center bg-cover bg-no-repeat bg-center bg-gradient-to-r from-rgba-21-11-43-90 to-transparent" style={{backgroundImage: "url('https://i.ibb.co/fDFPb57/banner.png')"}}>
                   <div className="flex flex-col items-center text-center">
                        <h1 className="text-xl md:text-3xl lg:text-5xl text-white text-wrap lg:leading-[76px] max-w-[870px]">Discover an exceptional cooking class  tailored for you!</h1>
                        <p className="text-sm md:text-base lg:text-lg text-white max-w-[933px] mt-6"> From traditional cuisines to modern culinary trends, we offer a diverse range of cooking styles and techniques to suit your preferences. You will learn to create delicious dishes that tantalize the taste buds and impress even the most discerning palates.</p>
                        <div className="flex gap-4 mt-5 md:mt-10 ">
                            <button className="px-3 py-2 md:px-8 md:py-5 bg-[#0BE58A] text-sm md:text-xl font-semibold rounded-r-full rounded-l-full">Explore Now</button>
                            <button className="px-3 py-2 border border-white md:px-8 md:py-5 text-sm md:text-xl text-white font-semibold rounded-r-full rounded-l-full duration-500 ease-in hover:bg-[#0BE58A] hover:text-black  hover:outline-none">Explore Now</button>
                        </div>
                   </div>
            </div>
        </div>
    );
};

export default Banner;