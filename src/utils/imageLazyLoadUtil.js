const IMG_LAZY_SELECTOR = '.img-lazy';
const FADE_IN = 'fade-in';
const IMG_LAZY = 'img-lazy';

export const imageLazyLoading = () => {

    const lazyNodeList = document.querySelectorAll(IMG_LAZY_SELECTOR);

    if (lazyNodeList.length > 0) {
        if (window.IntersectionObserver) {

            const options = {
                root: null,
                thredhold: 0.8
            }

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetEl = entry.target;
                        targetEl.setAttribute('src', targetEl.dataset.src);
                        targetEl.removeAttribute('data-src');
                        targetEl.classList.add(FADE_IN);
                        targetEl.classList.remove(IMG_LAZY);
                        observer.unobserve(targetEl);
                    }
                });
            }, options);
            lazyNodeList.forEach(node => observer.observe(node));

        } else {
            lazyNodeList.forEach(node => {
                node.setAttribute('src', node.dataset.src);
                node.removeAttribute('data-src');
                node.classList.add(FADE_IN);
                node.classList.remove(IMG_LAZY);
            })
        }
    }


};
