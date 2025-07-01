Shopping Cart Project
A JavaScript-based shopping cart application built to practice fundamental programming skills. The project implements a storefront with product listing, cart management, and checkout functionality for a cash-based street market scenario. All logic is contained in src/assets/script.js, with the front-end (HTML, CSS, and DOM interactions) provided in the starter code.
Features

Product Listing: Displays at least three products with names, prices, images, and unique IDs.
Cart Management:
Add products to the cart with a single click.
Increase or decrease item quantities.
Remove items from the cart.
Display individual item totals (quantity × price).


Checkout:
Calculate the total cost of items in the cart.
Process cash payments, showing change due or remaining balance.
Track cumulative payments via a global totalPaid variable.


Code Quality: Uses let and const, follows DRY principles, includes concise comments, and adheres to Udacity's Frontend Style Guide.

Project Structure
├── src
│   ├── assets
│   │   ├── front.js         # Front-end DOM logic (pre-provided)
│   │   ├── script.js        # Core JavaScript logic (project implementation)
│   │   └── styles.css       # Styling (pre-provided)
│   ├── images
│   │   ├── cherry.jpg
│   │   ├── orange.jpg
│   │   └── strawberry.jpg
│   └── index.html           # Main HTML file (pre-provided)
├── tests
│   └── script.test.js       # Test files (not modified)
├── package.json             # Project metadata
├── package-lock.json        # Dependency lock file
└── README.md                # This file

How to Run

Clone the Repository:git clone https://github.com/your-username/shopping-cart-project.git


Navigate to the Project Folder:cd shopping-cart-project


Open the Storefront:
Open src/index.html in a web browser to view the storefront.
Interact with the UI to add products to the cart, adjust quantities, and process payments.



Technologies

JavaScript: Core logic for products, cart, and checkout.
HTML/CSS: Provided in starter code for the storefront UI.
Git: Version control for managing and sharing the project.

Usage

Product Listing: View products with names, prices, and images. Click "Add to Cart" to add an item.
Cart Management:
Use "+" and "-" buttons to adjust quantities.
Click "Remove" to clear an item from the cart.
If quantity reaches 0 via the "-" button, the item is removed.


Checkout:
View the total cart cost.
Enter a cash amount in the "Cash Received" field.
See the remaining balance (if underpaid) or change due (if overpaid) with a "Thank you" message.



Learning Outcomes
This project reinforces:

JavaScript Fundamentals: Arrays, objects, functions, and control flow.
Problem-Solving: Breaking down a complex application into manageable components.
Code Quality: Writing clean, maintainable code with proper variable scoping and helper functions.
Debugging and Testing: Ensuring functionality through iterative testing.
Version Control: Using Git and GitHub to manage and share code.

Future Enhancements

Add a currency switcher (USD, EUR, YEN) with proper formatting.
Implement an emptyCart function to clear all items.
Enhance the UI with DOM API, HTML, and CSS (e.g., add a credit card form or product creation form).

Setup Notes

Ensure all product objects in script.js use the correct property names (name, price, quantity, productId, image) and data types (strings for name and image, numbers for price, quantity, and productId).
The project assumes valid numeric input for the checkout field.
No backend is required; data is managed in-memory via arrays.

License
MIT License (or choose another license as needed).
