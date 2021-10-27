let num;

const numForm = document.querySelector("#input");
const userNum = document.querySelector("#input input");

numForm.addEventListener("submit", judge);

function judge(event){
    const fuckyou = document.querySelector("#fuck");
    num  = Math.floor(Math.random()*11);
    event.preventDefault();
    const user = parseInt(userNum.value);
    console.log(num);
    if(user !== num){
        fuckyou.innerText = "좆밥 쉐끼 ㅋㅋㅋㅋㅋㅋㅋ";
    } else {
        fuckyou.innerText = "이왜진 ......";
    }
}