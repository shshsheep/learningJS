function checkPrime(){
    let n = Number(document.getElementById("myNumber").value);
    let primes = [];
    let str = "質數列表 : ";

    if (isNaN(n) || n < 2)window.alert("請輸入一個大於２的整數");
    else {
        //檢查結於2~n之間的所有質數
        for(let i = 2; i <= n; i++){
            if (isPrime(i)) {
                primes.push(i);
                str += `<span style = "color : red; border: 1px solid red ;padding 2px ; font-weight: bold;">${i} </span>`;
            }
            else str += `<span style = "color : black;padding 2px ; font-weight: bold;">${i} </span>`
        }
        str +="<br/>";

        str +="<h3>所有質數的倍數列表</h3>";

        let cs = Math.trunc(360 / primes.length);
        for (let i=0; i<primes.length; i++) {
            str += `<span style="color:hsl(${i*cs}, 100%, 50%);font-weight: bold; text-decoration: underline;">${primes[i]}的倍數</span> :`;
            for (let j = primes[i]; j <=n; j+=primes[i]){
                str += ` <span style="color:hsl(${i * cs}, 100%, 50%)">${j}</span> `;
            }
            str += "<br/>";
        }
        str += "<br/>";

    }
    document.getElementById("result").innerHTML = str;
}

function isPrime(num){
    //判斷num是否為質數
    for (let i=2; i<num; i++){
        if (num % i == 0) return false;
    }
    return true;
}