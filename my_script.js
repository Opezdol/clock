const button  = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clicked button!');
    const minHand = document.querySelector('.min-hand');
    minHand.classList.toggle('rotate');
})
