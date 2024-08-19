import { useState, useEffect } from "react";
import ImmediateProductCard from "../components/ImmediateProductCard";
import { newProductsList } from "../constants";

const ImmediateProducts = () => {
    const [columns, setColumns] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 550) {
                setColumns(1);
            } else if (window.innerWidth < 766) {
                setColumns(2);
            } else if (window.innerWidth < 1200) {
                setColumns(3);
            }else {
                setColumns(4);
            }
        };
        window.addEventListener('resize', handleResize);

        handleResize()

        return (() => {
            window.removeEventListener('resize', handleResize);
        });
    }, [setColumns])

    const getGridColumnsClass = () => {
        switch (columns) {
            case 1:
                return "grid-cols";
            case 2:
                return "grid-cols-2";
            case 3:
                return "grid-cols-3";
            default:
                return "grid-cols-4";
        }
    };

    return (
        <section className={`grid ${getGridColumnsClass()} mt-[130px] max-md:mt-[30px] mx-10 gap-6`}>
                {newProductsList.slice(0, columns).map((item) => (
                    <ImmediateProductCard
                        key={item.name}
                        brand={item.brand}
                        name={item.name}
                        img={item.img}
                        discount={item.discount}
                        price={item.price}
                    />
                ))}
        </section>
    )
}

export default ImmediateProducts;
