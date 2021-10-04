import React from 'react';
import { Link } from 'react-router-dom';
class ShoppingCart = () => {

	 componentDidMount() {

    const $ = window.$;
    
     let publicUrl = process.env.PUBLIC_URL+'/'

	var shoppingCart = (function() {
	  // =============================
	  // Private methods and propeties
	  // =============================
	 var cart = [];
	 var item;
	 var itemCopy;
	 var p;
	  
	  // Constructor
	  function Item(name, price, count) {
	    this.name = name;
	    this.price = price;
	    this.count = count;
	  }
	  
	  // Save cart
	  function saveCart() {
	    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
	  }
	  
	    // Load cart
	  function loadCart() {
	    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
	  }
	  if (sessionStorage.getItem("shoppingCart") != null) {
	    loadCart();
	  }
	  

	  // =============================
	  // Public methods and propeties
	  // =============================
	  var obj = {};
	  

	  // Set count from item
	  obj.setCountForItem = function(name, count) {
	    for(var i in cart) {
	      if (cart[i].name === name) {
	        cart[i].count = count;
	        break;
	      }
	    }
	  };
	  // Remove item from cart
	  obj.removeItemFromCart = function(name) {
	      for(var item in cart) {
	        if(cart[item].name === name) {
	          cart[item].count --;
	          if(cart[item].count === 0) {
	            cart.splice(item, 1);
	          }
	          break;
	        }
	    }
	    saveCart();
	  }

	  // Remove all items from cart
	  obj.removeItemFromCartAll = function(name) {
	    for(var item in cart) {
	      if(cart[item].name === name) {
	        cart.splice(item, 1);
	        break;
	      }
	    }
	    saveCart();
	  }

	  // Clear cart
	  obj.clearCart = function() {
	    cart = [];
	    saveCart();
	  }

	  // Count cart 
	  obj.totalCount = function() {
	    var totalCount = 0;
	    for(var item in cart) {
	      totalCount += cart[item].count;
	    }
	    return totalCount;
	  }

	  // Total cart
	  obj.totalCart = function() {
	    var totalCart = 0;
	    for(var item in cart) {
	      totalCart += cart[item].price * cart[item].count;
	    }
	    return Number(totalCart.toFixed(2));
	  }

	  // List cart
	  obj.listCart = function() {
	    var cartCopy = [];
	    var i='0';
	    for(i in cart) {
	      item = cart[i];
	      itemCopy = {};
	      for(p in item) {
	        itemCopy[p] = item[p];

	      }
	      itemCopy.total = Number(item.price * item.count).toFixed(2);
	      cartCopy.push(itemCopy)
	    }
	    return cartCopy;
	  }

	  return obj;
	})();



	// Clear items
	$('.clear-cart').click(function() {
	  shoppingCart.clearCart();
	  displayShoppingCart();
	});


	function displayShoppingCart() {
	  var cartArray = shoppingCart.listCart();
	  var output = "";
	  for(var i in cartArray) {
	    output += '<tr>'
	                +'<th scope="row" className="d-flex">'
	                 +'<div className="left">'
	                   +'<img src="'+publicUrl+cartArray[i].img +'" alt="">'
	                  +'</div>'
	                  +'<div className="right">'
	                    +'<h6 className="name">'+cartArray[i].name+'</h6>'
	                   +'<h6 className="title">Size: <span className="values">XL</span></h6>'
	                   +'<h6 className="title">Color: <span className="values">Brown</span></h6>'
	                 +'</div>'
	                +'</th>'
	               +'<td>'+cartArray[i].price+'</td>'
	               +'<td><input type="text" disabled data-name="'+cartArray[i].name +'" value="'+ cartArray[i].count +'" /></td>'
	               +'<td>'+cartArray[i].total+'</td>'
	                +'<td>'
	                 +'<div className="action">'
	                    +'<a href="#" class="remove delete-item" data-name="'+cartArray[i].name +'"> X </a>'
	                  +'</div>'
	                +'</td>'
	              +'</tr>';
	  }

	  $('.show-shopping-cart').html(output);
	  $('.total-cart').html(shoppingCart.totalCart());
	  $('.total-count').html(shoppingCart.totalCount());
	}

	// Delete item button

	$('.show-shopping-cart').on("click", ".delete-item", function(event) {
	  var name = $(this).data('name')
	  shoppingCart.removeItemFromCartAll(name);
	  displayShoppingCart();
	})


	// Item count input
	$('.show-cart').on("change", ".item-count", function(event) {
	   var name = $(this).data('name');
	   var count = Number($(this).val());
	  shoppingCart.setCountForItem(name, count);
	  displayShoppingCart();
	});

	displayShoppingCart();
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
      <div className="cart-area margin-top-60">
		  <div className="container">
		    <div className="row">
		      <div className="col-xl-9 col-lg-8">
		        <div className="cart-content margin-top-20">
		          <table className="table table-bordered table-responsive">
		            <thead>
		              <tr className="text-center">
		                <th scope="col">Product</th>
		                <th scope="col">Price</th>
		                <th scope="col">Quanity</th>
		                <th scope="col">Total</th>
		                <th scope="col">Remove</th>
		              </tr>
		            </thead>
		            <tbody className="show-shopping-cart ">
		              
		            </tbody>
		          </table>
		          <div className="d-flex justify-content-between margin-top-30">
		            <div className="btn-wrapper">
		              <a href="#" className="btn btn-continue">Continue Shopping</a>
		            </div>
		            <div className="btn-wrapper">
		              <a href="#" className="btn btn-clear clear-cart">Clear Shopping Cart</a>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="col-xl-3 col-lg-4">
		        <div className="summary margin-top-20">
		          <h6 className="title">Summary</h6>
		          <h6 className="subtitle">Estimate Shipping and Tax</h6>
		          <p className="destination">Enter your destination to get a shipping estimate.</p>
		          <form action="#">
		            <div className="form-group">
		              <label>Country</label>
		              <select className="form-control cart-select">
		                <option>United State</option>
		                <option>Italy</option>
		                <option>Bangladesh</option>
		                <option>London</option>
		              </select>
		              <i className="fa fa-chevron-down" />
		            </div>
		            <div className="form-group">
		              <label>State/Province</label>
		              <select className="form-control cart-select">
		                <option>Region/state</option>
		                <option>Italy</option>
		                <option>Bangladesh</option>
		                <option>London</option>
		              </select>
		              <i className="fa fa-chevron-down" />
		            </div>
		            <div className="form-group">
		              <label>Zip / Postal Code</label>
		              <input type="text" />
		            </div>
		            <div className="form-group">
		              <label>Flat Rate</label>
		              <div className="custom-control custom-checkbox mb-3">
		                <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
		                <label className="custom-control-label" htmlFor="customCheck">Fixed: $5.00</label>
		              </div>
		            </div>
		            <div className="d-flex justify-content-between total">
		              <p>Subtotal</p>
		              <p>$<span className="total-cart"></span></p>
		            </div>
		            <div className="d-flex justify-content-between total">
		              <p>Shipping</p>
		              <p>$00.00</p>
		            </div>
		            <div className="d-flex justify-content-between total">
		              <p>Order Total</p>
		              <p>$<span  className="total-cart"></span></p>
		            </div>
		            <div className="form-group margin-top-20">
		              <label>Apply Discount Code</label>
		              <input type="text" placeholder="Enter discount code" />
		            </div>
		          </form> 
		          <div className="btn-wrapper">
		            <a href="#" className="btn btn-checkout">Proceed To Checkout</a>
		          </div>
		          <h6 className="subtitle text-center">Checkout with Multiple Address</h6>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

    )
  }
}

export default ShoppingCart;
