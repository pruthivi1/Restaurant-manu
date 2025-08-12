<!--(this is the HTML)(<button id="itemBtn">Add Item</button>)-->
<!--this is js code -->
const itemBtn = document.getElementById("itemBtn");
let quantity = 0;

function renderButton(){
    if(quantity === 0){
        itemBtn.textContent = "Add Item";
    }else{
        itemBtn.innerHTML = `
        <span class="btn-inner">
            <span class="btn-part" onclick="changeQuantity(-1)">-</span>
            <span>${quantity}</span>
            <span class="btn-part" onclick="changeQuantity(1)">+</span>
        </span>
        `;
    }
}

function changeQuantity(change){
    quantity += change;
    if(quantity < 0) quantity =0;
    renderButton();
}

itemBtn.addEventListener("click", () =>{
    if(quantity === 0){
        quantity =1;
        renderButton();
    }
});
renderButton();
