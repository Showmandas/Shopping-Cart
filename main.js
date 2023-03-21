const productCard=document.getElementById('productCard');

products.forEach(product=>{
    console.log(product);
    const{id,name,price,instock,imgSrc}=product;
    productCard.innerHTML+=`
    <div class="col-lg-4 h-100">
    <div class="card mb-5 my-5">
  <img src="${imgSrc}" class="img-fluid" id="productImg" alt="...">
  <div class="card-body">
    <h4 class="card-title">${name}</h4>
    <h5 class="card-text">Price: ${price}</h5>
    <h5 class="card-text">Instock: ${instock}</h5>
    <div class="d-flex justify-content-center align-items-center gap-3">
    <button class="btn bg-info-subtle">Know more</button>
    <button class="btn bg-warning-subtle" onclick="addCart(${id})">Add to cart</button>
    </div>
  </div>
</div>
    </div>
    `
})


let cartItems=[];
updataCart();
const addCart=(dataId)=>{
    // console.log(datas);
    if(cartItems.some(item=>item.id ===dataId)){
        alert('Product Already added!');
    }else{
        const item=products.find(product=>product.id===dataId)
        cartItems.push(
            ...item
        )
    }
 updataCart();
}

// cart update 
const updateCart=()=>{
    displayCartItem();
}

// display cart item to cart section 
