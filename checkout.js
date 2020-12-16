document
//   .querySelector(".prompts #cashButton")
  .getElementById("cashButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("cash");
    // let cashOut = document.querySelector(".cash #cashTendered");
    const buttons = document.querySelector(".prompts");
    cashOut.style.display = "block";
    buttons.style.display = "none";
  });

document
.getElementById("ccButton")
//   .querySelector(".prompts #ccButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const ccOut = document.getElementById("ccInfo");
    const buttons = document.querySelector(".prompts");
    ccOut.style.display = "block";
    buttons.style.display = "none";
  });

  // document.getElementById("paymentTypeCash").reset();



  // function purchaseClicked() {
  //   alert('Thank you for your order')
  //   let cartItems = document.getElementsByClassName('cart-items')[0]
  //   while (cartItems.hasChildNodes()){
  //     cartItems.removeChild(cartItems.firstChild)
  //   }
  //   updatecartTotal()
  // }

// function showErrorDialogWithMessage(message)
// {
//     // For the tutorial, we'll just do an alert. You should customize this function to
//     // present "pretty" error messages on your page.
//     alert(message);

//     // Re-enable the order button so the user can try again
//     $('.btn-success').removeAttr("disabled");
// }

// document.getElementById("ccInfoSubmit").addEventListener("click", function (event)
// {
//     // ccInfo.submit(function(event)
    
//         // immediately disable the submit button to prevent double submits
//         $('.btn-success').attr("disabled", "disabled");

//         const fName = $('#ccFirstName').val();
//         const lName = $('#ccLastName').val();
//         const email = $('#email').val();
//         const cardNumber = $('#ccNumber').val();
//         const cardCVC = $('#ccCVV').val();

//         // First and last name fields: make sure they're not blank
//         if (fName === "") {
//             showErrorDialogWithMessage("Please enter your first name.");
//             return;
//         }
//         if (lName === "") {
//             showErrorDialogWithMessage("Please enter your last name.");
//             return;
//         }

//         // Validate the email address:
//         const emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         if (email === "") {
//             showErrorDialogWithMessage("Please enter your email address.");
//             return;
//         } else if (!emailFilter.test(email)) {
//             showErrorDialogWithMessage("Your email address is not valid.");
//             return;
//         }

//         // Stripe will validate the card number and CVC for us, so just make sure they're not blank
//         if (cardNumber === "") {
//             showErrorDialogWithMessage("Please enter your card number.");
//             return;
//         }
//         if (cardCVC === "") {
//             showErrorDialogWithMessage("Please enter your card security code.");
//             return;
//         }

//         // Boom! We passed the basic validation, so we're ready to send the info to
//         // Stripe to create a token! (We'll add this code soon.)

//     });
//     form.reset();
// };
