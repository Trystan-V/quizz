
//Ce que je veux faire

//-je récupère les réponses dans un talbeau quand elles sont validés

const form = document.querySelector('.form-quizz');
//console.log(form);
let resultArray = [];

form.addEventListener('submit', (e) => {
    //pour ne pas acutaliser la page
    e.preventDefault();
    console.log(document.querySelector('input[name="q1"]:checked').value);
})

// -je compare le tableau des réponses avec celui des bonnes réponses

// -si les réponses sont bonnes la question devient verte

// -si ce n'est pas bon ca devient rouge

// -j'affiche le nombres de bonnes réponses





