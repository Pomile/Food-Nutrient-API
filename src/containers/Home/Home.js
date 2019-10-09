import React from 'react';
import { connect } from 'react-redux';
import Wall from '../../components/Wall/Wall';
import Search from '../../components/Search/Search';
import classes from './Home.css';
import Aux from '../../hoc/Wrapper';
import * as action from '../../store/action';
import setHeaderBg from '../../store/action/setHeaderBg';
class Home extends React.Component{
   
    searchHandle = (value) => {
        this.props.history.replace("/products");
    }
    render() {
        console.log('find search value', this.props.search.searchValue);
        const value = this.props.search.searchValue;
        return (
            <Aux>
                <Wall type='full'/>
                <div className={classes.captionTitleBlock}>
                    <h3 className={classes.captionDescription}>Access over 360,000 foods and their nutrient compositions</h3>
                </div>
                <Search topMargin={true} input={value} clicked={() => this.searchHandle(value)} change={this.props.setSearchValue} />
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
        setHeaderBg: () => dispatch(action.setHeaderBg())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
