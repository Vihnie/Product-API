Product-API
🛍 Product API

A RESTful API built with Express.js that allows users to manage product resources.  
Includes custom middleware for logging, error handling, and advanced routing features.

 Features

- Get all products  
- Get a product by ID  
- Create a new product  
- Update an existing product  
- Delete a product  
- Middleware for logging and error handling

 📦 Tech Stack

- Node.js  
- Express.js  
- JavaScript (ES6)  
- Postman (for testing)



 📂 Project Structure


product-api/
│

├── middleware/
│   └── logger.js
│

├── routes/
│   └── productRoutes.js
│

├── utils/
│   └── errorHandler.js
│

├── app.js

├── server.js

└── README.md




 🛣 API Endpoints

| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| GET    | /api/products      | Get all products      |
| GET    | /api/products/:id  | Get product by ID     |
| POST   | /api/products      | Create new product    |
| PUT    | /api/products/:id  | Update product        |
| DELETE | /api/products/:id  | Delete product        |



Testing the API (Postman)

GET all products

GET http://localhost:3000/api/products


 🔹 POST a new product

POST http://localhost:3000/api/products
Content-Type: application/json

{
  "name": "Tablet",
  "price": 500
}


🔹 PUT (update) a product

PUT http://localhost:3000/api/products/1
Content-Type: application/json

{
  "name": "Updated Tablet",
  "price": 600
}


🔹 DELETE a product

DELETE http://localhost:3000/api/products/1



📄 License

This project is open-source and free to use.



Built with ❤ by Vihnie 
GitHub: [github.com/Vihnie](https://github.com/Vihnie)
