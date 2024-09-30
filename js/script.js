
// knop dark theme

const darkTheme = document.querySelector('.dark-mode')
let lightMode = true;

darkTheme.addEventListener('click', () => {
    if (lightMode) {
        lightMode = false;

        document.body.classList.add('dark-theme')
        darkTheme.textContent = 'Light';
    } else {
        lightMode = true;

        document.body.classList.remove('dark-theme')
        darkTheme.textContent = 'Dark';
    }
})

// knop hva theme

const hvaTheme = document.querySelector('.hva-mode')
let hva = true;

hvaTheme.addEventListener('click', () => {
    if (hva) {
        hva = false;

        document.body.classList.add('hva-theme')
        hvaTheme.textContent = 'KFC';
    } else {
        hva = true;

        document.body.classList.remove('hva-theme')
        hvaTheme.textContent = 'HvA';
    }
})

// header laten veranderen

const header = document.querySelector('.i-header')
const logo = document.querySelector('.i-header img')

window.addEventListener('scroll', function(){
    if (window.scrollY > 100){   // bron 11
        header.classList.add('i-header-scroll');
        logo.style.display = 'block'; 
    } else {
        header.classList.remove('i-header-scroll');
        logo.style.display = 'none'; 
    }
})

// knop naar boven scrollen

const naarBovenScrollen = document.querySelector('aside')

// bron 12

naarBovenScrollen.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// formulier versturen

const knopKlikken = document.querySelector('button')
const berichtVeranderen = document.querySelector('.f-incontactkomen p')
const formVerwijderen = document.querySelector('form')

knopKlikken.addEventListener('click', function(event){
    event.preventDefault();  // bron: chatGPT. De button was eerst een a maar dan herlaadde de pagina

    berichtVeranderen.textContent = 'Bedankt voor het contact opnemen! We komen zo snel mogelijk bij je terug.';
    formVerwijderen.style.display = 'none'; 
    knopKlikken.style.display = 'none';
})

// animatie afbeeldingen laden langzaam laten laden

const images = document.querySelectorAll('.f-rijafbeeldingen img'); 

// bron 14

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {  
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded')
            observer.unobserve(entry.target)
        }
    });
}

const observerAfbeeldingen = new IntersectionObserver(handleIntersection);

// Loop door elke afbeelding en laat de observer ze observeren
images.forEach(image => observerAfbeeldingen.observe(image));

