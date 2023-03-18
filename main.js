
let showPrice=document.getElementById('showPrice');
let vat=document.getElementById('vat').innerText;
let total=document.getElementById('total');



function decreaseQuantity(incrDecr){
    let getInp=document.getElementById(incrDecr);
    let inpVal=parseInt(getInp.value);
    if(getInp.value <=0){
        alert('Invalid quantity');
    }else{
        getInp.value=inpVal-1;
        let getVal=getInp.value;
        let result=getVal * 10;
        showPrice.innerText=result;
        getInp.style.backgroundColor='#fff';
        getInp.style.Color='#000';
    }

}

function increaseQuantity(incrDecr){
    let getInp=document.getElementById(incrDecr);
    let inpVal=parseInt(getInp.value);
    // console.log(inpVal);
    if(getInp.value >=10){
        alert('Maximum 10 quantity is allowed!');
        getInp.style.backgroundColor='red';
        getInp.style.Color='#fff';
    }else{
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

    }
}


