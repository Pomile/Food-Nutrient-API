import axios from 'axios';
import {
  getProductsSuccess,
  getProductsStart,
  getProductsFail
} from './';
const key = '3a44e5154f1b4a47ad7c27d498a2c598';
const baseUrl = 'https://api.spoonacular.com';
/**
 * 
 * @param {string} value
 */
const getProducts = (value) => {
  return dispatch => {
    setTimeout(() => dispatch(getProductsStart()), 500);
    setTimeout(() => axios
      .get(`${baseUrl}/food/products/search?query=${value}&apiKey=${key}`)
      .then(res => dispatch(getProductsSuccess(res.data.products)))
      .catch(err => dispatch(getProductsFail(err))), 1000);
  }
}

export default getProducts;
