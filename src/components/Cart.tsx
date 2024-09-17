

const Cart = () => {
  return (
    <>
      <div className="flex flex-col mt-20 items-center">
        <div className=" border h-[60vh] w-[45vh]  lg:h-[60vh] lg:w-[40vw] p-6 rounded-lg shadow-2xl bg-slate-300 ">
          <span className=" flex justify-center text-center text-2xl font-bold  ">My Order</span>
          <div className=" absolute bottom-[55vw] lg:bottom-60">
            <h3>Items : </h3>
            <h3>Total Amount : </h3>
            <hr/>
            <button className=" bg-green-500 font-bold rounded-lg px-3 text-white py-2 w-72 lg:w-[37vw]">Checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
