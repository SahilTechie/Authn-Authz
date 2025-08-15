# Secure Authentication System

A modern, secure authentication system built with React.js, Node.js, and MongoDB. Features include user registration, login, JWT authentication, and a simple UI.


🔗 **Live Preview:** (https://authn-authz.onrender.com)


## Features

- 🔐 Secure user authentication with JWT tokens
- 🛡️ Password hashing with bcryptjs
- 🍪 HttpOnly cookies for enhanced security
- 📱 Modern, responsive UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 🎯 Form validation and error handling
- 🔒 Protected routes
- 📊 MongoDB with Mongoose ODM

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password hashing
- express-validator for input validation

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- Axios for API calls

## Project Structure

```
Auth/
├── server/
│   ├── index.js          # Main server file
│   ├── models/
│   │   └── User.js       # User model
│   ├── routes/
│   │   └── auth.js       # Authentication routes
│   └── middleware/
│       └── auth.js       # JWT authentication middleware
├── client/               # React frontend
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Auth
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration:
   - Set your MongoDB URI
   - Change JWT_SECRET to a secure random string
   - Update CLIENT_URL if needed

4. **Start MongoDB**
   - Local: Make sure MongoDB is running on your machine
   - Atlas: Use your MongoDB Atlas connection string

5. **Run the application**
   ```bash
   npm run dev
   ```
   This will start both the backend server (port 5000) and frontend (port 3000)

### Development

- Backend only: `npm run server`
- Frontend only: `npm run client`
- Build frontend: `npm run build`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user (protected)

### Protected Routes
- `GET /api/protected` - Example protected route

## Security Features

- ✅ Password hashing with bcryptjs (12 salt rounds)
- ✅ JWT tokens stored in HttpOnly cookies
- ✅ CORS configuration for security
- ✅ Input validation and sanitization
- ✅ Error handling without exposing sensitive data
- ✅ Secure cookie settings (httpOnly, secure, sameSite)

## Frontend Features

- 🎨 clean UI design
- 📱 Fully responsive layout
- ✨ Smooth page transitions
- 🔄 Real-time form validation
- 📊 Loading states and error handling
- 🎯 Protected route implementation

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your-super-secret-jwt-key
CLIENT_URL=http://localhost:3000
```

## Quick Deploy

### Deploy to Render
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/SahilTechie/Authn-Authz)

### Deploy to Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/3QFHWz?referralCode=alphasec)

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SahilTechie/Authn-Authz)

### Deploy to Heroku
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/SahilTechie/Authn-Authz)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own applications. 
