let getInp=document.getElementById('getInp');
// console.log(getInp);
let increase=document.getElementById('increase');
let decrease=document.getElementById('decrease');
let showPrice=document.getElementById('showPrice');
let vat=document.getElementById('vat').innerText;
let total=document.getElementById('total');
increase.addEventListener('click',()=>{
    let inpVal=parseInt(getInp.value);
    // console.log(inpVal);
    getInp.value=inpVal+1;
    // document.getElementById('getInp').innerHTML=Number(getInp.value)+1;
    let getVal=getInp.value;
    let result=getVal * 10;
    showPrice.innerText=result;
    let resultVal=parseFloat(result);
    // console.log(resultVal);
    let vatVal=parseFloat(vat);
    // console.log(typeof(vatVal));
    let totalResult=resultVal + vatVal;
    // console.log(totalResult);
    total.innerText=totalResult;

})

decrease.addEventListener('click',()=>{
    let inpVal=parseInt(getInp.value);
    if(getInp.value <=0){
        alert('Invalid quantity');
    }else{
        getInp.value=inpVal-1;
        // document.getElementById('getInp').innerHTML=Number(getInp.value)+1;
        let getVal=getInp.value;
        let result=getVal * 10;
        showPrice.innerText=result;
    }

})

