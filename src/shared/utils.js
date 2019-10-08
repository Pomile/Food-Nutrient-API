const utils = {
    updateObject : (oldObject, updatedProperties) => {
        return {
            ...oldObject,
            ...updatedProperties,
        }
    }
};

export default utils;