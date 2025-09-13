# Chef Module - Food Management System

A comprehensive food management system designed for restaurant chefs to manage menu items, process orders, and maintain food inventory.

## 🎯 Overview

The Chef Module provides a complete solution for restaurant kitchen management, allowing chefs to add, edit, and manage food items while processing incoming orders efficiently.

## 🚀 Features

### Food Management
- **Add Food Items**: Create new menu items with detailed information
- **Edit Food Items**: Update existing menu items
- **Delete Food Items**: Remove items from the menu
- **Image Upload**: Upload and manage food item images
- **Category Management**: Organize food items by categories
- **Price Management**: Set and update food prices

### Order Processing
- **View Orders**: Display incoming orders from customers
- **Order Status**: Track order processing status
- **Order Management**: Handle order fulfillment

### User Interface
- **Responsive Design**: Works on desktop and mobile devices
- **Intuitive Navigation**: Easy-to-use sidebar navigation
- **Real-time Updates**: Live order notifications
- **Toast Notifications**: User feedback for actions

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - UI framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Notification system
- **FontAwesome** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - Object Document Mapper
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Chef/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── foodController.js  # Food item logic
│   │   └── orderController.js # Order processing logic
│   ├── middleware/
│   │   └── test.txt
│   ├── models/
│   │   ├── foodModel.js       # Food item schema
│   │   └── orderModel.js      # Order schema
│   ├── routes/
│   │   ├── foodRoute.js       # Food API routes
│   │   └── orderRoute.js      # Order API routes
│   ├── uploads/               # Image storage
│   ├── package.json
│   └── server.js              # Server entry point
├── src/
│   ├── components/
│   │   ├── Navbar/            # Navigation component
│   │   ├── Popup/             # Modal components
│   │   └── Sidebar/           # Sidebar navigation
│   ├── pages/
│   │   ├── Add/               # Add food item page
│   │   ├── List/              # Food list page
│   │   └── Orders/            # Orders page
│   ├── assets/                # Static assets
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
   cd Chef
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
   MONGODB_URI=mongodb://localhost:27017/foody_chef
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
   cd Chef
   npm run dev
   # Frontend will run on http://localhost:5173
   ```

## 📊 Database Schema

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

### Order Model
```javascript
{
  // Order details and customer information
  // Integration with food items
}
```

## 🔧 API Endpoints

### Food Management
- `GET /api/food` - Get all food items
- `POST /api/food` - Create new food item
- `PUT /api/food/:id` - Update food item
- `DELETE /api/food/:id` - Delete food item

### Order Management
- `GET /api/order` - Get all orders
- `POST /api/order` - Create new order
- `PUT /api/order/:id` - Update order status

### File Upload
- `GET /images/:filename` - Serve uploaded images

## 🎨 User Interface

### Pages
1. **Orders Page** (`/`) - Main dashboard showing incoming orders
2. **Add Page** (`/add`) - Form to add new food items
3. **List Page** (`/list`) - Display and manage existing food items

### Components
- **Navbar**: Top navigation with user controls
- **Sidebar**: Left navigation menu
- **Popup**: Modal dialogs for confirmations
- **Food Item Cards**: Display food items with actions

## 🔒 Security Features

- Input validation and sanitization
- Secure file upload handling
- CORS configuration
- Error handling and logging

## 📱 Responsive Design

The interface is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

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

1. **Database Connection Error**
   - Ensure MongoDB is running
   - Check connection string in config/db.js

2. **Image Upload Issues**
   - Verify uploads directory exists
   - Check file permissions

3. **CORS Errors**
   - Ensure backend CORS is properly configured
   - Check frontend API base URL

## 📈 Future Enhancements

- Real-time order notifications
- Inventory management
- Recipe management
- Kitchen display system
- Analytics dashboard
- Multi-language support

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