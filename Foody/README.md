# Foody - Restaurant Management System

A comprehensive restaurant management system built with React and Node.js, designed to handle all aspects of restaurant operations from food management to order processing and customer service.

## 🏗️ Project Architecture

This project consists of five main modules, each serving a specific role in the restaurant ecosystem:

### 📁 Module Structure

```
Foody/
├── Chef/                    # Chef Management Module
├── Customer/                # Customer Interface Module  
├── DriverOperator/          # Delivery Management Module
├── Receptionist/            # Reservation Management Module
└── my project/              # Employee Management Module
```

## 🚀 Modules Overview

### 1. **Chef Module** (`/Chef/`)
- **Purpose**: Food item management and order processing
- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Features**:
  - Add/Edit/Delete food items
  - Manage food categories and pricing
  - Process incoming orders
  - Image upload for food items

### 2. **Customer Module** (`/Customer/`)
- **Purpose**: Customer-facing interface for ordering
- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Features**:
  - Browse food menu
  - Shopping cart functionality
  - User authentication
  - Order placement and tracking
  - Contact and support

### 3. **DriverOperator Module** (`/DriverOperator/`)
- **Purpose**: Delivery management and rider operations
- **Frontend**: React with Create React App
- **Backend**: Node.js with Express
- **Features**:
  - Rider registration and management
  - Delivery tracking
  - Contact data management
  - Order assignment to drivers

### 4. **Receptionist Module** (`/Receptionist/`)
- **Purpose**: Table reservation management
- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Features**:
  - Table reservation system
  - Customer contact management
  - Reservation scheduling
  - Table availability tracking

### 5. **Employee Management Module** (`/my project/`)
- **Purpose**: Internal employee management
- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Features**:
  - Employee registration
  - Salary management
  - Employee data tracking
  - Authentication and authorization

## 🛠️ Technology Stack

### Frontend Technologies
- **React 18.3.1** - UI framework
- **React Router DOM** - Navigation
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **FontAwesome** - Icons

### Backend Technologies
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **JWT** - Authentication
- **Bcrypt** - Password hashing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Foody
   ```

2. **Install dependencies for each module**
   ```bash
   # Chef Module
   cd Chef
   npm install
   cd backend
   npm install

   # Customer Module
   cd ../../Customer
   npm install
   cd backend
   npm install

   # DriverOperator Module
   cd ../../DriverOperator
   npm install
   cd BACEND
   npm install

   # Receptionist Module
   cd ../../Receptionist
   npm install
   cd backend
   npm install

   # Employee Management Module
   cd ../../my project
   cd BackEnd
   npm install
   cd ../my-project-front-end
   npm install
   ```

3. **Set up environment variables**
   - Create `.env` files in each backend directory
   - Configure MongoDB connection strings
   - Set up JWT secrets and other required variables

4. **Start the applications**
   ```bash
   # Start each module's backend server
   # Start each module's frontend development server
   ```

## 📊 Database Schema

### Food Items
- `name` (String, required)
- `description` (String, required)
- `price` (Number, required)
- `image` (String, required)
- `category` (String, required)

### Orders
- Order management across all modules
- Integration with food items and user data

### Reservations
- `name`, `email`, `phone` (String, required)
- `date`, `time` (String, required)
- `table` (Number, required)
- `members` (Number, required)
- `category`, `price` (String/Number, required)

### Employees
- `employee_id` (Number, unique)
- `name`, `email`, `phoneNumber` (String, required)
- `hireDate` (Date, default: now)
- `salary` (String, required)
- `salarypay` (Boolean, default: false)

## 🔧 API Endpoints

### Chef Module
- `GET/POST /api/food` - Food item management
- `GET/POST /api/order` - Order processing
- `GET /images/:filename` - Image serving

### Customer Module
- `GET/POST /api/food` - Food menu
- `GET/POST /api/user` - User management
- `GET/POST /api/cart` - Shopping cart
- `GET/POST /api/order` - Order placement

### DriverOperator Module
- `GET/POST /` - Rider management
- Contact data endpoints

### Receptionist Module
- `GET/POST /api/reservation` - Reservation management

### Employee Module
- `GET/POST /api/employee` - Employee management

## 🎯 Key Features

- **Multi-role System**: Separate interfaces for different user types
- **Real-time Updates**: Live order and reservation tracking
- **File Upload**: Image management for food items
- **Authentication**: Secure user login and session management
- **Responsive Design**: Mobile-friendly interfaces
- **Database Integration**: MongoDB for data persistence

## 📱 User Interfaces

- **Chef Dashboard**: Food management and order processing
- **Customer Portal**: Menu browsing and ordering
- **Driver Interface**: Delivery management
- **Receptionist Panel**: Reservation management
- **Admin Panel**: Employee management

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation and sanitization
- Secure file upload handling

## 📈 Future Enhancements

- Real-time notifications
- Payment integration
- Advanced analytics dashboard
- Mobile applications
- Multi-language support
- Advanced reporting features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

This project was developed as part of a group project for restaurant management system implementation.

---

For detailed information about each module, please refer to the individual README files in each module directory.

