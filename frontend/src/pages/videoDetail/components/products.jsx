import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Products({ products }) {
    return (
        <ul id="products-container">
            {products?.data?.map(product => (
                <li className="product-item" key={product._id}>
                    <Link target='_blank' to={product.productLink}>
                        <img className="product-image" src={product.imgUrl} alt="" />
                        <Text width="100%" noOfLines={1} textAlign="left">{product.title}</Text>
                        <Text width="100%" noOfLines={1} textAlign="left">Rp. {product.price}</Text>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

Products.propTypes = {
    products: PropTypes.shape({
        data: PropTypes.array
    })
}