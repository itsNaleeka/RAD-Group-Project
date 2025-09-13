# Receptionist Module - Reservation Management System

A comprehensive reservation management system designed for restaurant receptionists to handle table bookings, customer reservations, and dining arrangements efficiently.

## 🎯 Overview

The Receptionist Module provides a complete solution for managing restaurant reservations, table assignments, and customer dining arrangements. It streamlines the reservation process and helps maintain organized table management.

## 🚀 Features

### Reservation Management
- **Create Reservations**: Add new table reservations
- **Edit Reservations**: Modify existing reservation details
- **Delete Reservations**: Remove reservations when needed
- **View Reservations**: Display all reservations in an organized list

### Table Management
- **Table Assignment**: Assign specific tables to reservations
- **Table Availability**: Track table availability by date and time
- **Table Categories**: Organize tables by size and type

### Customer Management
- **Customer Information**: Store customer contact details
- **Customer History**: Track customer reservation history
- **Contact Management**: Manage customer communication

### Reservation Details
- **Date & Time**: Schedule reservations for specific dates and times
- **Party Size**: Track number of guests
- **Special Requests**: Handle special dining requirements
- **Pricing**: Manage reservation pricing and categories

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - UI framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **React Toastify** - Notification system

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - Object Document Mapper
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Receptionist/
├── backend/
│   ├── config/
│   │   └── db.js                    # Database configuration
│   ├── controllers/
│   │   └── reservationController.js # Reservation logic
│   ├── models/
│   │   └── reservationModel.js      # Reservation schema
│   ├── routes/
│   │   └── reservationRoute.js      # Reservation API routes
│   ├── package.json
│   └── server.js                    # Server entry point
├── src/
│   ├── components/
│   │   ├── Form/                    # Reservation form component
│   │   ├── Navbar/                  # Navigation component
│   │   └── Sidebar/                 # Sidebar navigation
│   ├── pages/
│   │   ├── Add/                     # Add reservation page
│   │   ├── List/                    # Reservations list page
│   │   └── Orders/                  # Orders management page
│   ├── assets/                      # Static assets
│   ├── App.jsx                      # Main app component
│   └── main.jsx                     # App entry point
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
   cd Receptionist
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
   MONGODB_URI=mongodb://localhost:27017/foody_receptionist
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
   cd Receptionist
   npm run dev
   # Frontend will run on http://localhost:5173
   ```

## 📊 Database Schema

### Reservation Model
```javascript
{
  name: String (required),           // Customer name
  email: String (required),          // Customer email
  phone: String (required),          // Customer phone number
  date: String (required),           // Reservation date
  time: String (required),           // Reservation time
  table: Number (required),          // Table number
  category: String (required),       // Reservation category/type
  price: Number (required),          // Reservation price
  description: String (optional),    // Special requests/notes
  members: Number (required),        // Number of guests
  createdAt: Date (default: now),    // Creation timestamp
  updatedAt: Date (default: now)     // Last update timestamp
}
```

## 🔧 API Endpoints

### Reservation Management
- `GET /api/reservation` - Get all reservations
- `POST /api/reservation` - Create new reservation
- `PUT /api/reservation/:id` - Update reservation
- `DELETE /api/reservation/:id` - Delete reservation
- `GET /api/reservation/:id` - Get specific reservation

### Additional Endpoints
- `GET /` - API health check

## 🎨 User Interface

### Pages
1. **List Page** (`/`) - Main dashboard showing all reservations
2. **Add Page** (`/add`) - Form to create new reservations
3. **Orders Page** (`/orders`) - Orders management interface

### Components
- **Navbar**: Top navigation with user controls
- **Sidebar**: Left navigation menu
- **Form**: Reservation creation and editing form
- **Reservation Cards**: Display reservation information
- **Toast Notifications**: User feedback for actions

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

2. **Form Validation Errors**
   - Check required field validation
   - Verify data format requirements

3. **CORS Errors**
   - Ensure backend CORS is properly configured
   - Check frontend API base URL

4. **Date/Time Format Issues**
   - Verify date and time input formats
   - Check timezone handling

## 📈 Future Enhancements

- Calendar view for reservations
- Real-time table availability updates
- Email/SMS notifications for reservations
- Customer database integration
- Waitlist management
- Table layout visualization
- Reservation analytics and reporting
- Integration with POS systems
- Multi-language support
- Mobile app for receptionists

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