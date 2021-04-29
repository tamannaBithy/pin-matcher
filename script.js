const generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', function(){
    form = document.getElementById('form').value;
    for(i = 1000; i <= 9999; i++){
       var randomNum = Math.random() * 10000;
       var result = Math.round(randomNum);
    }
    document.getElementById('form').value = result;
})