//Ce que je veux faire

//-je récupère les réponses dans un talbeau quand elles sont validés

const form = document.querySelector('.form-quizz');
//console.log(form);
let resultArray = [];
const graduation = document.querySelector('.result h2');
const graduationText = document.querySelector('.grade');
const graduationHelp = document.querySelector('.help');
const questionBlock = document.querySelectorAll('.question-block');
const goodAnswerArray = ['b','c','a','b'];
let verifArray = [];

form.addEventListener('submit', (e) => {
  //pour ne pas acutaliser la page
  e.preventDefault();
  //console.log(document.querySelector('input[name="q1"]:checked').value);

  for (let i = 1; i < 5; i++) {
    resultArray.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );

  }
  console.log(resultArray);
  // -je compare le tableau des réponses avec celui des bonnes réponses et je creer un nouveau tableau avec le résulats
  verifFunction(resultArray);
  resultArray = [];
});

function verifFunction(resultArr) {
  for (let i = 0; i < 4; i++) {
    if (resultArr[i] === goodAnswerArray[i]) {
      verifArray.push(true);
    } else {
      verifArray.push(false);
    }
  }
  //console.log(verifArray);
  showResult(verifArray);
  changeColor(verifArray);
  verifArray = [];
}

// -j'affiche le nombres de bonnes réponses et des commentaires
function showResult(checkArr) {
    const wrongAnswers = checkArr.filter(el => el !== true).length;
    console.log(wrongAnswers);

    switch (wrongAnswers) {
        case 0: graduation.innerText = `✅ T'es le meilleur mon pote ! ✅`;
                graduationHelp.innerText = ``;
                graduationText.innerText =`4/4`;
                break;
        
        case 1: graduation.innerText = `✨ C'est pas mal ! ✨`;
                graduationHelp.innerText = `Change ta réponse dans la case rouge`;
                graduationText.innerText =`3/4`;
                break;

        case 2: graduation.innerText = `👀 C'est mauvais, mais c'est pas bon non plus 👀`;
                graduationHelp.innerText = `Change tes réponses dans les cases rouges`;
                graduationText.innerText =`2/4`;
                break;

        case 3: graduation.innerText = `👎 Au moins une !  👎`;
                graduationHelp.innerText = `Change tes réponses dans les cases rouges`;
                graduationText.innerText =`1/4`;
                break;

        case 4: graduation.innerText = `😭 Aïe coup dur! 😭`;
                graduationHelp.innerText = `Change tes réponses dans les cases rouges`;
                graduationText.innerText =`0/4`;
                break;
    
        default:
            `heu.... ba v'la aut' chose`;
    }
}

//Je change la couleur de fond selon la réponse
function changeColor(valBoolArr) {
    for(let i = 0; i < valBoolArr.length; i++) {
        if(valBoolArr[i] === true) {
            questionBlock[i].style.background = 'lightgreen';
        } else {
            questionBlock[i].style.background = '#fa9d9d';
            questionBlock[i].classList.add('fail');

            setTimeout(() => {questionBlock[i].classList.remove('fail')}, 500);
        }
    }
}

questionBlock.forEach(item => {
    item.addEventListener('click', () => 
    item.style.background = 'rgb(238, 238, 238)')
})
