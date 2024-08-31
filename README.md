<h1>Smartmobicell (Portfolio Project)</h1>

<p>
    This e-commerce website specializes in mobile phones and related accessories, offering a smooth and enjoyable shopping experience. Built with React and Tailwind for the frontend and Django for the backend, the site ensures both responsive design and secure data handling.
</p>

<h2>TEAM MEMBERS</h2>
<ul>
    <li>Oscar Mutwiri</li>
    <li>Kelvin Munene</li>
</ul>

<h2>APP DEVELOPMENT:</h2>
<ul>
    <li>User auth (signup, login, JWT), basic UI</li>
    <li>Product management (CRUD), with admin functionalities</li>
    <li>Shopping cart functionality, integrated with user profile management</li>
    <li>Checkout process, integrated with payment gateway</li>
    <li>Order management</li>
    <li>Product search and filtering</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li>✔️ Frontend: React, React Router, Tailwind CSS</li>
    <li>✔️ Backend: Django</li>
    <li>✔️ Authentication: JWT</li>
    <li>✔️ Payments: (To be integrated)</li>
</ul>

<h2>Further Development Plans</h2>
<ul>
    <li>✔️ Further UI/UX development</li>
    <li>✔️ Adding more features such as payment methods</li>
</ul>

<h2>API Endpoints</h2>

<h3>User Profile</h3>
<ul>
    <li><strong>URL:</strong> <code>/userprofile/</code></li>
    <li><strong>Method:</strong> GET</li>
    <li><strong>Description:</strong> Retrieves the profile of the currently authenticated user.</li>
    <li><strong>Request Parameters:</strong> None</li>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com",
  "profile": {
    "phone_number": "+1234567890",
    "address": "123 Street, City"
  }
}
        </code>
    </pre>
</ul>

<h3>Cart</h3>

<h4>Add to Cart</h4>
<ul>
    <li><strong>URL:</strong> <code>/cart/</code></li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Description:</strong> Adds a product to the user's cart.</li>
    <li><strong>Request Parameters:</strong> 
        <ul>
            <li>product_id: The ID of the product to add to the cart.</li>
            <li>quantity: The quantity of the product to add.</li>
        </ul>
    </li>
    <li><strong>Sample Request:</strong></li>
    <pre>
        <code>
{
  "product_id": "123",
  "quantity": 2
}
        </code>
    </pre>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "message": "Product added to cart",
  "cart": {
    "id": 1,
    "items": [
      {
        "product_id": "123",
        "quantity": 2
      }
    ]
  }
}
        </code>
    </pre>
</ul>

<h4>Delete from Cart</h4>
<ul>
    <li><strong>URL:</strong> <code>/cart/delete/&lt;str:id&gt;/</code></li>
    <li><strong>Method:</strong> DELETE</li>
    <li><strong>Description:</strong> Removes a product from the user's cart.</li>
    <li><strong>Request Parameters:</strong> id: The ID of the cart item to delete.</li>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "message": "Product removed from cart"
}
        </code>
    </pre>
</ul>

<h3>Orders</h3>
<ul>
    <li><strong>URL:</strong> <code>/cart/orders/</code></li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Description:</strong> Creates an order from the items in the user's cart.</li>
    <li><strong>Request Parameters:</strong> None</li>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "order_id": 1,
  "status": "Order placed successfully"
}
        </code>
    </pre>
</ul>

<h3>Home Page</h3>

<h4>Section Overview</h4>
<ul>
    <li><strong>URL:</strong> <code>/&lt;str:section&gt;/</code></li>
    <li><strong>Method:</strong> GET</li>
    <li><strong>Description:</strong> Retrieves the products for a specific section (e.g., "latest-products", "special-offer").</li>
    <li><strong>Request Parameters:</strong> section: The section to retrieve products for (e.g., "latest-products").</li>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "section": "latest-products",
  "products": [
    {
      "id": "1",
      "name": "Product 1",
      "price": 100
    },
    {
      "id": "2",
      "name": "Product 2",
      "price": 200
    }
  ]
}
        </code>
    </pre>
</ul>

<h4>Section Detail</h4>
<ul>
    <li><strong>URL:</strong> <code>/&lt;str:section&gt;/&lt;str:id&gt;/</code></li>
    <li><strong>Method:</strong> GET</li>
    <li><strong>Description:</strong> Retrieves the details of a specific product within a section.</li>
    <li><strong>Request Parameters:</strong> 
        <ul>
            <li>section: The section the product belongs to (e.g., "latest-products").</li>
            <li>id: The ID of the product.</li>
        </ul>
    </li>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "id": "1",
  "name": "Product 1",
  "price": 100,
  "description": "Detailed description of Product 1"
}
        </code>
    </pre>
</ul>

<h3>User Registration</h3>
<ul>
    <li><strong>URL:</strong> <code>/api/user/register/</code></li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Description:</strong> Registers a new user.</li>
    <li><strong>Request Parameters:</strong> 
        <ul>
            <li>username: The username of the new user.</li>
            <li>password: The password for the new user.</li>
            <li>email: The email address of the new user.</li>
        </ul>
    </li>
    <li><strong>Sample Request:</strong></li>
    <pre>
        <code>
{
  "username": "john_doe",
  "password": "password123",
  "email": "john@example.com"
}
        </code>
    </pre>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com"
}
        </code>
    </pre>
</ul>

<h3>Token Authentication</h3>

<h4>Obtain Token</h4>
<ul>
    <li><strong>URL:</strong> <code>/api/token/</code></li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Description:</strong> Obtains a JWT token for authentication.</li>
    <li><strong>Request Parameters:</strong> 
        <ul>
            <li>username: The username of the user.</li>
            <li>password: The password of the user.</li>
        </ul>
    </li>
    <li><strong>Sample Request:</strong></li>
    <pre>
        <code>
{
  "username": "john_doe",
  "password": "password123"
}
        </code>
    </pre>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
        </code>
    </pre>
</ul>

<h4>Refresh Token</h4>
<ul>
    <li><strong>URL:</strong> <code>/api/token/refresh/</code></li>
    <li><strong>Method:</strong> POST</li>
    <li><strong>Description:</strong> Refreshes the JWT token.</li>
    <li><strong>Request Parameters:</strong> refresh: The refresh token.</li>
    <li><strong>Sample Request:</strong></li>
    <pre>
        <code>
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
        </code>
    </pre>
    <li><strong>Sample Response:</strong></li>
    <pre>
        <code>
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
        </code>
    </pre>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li>✔️ Frontend: React, React Router, Tailwind CSS</li>
    <li>✔️ Backend: Django</li>
    <li>✔️ Authentication: JWT</li>
    <li>✔️ Payments: (To be integrated)</li>
</ul>

<h2>Further Development Plans</h2>
<ul>
    <li>✔️ Further UI/UX development</li>
    <li>✔️ Adding more features such as payment methods</li>
</ul>
