document.addEventListener('DOMContentLoaded', (event) => {
    const dragItems = document.querySelectorAll('#drag-items div');
    const dropTargets = document.querySelectorAll('#drop-targets div');

    dragItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    dropTargets.forEach(target => {
        target.addEventListener('dragover', dragOver);
        target.addEventListener('dragenter', dragEnter);
        target.addEventListener('dragleave', dragLeave);
        target.addEventListener('drop', dragDrop);
    });

    function dragStart(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function dragEnd(event) {
        // Optional: define what happens when drag ends
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function dragEnter(event) {
        event.preventDefault();
    }

    function dragLeave(event) {
        event.dataTransfer.setData('text', event.target.id);
    }

    function dragDrop(event) {
        const id = event.dataTransfer.getData('text');
        event.target.appendChild(document.getElementById(id));
    }
});