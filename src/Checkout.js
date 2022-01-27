import React, { useState, useEffect }  from 'react'
import { useRouteMatch, useHistory, useLocation, useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
function Checkout(props) {
  const match = useRouteMatch()
  const [todo, setTodo] = useState();
  const location = useLocation();

  /*useEffect(() => {
     console.log(location.state.name); // result: 'some_value'
  }, [location]);
*/


//Setting Role for Switch Case
var  role  = location.state.courses
console.log(role)


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IJBoUFiEW53mVTdkwkQY9gcQn5LiU249Qszmz5MKsOZYr1K06lGU4ueB6cPqz3tmtHsLE5jYT0JEKJIaWDULn4o006t1ktZDw');
const handleClick = async (event) => {
  const stripe = await stripePromise;
    if (role = 'School Adult') {
        // Call your backend to create the Checkout Session
        const response = await fetch('http://localhost:7000/create-checkout-session-schools-adult', { method: 'POST' });
    
        const session = await response.json();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
    } else if(role = 'School Junior'){
          // Call your backend to create the Checkout Session
          const response = await fetch('http://localhost:7000/create-checkout-session-schools-junior', { method: 'POST' });
      
          const session = await response.json();
      
          // When the customer clicks on the button, redirect them to Checkout.
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
      
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          }
    } else if(role = 'Junior / Group / Month'){
          // Call your backend to create the Checkout Session
          const response = await fetch('http://localhost:7000/create-checkout-session-junior-group-month', { method: 'POST' });
      
          const session = await response.json();
      
          // When the customer clicks on the button, redirect them to Checkout.
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
      
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          }
    } else if(role = 'Junior / Group / Week'){

          // Call your backend to create the Checkout Session
          const response = await fetch('http://localhost:7000/create-checkout-session-junior-group-week', { method: 'POST' });
      
          const session = await response.json();
      
          // When the customer clicks on the button, redirect them to Checkout.
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
      
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          }
    } else if(role = 'Junior / One-One / Month'){
            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-junior-one-month', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Junior / One-One / Week'){
            
            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-junior-one-week', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'General / Group / Month'){
            
            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-general-english-group-month', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'General / Group / Week'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-general-english-group-week', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'General / One-One / Month'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-general-english-one-month', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'General / One-One / Week'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-general-english-one-week', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Business / Group / Month'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-business-group-month', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Business / Group / Week'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-business-group-week', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Business / One-One / Month'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-business-one-month', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Business / One-One / Week'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-business-one-week', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Examination / Group / Month'){

            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-examinations-group-month', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Examination / Group / Week'){
   
            // Call your backend to create the Checkout Session
            const response = await fetch('http://localhost:7000/create-checkout-session-examinations-group-week', { method: 'POST' });
        
            const session = await response.json();
        
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
    } else if(role = 'Examination / One-One / Month'){
            
              // Call your backend to create the Checkout Session
              const response = await fetch('http://localhost:7000/create-checkout-session-examinations-one-month', { method: 'POST' });
          
              const session = await response.json();
          
              // When the customer clicks on the button, redirect them to Checkout.
              const result = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
          
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
              }
    } else if(role = 'Examination / One-One / Week'){

              // Call your backend to create the Checkout Session
              const response = await fetch('http://localhost:7000/create-checkout-session-examinations-one-week', { method: 'POST' });
          
              const session = await response.json();
          
              // When the customer clicks on the button, redirect them to Checkout.
              const result = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
          
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
              }
    } else if(role = 'IELTS / 22-10 / Month'){

              // Call your backend to create the Checkout Session
              const response = await fetch('http://localhost:7000/create-checkout-session-ielts-22-10-month', { method: 'POST' });
          
              const session = await response.json();
          
              // When the customer clicks on the button, redirect them to Checkout.
              const result = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
          
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
              }
    } else if(role = 'IELTS / 22-6 / Month'){
             
              // Call your backend to create the Checkout Session
              const response = await fetch('http://localhost:7000/create-checkout-session-ielts-22-6-month', { method: 'POST' });
          
              const session = await response.json();
          
              // When the customer clicks on the button, redirect them to Checkout.
              const result = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
          
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
              }
    } else if(role = 'Specialised / Group / Month'){

              // Call your backend to create the Checkout Session
              const response = await fetch('http://localhost:7000/create-checkout-session-special-exams-group-month', { method: 'POST' });
          
              const session = await response.json();
          
              // When the customer clicks on the button, redirect them to Checkout.
              const result = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
          
              if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
              }
    } else if(role = 'Specialised / Group / Week'){

                // Call your backend to create the Checkout Session
                const response = await fetch('http://localhost:7000/create-checkout-session-special-exams-group-week', { method: 'POST' });
            
                const session = await response.json();
            
                // When the customer clicks on the button, redirect them to Checkout.
                const result = await stripe.redirectToCheckout({
                  sessionId: session.id,
                });
            
                if (result.error) {
                  // If `redirectToCheckout` fails due to a browser or network
                  // error, display the localized error message to your customer
                  // using `result.error.message`.
                }
    } else if(role = 'Specialised / One-One / Month'){
                // Call your backend to create the Checkout Session
                const response = await fetch('http://localhost:7000/create-checkout-session-special-exams-one-month', { method: 'POST' });
            
                const session = await response.json();
            
                // When the customer clicks on the button, redirect them to Checkout.
                const result = await stripe.redirectToCheckout({
                  sessionId: session.id,
                });
            
                if (result.error) {
                  // If `redirectToCheckout` fails due to a browser or network
                  // error, display the localized error message to your customer
                  // using `result.error.message`.
                }
    } else if(role = 'Specialised / One-One / Week'){
                // Call your backend to create the Checkout Session
                const response = await fetch('http://localhost:7000/create-checkout-session-special-exams-one-week', { method: 'POST' });
            
                const session = await response.json();
            
                // When the customer clicks on the button, redirect them to Checkout.
                const result = await stripe.redirectToCheckout({
                  sessionId: session.id,
                });
            
                if (result.error) {
                  // If `redirectToCheckout` fails due to a browser or network
                  // error, display the localized error message to your customer
                  // using `result.error.message`.
                }
      };
  }

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}

export default Checkout
