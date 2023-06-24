
function animeScrollCard() {
    const getScroll = parseInt(window.scrollY) + ((window.innerHeight * 3) / 4);
    const target = document.querySelectorAll('.card');
    
    for (let index = 0; index < target.length; index++) {
        const element = target[0];
        const element1 = target[1];
        const element2 = target[2];

        if( 
            getScroll > element.offsetTop && 
            getScroll > element1.offsetTop && 
            getScroll > element2.offsetTop
        )
        {            
            element.classList.add('animate');
            element1.classList.add('animate1');
            element2.classList.add('animate2');
            element.style.opacity = '1';
            element1.style.opacity = '1';
            element2.style.opacity = '1';
        };
    };
};

function animeScrollSection() {
    const targetWrapper = document.querySelectorAll('.wrapper');
    const getScrollWrapper = parseInt(window.scrollY) + ((window.innerHeight * 3) / 4);

    for (let index = 0; index < targetWrapper.length; index++) {
        const elementWrapper = targetWrapper[index];
        
        if(getScrollWrapper > elementWrapper.offsetTop) {
            console.log(elementWrapper.offsetTop);
            elementWrapper.classList.add('wrapper-animate');
        };
    };
};


window.addEventListener('scroll', animeScrollCard);
window.addEventListener('scroll', animeScrollSection);
