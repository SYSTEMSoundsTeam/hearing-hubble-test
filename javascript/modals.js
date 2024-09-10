//------------------SHARE MODAL------------------

// Get modal elements
const shareModal = document.getElementById('shareModal');
const openShareModalButton = document.getElementById('openShareModal');
const closeShareModalButton = document.getElementById('closeShareModal');

// Open modal
openShareModalButton.addEventListener('click', () => {
    shareModal.classList.remove('hidden');
    shareModal.classList.add('flex');
});

// Close modal when clicking the close button
closeShareModalButton.addEventListener('click', () => {
    shareModal.classList.add('hidden');
    shareModal.classList.remove('flex');
    document.getElementById("copyButton").innerText = "Copy";
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === shareModal) {
        shareModal.classList.add('hidden');
        shareModal.classList.remove('flex');
        document.getElementById("copyButton").innerText = "Copy";
    }
});

//------------------HOW IT WORKS MODAL------------------

// Get modal elements
const worksModal = document.getElementById('worksModal');
const openWorksModalButton = document.getElementById('openWorksModal');
const closeWorksModalButton = document.getElementById('closeWorksModal');

// Open modal
openWorksModalButton.addEventListener('click', () => {
    worksModal.classList.remove('hidden');
    worksModal.classList.add('flex');
});

// Close modal when clicking the close button
closeWorksModalButton.addEventListener('click', () => {
    worksModal.classList.add('hidden');
    worksModal.classList.remove('flex');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === worksModal) {
        worksModal.classList.add('hidden');
        worksModal.classList.remove('flex');
    }
});