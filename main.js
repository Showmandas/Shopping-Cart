const productCard=document.getElementById('productCard');
const cartBody=document.getElementById('cartBody');

const productRender=()=>{
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
    
}

productRender();


// add to cart 

let cartItems=[];
// updateCart();
const addCart=(dataId)=>{
    // console.log(dataId);
    if(cartItems.some(item=>item.id ===dataId)){
        alert('Product Already added!');
    }else{
        const item=products.find(product=>product.id===dataId)
        cartItems.push({
            ...item,
            units:1,

        }
            
        )
    }
 updateCart();
}

// cart update 
function updateCart(){
    renderCartItem();
}

// display cart item to cart section 
const renderCartItem=()=>{
    cartBody.innerHTML=""
    cartItems.forEach(items=>{
        const {imgSrc,price,name,id,units}=items
        cartBody.innerHTML+=`
        <div class="cart-item  d-flex justify-content-center align-items-center gap-3">
                    <div class="item-info d-flex justify-content-center">
                        <img src="${imgSrc}" class="img-fluid w-25" alt="">
                        <h4>${name}</h4>
                    </div><!--/item-info-->
                    <div class="unit-price">
                        <small>$</small>${price}
                    </div><!--/unit-price-->
                    <div class="units">
                        <button class="btn btn-minus" onclick="changeNumOfUnits('minus',${id})">-</button><!--/btn-minus-->
                        <div class="number">${units}</div><!--/number-->
                        <button class="btn btn-plus" onclick="changeNumOfUnits('plus',${id})">+</button><!--/btn-plus-->
                    </div><!--/units-->
                </div><!--/cart-item-->
        `
    })
}


const changeNumOfUnits=(operation,id)=>{
    cartItems=cartItems.map(item=>{
        let units=item.units;
        if(item.id === id){
            if(operation==='minus' && units > 1){
                units--;
            }else if(operation==='plus' && units < item.instock){
                units++;
            }
        }
        return({
            ...item,
            units
        })
    })
    updateCart()
}