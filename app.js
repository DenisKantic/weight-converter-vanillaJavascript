document.getElementById('result-container').style.visibility = 'hidden';


document.getElementById('inputValue').addEventListener('input', function(e){

    
    document.getElementById('result-container').style.visibility = 'visible';
    let userInput = e.target.value;

    document.getElementById('gValue').innerHTML = userInput*1000;
    document.getElementById('tonValue').innerHTML = userInput/1000;
    document.getElementById('lbsValue').innerHTML = userInput*2.20462;
});