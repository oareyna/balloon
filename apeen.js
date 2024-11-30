const input = document.getElementById("Pene");
const ptag = document.getElementById("ptag"); 
const button = document.getElementById("button");
let points = 0;
let name1 = ''


function handleInitialQuestion(event) {
    event.preventDefault();
    const userInput = input.value.toLowerCase();

    if (userInput == "b") {
        ptag.innerHTML = "Correct";
        points += 10;
        ptag.innerHTML += "<br>Points: " + points;

        createNextQuestionButton();
    } else if (userInput == "a" || userInput == "c" || userInput == "d") {
        ptag.innerHTML = "Wrong, try again";
        points -= 10;
        ptag.innerHTML += "<br>Points: " + points;
    }

}

function createNextQuestionButton() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "dog.png"; 
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "b") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionThree()
            } else if (newUserInput == "a" || newUserInput == "c" || newUserInput == "d") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
            
        });
    });
}

function questionThree() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "goak.png"; 
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "c") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionFour()
            } else if (newUserInput == "a" || newUserInput == "b" || newUserInput == "d") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}

function questionFour() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "eigth.png"; 
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "c") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionFive()
            } else if (newUserInput == "a" || newUserInput == "b" || newUserInput == "d") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}

function questionFive() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "fifth.png"; 
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "c") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionFive()
            } else if (newUserInput == "a" || newUserInput == "b" || newUserInput == "d") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}
function questionFive() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "fifth.png"; 
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `

        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "d") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionSix()
            } else if (newUserInput == "a" || newUserInput == "b" || newUserInput == "c") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}
function questionSix() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "ninth.png"; 
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "d") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionSeven()
            } else if (newUserInput == "a" || newUserInput == "b" || newUserInput == "c") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}

function questionSeven() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "seventh.png";
        img1.width = "900"
        img1.height = "480" 
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "b") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionEight()
            } else if (newUserInput == "a" || newUserInput == "d" || newUserInput == "c") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}

function questionEight() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "sixth.png"; 
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "b") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                questionNine()
            } else if (newUserInput == "a" || newUserInput == "d" || newUserInput == "c") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}

function questionNine() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next Question";
    document.body.appendChild(blankButton);

    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "tenth.png";
        img1.width = "900"
        img1.height = "480" 
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "A, B, C or D?";

        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "a") {
                ptag2.innerHTML = "Correct";  // Display result in ptag2
                points += 10;
                ptag2.innerHTML += "<br>Points: " + points;
                end()
            } else if (newUserInput == "b" || newUserInput == "d" || newUserInput == "c") {
                ptag2.innerHTML = "Wrong, try again";  // Display result in ptag2
                points -= 10;
                ptag2.innerHTML += "<br>Points: " + points;
            }
        });
    });
}

function end() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next";
    document.body.appendChild(blankButton);
    blankButton.addEventListener("click", function() {
        document.body.innerHTML = ''; 

        const img1 = document.createElement("img");
        img1.src = "pompompurin2.png";
        img1.width = "900"
        img1.height = "480" 
        document.body.appendChild(img1);

        const formy = document.createElement("form");

        const next = document.createElement("label");
        next.textContent = "Enter your name:";
        const one = document.createElement("input");
        one.type = "text";
        const two = document.createElement("button");
        two.type = "submit";
        two.textContent = "Submit";

        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        document.body.appendChild(formy);
        formy.appendChild(next);
        formy.appendChild(one);
        formy.appendChild(two);

        formy.addEventListener("submit", function(event) {
            event.preventDefault();
            name1 += one.value
            const newUserInput = one.value.toLowerCase();

            if (newUserInput == "nicholas") {
                points -= 1000000000000;
                end2()
                
            } else if (newUserInput == "olivia") {
                points += 1000000000000000000;
                end2()
                
            }
            else {
                end2()
            }
        })
    })
}
function end2() {
    const blankButton = document.createElement("button");
    blankButton.textContent = "Next";
    document.body.appendChild(blankButton);
    blankButton.addEventListener("click", function() {
        document.body.innerHTML = '';
 
        const img1 = document.createElement("img");
        img1.src = "kuromi2.png";
        img1.width = "900"
        img1.height = "480"
        document.body.appendChild(img1);
 
        const status = document.createElement("h1")
        status.textContent=
        `Status based off points:
        -100 >= x : Hates Michigan
        0 >= x : Foreigner
        20 >= x : Thinks michigan is ohio
        50 >= x : visited Michigan for a day
        70 >= x : Grandma lives in Michigan
        90 >= x : Wannabe Canadian
        100/100 : Is michigan
        100 < x : Is goated`
 
        let status1 = ""
 
        if (points <= -100) {
            status1= 'Hates Michigan'
        }
        else if (points <= 0) {
            status1="Foreigner"
        }
        else if (points <= 20) {
            status1="Thinks Michigain is Ohio"
        }
        else if (points <= 50) {
            status1="Visited Michigan for a day"
        }
        else if (points <= 70) {
            status1="Grandma lives in Michigan"
        }
        else if (points <= 90) {
            status1="Wanna be Canadian"
        }
        else if (points <= 100) {
            status1="Is Michigan"
        }
        else if (points > 100) {
            status1="Is goated"
        }
 
 
        const results = document.createElement("h2")
        results.textContent =`Hello ${name1}, you have ${points} points!!!
        Status: ${status1}   `
        const ptag2 = document.createElement("pre");
        ptag2.textContent=`
        `
        document.body.appendChild(ptag2);
        ptag2.appendChild(status);
        ptag2.appendChild(results)
 
     
    })
}

button.addEventListener("click", handleInitialQuestion);
