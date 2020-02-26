import React from 'react';
import classes from './Nutrients.css';
import Nutrient from './Nutrient/Nutrient';
import Error from '../../UI/Error/Error';

const Nutrients = (props) => {
    const { data, error, errorMessage } = props;
    if (!error) {
        const nutrientComposition = data.nutrition.nutrients;
        return (
            <div className={classes.nutrient}>
                <div className={classes.nutrientImgHolder}>
                    <img className={classes.nutrientImg} src={data.images[2]} />
                </div>
                <div className={classes.nutrientName}>{data.title}</div>
                <div className={classes.nutrients}>
                    {
                        nutrientComposition.map((nutrient, index) => <Nutrient
                            name={nutrient.title}
                            unit={nutrient.unit}
                            amount={nutrient.amount}
                            key={index} />)
                    }
                </div>
            </div>
        )
    }
    return <Error>{errorMessage}</Error>;
}

export default Nutrients;
