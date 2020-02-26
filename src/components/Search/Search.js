import React from 'react';
import classes from './Search.css';

const Search = (props) => {
    const SearchBoxStyle = props.topMargin
        ? [classes.searchBox, classes.searchBoxTop].join(' ')
        : classes.searchBox;
    const value = props.searchValue;
    return (
        <div className={SearchBoxStyle}>
            <form className={classes.search}>
                <div className={classes.searchInputBox}>
                    <input
                        name="search"
                        id="search"
                        className={classes.searchInput}
                        type="text"
                        placeholder="Search.."
                        value={props.input}
                        onChange={(event) => props.change(event)}
                        onKeyPress={(event) => props.keyPress(event)}
                    />
                    <button className={classes.searchInputBtn} onClick={props.clicked}>
                        <i className={"material-icons"}>search</i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search;
