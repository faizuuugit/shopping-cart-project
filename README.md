# Shopping Cart Project

A JavaScript-based shopping cart application built to practice fundamental programming skills. The project implements a storefront with product listing, cart management, and checkout functionality for a cash-based street market scenario. All logic is contained in `src/assets/script.js`, with the front-end (HTML, CSS, and DOM interactions) provided in the starter code.

## Features

- **Product Listing**: Displays at least three products with names, prices, images, and unique IDs.
- **Cart Management**:
  - Add products to the cart with a single click.
  - Increase or decrease item quantities.
  - Remove items from the cart.
  - Display individual item totals (quantity × price).
- **Checkout**:
  - Calculate the total cost of items in the cart.
  - Process cash payments, showing change due or remaining balance.
  - Track cumulative payments via a global `totalPaid` variable.
- **Code Quality**: Uses `let` and `const`, follows DRY principles, includes concise comments, and adheres to Udacity's Frontend Style Guide.

#Technologies
- JavaScript: Core logic for products, cart, and checkout.
- HTML/CSS: Provided in starter code for the storefront UI.
