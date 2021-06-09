window.addEventListener('load', () => {
    
    console.log('loaded');
    const lightSwitchButton = document.querySelector('.on-off');
    lightSwitchButton.addEventListener('click', () => lightToggle());
})

function lightToggle() {

   const body = document.querySelector('body');
   const marquee = document.querySelector('.placeholder-marquee');
   const lightSwitchButton = document.querySelector('.on-off');
   console.log(lightSwitchButton.innerHTML);
   
    if (lightSwitchButton.innerHTML == 'Turn off the lights') {
        
        console.log(lightSwitchButton.innerHTML);
        body.classList.add('dark');
        marquee.classList.add('neon');
        lightSwitchButton.innerHTML = 'Turn on the lights';
    }

    else {

        body.classList.remove('dark');
        marquee.classList.remove('neon');
        lightSwitchButton.innerHTML = 'Turn off the lights';
        console.log(lightSwitchButton.innerHTML);
    }

} 


