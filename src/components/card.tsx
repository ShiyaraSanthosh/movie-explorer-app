
const Card = () => {
    return (
        <div className=" bg-white shadow-md w-60 rounded-lg shadow-sm dark:bg-black  mt-[8%] ml-[5%]">
            <img src="/assets/img1.png" alt="Movie poster" className="w-60 h-70 " />
            <div className="p-4 space-y-2 rounded-lg shadow-sm dark:bg-black ">
        
        <h3 className="text-lg font-bold text-gray-800">Spider Man</h3>

     
        <p className="text-yellow-600 font-semibold">7.3⭐</p>
<h3 className="text-lg font-bold text-gray-800">Overview</h3>
        <p className="text-sm text-gray-600 line-clamp-3  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati esse quia iste, incidunt maiores! Corporis voluptates, eligendi tempore velit, iure aut quod vero, rerum labore minus nihil necessitatibus beatae?
    
        </p>
        </div>
        </div>
    );
}

export default Card;
