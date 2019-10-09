import React from 'react';
import Prod from './Product/Product';
import Error from '../UI/Error/Error';
import classes from './Products.css';

const Products = (props) => {
    const productList = props.error
        ? <Error>{props.errorMessage}</Error> :
        props.data.length === 0 ? null
        : (
            <div className={classes.products}>
                {props.data.map((product) => (<Prod
                    image={product.image}
                    title={product.title}
                    key={product.id} />))
                }
            </div>
        )
    ;

    return productList;
}

export default Products;
