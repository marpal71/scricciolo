import GLightbox from 'glightbox';

export function setupImagePreview() {
    if (typeof document === 'undefined') return;

    const lightbox = GLightbox({
        selector: '.glightbox-preview',
        openEffect: 'zoom',
        closeEffect: 'fade',
        width: 'auto',
        height: 'auto',
        draggable: false,
    });

    lightbox.on('open', () => {
        disableImageDownload();
    });
}

function disableImageDownload() {
    const container = document.querySelector('.glightbox-container');
    if (!container) return;

    container.addEventListener('contextmenu', (e) => e.preventDefault());
    container.addEventListener('dragstart', (e) => e.preventDefault());

    const observer = new MutationObserver(() => {
        container.querySelectorAll('.gslide-image img').forEach((img) => {
            img.setAttribute('draggable', 'false');
            img.setAttribute('oncontextmenu', 'return false;');
        });
    });
    observer.observe(container, { childList: true, subtree: true });
}

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupImagePreview);
}
