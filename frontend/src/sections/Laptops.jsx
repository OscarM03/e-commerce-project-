import { useEffect, useState } from "react"
import LaptopsCard from "../components/LaptopsCard";
import { LaptopList } from "../constants";


const Laptops = () => {
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 750) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            // } else if (window.innerWidth < 1200) {
            //     setColumns(3);
            } else {
                setColumns(3)
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize()

        return(() => {
            window.removeEventListener('resize', handleResize)
        });
    }, [setColumns])

    const getGridColumnsClass = () => {
        switch (columns) {
            case 1:
                return "grid-cols";
            case 2:
                return "grid-cols-2";
            // case 3:
            //     return "grid-cols-3"
            default:
                return "grid-cols-3";
        }
    };
    return (
        <section>
            <div className="mx-10">
                <a href="/"><h1 className="text-[28px] text-thick-orange
                font-poppins font-medium mb-4">
                    Laptops</h1></a>
            </div>
            <div className={`grid ${getGridColumnsClass()} gap-4 mx-10 mb-10`}>
                {LaptopList.slice(0, columns + columns).map((item) => (
                    <LaptopsCard 
                    key={item.name}
                    name={item.name}
                    img={item.img}
                    features={item.features}
                    storage={item.storage}
                    added_info={item.added_info}
                    price={item.price}
                    discount={item.discount}
                    />
                ))}
            </div>
        </section>
    )
}

export default Laptops
