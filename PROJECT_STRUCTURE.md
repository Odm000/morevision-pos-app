# Morevision POS App Project Structure

## Project Structure
```
morevision-pos-app/
├── backend/
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   └── orderModel.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── config/
│   │   └── db.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── ProductList.js
│   │   │   ├── OrderSummary.js
│   │   │   └── UserProfile.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── ProductsPage.js
│   │   │   └── OrdersPage.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Database Models
- **User Model**: Stores user information (name, email, password, etc.)
- **Product Model**: Contains product details (name, price, category, etc.)
- **Order Model**: Represents order information (userId, productList, totalPrice, etc.)

## API Endpoints
- **User Endpoints**:
  - `POST /api/users/register`
  - `POST /api/users/login`
  - `GET /api/users/profile`

- **Product Endpoints**:
  - `GET /api/products`
  - `POST /api/products`
  - `PUT /api/products/:id`
  - `DELETE /api/products/:id`

- **Order Endpoints**:
  - `POST /api/orders`
  - `GET /api/orders/:id`
  - `GET /api/orders/user/:userId`

## Component Hierarchy
```
App
├─ Navbar
├─ HomePage
│  ├─ ProductList
├─ LoginPage
├─ ProductsPage
│  ├─ ProductList
├─ OrdersPage
│  ├─ OrderSummary
└─ UserProfile
```