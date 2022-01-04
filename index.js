let userName = new String;
let correctAnswers = ['opt2Quest1', 'opt3Quest2', 'opt1Quest3', 'opt2Quest4', 'opt2Quest5', 'opt3Quest6'];

function someNull(e) {
    return e == null;
}

function authRadios(answer, correct) {
    return answer == correct;
}

document.getElementById('send').addEventListener('click', ()=>{
    //userName = document.getElementById('userName').value;
    if(document.getElementById('userName').value == '') {
        alert('Digite seu nome!!');
    } else 
    {
        userName = document.getElementById('userName').value;
        document.getElementById('userData').classList.add('none');
        document.getElementById('questions').classList.remove('none');
        document.getElementById('background').style.height = '100%';
    }
});

document.getElementById('confirmButton').addEventListener('click', ()=>{
    let userAnswer = [document.querySelector('input[name="optQuest1"]:checked'), 
                      document.querySelector('input[name="optQuest2"]:checked'), 
                      document.querySelector('input[name="optQuest3"]:checked'),
                      document.querySelector('input[name="optQuest4"]:checked'), 
                      document.querySelector('input[name="optQuest5"]:checked'), 
                      document.querySelector('input[name="optQuest6"]:checked')
    ];

    if(userAnswer.some(someNull)) {
        alert('Verifique se você marcou ao menos uma alternativa de cada questão!!!');
    } else  {
        let xcorrect = 0;

        for(let i = 0; i < correctAnswers.length; i++) {
            if(authRadios(userAnswer[i].id, correctAnswers[i])) {
                userAnswer[i].parentElement.classList.add('green');
                xcorrect++;
            } else {
                userAnswer[i].parentElement.classList.add('red');
            }
        }

        let divRes = document.getElementById('result');

        divRes.classList.remove('none');

        let textRes = document.getElementById('res');

        textRes.innerHTML = userName + ', você acertou ' + xcorrect + ' de ' + correctAnswers.length;

        let confirmButton = document.getElementById('confirmButton');
        let reloadButton = document.getElementById('reloadButton');

        confirmButton.classList.add('none');
        reloadButton.classList.remove('none');
        reloadButton.addEventListener('click', ()=>{window.location.reload();});
    }

})