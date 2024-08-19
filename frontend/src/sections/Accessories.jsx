import { AccessoriesList } from "../constants";
import { useRef } from "react";
import PhoneCard from "../components/PhoneCard";
import { LeftArrow, RightArrow } from "../utils";


const Accessories = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
            left: -202,
            behavior: 'smooth',
        });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
            left: 202,
            behavior: 'smooth',
        });
        }
    };
    return (
        <section>
            <div className="mt-10 mx-10">
                <h1 className="text-[28px] text-thick-orange font-medium">
                    Accessories
                </h1>
            </div>
            <div className="relative mx-10 mt-10">
                <div
                    ref={scrollContainerRef}
                    className="flex space-x-8 overflow-x-scroll scrollbar-hide whitespace-nowrap">
                    {AccessoriesList.map((product) => (
                    <PhoneCard
                    key={product.name}
                    name={product.name}
                    image={product.img}
                    price={product.price}
                    category={product.category}
                    discount={product.discount}
                    className=""
                    />
                    ))}
                </div>
                <div
                onClick={scrollLeft}
                className="border absolute -left-7 top-1/2 transform 
                -translate-y-1/2 z-10 text-black p-2 rounded-full 
                shadow-md flex justify-center items-center cursor-pointer"
                >
                <img src={LeftArrow} 
                alt="Scroll Left" 
                width={20} />
                </div>
                <div
                onClick={scrollRight}
                className="border absolute -right-10 top-1/2 transform
                -translate-y-1/2 z-10 text-black p-2 rounded-full
                shadow-md flex justify-center items-center cursor-pointer"
                >
                <img src={RightArrow} 
                alt="Scroll Right" 
                width={20} />
                </div>
            </div>
        </section>
    )
}

export default Accessories
