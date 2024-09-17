import Navber from "./navber"
import { FaStar } from "react-icons/fa";


interface propsType {
    img: string;
    name: string;
    price: number;
    desc: string;
    category: string;
    rating: number;
}


const VegCard:React.FC<propsType> = ({img,name,price,desc,rating}) => {
    return (
        <>
            <Navber />
                <div className=" font-bold w-[255px] bg-slate-100 p-8 flex flex-col mt-16 rounded-lg gap-2 ">
                    <img src={img} alt="" className=" w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"/>
                    <div className=" text-sm flex justify-between">
                        <h2>{name.slice(0,18)}</h2>
                        <span className=" text-green-500"> ₹ {price}</span>
                    </div>
                    <p className=" text-sm font-normal"> {desc.slice(0,50)}...
                    </p>
                    <div className=" flex justify-between">
                    <span className=" flex justify-center items-center">
                    <FaStar className=" mr-1 text-yellow-500"  /> {rating}
                    </span>
                    <button className=" p-1 text-whit bg-green-400 hover:bg-green-600 rounded-lg text-sm">Add To Cart</button>
                    </div>
                </div>
                
        </>
    )
}

export default VegCard
