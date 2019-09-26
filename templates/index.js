import './index.css';
import { sidedrawer, drawerToggler, backdrop } from './js/UI';
import { showSideDrawer, hideSideDrawer } from './js/events/sideDrawer';
import { displayProductNutrient, closeProductNutrient } from './js/events/productNutrient';
if (drawerToggler) {
    drawerToggler.addEventListener('click', () => showSideDrawer(sidedrawer, backdrop));
}

if (sideDrawerCloseBtn) {
    sideDrawerCloseBtn.addEventListener('click', () => hideSideDrawer(sidedrawer, backdrop));
}

window.displayProductNutrient = displayProductNutrient;
window.closeProductNutrient = closeProductNutrient;


