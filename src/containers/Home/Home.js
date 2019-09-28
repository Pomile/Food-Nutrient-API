import React from 'react';
import FullWall from '../../components/Wall/FullWall';
import Search from '../../components/Search/Search';
import classes from './Home.css';
import Aux from '../../hoc/Wrapper';
class Home extends React.Component{
    render() {
        return (
            <Aux>
                <FullWall />
                <div className={classes.captionTitleBlock}>
                    <h3 className={classes.captionDescription}>Access over 360,000 foods and their nutrient compositions</h3>
                </div>
                <Search />
            </Aux>
            
        )
    }
}


export default Home;
