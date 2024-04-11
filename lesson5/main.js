let val;
let expression = " ";
let operatorsClicked = {
    '+' : false,
    '-' : false,
    '*' : false,
    '/' : false
};

function init(){
    let btns = document.querySelectorAll("button")
    for(let i=0; i < btns.length; i++){
        btns[i].addEventListener('click',buttonClick);
    }

    function buttonClick(){
        val = this.value;
        let display = document.getElementById("display");

        if(val === '+' || val === '-' || val === '*' || val === '/'){
            if(operatorsClicked[val]){
                return;
            }else {
                operatorsClicked[val] = true;
            }
        }

        switch(val){
            case '=':
                let result = eval(expression);
                display.innerHTML = result;
                expression = " ";
                resoperators();
                break;
            case 'C':
                display.innerHTML = "0";
                expression = " ";
                resoperators();
                break;
            default:
                expression += val;
                display.innerHTML = expression;
                break;
        }
    }

    function resoperators(){
        for (let op in operatorsClicked){
            operatorsClicked = false;
        }
    }
}