// Define correct answers here
// Structure: questionId: { type: 'radio'/'checkbox', correct: value / [value1, value2,...] }
const correctAnswers = {
     q1: { type: 'radio', correct: 'correct' },
     q2: { type: 'radio', correct: 'correct' },
     q3: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q4: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q5: { type: 'radio', correct: 'correct' },
     q6: { type: 'radio', correct: 'correct' },
     q7: { type: 'radio', correct: 'correct' },
     q8: { type: 'radio', correct: 'correct' },
     q9: { type: 'radio', correct: 'correct' },
     q10: { type: 'radio', correct: 'correct' },
     q11: { type: 'radio', correct: 'correct' },
     q12: { type: 'radio', correct: 'correct' },
     q13: { type: 'radio', correct: 'correct' },
     q14: { type: 'radio', correct: 'correct' },
     q15: { type: 'radio', correct: 'correct' },
     q16: { type: 'radio', correct: 'correct' },
     q17: { type: 'radio', correct: 'correct' },
     q18: { type: 'radio', correct: 'correct' },
     q19: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q20: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q21: { type: 'radio', correct: 'correct' },
     q22: { type: 'radio', correct: 'correct' },
     q23: { type: 'radio', correct: 'correct' },
     q24: { type: 'radio', correct: 'correct' },
     q25: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3', 'correct4'] },
     q26: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3', 'correct4', 'correct5'] },
     q27: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q28: { type: 'radio', correct: 'correct' },
     q29: { type: 'radio', correct: 'correct' },
     q30: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q31: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q32: { type: 'radio', correct: 'correct' },
     q33: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q34: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q35: { type: 'radio', correct: 'correct' },
     q36: { type: 'radio', correct: 'correct' },
     q37: { type: 'radio', correct: 'correct' },
     q38: { type: 'radio', correct: 'correct' },
     q39: { type: 'radio', correct: 'correct' },
     q40: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q41: { type: 'radio', correct: 'correct' },
     q42: { type: 'radio', correct: 'correct' },
     q43: { type: 'radio', correct: 'correct' },
     q44: { type: 'radio', correct: 'correct' },
     q45: { type: 'radio', correct: 'correct' },
     q46: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q47: { type: 'radio', correct: 'correct' },
     q48: { type: 'radio', correct: 'correct' },
     q49: { type: 'radio', correct: 'correct' },
     q50: { type: 'radio', correct: 'correct' },
     q51: { type: 'radio', correct: 'correct' },
     q52: { type: 'radio', correct: 'correct' },
     q53: { type: 'radio', correct: 'correct' },
     q54: { type: 'radio', correct: 'correct' },
     q55: { type: 'radio', correct: 'correct' },
     q56: { type: 'radio', correct: 'correct' },
     q57: { type: 'radio', correct: 'correct' },
     q58: { type: 'radio', correct: 'correct' },
     q59: { type: 'radio', correct: 'correct' },
     q60: { type: 'radio', correct: 'correct' },
     q61: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q62: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q63: { type: 'radio', correct: 'correct' },
     q64: { type: 'radio', correct: 'correct' },
     q65: { type: 'radio', correct: 'correct' },
     q66: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q67: { type: 'radio', correct: 'correct' },
     q68: { type: 'radio', correct: 'correct' },
     q69: { type: 'radio', correct: 'correct' },
     q70: { type: 'radio', correct: 'correct' },
     q71: { type: 'radio', correct: 'correct' },
     q72: { type: 'radio', correct: 'correct' },
     q73: { type: 'radio', correct: 'correct' },
     q74: { type: 'radio', correct: 'correct' },
     q75: { type: 'radio', correct: 'correct' },
     q76: { type: 'radio', correct: 'correct' },
     q77: { type: 'radio', correct: 'correct' },
     q78: { type: 'radio', correct: 'correct' },
     q79: { type: 'radio', correct: 'correct' },
     q80: { type: 'radio', correct: 'correct' },
     q81: { type: 'radio', correct: 'correct' },
     q82: { type: 'radio', correct: 'correct' },
     q83: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q84: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q85: { type: 'radio', correct: 'correct' },
     q86: { type: 'radio', correct: 'correct' },
     q87: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q88: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3', 'correct4'] },
     q89: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q90: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q91: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q92: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q93: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q94: { type: 'radio', correct: 'correct' },
     q95: { type: 'radio', correct: 'correct' },
     q96: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3', 'correct4'] },
     q97: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q98: { type: 'radio', correct: 'correct' },
     q99: { type: 'radio', correct: 'correct' },
     q100: { type: 'radio', correct: 'correct' },
     q101: { type: 'radio', correct: 'correct' },
     q102: { type: 'checkbox', correct: ['correct1', 'correct2', 'correct3'] },
     q103: { type: 'checkbox', correct: ['correct1', 'correct2'] },
     q104: { type: 'radio', correct: 'correct' },
     q105: { type: 'checkbox', correct: ['correct1', 'correct2'] }
};

// Funktion zum Mischen eines Arrays (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Funktion zum Mischen der Optionen für jede Frage
function shuffleAllOptions() {
    const questionBlocks = document.querySelectorAll('.question-block');
    questionBlocks.forEach(block => {
        const optionsContainer = block.querySelector('.options');
        if (optionsContainer) {
            const labelsToShuffle = Array.from(optionsContainer.querySelectorAll(':scope > label'));
            shuffleArray(labelsToShuffle);
            // Hänge die gemischten Labels wieder an den Container an
            labelsToShuffle.forEach(label => {
                optionsContainer.appendChild(label);
            });
        }
    });
}

// Funktion zur Auswertung des Quizzes
// Diese Funktion wird global verfügbar gemacht, damit sie vom onclick-Attribut im HTML aufgerufen werden kann.
// Alternativ könnte man den Event Listener auch hier im JS hinzufügen.
window.evaluateQuiz = function() {
    const form = document.getElementById('quizForm');
    const resultsDiv = document.getElementById('results');
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    // Reset previous styling and disable inputs/labels
    const allLabels = form.querySelectorAll('.options label');
    allLabels.forEach(label => {
         label.classList.remove('correct-answer', 'incorrect-answer', 'user-selected');
         let input = label.querySelector('input');
         if (input) input.disabled = true;
         label.style.pointerEvents = 'none'; // Make label unclickable
    });
    const evalButton = form.querySelector('button');
    if (evalButton) evalButton.disabled = true;


    for (const questionId in correctAnswers) {
        const questionData = correctAnswers[questionId];
        const elements = form.elements[questionId]; // Get elements by name attribute
        let isCorrect = false;

        if (questionData.type === 'radio') {
            const selectedOption = form.querySelector(`input[name="${questionId}"]:checked`);
            if (selectedOption && selectedOption.value === questionData.correct) {
                score++;
                isCorrect = true;
            }
             // Visual feedback
             if (selectedOption) {
                 const selectedLabel = selectedOption.closest('label');
                 selectedLabel.classList.add('user-selected');
                 selectedLabel.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
             }
             // Always highlight the correct answer if different from selected or if none selected
             const correctRadio = form.querySelector(`input[name="${questionId}"][value="${questionData.correct}"]`);
             if(correctRadio){
                 const correctLabel = correctRadio.closest('label');
                 if(!correctLabel.classList.contains('user-selected')){
                     correctLabel.classList.add('correct-answer'); // Highlight correct if not selected
                 } else if (!isCorrect) {
                     // If user selected the wrong one, the correct one still gets the green light
                     correctLabel.classList.add('correct-answer');
                 }
             }


        } else if (questionData.type === 'checkbox') {
            const selectedOptions = form.querySelectorAll(`input[name="${questionId}"]:checked`);
            const selectedValues = Array.from(selectedOptions).map(cb => cb.value);

            const correctValuesSorted = [...questionData.correct].sort();
            const selectedValuesSorted = [...selectedValues].sort();

            if (selectedValuesSorted.length === correctValuesSorted.length &&
                selectedValuesSorted.every((value, index) => value === correctValuesSorted[index])) {
                score++;
                isCorrect = true; // Perfect match for this question
            }

             // Visual feedback for checkboxes
             const allCheckboxes = form.querySelectorAll(`input[name="${questionId}"]`);
             allCheckboxes.forEach(cb => {
                const label = cb.closest('label');
                const isCorrectOption = questionData.correct.includes(cb.value);

                if (cb.checked) {
                    label.classList.add('user-selected');
                    if (isCorrectOption) {
                        label.classList.add('correct-answer');
                    } else {
                        label.classList.add('incorrect-answer');
                    }
                } else {
                    // If it WAS a correct option but wasn't checked
                    if (isCorrectOption) {
                         label.classList.add('correct-answer'); // Mark correct options green anyway
                    }
                }
             });
        }
    }

    const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(1) : 0;
    const passed = percentage >= 90;
    const passStatus = passed ? "Bestanden ✅" : "Nicht Bestanden ❌";

    resultsDiv.innerHTML = `
        Ergebnis: ${score} von ${totalQuestions} richtig (${percentage}%)<br>
        ${passStatus}
    `;

    resultsDiv.className = 'results ' + (passed ? 'result-correct' : 'result-incorrect');

     // Scroll to results
     resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Event Listener, um das Mischen beim Laden der Seite auszuführen
document.addEventListener('DOMContentLoaded', shuffleAllOptions);