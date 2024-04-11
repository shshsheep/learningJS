let val;
let expression="";

function init(){
    let btns = document.querySelectorAll("button")
    for(let i=0; i < btns.length; i++){
        btns[i].addEventListener('click',buttonClick);
    }

    function buttonClick(){
        val = this.value;
        let display = document.getElementById("display");

        switch(val){
            case '=':
                let result = eval(expression);
                display.innerHTML = result;
                expression = " ";
                break;
            case 'C':
                display.innerHTML = "0";
                expression = " ";
                break;
            default:
                expression += val;
                display.innerHTML = expression;
                break;
        }
    }
}