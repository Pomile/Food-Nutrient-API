import axios from 'axios';
import {
    getProductDetailSuccess,
    getProductDetailFail,
    getProductDetailStart
} from './';
import { toggleModal } from '../../index';
const key = '3a44e5154f1b4a47ad7c27d498a2c598';
const baseUrl = 'https://api.spoonacular.com';
/**
 * 
 * @param {string} id
 * @returns {object} object
 */
const getProductDetail = (id) => {
    
    return dispatch => {
        setTimeout(() => dispatch(getProductDetailStart()), 100);
        setTimeout(() => dispatch(toggleModal()), 100);
        setTimeout(() => axios
            .get(`${baseUrl}/food/products/${id}?&apiKey=${key}`)
            .then(res => dispatch(getProductDetailSuccess(res.data)))
            .catch(err => dispatch(getProductDetailFail(err))), 1000);
    }
}

export default getProductDetail;
