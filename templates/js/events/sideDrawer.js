const showSideDrawer = (sidedrawer, backdrop) => {
    backdrop.classList.remove('backdropHide');
    sidedrawer.classList.remove('close');
    backdrop.classList.add('backdropShow');
    sidedrawer.classList.add('open');
}

const hideSideDrawer = (sidedrawer, backdrop) => {
    backdrop.classList.remove('backdropShow');
    sidedrawer.classList.remove('open');
    backdrop.classList.add('backdropHide');
    sidedrawer.classList.add('close');
}

export {
    showSideDrawer,
    hideSideDrawer
}