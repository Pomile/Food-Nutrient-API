import React from 'react';
import classes from './Search.css';

const Search = (props) => {
    const SearchBoxStyle = props.topMargin
        ? [classes.searchBox, classes.searchBoxTop].join(' ')
        : classes.searchBox;
    const value = props.searchValue;
    return (
        <div className={SearchBoxStyle}>
            <div className={classes.search}>
                <div className={classes.searchInputBox}>
                    <input className={classes.searchInput} type="text" placeholder="Search.." value={props.searchValue} onChange={() => props.change(event)} />
                    <button className={classes.searchInputBtn} onClick={props.clicked}>
                        <i className={"material-icons"}>search</i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search;
