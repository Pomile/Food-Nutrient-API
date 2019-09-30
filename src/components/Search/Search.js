import React from 'react';
import classes from './Search.css';

const Search = (props) => {
    return (
        <div className={[classes.searchBox, classes.searchBoxTop].join(' ')}>
            <div className={classes.search}>
                <div className={classes.searchInputBox}>
                    <input className={classes.searchInput} type="text" placeholder="Search.." />
                    <div className={classes.searchInputBtn}>
                        <i className={"material-icons"}>search</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
