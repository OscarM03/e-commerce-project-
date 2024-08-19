import Button from "../components/Button"
import { RedmiOffer } from "../utils"


const SpecialOffer = () => {
    return (
        <section className="my-10">
            <h1 className="text-[28px] ml-10 font-poppins
            font-medium">Special <span className="text-thick-orange">Offer</span> - Redmi 12</h1>
            <div className="flex items-center justify-center gap-[150px] bg-display-bg mx-10
            rounded-lg shadow-md font-medium max-md:flex-col max-lg:gap-[100px]">

                <div className="flex flex-col items-center max-lg:items-start
                max-md:items-center">
                    <h1 className="text-[40px] text-thick-orange font-bold">
                        Exclusive deal:
                    </h1>
                    <h1 className="text-xl pt-3">
                        Save big on top-rated phones
                    </h1>
                    <h1 className="text-xl pt-2">
                        only while stocks last!
                    </h1>
                    <p className="pt-1 pb-4 text-slate-gray">Valid till August 10</p>
                    <Button label="Order Now"
                    href="/mycart"
                    />
                </div>
                <div>
                    <a href="/product">
                    <img src={RedmiOffer}
                        alt=""
                        width={300}
                        className=""
                        />
                    </a>
                    <div className="flex gap-5 font-medium max-lg:gap-3 max-md:gap-5">
                        <div className="">
                                <p className="">4GB | 128GB</p>
                                <p className=" text-thick-orange">Ksh. 14,999</p>
                        </div>
                        <div className="">
                                <p className="">8GB | 128GB</p>
                                <p className=" text-thick-orange">Ksh. 17,999</p>
                        </div>
                        <div className="">
                                <p className="">8GB | 256GB</p>
                                <p className=" text-thick-orange">Ksh. 19,999</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default SpecialOffer
