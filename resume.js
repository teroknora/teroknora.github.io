window.addEventListener('load', () => {
    
    console.log('loaded');
    window.addEventListener('scroll', () => handleShadow());
})


function handleShadow() {
    const navBar= document.querySelector('header');
    navBar.classList.add("shadow");

    if (window.scrollY === 0) {
        navBar.classList.remove("shadow");
    }
}