import AllProduct from "../components/AllProducts"
import { useState, useEffect } from "react"
import api from "../api";


const All = () => {
        const [columns, setColumns] = useState(5);
        const [productList, setProductList] = useState([]);

        useEffect(() => {
            const fetchProductList = async () => {
                try {
                    const response  = await api.get('api/products/');
                    const data = response.data
                    console.log('API Response:', data);
                    setProductList(data);
                } catch (error) {
                    console.error('Error fetching product list', error);
                }
            };

            fetchProductList()
        }, []);
    
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth < 550) {
                    setColumns(2);
                } else if (window.innerWidth < 766) {
                    setColumns(3);
                } else if (window.innerWidth < 1200) {
                    setColumns(4);
                }else {
                    setColumns(5);
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
                case 4:
                    return "grid-cols-4";
                default:
                    return "grid-cols-5";
            }
        };
    return (
        <section className="mt-10">
            <div className={`grid ${getGridColumnsClass()} mx-10 gap-y-8 gap-x-10`}>
                {productList.map((product) => (
                <AllProduct
                    key={product.id}
                    name={product.name}
                    image={`http://localhost:8000${product.image}`}
                    price={product.price}
                    category={product.brand}
                    discount={product.discount}
                    className="w-[300px]"
                />
                ))}
            </div>
        </section>
    )
}

export default All
