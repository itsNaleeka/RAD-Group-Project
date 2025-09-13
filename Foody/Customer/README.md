# Customer Module - Food Ordering Platform

A comprehensive customer-facing food ordering platform that provides a seamless experience for browsing menus, placing orders, and managing user accounts.

## 🎯 Overview

The Customer Module is the main interface for restaurant customers, offering a complete food ordering experience with user authentication, shopping cart functionality, and order management.

## 🚀 Features

### Food Browsing & Ordering
- **Menu Display**: Browse available food items with images and descriptions
- **Category Filtering**: Filter food items by categories
- **Search Functionality**: Search for specific food items
- **Detailed Food Information**: View prices, descriptions, and images

### Shopping Cart
- **Add to Cart**: Add food items to shopping cart
- **Cart Management**: View, modify, and remove items from cart
- **Quantity Control**: Adjust quantities of items in cart
- **Price Calculation**: Real-time total calculation

### User Management
- **User Registration**: Create new customer accounts
- **User Authentication**: Secure login/logout functionality
- **Profile Management**: Manage user information
- **Order History**: View past orders

### Order Processing
- **Order Placement**: Place orders with delivery details
- **Order Tracking**: Track order status
- **Order Confirmation**: Receive order confirmations
- **Success Page**: Order completion confirmation

### Additional Features
- **Contact Support**: Customer support and contact information
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Live cart and order updates

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - UI framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - Object Document Mapper
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Customer/
├── backend/
│   ├── config/
│   │   └── database.js        # Database configuration
│   ├── controllers/
│   │   ├── cartController.js  # Shopping cart logic
│   │   ├── foodController.js  # Food item logic
│   │   ├── orderController.js # Order processing logic
│   │   └── userController.js  # User management logic
│   ├── middleware/
│   │   └── auth.js            # Authentication middleware
│   ├── models/
│   │   ├── foodModel.js       # Food item schema
│   │   ├── orderModel.js      # Order schema
│   │   └── userModel.js       # User schema
│   ├── routes/
│   │   ├── cartRouter.js      # Cart API routes
│   │   ├── foodRoute.js       # Food API routes
│   │   ├── orderRoute.js      # Order API routes
│   │   └── userRoute.js       # User API routes
│   ├── uploads/               # Image storage
│   ├── package.json
│   └── server.js              # Server entry point
├── src/
│   ├── components/
│   │   ├── aboutUs/           # About us section
│   │   ├── Button1/           # Custom button component
│   │   ├── context/           # React context for state
│   │   ├── exploreMenu/       # Menu exploration component
│   │   ├── foodDisplay/       # Food item display
│   │   ├── foodItem/          # Individual food item
│   │   ├── footer/            # Footer component
│   │   ├── header/            # Header/Hero section
│   │   ├── loginPopup/        # Login modal
│   │   └── navbar/            # Navigation component
│   ├── pages/
│   │   ├── Cart/              # Shopping cart page
│   │   ├── Contact/           # Contact page
│   │   ├── Home/              # Home page
│   │   ├── placeOrder/        # Order placement page
│   │   └── successPage/       # Order success page
│   ├── assets/                # Static assets and images
│   ├── App.jsx                # Main app component
│   └── main.jsx               # App entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Install frontend dependencies**
   ```bash
   cd Customer
   npm install
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/foody_customer
   JWT_SECRET=your_jwt_secret_key
   PORT=4000
   ```

4. **Start the development servers**
   
   **Backend Server:**
   ```bash
   cd backend
   npm start
   # Server will run on http://localhost:4000
   ```
   
   **Frontend Development Server:**
   ```bash
   cd Customer
   npm run dev
   # Frontend will run on http://localhost:5173
   ```

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String,
  address: String,
  createdAt: Date (default: now)
}
```

### Food Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  image: String (required),
  category: String (required)
}
```

### Cart Model
```javascript
{
  userId: ObjectId (ref: User),
  foodId: ObjectId (ref: Food),
  quantity: Number (required),
  price: Number (required)
}
```

### Order Model
```javascript
{
  userId: ObjectId (ref: User),
  items: [{
    foodId: ObjectId (ref: Food),
    quantity: Number,
    price: Number
  }],
  totalAmount: Number (required),
  status: String (default: "pending"),
  deliveryAddress: String (required),
  createdAt: Date (default: now)
}
```

## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile (protected)
- `PUT /api/user/profile` - Update user profile (protected)

### Food Management
- `GET /api/food` - Get all food items
- `GET /api/food/:id` - Get specific food item
- `GET /api/food/category/:category` - Get food by category

### Cart Management
- `GET /api/cart` - Get user's cart (protected)
- `POST /api/cart/add` - Add item to cart (protected)
- `PUT /api/cart/:id` - Update cart item (protected)
- `DELETE /api/cart/:id` - Remove item from cart (protected)

### Order Management
- `GET /api/order` - Get user's orders (protected)
- `POST /api/order` - Place new order (protected)
- `GET /api/order/:id` - Get specific order (protected)

### File Upload
- `GET /images/:filename` - Serve uploaded images

## 🎨 User Interface

### Pages
1. **Home Page** (`/`) - Main landing page with featured food items
2. **Cart Page** (`/cart`) - Shopping cart management
3. **Order Page** (`/order`) - Order placement and checkout
4. **Contact Page** (`/contact`) - Contact information and support
5. **Success Page** (`/success`) - Order confirmation

### Components
- **Header/Hero**: Main banner and navigation
- **Food Display**: Grid layout for food items
- **Food Item**: Individual food item cards
- **Login Popup**: Authentication modal
- **Footer**: Contact and company information
- **Navbar**: Main navigation with cart and user controls

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes and API endpoints
- Input validation and sanitization
- CORS configuration
- Secure file upload handling

## 📱 Responsive Design

The interface is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

### Backend Deployment
```bash
# Ensure MongoDB is running
# Set production environment variables
npm start
```

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Issues**
   - Check JWT secret configuration
   - Verify token expiration settings
   - Ensure proper login flow

2. **Cart Not Persisting**
   - Check user authentication
   - Verify cart API endpoints
   - Check database connection

3. **Image Loading Issues**
   - Verify uploads directory exists
   - Check image file permissions
   - Ensure proper image serving

4. **CORS Errors**
   - Check backend CORS configuration
   - Verify frontend API base URL
   - Ensure proper headers

## 📈 Future Enhancements

- Payment integration (Stripe, PayPal)
- Real-time order tracking
- Push notifications
- Wishlist functionality
- Restaurant reviews and ratings
- Loyalty program
- Multi-language support
- Advanced search and filters

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

For more information about the overall project, see the main [README](../README.md).