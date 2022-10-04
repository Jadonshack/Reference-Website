async function getAdvice() {
    var adviceData = await fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
        var advice = $(`<p>${adviceData.slip.advice}</p>`)
        $('#adviceDiv').append(advice);
}   
getAdvice();    