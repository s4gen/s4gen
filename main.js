// Buttons
const start = document.querySelector('#start')
const nextpage = document.querySelector('#nextpage');
const previouspage = document.querySelector('#previouspage');
const result = document.querySelector('#result');
// Questions
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')
const p6 = document.querySelector('#p6')


// Element
const resultsDisplay = document.querySelector('#resultsDisplay')

// Current page
let page = 0

// Answers
let R = 0;
let I = 0;
let A = 0;
let S = 0;
let E = 0;
let C = 0;


function setDisplay(element, type) { // Sets the display type of an element to the desired one.
    element.style["display"] = type;
};

start.addEventListener('click', (event) => {
    /*
    Even though we do not use the page 
    variable here, it will be useful
    to have it set to 1 in the 
    code of the Next Page button.
    */
    page = 1
    
    // Button Display
    setDisplay(nextpage, "inline");
    setDisplay(start, "none");


    // Question Display
    /*
    We only show the first question because
    this is the start button.
    */
    setDisplay(p1, "inline"); 
});

nextpage.addEventListener('click', (event) => {
    if (page == 5) {
        setDisplay(nextpage, "none");
        setDisplay(result, "inline")
    };

    if (page == 1) {
        setDisplay(previouspage, "inline");
    }

    setDisplay(document.querySelector('#p'+page), "none");
    
    if (page != 6) {
        page += 1
    };

    setDisplay(document.querySelector('#p'+page), "inline");
});

previouspage.addEventListener('click', (event) => {
    if (page ==  2) {
        setDisplay(previouspage, "none");
    }

    if (page == 6) {
        setDisplay(nextpage, "inline");
    };

    setDisplay(document.querySelector('#p'+page), "none");
    
    if (page != 1) {
        page -= 1
    };

    setDisplay(document.querySelector('#p'+page), "inline");
});







result.addEventListener('click', (event) => {
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
        };
    };
    console.log('');
    console.log('');
    console.log('');
    console.log('-= REZULTATE =-');
    console.log(`R = ${R}`);
    console.log(`I = ${I}`);
    console.log(`A = ${A}`);
    console.log(`S = ${S}`);
    console.log(`E = ${E}`);
    console.log(`C = ${C}`);


    function showResult() {
        document.getElementById("resultsDisplay").innerHTML= `Rezultate: <br>
        <ul>
            <li> R - ${R} </li>
            <li> I - ${I} </li>
            <li> A - ${A} </li>
            <li> S - ${S} </li>
            <li> E - ${E} </li>
            <li> C - ${C} </li>
        
        </ul>`
    };

    showResult();
    setDisplay(resultsDisplay, "inline");
});  