// lufik száma
let balloonCount = 24;

// --- 1 INICIALIZÁLÁS ----
// kipakolni a lufikat : háttérszín visszaállítása
// Vége felirat: display: none
const initState = () => {
    let endMessage = Array.from(document.querySelectorAll('.finished'));
    endMessage[0].removeEventListener('click', initState);
    endMessage[0].setAttribute('style', 'display: none');
    document.querySelectorAll('[class*="balloon-"]').forEach(element => {
        element.removeAttribute('style');
    });
    balloonCount = 24;
    addListener();
}

// --- 2. Eseményfigyelők kiosztása ---

// lufipukkantáskor mi törtéjan
const gameEnd = () => {
    let endMessage = Array.from(document.querySelectorAll('.finished'));
    endMessage[0].removeAttribute('style');
    endMessage[0].addEventListener('click', initState);
}

const handleClick = (event) => {
    event.target.setAttribute('style', 'background: #fff');
    event.target.removeEventListener('mouseover', handleClick);
    balloonCount -= 1;
    if (balloonCount === 0) {gameEnd()}
}

const addListener = () => {
    document.querySelectorAll('[class*="balloon-"]').forEach(element => {
        element.addEventListener('mouseover', handleClick)
    });
}

// felpakolni a lufikat - csak akkor kell, ha újraindítás lesz
// initState();

// hozzárendelni az eseményfigyelőket
addListener();
