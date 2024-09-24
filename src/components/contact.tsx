
const Contact = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('home.jpg')] bg-gray-700 ">
       <div className="px-4 mx-auto max-w-screen-xl py-2 lg:py-56 h-screen ">
        <div className=" flex place-content-center ">
          <div className=" h-96 w-[96vh] border">
            <h1 className=" flex justify-center text-white font-bold text-2xl mt-4">Contact us</h1>
            <div className=" flex flex-col space-y-6">
              <input className=" w-14px h-10px" type="text" placeholder="Enter your name" />
              <input className=" w-14px h-10px" type="text" placeholder="E-Mail" />
              <input className=" w-14px h-10px" type="text" placeholder="Message" />
            </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Contact
