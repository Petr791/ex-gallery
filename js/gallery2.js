const ACTIVE_SLIDE_CLASSNAME2 = 'gallery-slide--active2';

const slidesNodes2 = Array.from(document.querySelectorAll('.gallery-slide2'));
console.log(slidesNodes2);
const prevButtonNode2 = document.querySelector('.gallery__control-prev--position');
const nextButtonNode2 = document.querySelector('.gallery__control-next--position');
let activeId2;

init2();

function init2() {
    activeId2 = 0;

    prevButtonNode2.addEventListener('click', () => {
        setActiveSlideById2(getPrevId2());
    });

    nextButtonNode2.addEventListener('click', () => {
        setActiveSlideById2(getNextId2());
    });
}

function setActiveSlideById2(id) {
    const currentId = activeId2;
    activeId2 = id;

    slidesNodes2[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME2)
    slidesNodes2[activeId2].classList.add(ACTIVE_SLIDE_CLASSNAME2)
}

function getPrevId2() {
    return activeId2 === 0 ? slidesNodes2.length - 1 : activeId2 - 1;
}

function getNextId2() {
    return activeId2 === (slidesNodes2.length - 1) ? 0 : activeId2 + 1;
}