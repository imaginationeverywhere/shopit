import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarV3 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";

    var shoppingCart = (function () {
      // =============================
      // Private methods and propeties
      // =============================
      var cart = [];
      var item;
      var itemCopy;
      var p;

      // Constructor
      function Item(name, price, count, img) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
      }

      // Save cart
      function saveCart() {
        sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
      }

      // Load cart
      function loadCart() {
        cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
      }
      if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
      }

      // =============================
      // Public methods and propeties
      // =============================
      var obj = {};

      // Add to cart
      obj.addItemToCart = function (name, price, count, img) {
        for (var item in cart) {
          if (cart[item].name === name) {
            cart[item].count++;
            saveCart();
            return;
          }
        }
        var item = new Item(name, price, count, img);
        cart.push(item);
        saveCart();
      };
      // Set count from item
      obj.setCountForItem = function (name, count) {
        for (var i in cart) {
          if (cart[i].name === name) {
            cart[i].count = count;
            break;
          }
        }
      };
      // Remove item from cart
      obj.removeItemFromCart = function (name) {
        for (var item in cart) {
          if (cart[item].name === name) {
            cart[item].count--;
            if (cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
        }
        saveCart();
      };

      // Remove all items from cart
      obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
          if (cart[item].name === name) {
            cart.splice(item, 1);
            break;
          }
        }
        saveCart();
      };

      // Clear cart
      obj.clearCart = function () {
        cart = [];
        saveCart();
      };

      // Count cart
      obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
          totalCount += cart[item].count;
        }
        return totalCount;
      };

      // Total cart
      obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
          totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
      };

      // List cart
      obj.listCart = function () {
        var cartCopy = [];
        var i = "0";
        for (i in cart) {
          item = cart[i];
          itemCopy = {};
          for (p in item) {
            itemCopy[p] = item[p];
          }
          itemCopy.total = Number(item.price * item.count).toFixed(2);
          cartCopy.push(itemCopy);
        }
        return cartCopy;
      };

      return obj;
    })();

    // *****************************************
    // Triggers / Events
    // *****************************************
    // Add item
    $(document).on("click", ".add-to-cart-v2", function (event) {
      event.preventDefault();
      var name = $(this).data("name");
      var img = $(this).data("img");
      var price = Number($(this).data("price"));
      shoppingCart.addItemToCart(name, price, 1, img);
      displayCart();
      $(this).prepend('<div class="succes-message-v2">Item Added</div>');
      $(".succes-message-v2").show(0).delay(500).hide(0);
      setTimeout(function () {
        $(".succes-message-v2").remove();
      }, 600);
    });

    // Clear items
    $(document).on("click", ".clear-cart", function (event) {
      shoppingCart.clearCart();
      displayCart();
    });

    function displayCart() {
      var cartArray = shoppingCart.listCart();
      var output = "";
      for (var i in cartArray) {
        output +=
          "<li>" +
          '<div class="d-flex">' +
          '<div class="thumb">' +
          '<img src="' +
          publicUrl +
          cartArray[i].img +
          '" alt="">' +
          "</div>" +
          '<div class="content">' +
          '<h6 class="title"><a href="single-product.html">' +
          cartArray[i].name +
          "</a></h6>" +
          '<span class="price">$' +
          cartArray[i].price +
          "</span>" +
          "</div>" +
          ' <div class="action">' +
          '<input type="number" disabled data-name="' +
          cartArray[i].name +
          '" value="' +
          cartArray[i].count +
          '">' +
          '<a href="#" class="remove delete-item" data-name="' +
          cartArray[i].name +
          '">Remove</a>' +
          " </div>" +
          "</div>" +
          "</li>";
      }

      $(".show-cart").html(output);
      $(".total-cart").html(shoppingCart.totalCart());
      $(".total-count").html(shoppingCart.totalCount());
    }

    // Delete item button

    $(".show-cart").on("click", ".delete-item", function (event) {
      var name = $(this).data("name");
      shoppingCart.removeItemFromCartAll(name);
      displayCart();
    });

    // Item count input
    $(".show-cart").on("change", ".item-count", function (event) {
      var name = $(this).data("name");
      var count = Number($(this).val());
      shoppingCart.setCountForItem(name, count);
      displayCart();
    });

    displayCart();
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <div className="stoon-navbar">
        <div className="header-top d-none d-lg-block">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="shipping text-center">
                  <p>
                    <b>FREE SHIPPING</b> - <span>on all orders over $35*</span>{" "}
                    <a href="#">Shop Now</a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="close-header">x</div>
        </div>
        <nav className="navbar navbar-area navbar-expand-lg nav-style-01">
          <div className="container-fluid nav-container">
            <div className="row">
              <div className="col-lg-2 col-xl-1 col-4 order-1 align-self-center">
                <div className="logo">
                  <Link to="/">
                    <img src={publicUrl + "assets/img/logo.png"} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-xl-7 order-3 order-lg-2">
                <div className="collapse navbar-collapse" id="shop-menu">
                  <ul className="navbar-nav menu-open text-left padding-top-5">
                    <li className="menu-item-has-children">
                      <a href="#">
                        Home <i className="fa fa-angle-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/">Home 01</Link>
                        </li>
                        <li>
                          <Link to="/home-v2">Home 02</Link>
                        </li>
                        <li>
                          <Link to="/home-v3">Home 03</Link>
                        </li>
                        <li>
                          <Link to="/home-v4">Home 04</Link>
                        </li>
                        <li>
                          <Link to="/home-v5">Home 05</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        Shop <i className="fa fa-angle-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="collection">Shop Grid</Link>
                        </li>
                        <li>
                          <Link to="collection-list">Shop List</Link>
                        </li>
                        <li>
                          <Link to="collection-full">Shop Full</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">
                        Pages <i className="fa fa-angle-down" />
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-details">Blog Details</Link>
                        </li>
                        <li>
                          <Link to="/product-details">Single Product</Link>
                        </li>
                        <li>
                          <Link to="/shoping-cart">Shoping Cart</Link>
                        </li>
                        <li>
                          <Link to="/faq">FAQ</Link>
                        </li>
                        <li>
                          <Link to="/error">Error</Link>
                        </li>
                        <li>
                          <Link to="/comming-soon">Coming Soon</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-xl-4 col-8 justify-content-end d-flex order-2 order-lg-3">
                <div className="nav-right-part nav-right-part-03 d-flex">
                  <ul>
                    <li>
                      <a href="#" id="search">
                        <i className="icon-search" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-heart" />
                        <span className="badge badge-red">2</span>
                      </a>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">
                        <i className="icon-add-to-cat" />
                        <span className="badge badge-red total-count"></span>
                      </a>
                      <ul>
                        <span className="show-cart"></span>
                        <li>
                          <h6>
                            <span>Total price: $</span>
                            <span className="total-cart"></span>
                          </h6>
                          <div className="btn-wrapper">
                            {" "}
                            <Link to="/shoping-cart" className="btn btn-cart">
                              Go to cart
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="select-currency d-none d-xl-block">
                    <select className="nice-select language-select">
                      <option>English</option>
                      <option>Bengali</option>
                      <option>chinese</option>
                    </select>
                  </div>
                  <div className="select-currency d-none d-xl-block">
                    <select className="nice-select currency-select">
                      <option>USD</option>
                      <option>GBP</option>
                      <option>AUD</option>
                      <option>CAD</option>
                    </select>
                  </div>
                </div>
                <div className="responsive-mobile-menu">
                  <div
                    className="menu toggle-btn d-block d-lg-none"
                    data-toggle="collapse"
                    data-target="#shop-menu"
                    aria-expanded="false"
                    role="button"
                  >
                    <div className="icon-left" />
                    <div className="icon-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarV3;
