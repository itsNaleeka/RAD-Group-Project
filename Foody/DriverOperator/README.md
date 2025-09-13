# DriverOperator Module - Delivery Management System

A comprehensive delivery management system designed for managing delivery drivers, tracking orders, and handling customer contact information for restaurant delivery operations.

## 🎯 Overview

The DriverOperator Module provides a complete solution for managing delivery operations, including driver registration, order assignment, delivery tracking, and customer communication management.

## 🚀 Features

### Driver Management
- **Driver Registration**: Register new delivery drivers
- **Driver Profiles**: Manage driver information and credentials
- **Driver Status**: Track driver availability and status
- **Performance Tracking**: Monitor delivery performance

### Order Management
- **Order Assignment**: Assign orders to available drivers
- **Delivery Tracking**: Track order delivery status
- **Route Optimization**: Optimize delivery routes
- **Delivery History**: Maintain delivery records

### Contact Management
- **Customer Contacts**: Manage customer contact information
- **Communication Logs**: Track customer communications
- **Support Tickets**: Handle customer support requests

### Dashboard & Analytics
- **Delivery Dashboard**: Overview of delivery operations
- **Performance Metrics**: Track delivery statistics
- **Real-time Updates**: Live delivery status updates

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - UI framework
- **Create React App** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Material-UI** - UI component library
- **React Icons** - Icon library
- **Axios** - HTTP client for API calls
- **SweetAlert2** - Alert and notification system

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - Object Document Mapper
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request parsing middleware

## 📁 Project Structure

```
DriverOperator/
├── BACEND/                   # Backend directory
│   ├── models/
│   │   ├── contactdata.js    # Contact data schema
│   │   └── rider.js          # Driver/rider schema
│   ├── routes/
│   │   ├── ContactData.js    # Contact API routes
│   │   └── Riders.js         # Driver API routes
│   ├── package.json
│   └── server.js             # Server entry point
├── src/
│   ├── components/
│   │   ├── About.jsx         # About section
│   │   ├── Contact.jsx       # Contact management
│   │   ├── Customer.jsx      # Customer interface
│   │   ├── Deliver.jsx       # Delivery management
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Home.jsx          # Home page
│   │   ├── Order.jsx         # Order management
│   │   └── Rider.jsx         # Driver management
│   ├── assests/              # Static assets
│   ├── App.jsx               # Main app component
│   └── index.jsx             # App entry point
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
   cd DriverOperator
   npm install
   ```

2. **Install backend dependencies**
   ```bash
   cd BACEND
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the BACEND directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/Deliver
   PORT=8070
   ```

4. **Start the development servers**
   
   **Backend Server:**
   ```bash
   cd BACEND
   npm start
   # Server will run on http://localhost:8070
   ```
   
   **Frontend Development Server:**
   ```bash
   cd DriverOperator
   npm start
   # Frontend will run on http://localhost:3000
   ```

## 📊 Database Schema

### Rider/Driver Model
```javascript
{
  riderId: String (required, unique),
  name: String (required),
  email: String (required, unique),
  phone: String (required),
  vehicleType: String (required),
  licenseNumber: String (required),
  status: String (default: "available"),
  rating: Number (default: 0),
  totalDeliveries: Number (default: 0),
  joinDate: Date (default: now)
}
```

### Contact Data Model
```javascript
{
  customerId: String (required),
  name: String (required),
  email: String (required),
  phone: String (required),
  address: String (required),
  orderId: String (required),
  message: String,
  status: String (default: "pending"),
  createdAt: Date (default: now)
}
```

## 🔧 API Endpoints

### Driver Management
- `GET /` - Get all drivers
- `POST /` - Register new driver
- `PUT /:id` - Update driver information
- `DELETE /:id` - Remove driver
- `GET /:id` - Get specific driver

### Contact Management
- `GET /contact` - Get all contact data
- `POST /contact` - Create new contact entry
- `PUT /contact/:id` - Update contact information
- `DELETE /contact/:id` - Remove contact entry

## 🎨 User Interface

### Pages
1. **Home Page** (`/`) - Main dashboard with delivery overview
2. **About Page** (`/About`) - Information about the delivery service
3. **Contact Page** (`/Contact`) - Contact management interface

### Components
- **Navbar**: Main navigation
- **Sidebar**: Secondary navigation
- **Footer**: Contact and company information
- **Driver Cards**: Display driver information
- **Contact Forms**: Customer contact management
- **Order Management**: Delivery order handling

## 🔒 Security Features

- Input validation and sanitization
- CORS configuration
- Error handling and logging
- Data validation on both client and server

## 📱 Responsive Design

The interface is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy the 'build' folder to your hosting service
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
   - Check connection string in server.js

2. **CORS Errors**
   - Ensure backend CORS is properly configured
   - Check frontend API base URL

3. **Component Import Errors**
   - Verify all component imports are correct
   - Check file paths and naming conventions

## 📈 Future Enhancements

- Real-time GPS tracking
- Push notifications for drivers
- Route optimization algorithms
- Driver performance analytics
- Customer rating system
- Integration with mapping services
- Mobile app for drivers
- Automated dispatch system

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