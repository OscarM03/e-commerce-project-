import PropTypes from 'prop-types';

const LaptopsCard = ({ name, img, features, storage, added_info, price, discount }) => {
    return (
        <div className="flex justify-center items-center font-medium gap-2 border rounded-md relative">
            <div>
                <a href="/product">
                    <img src={img}
                        alt="Hp Laptop"
                        width={200}
                    />
                </a>
            </div>
            <div className="flex flex-col">
                <a href="/product">
                    <h1 className="text-xl text-thick-orange pb-2 font-bold">{name}</h1>
                </a>
                <p className="text-lg pb-2">{features}</p>
                <p className="text-md pb-1">{storage}</p>
                {added_info && (
                    <p>{added_info}</p>
                )}
                <p className="text-thick-orange text-lg font-bold">{price}</p>
            </div>
            <div className="absolute bg-thick-orange w-10 flex justify-center left-0
                rounded-tl-md rounded-br-lg top-0">
                <p className="font-medium text-white">-{discount}%</p>
            </div>
        </div>
    );
};

LaptopsCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    features: PropTypes.string.isRequired,
    storage: PropTypes.string.isRequired,
    added_info: PropTypes.string,
    price: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
};

export default LaptopsCard;


