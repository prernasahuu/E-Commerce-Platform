# E-Commerce-Platform
The E-Commerce Platform holds the core functionalities that allow an user to manage products and to interact with these products through purchasing and shipping processes. The goal of this assignment is to create a robust and scalable backend that can handle various operations required in a typical e-commerce environment.

## Authentication
1. Sign Up
Endpoint: /signup
Description: Registers a new user by collecting name, email, password, and optional address.
Key Points:
Validate email format and password strength.
Ensure email uniqueness.
Hash the password securely (e.g., using bcrypt).
Response: Success message with customer ID or an error for duplicate email.
2. Sign In
Endpoint: /signin
Description: Authenticates an existing user with their email and password.
Key Points:
Validate email format.
Verify email existence and password correctness.
Generate and return a session token (e.g., JWT) on success.
Response: Success message with session token or error for invalid credentials.
## Product Management
1. Add Product
Endpoint: /addproduct
Description: Adds a new product to the catalog.
Key Points:
Validate input fields, ensuring the price is positive.
Response: Success message with product ID or error for invalid data.
2. Update Product
Endpoint: /updateproduct/:productId
Description: Updates an existing product's details.
Key Points:
Validate product ID and input fields.
Only update provided fields.
Response: Success message or error for invalid data or non-existent product ID.
3. Delete Product
Endpoint: /deleteproduct/:productId
Description: Deletes a specified product from the catalog.
Key Points:
Verify product ID existence before deletion.
Response: Success message or error for invalid product ID.
4. Get All Products
Endpoint: /products
Description: Retrieves a list of all products in the catalog.
Key Points:
Response: Product list or message if no products are found.
## Cart Management
1. Add Product to Cart
Endpoint: /cart/add
Description: Adds a product to a customer’s cart or updates quantity if it already exists.
Key Points:
Validate product ID and quantity.
Response: Updated cart details or error for invalid data.
2. Update Cart
Endpoint: /cart/update
Description: Updates the quantity of a product in the cart or removes it if quantity is set to zero.
Key Points:
Validate product ID in cart and ensure non-negative quantity.
Response: Updated cart details or error for invalid data.
3. Delete Product from Cart
Endpoint: /cart/delete
Description: Removes a specified product from the cart.
Key Points:
Validate product ID existence in cart.
Response: Updated cart details or error for invalid product ID.
4. Get Cart
Endpoint: /cart
Description: Retrieves all items in the customer’s cart along with their details and total cost.
Key Points:
Validate customer ID.
Response: Cart details or message for an empty cart.
## Order Management
1. Place Order
Endpoint: /placeorder
Description: Processes a purchase and finalizes the order.
Key Points:
Validate non-empty cart.
Capture shipping details and generate a unique order ID.
Response: Order confirmation with order ID.
2. Get All Orders
Endpoint: /getallorders
Description: Retrieves a list of all orders, typically for admin use.
Key Points:
Implement pagination for large datasets.
Response: Order list with filtering options.
3. Get Orders by Customer ID
Endpoint: /orders/customer/{customerId}
Description: Retrieves all orders for a specific customer.
Key Points:
Implement pagination if necessary.
Response: Detailed orders or error for invalid customer ID.
