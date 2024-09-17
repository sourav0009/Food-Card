import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
    return (
        <div className=" flex gap-2 shadow-md rounded-lg p-2 mb-3">
            <MdDelete className=" absolute right-12 lg:right-[32vw] text-gray-600 cursor-pointer " />
            <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt=""
                className=" w-[50px] h-[50px] rounded-full"
            />
            <div>
                <h2 className=" font-bold text-gray-600">Onion Pizza</h2>
                <div className=" flex justify-between">
                    <span className=" text-green-500 font-bold">120</span>
                    <div className=" flex gap-2 absolute right-12 lg:right-[32vw]">
                        <FaPlus className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
                        <span>1</span>
                        <FaMinus className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
