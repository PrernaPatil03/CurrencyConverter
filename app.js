const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown_s =document.querySelectorAll(".dropdown select");
const msg =document.querySelector(".msg");
const btn =document.querySelector("form button");
const fromCurr =document.querySelector(".from select");
const toCurr =document.querySelector(".to select");


// for (code in countryList){
//     console.log(code);
// }will print the codes of all countries
for(let select of dropdown_s){
    for (currCode in countryList){
            let newOption =document.createElement("option");
            newOption.innerText =currCode;
            newOption.value = currCode;
            if(select.name ==="from" && currCode ==="USD"){
                newOption.selected ="selected";
            }else if(select.name ==="to" && currCode ==="INR"){
                newOption.selected ="selected";
            }

            
            select.append(newOption);

         }
         select.addEventListener("change" , (evt) => {
            update_flag(evt.target);
         });
}


const update_flag = (element) => {
  let  currCode =element.value;
  let countryCode = countryList[currCode];
  let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};


btn.addEventListener("click",(evt) => {
    evt.preventDefault();
    updateExchangeRate();
//     let amount =document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if(amtVal ==="" || amtVal < 1){
//         amtVal =1;
//         amount.value ="1";
//     }
//  //console.log(fromCurr.value,toCurr.value);
//  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//  let response = await fetch (URL);
//  let data =await response.json();
//  let rate =data[toCurr.value.toLowerCase()];
// //  console.log(rate);
// //  console.log(amount);




//  let finalAmount =amtVal *rate;
//  msg.innerText = `${amtVal} ${fromCurr.value} =${finalAmount} ${toCurr.value}`;
});

 const updateExchangeRate = async() =>{
    let amount =document.querySelector(".amount input");
        let amtVal = amount.value;
        if(amtVal ==="" || amtVal < 1){
            amtVal =1;
            amount.value ="1";
        }
     //console.log(fromCurr.value,toCurr.value);
     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
     let response = await fetch (URL);
     let data =await response.json();
     let rate =data[toCurr.value.toLowerCase()];
    //  console.log(rate);
    //  console.log(amount);
    
    
    
    
     let finalAmount =amtVal *rate;
     msg.innerText = `${amtVal} ${fromCurr.value} =${finalAmount} ${toCurr.value}`; 
};

window.document.addEventListener("load" , () =>{
    updateExchangeRate();

});
