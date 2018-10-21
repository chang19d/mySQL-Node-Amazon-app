# Bamazon
A node.js application that mimics an amazon storefront utilizing basic SQL.

## Functions:

1. **Display all products** Upon starting the program, the app will display all products and their 
information.

1. **Choose item to purchase by ID** You will then be prompted to choose an item by ID to purchase, which will be used later to query the database for the products.

1. **Choose a quantity** After choosing an item, you will be asked to choose a quantity. If this quantity exceeds the stock of the product, then a message will be returned saying the order is not possible. This quantity will also be used later when calculating the full cost of the order.

1. **Finishing the order** If the quantity selected is less than the quantity of that product left in stock, the quantity of that product in the database will be updated and the total price of the order will be returned to the user, and the prompts will start over.
