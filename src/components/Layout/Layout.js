import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Wrapper';
import Header from '../Header/Header';
import * as action from '../../store/action'

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header closeSidedrawer={this.props.setSideDrawerState} showSidedrawer={this.props.setSideDrawerState} show={this.props.ui.showSideDrawer} bg={this.props.ui.useHeaderBg} />
                {this.props.children}
            </Aux>
        );
    }
} 

const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSideDrawerState: () => dispatch(action.setSideDrawerState())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);

