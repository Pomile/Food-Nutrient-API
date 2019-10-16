import React from 'react';
import { connect } from 'react-redux';
import Wall from '../../components/Wall/Wall';
import Search from '../../components/Search/Search';
import Products from '../../components/ProductList/Products';
import Aux from '../../hoc/Wrapper';
import * as action from '../../store/action';
import Title from '../../components/Title/Title';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import Nutrients from '../../components/ProductList/Nutrients/Nutrients';
import ErrorBoundary from '../../hoc/ErrorBoundary';

class Product extends React.Component {

    componentWillMount() {
        this.props.setHeaderBg();
    }
    componentWillUnmount() {
        this.props.setHeaderBg();
    }
   
    componentDidMount() {
        const value = this.props.search.searchValue;
        this.props.getProducts(value);
    }
    render() {
       
        const {
            products,
            searchValue,
            productsErrorMessage,
            productsError,
            loadingProducts
        } = this.props.search;
        const { showModal } = this.props.ui;
        const {
            loadingProductDetail,
            productDetailError,
            productDetailErrorMessage,
            product
        } = this.props.product;
        console.log('showModal state', showModal);
        
        const prod = !loadingProducts ? (<Products
            data={products}
            error={productsError}
            errorMessage={productsErrorMessage}
            getProductDetail={this.props.getProductDetail} />)
            : <Spinner />;
        const productDetail = !loadingProductDetail ? <Nutrients
            error={productDetailError}
            errorMessage={productDetailErrorMessage}
            data={product} /> :
            <Spinner />;
            
        console.log('loadingProductDetail State', loadingProductDetail);
        console.log('productDetailError', productDetailError);
        console.log('productDetailErrorMsg', productDetailErrorMessage);
        return (
            <Aux>
                <Wall type='quarter'>
                    <Search
                        topMargin={false}
                        input={searchValue}
                        change={this.props.setSearchValue}
                        clicked={() => this.props.getProducts(searchValue)}
                    />
                </Wall>
                <Title>Products</Title>
                <ErrorBoundary>{prod}</ErrorBoundary>
                <ErrorBoundary>
                    {
                        showModal
                            ? <Modal
                                show={showModal}
                                close={this.props.closeProductDetailModal}>{productDetail}
                            </Modal>
                            : null
                     }
                </ErrorBoundary>

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.search,
        ui: state.ui,
        product: state.product
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchValue: (event) => dispatch(action.setSearchValue(event)),
        setHeaderBg: () => dispatch(action.setHeaderBg()),
        getProducts: (value) => dispatch(action.getProducts(value)),
        getProductDetail: (id) => dispatch(action.getProductDetail(id)),
        closeProductDetailModal: () => {
            dispatch(action.toggleModal());
            dispatch(action.resetProductDetail());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
