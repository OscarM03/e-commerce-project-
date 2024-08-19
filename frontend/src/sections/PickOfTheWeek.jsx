import { HpEliteBook, OppoA60 } from "../utils"


const PickOfTheWeek = () => {
    return (
        <section>
            <div className="mx-10 mt-2 pb-3">
                <h1 className="text-[28px] font-poppins font-medium">Pick Of The <span 
                className="text-thick-orange">Week</span></h1>
            </div>
            <div className="flex justify-center items-center gap-6 mx-10 mb-10 max-md:flex-col">
                <div className="border border-thick-orange rounded-md flex justify-center
                items-center gap-10 font-medium p-8 h-[300px]">
                    <div>
                        <a href="/product">
                            <img 
                            src={OppoA60}
                            alt="OppoA60" 
                            width={200}
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/product">
                            <h1 className="text-2xl text-thick-orange pb-2
                            font-bold">
                                Oppo A60 4G
                            </h1>
                        </a>
                        <p className="text-xl pb-2">8GB/128GB | 8GB/256GB</p>
                        <p className="text-lg pb-1">50MP + 8MP Camera</p>
                        <p > 5,000 mAh</p>
                        <p className="text-thick-orange text-lg
                        font-bold">Ksh 27,000 - 30,000</p>
                    </div>
                </div>
                <div className="border border-thick-orange  rounded-md flex justify-center
                items-center gap-10 font-medium p-6 h-[300px]">
                    <div>
                        <img src={HpEliteBook}
                        alt="Hpelitebook" 
                        width={200}
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl text-thick-orange pb-2
                        font-bold">HP EliteBook 1030 G3</h1>
                        <p className="text-xl pb-2">Intel Core i7 8th Gen</p>
                        <p className="text-lg pb-1">16GB RAM 512GB SSD</p>
                        <p>Touch</p>
                        <p className="text-thick-orange text-lg
                        font-bold">Ksh 68,000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PickOfTheWeek
