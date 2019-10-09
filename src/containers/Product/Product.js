import React from 'react';
import { connect } from 'react-redux';
import Wall from '../../components/Wall/Wall';
import Search from '../../components/Search/Search';
import Products from '../../components/ProductList/Products';
import Aux from '../../hoc/Wrapper';
import * as action from '../../store/action';
import Title from '../../components/Title/Title';
import Spinner from '../../components/UI/Spinner/Spinner';

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
            errorMessage,
            products,
            searchValue,
            error,
            loading
        } = this.props.search;
        const prod = !loading ? (<Products
            data={products}
            error={error}
            errorMessage={errorMessage} />)
    : <Spinner />
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
                {prod}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchValue: (event) => dispatch(action.setSearchValue(event)),
        setHeaderBg: () => dispatch(action.setHeaderBg()),
        getProducts: (value) => dispatch(action.getProducts(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
