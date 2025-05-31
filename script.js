

const rollBtn=document.querySelector('#btn')
const rollBtnR=document.querySelector('#btnR')


const resultt=document.querySelector('#no-of-dicee')

const diceImage=document.querySelector('#diceImages')

let valueStore=[];

let diceImgStore=[];

let result;

rollBtn.addEventListener('click', ()=>{
const noValue=Number(document.querySelector('#no-value').value);
 valueStore=[];
diceImgStore=[];

    for(let i=0; i<noValue; i++){
        result=Math.floor(Math.random()*6+1)
        // console.log(result);
        valueStore.push(result)
        // console.log(valueStore);
        diceImgStore.push(`<img src='./assets/${result}.png'>`) // stores the imagaes accordingly to the result in value store as the 
    }

    resultt.textContent=   `Your Luck: ${valueStore.join(', ')}`
    diceImage.innerHTML=diceImgStore.join(' ')

})

rollBtnR.addEventListener('click',()=>{
    valueStore=[];
diceImgStore=[];
resultt.textContent=   `Result HERE`
    diceImage.innerHTML=''


})
