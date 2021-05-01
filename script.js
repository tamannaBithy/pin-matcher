const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', function(){
    form = document.getElementById('newPin').value;
    for(i = 1000; i <= 9999; i++){
       var randomNum = Math.random() * 10000;
       var result = Math.round(randomNum);
    }
    document.getElementById('newPin').value = result;
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
    generatePin = document.getElementById('newPin').value;
    matchPin = parseInt(document.getElementById('display').value);
    if(generatePin == matchPin){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('non-matched').style.display = 'none';
    }
    else{
        document.getElementById('non-matched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
}