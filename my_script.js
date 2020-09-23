const button  = document.querySelector(button);
button.addEventListener('onClick', () => {
    console.log('Cicked')
    const hour = document.querySelector('.hour-hand');
    button.toggleClass('rotate');
})
