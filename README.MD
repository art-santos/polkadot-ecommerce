# Polkadot Ecommerce

Consuming Fake Store Api https://fakestoreapi.com/
I've designed and created a functional ecommerce that uses Polkadot.js to receive and send payments. All The prices received from the api are converted to the real coin prices using coingecko API. https://www.coingecko.com/en/api. The store also uses server side rendering for better SEO performance. Altough, the state managment still needs to be updated and the component organization still needs to be improved. If you want to see how i usually organize my components and state managment please take a look at https://github.com/art-santos/redux-clean-code-todo or https://github.com/art-santos/canva.

## STACK

- NextJS
- TypeScript
- React
- Chakra
- Emotion Cache
- SWR
- Cookies
- Chakra UI



# How it works
It's a very basic ecommerce application. My main focus was to complete all your requirements. They were:

- The user can see the product details.
- The user can see the price converted in KSM/Dots
- When the user clicks on the buy button a checkout page
- The user can see details about the product
- The user can fill a form and pay for the product after it
- The application uses Polkadot.js to send transactions to the store owner accounts
- The application interacts with fake store api
- The application converts Dolar to Token prices using coingecko API
- The application has a working search bar
- The user can select the account he wants to pay with
- The user can select a chain where he did want to send the transaction
- The application is live on https://polkadot-ecommerce.arthursantos.codes/
