// Vanilla JS code

let expression = "";

//Step1 : get all buttons
let buttons = document.querySelectorAll('.button');
// make an array of buttons and add event listener to each buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {

        let val = event.target.innerHTML;
        //console.log("button is clicked");

        if (val == '=') {
            try {
                expression = eval(expression);
                document.querySelector('.input').value = expression;
            }
            catch (error) {
                alert("Invalid input!");
            }
        }
        else if (val == 'C') {
            expression = "";
            document.querySelector('.input').value = expression;
        }
        else {
            expression += val;
            document.querySelector('.input').value = expression;
        }
    })
})