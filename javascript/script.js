
const buttonDark = document.querySelector('#buttonDark');

function checkClass(form, NameClass) {
    if (form.classList.contains(NameClass)) return true;
    return false;
}

function removeClass(form, NameClass) {
    form.classList.remove(NameClass);
}

function aplicEffectForm(form, NameClass) {
    form.classList.add(NameClass);
}

setTimeout(() => {
    const form = document.querySelector('form');
    removeClass(form, 'animation-form');
}, 200)


function darkButton() {
    const form = document.querySelector('form');
    const linkStyleElement = document.querySelector('head > link');

    setTimeout(() => {
        removeClass(form, 'animation-form');
    }, 800)

    if (linkStyleElement.getAttribute('href').includes('styleLight')) {
        buttonDark.setAttribute('fill', '#FFF');
        linkStyleElement.setAttribute('href', './css/styleDark.css');
        aplicEffectForm(form, 'animation-form');
        return;
    }
    buttonDark.setAttribute('fill', '#000');
    linkStyleElement.setAttribute('href', './css/styleLight.css');
    aplicEffectForm(form, 'animation-form');
}

buttonDark.addEventListener('click', (event) => {
    event.preventDefault();
    darkButton();
})


