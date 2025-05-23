const buttonDark = document.querySelector('#buttonDark');

function darkButton() {
    const linkStyleElement = document.querySelector('head > link');
    if (linkStyleElement.getAttribute('href').includes('styleLight')) {
        buttonDark.setAttribute('fill','#FFF')
        return linkStyleElement.setAttribute('href', './css/styleDark.css');
    }
    buttonDark.setAttribute('fill','#000');
    return linkStyleElement.setAttribute('href', './css/styleLight.css');
}

buttonDark.addEventListener('click', (event) => {
    event.preventDefault();
    darkButton();
})


