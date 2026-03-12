# Tourist Places Management System

A full-stack web application for managing tourist destinations, vendors, and budget planning for travelers. This project provides a comprehensive platform to explore tourist places, manage vendor information, and plan trip budgets efficiently.

## 🚀 Project Status

**⚠️ This project is currently under development and pending completion.**

The application has core functionality implemented but is open for further development and enhancements. Contributions and feature additions are welcome.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Frontend Routes](#frontend-routes)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### Current Features
- Browse and search tourist places by category
- Vendor management with rating system
- Budget planning for multi-day trips
- Responsive user interface
- RESTful API architecture

### Planned Features
- User authentication and authorization
- Advanced search and filtering
- Interactive maps integration
- User reviews and comments
- Booking system integration
- Payment gateway integration

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Additional Libraries:** 
  - CORS for cross-origin requests
  - dotenv for environment variables
  - nodemon for development

### Frontend
- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v7
- **UI Framework:** React Bootstrap
- **Form Handling:** React Hook Form
- **Styling:** CSS + Bootstrap 5

## 📁 Project Structure

```
├── Backend/
│   ├── api/              # HTTP request files for testing
│   ├── config/           # Database configuration
│   ├── controllers/      # Request handlers
│   ├── models/           # Database models
│   ├── routes/           # API route definitions
│   └── server.js         # Express server setup
│
└── Frontend/
    ├── public/           # Static assets
    ├── src/
    │   ├── components/   # React components
    │   ├── assets/       # Images and icons
    │   └── App.jsx       # Main application component
    └── vite.config.js    # Vite configuration
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Ensure MongoDB is running on `mongodb://localhost:27017`

4. Start the development server:
```bash
npm start
```

The backend server will run on `http://localhost:8080`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will run on `http://localhost:5173` (default Vite port)

## 📡 API Documentation

### Base URL
```
http://localhost:8080
```

### Tourist Places API

**Base Path:** `/api/tourist`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Create a new tourist place |
| GET | `/` | Get all tourist places |
| GET | `/category/:category` | Get places by category |
| DELETE | `/:id` | Delete a place by ID |

### Vendor API

**Base Path:** `/vendor-api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/vendors` | Get all vendors |
| GET | `/vendors/:name` | Get vendor by name |
| POST | `/vendors` | Create a new vendor |
| DELETE | `/vendors/:name` | Delete vendor by name |
| POST | `/vendors/:name/rating` | Add rating to vendor |

**Rating Request Body:**
```json
{
  "hygienerating": 4.5,
  "newrating": 4.0
}
```

### Budget Planner API

**Base Path:** `/budget-api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/budgetplanner` | Calculate budget for trip plan |

**Request Body Example:**
```json
{
  "plan": [
    {
      "day": 1,
      "places": ["Place1", "Place2"]
    },
    {
      "day": 2,
      "places": ["Place3"]
    }
  ]
}
```

**Response:**
```json
{
  "message": "Budget calculated",
  "payload": 5000,
  "breakdown": [
    {
      "day": 1,
      "places": ["Place1", "Place2"],
      "total_cost": 3000
    }
  ]
}
```

## 🌐 Frontend Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Homepage | Main landing page with places list |
| `/budget-planner` | BudgetPlanner | Budget planning interface |
| `/category/:category` | CategoryPlaces | Places filtered by category |
| `/places` | PlacesList | Complete list of tourist places |

## 🗄️ Database Collections

### Database Name: `backenddb`

1. **places** - Tourist places information
2. **vendors** - Vendor details with ratings
3. **budgetplanner** - Budget calculation records

## 🔮 Future Enhancements

- [ ] User authentication (JWT/OAuth)
- [ ] Admin dashboard for content management
- [ ] Advanced filtering and sorting options
- [ ] Integration with mapping services (Google Maps/Mapbox)
- [ ] Multi-language support
- [ ] Mobile application (React Native)
- [ ] Real-time notifications
- [ ] Social sharing features
- [ ] Itinerary export (PDF/Email)
- [ ] Weather integration for destinations
- [ ] Currency converter for international travelers
- [ ] Image gallery for places
- [ ] User-generated content and reviews
- [ ] Recommendation engine based on preferences

## 🤝 Contributing

This project is open for contributions. Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is currently unlicensed and under development.

## 👥 Contact

For questions or suggestions regarding this project, please open an issue in the repository.

---

**Note:** This is a work-in-progress project. Some features may be incomplete or subject to change. The application is being actively developed and welcomes community contributions.
