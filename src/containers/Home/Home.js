import React from 'react';
import { connect } from 'react-redux';
import Wall from '../../components/Wall/Wall';
import Search from '../../components/Search/Search';
import classes from './Home.css';
import Aux from '../../hoc/Wrapper';
import * as action from '../../store/action';

class Home extends React.Component{
   
    searchHandle = (event) => {
        this.props.history.replace("/products");
        this.props.setSearchValue(event);
        
    }
    handleKeyPress = event => {
        if (event.charCode === 13) {
            this.searchHandle(event);
        }
    }
    render() {
        const value = this.props.search.searchValue;
        return (
            <Aux>
                <Wall type='full'/>
                <div className={classes.captionTitleBlock}>
                    <h3 className={classes.captionDescription}>Access over 360,000 foods and their nutrient compositions</h3>
                </div>
                <Search topMargin={true} input={value} clicked={() => this.searchHandle()} change={this.props.setSearchValue} keyPress={this.handleKeyPress}/>
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
