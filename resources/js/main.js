const select = (el) => document.querySelector(el);
const exist = (el) => typeof select(el) !== 'undefined' && select(el) !== null;

if(exist('.mobile-change-text')) {
    let text = select('.mobile-change-text')
    if(window.innerWidth <= 768) {
        text.textContent = 'something AS A SERVICE';
    }
}