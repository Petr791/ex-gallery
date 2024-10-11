const ACTIVE_SLIDE_CLASSNAME3 = 'gallery-slide--active3';

const slidesNodes3 = Array.from(document.querySelectorAll('.gallery-slide--grid'));
console.log(slidesNodes3);
const prevButtonNode3 = document.querySelector('.gallery__control-prev--grid');
const nextButtonNode3 = document.querySelector('.gallery__control-next--grid');
let activeId3;

init3();

function init3() {
    activeId3 = 0;

    prevButtonNode3.addEventListener('click', () => {
        setActiveSlideById3(getPrevId3());
    });

    nextButtonNode3.addEventListener('click', () => {
        setActiveSlideById3(getNextId3());
    });
}

function setActiveSlideById3(id) {
    const currentId = activeId3;
    activeId3 = id;

    slidesNodes3[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME3)
    slidesNodes3[activeId3].classList.add(ACTIVE_SLIDE_CLASSNAME3)
}

function getPrevId3() {
    return activeId3 === 0 ? slidesNodes3.length - 1 : activeId3 - 1;
}

function getNextId3() {
    return activeId3 === (slidesNodes3.length - 1) ? 0 : activeId3 + 1;
}