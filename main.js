const btn = document.querySelector('#btn');
let R = 0;
let I = 0;
let A = 0;
let S = 0;
let E = 0;
let C = 0;
btn.addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="q"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value); 
    });
    R = 0;
        I = 0;
        A = 0;
        S = 0;
        E = 0;
        C = 0;
    for (let i = 0; i < values.length; i++) { // Counting the value of every response of RIASEC.
        if (values[i] == "R") {
            R += 1
        } else if (values[i] == "I") {
            I += 1
        } else if (values[i] == "A") {
            A += 1
        } else if (values[i] == "S") {
            S += 1
        } else if (values[i] == "E") {
            E += 1
        } else if (values[i] == "C") {
            C += 1
        } else {
            console.log("Error counting scores, invalid answer.") // If somehow a value isn't RIASEC, this will print.
        }
    }
    console.log('')
    console.log('')
    console.log('')
    console.log('-= REZULTATE =-')
    console.log(`R = ${R}`)
    console.log(`I = ${I}`)
    console.log(`A = ${A}`)
    console.log(`S = ${S}`)
    console.log(`E = ${E}`)
    console.log(`C = ${C}`)


    function showResult() {
        document.getElementById("id01").innerHTML= `Rezultate: <br>
        R = ${R} <br>
        I = ${I} <br>
        A = ${A} <br>
        S = ${S} <br>
        E = ${E} <br>
        C = ${C}`;                
    }

    showResult()
});    