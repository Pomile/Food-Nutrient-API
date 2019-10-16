import React from 'react';
import classes from './Nutrients.css';
import Nutrient from './Nutrient/Nutrient';
import Error from '../../UI/Error/Error';

const Nutrients = (props) => {
    const { data, error, errorMessage } = props;
    if (!error) {
        const nutrientComposition = Object.keys(data.nutrition);
        const nutrientUnits = Object.values(data.nutrition);
        return (
            <div>
                <div className={classes.nutrientImgHolder}>
                    <img className={classes.nutrientImg} src={data.images[2]} />
                </div>
                <div className={classes.nutrientName}>{data.title}</div>
                <div className={classes.nutrients}>
                    {
                        nutrientComposition.map((nutrient, index) => <Nutrient
                            name={nutrient}
                            unit={nutrientUnits[index]}
                            key={index} />)
                    }
                </div>
            </div>
        )
    }
    return <Error>{errorMessage}</Error>;
}

export default Nutrients;
