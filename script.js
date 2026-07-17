const sections = document.querySelectorAll(".section");

let current = 0;
let isScrolling = false;

function goToSection(index){
    sections[index].scrollIntoView({
        behavior: "smooth"
    });
}

/* 🔥 휠 완전 제어 */
window.addEventListener("wheel", (e) => {

    e.preventDefault();

    if(isScrolling) return;

    isScrolling = true;

    /* 아래로 */
    if(e.deltaY > 0){
        current++;
        if(current >= sections.length){
            current = sections.length - 1;
        }
    }

    /* 위로 */
    else{
        current--;
        if(current < 0){
            current = 0;
        }
    }

    goToSection(current);

    /* 🔥 1회 입력 잠금 (위/아래 동일 적용) */
    setTimeout(() => {
        isScrolling = false;
    }, 1000);

}, { passive: false });