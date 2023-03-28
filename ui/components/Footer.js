import Button from "./Button"

const Footer = () => {
  return (
    <div className="w-full px-[25px] sm:px-[50px] lg:px-[100px] xl:px-0 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between space-y-1.5">
          <div className='w-full lg:w-80 space-y-1.5'>
            <p className="text-2xl font-semibold text-dark">OpenContent</p>
            <p>Enjoy the freedom of decentralization, the security of blockchain-backed data, and the convenience of prebuilt and customizable templates. Take your content management to the next level.</p>
          </div>
          <div className='w-64 space-y-1.5'>
            <p className="text-2xl font-semibold text-dark">Products</p>
            <p>Blog</p>
            <p>Audio</p>
            <p>Video</p>
            <p>customizable</p>
          </div>
          <div className='w-64 space-y-1.5'>
            <p className="text-2xl font-semibold text-dark">Join Our WaitList</p>
            <p>Join the OpenContent waitlist today and be the first to know.</p>
            <div>
              <Button text={"Join Waitlist"} type={"dark"} href={"/"} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer