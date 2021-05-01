const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', function(){
    form = document.getElementById('new-pin').value;
    for(i = 1000; i <= 9999; i++){
       var randomNum = Math.floor(1000 + Math.random() * 9000);
       var result = Math.round(randomNum);
    }
    document.getElementById('new-pin').value = result;
})

const displayNum = document.getElementById("display").value;

function insert (number){
    document.getElementById("display").value = document.getElementById("display").value + number;
}

function clearAll(){
    document.getElementById("display").value = '';
}

function backSpace(){
    var num = document.getElementById("display").value;
    num = num.substring(0, num.length - 1);
    document.getElementById("display").value = num;
}


function submitBtn(){
    generatePin = document.getElementById('new-pin').value;
    matchPin = document.getElementById('display').value;

    if(generatePin == '' || matchPin == ''){
        if(generatePin == ''){
            alert('generate the pin code first');
        }
        else{
            alert('enter the pin code which you have got & then click submit');
        }
        return;
    }
    if(generatePin == matchPin){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('non-matched').style.display = 'none';
    }
    else{
        document.getElementById('non-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
        chanceLeft();
    }
}

function chanceLeft(){
    var counter = document.getElementById('count-number').innerText;
    var count = parseInt(counter);
    const generatePin = document.getElementById('new-pin').value;
    const matchPin = document.getElementById('display').value;
    if ( generatePin != matchPin){
        document.getElementById('count-number').innerText = --counter;
    }
    if (counter == 0){
        alert('You Lost All 3 Chances. Reload The Page For Try Again.')
        document.getElementById('count-number').innerText = "Sorry no more ";
    }
}