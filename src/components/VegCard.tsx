import Navber from "./navber"

const VegCard = () => {
    return (
        <>
            <Navber />
                <div className=" font-bold w-[250px] p-5 bg-slate-200 flex flex-col mt-5 gap-2">
                    <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="" />
                    <div>
                        <h2>Onion Pizza</h2>
                        <span>180</span>
                    </div>
                </div>
        </>
    )
}

export default VegCard
