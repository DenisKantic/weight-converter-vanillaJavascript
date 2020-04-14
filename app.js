document.getElementById('inputValue').addEventListener('input', function(e){

    let userInput = e.target.value;

    document.getElementById('gValue').innerHTML = userInput*1000;
    document.getElementById('tonValue').innerHTML = userInput/1000;
    document.getElementById('lbsValue').innerHTML = userInput*2.20462;
});