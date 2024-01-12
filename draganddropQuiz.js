document.addEventListener('DOMContentLoaded', (event) => {
    const dragItems = document.querySelectorAll('#drag-items div');
    const dropTargets = document.querySelectorAll('.drop-box');

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

        console.log (id)
        const currentParent = event.target;
        console.log (currentParent)

        if (currentParent.className != "drop-box") {
            let grandParent = currentParent.parentNode;
            console.log (grandParent);
            grandParent.appendChild(document.getElementById(id));
        }
    }
    
});

const dragItems = document.querySelectorAll('#drag-items div');
const feedbackMessage = document.getElementById("status-message");
const feedbackBox = document.getElementById("status-box")

function checkAnswer() {
        const homeBox = document.getElementById("drag-items");
        let wrongAnswers = 0;


        for (let i = 1; i <= dragItems.length; i++) {  
            let currentItem = document.getElementById("item" + [i]);
            let currentParent = currentItem.parentNode.id;
            let dragMatch = currentItem.dataset.target;
            currentItem.style.transition = 'all .5s ease-in-out';

            if (dragMatch === currentParent) {
                // Feedback for correct match
                currentItem.style.backgroundColor = "inherit";
                currentItem.setAttribute("draggable", false);
            } else {
                // Feedback for incorrect match
                currentItem.style.backgroundColor = "red";
                setTimeout(function () 
                    { currentItem.style.backgroundColor = "white";
                    currentItem.style.backgroundColor = "" }, 1000)
                setTimeout(function ()
                    {
                        homeBox.appendChild(currentItem)
                    }, 1500)
            wrongAnswers += 1          
            
            
            
            }
        }
        const endHome = homeBox.children
        if (wrongAnswers != 0) {
                console.log(homeBox.children);
                feedbackMessage.innerHTML = wrongAnswers + ' items were placed incorrectly.<br>Try the exercise again!';
                setTimeout(function () 
                    { feedbackBox.style.opacity = 1; }, 1000);
                        setTimeout(function () 
                    { feedbackBox.style.opacity = 0; }, 4000);

        } else {
            console.log("Congratulations");
                feedbackMessage.innerHTML = '';
                feedbackMessage.innerHTML = 'Correct!';
                setTimeout(function () 
                    { feedbackBox.style.opacity = 1; }, 1000);
                setTimeout(function () 
                    { feedbackBox.style.opacity = 0; }, 4000)
        }

        
    }
