
/* Created 3 product objects using object literal notation 
   Each product has five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let products=[
  {
  name: "cherry",
  price: 50,
  quantity: 0,
  productId: 505,
  image: "images/cherry.jpg"}
  ,{
    name: "orange",
  price: 25,
  quantity: 0,
  productId: 510,
  image: "images/orange.jpg"
  },{
  name: "strawberry",
  price: 70,
  quantity: 0,
  productId: 515,
  image: "images/strawberry.jpg"}
]


/* an empty array named cart to hold the items in the cart */
const cart=[]


/**
  getProductFromCart, A Function that takes in the products productId as an argument
  - returns the cartItem if the product is already present in the cart
  - else returns undefined
*/
function getProductFromCart(productId){
  return cart.find(product=> product.productId===productId)
}


/**
  getProductFromProducts, A Function that takes in the products productId as an argument
  - returns whole product with five propeties checking with productId in list of Products
  - else returns undefined
*/
function getProductFromProducts(productId){
  return products.find(product=> product.productId===productId)
}

/* addProductToCart, A Function that takes in the products productId as an argument
  - gets the correct product based on the productId
  - increases the product's quantity
  - if the product is not already in the cart, adds it to the cart
*/
function addProductToCart(productId){

  const cartItem= getProductFromCart(productId)

  if(cartItem){
    //if the product is already in cart
    cartItem.quantity+=1
  }
  else{
    //if not, add the product to the cart
    const product = getProductFromProducts(productId)
    if(product){
      product.quantity=1;
      cart.push(product)
    }
  }
}


/* increaseQuantity, a Function that takes in the productId as an argument
  - gets the correct cartItem based on the productId from the cart and increase thes cartItem's quantity
*/
function increaseQuantity(productId){
  //find the cartItem or product in cart and increase it's quantity by 1
  const cartItem= getProductFromCart(productId)

  if(cartItem){
    cartItem.quantity+=1
  }
}

/*  decreaseQuantity, a Function that takes in the productId as an argument
  - gets the correct cartItem based on the productId from the cart and  decrease the quantity of the product if exists in cart.
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){
  //find the products index in cart
  const itemIndex = cart.findIndex(i=>i.productId===productId)
  if(itemIndex != -1){
    //if the product is in the cart and quantity > 1, reduce its quantity by 1
    cart[itemIndex].quantity -=1
    if(cart[itemIndex].quantity <=0 )
    //if the products quantity in cart is already 0, remove the product.
      removeProductFromCart(productId)
  }
}

/* removeProductFromCart, a Function that takes in the productId as an argument
  - updates the product quantity to 0
  - removes the product from the cart
*/
function removeProductFromCart(productId){
  //removes the entire product from the cart
  const itemIndex = cart.findIndex(i=>i.productId===productId)
  if(itemIndex != -1){
    cart[itemIndex].quantity =0;
    cart.splice(itemIndex,1)
  }
}


/* cartTotal, a Funcation that has no parameters
  - iterates through the cart to get the total of all products
  - returns the sum of the products in the cart
*/
function cartTotal(){
  let total = 0
  cart.forEach(element => {
   total += element.price * element.quantity
  });
  return total
}

/* emptyCart, a function that empties the products from the cart */

function emptyCart(){
  //sets the cart[]] to 0, making it empty.
  cart.length=0
}


/* pay, a function that takes in an amount as an argument
  - returns a negative number if there is a remaining balance
  - returns a positive number if money should be returned to customer
*/
let totalPaid=0
function pay(amount){
  //include the previous transcations output
  totalPaid += amount
  let remainingBalance = totalPaid - cartTotal()
  if( remainingBalance>= 0){
    const change = remainingBalance
    totalPaid=0 //reset for future transactions
    emptyCart() //clear cart after successfull payment
    return change
  } 
  return remainingBalance
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/  

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart
 
}