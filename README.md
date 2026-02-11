# WanderLust 🏠✨

A full-stack Airbnb-inspired property listing platform where users can browse, list, and review accommodations from around the world.

![WanderLust](https://img.shields.io/badge/Status-Active-success)
![Node.js](https://img.shields.io/badge/Node.js-v22.17.1-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with Passport.js
- 🏡 **Property Listings** - Browse and search accommodations
- ➕ **Create Listings** - Add your own properties with image uploads
- ✏️ **Edit & Delete** - Manage your listings (owner authorization)
- ⭐ **Reviews & Ratings** - Leave reviews with star ratings (1-5)
- 🗺️ **Interactive Maps** - Location visualization with Mapbox
- 🔍 **Search Functionality** - Find destinations easily
- 📱 **Responsive Design** - Mobile-friendly interface
- ☁️ **Cloud Storage** - Images stored on Cloudinary
- 🔒 **Authorization** - Only owners can edit/delete their content

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication middleware
- **Express Session** - Session management

### Frontend
- **EJS** - Templating engine
- **Bootstrap 5** - UI framework
- **Font Awesome** - Icons
- **Mapbox GL JS** - Interactive maps

### Cloud Services
- **Cloudinary** - Image storage and management
- **MongoDB Atlas** - Cloud database (optional)
- **Mapbox** - Geocoding and maps

### Middleware & Utilities
- **Multer** - File upload handling
- **Joi** - Schema validation
- **Method Override** - HTTP verb support
- **Connect Flash** - Flash messages
- **Connect Mongo** - MongoDB session store

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/davekahan/Wanderlust.git
cd Wanderlust
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Create `.env` file** in the root directory
```bash
touch .env
```

4. **Add environment variables** (see below)

5. **Start MongoDB** (if using local)
```bash
mongod
```

6. **Seed the database** (optional)
```bash
node init/index.js
```

7. **Run the application**
```bash
node app.js
```

8. **Open browser**
```
http://localhost:8080
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following:

```env
# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Mapbox Token
MAP_TOKEN=your_mapbox_access_token

# MongoDB Connection
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust
# OR for MongoDB Atlas:
# ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust

# Session Secret
SECRET=your_secret_key_here

# Node Environment (optional)
NODE_ENV=development
```

### Getting API Keys:
- **Cloudinary**: [Sign up at cloudinary.com](https://cloudinary.com/)
- **Mapbox**: [Get token at mapbox.com](https://account.mapbox.com/)
- **MongoDB Atlas**: [Create cluster at mongodb.com](https://www.mongodb.com/cloud/atlas)

## 🚀 Usage

### For Users
1. **Sign Up** - Create a new account at `/signup`
2. **Login** - Access your account at `/login`
3. **Browse Listings** - View all properties at `/listings`
4. **View Details** - Click on any listing to see full details
5. **Leave Review** - Rate and comment on listings (requires login)

### For Property Owners
1. **Add Listing** - Click "Airbnb your home" in navbar
2. **Upload Image** - Add property photos via upload
3. **Edit Listing** - Update your property details
4. **Delete Listing** - Remove properties you own
5. **Manage Reviews** - Delete reviews on your listings

## 📁 Project Structure

```
WanderLust/
├── models/               # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/              # Express routes
│   ├── listing2.js
│   ├── review2.js
│   └── user2.js
├── controllers/         # Route controllers
│   ├── listings3.js
│   ├── review3.js
│   └── user3.js
├── views/               # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/              # Static files
│   ├── css/
│   └── js/
├── middleware.js        # Custom middleware
├── schema.js           # Joi validation schemas
├── cloudconfig.js      # Cloudinary configuration
├── app.js              # Main application file
└── .env                # Environment variables (not in repo)
```

## 🛣️ API Routes

### Listings
- `GET /listings` - View all listings
- `GET /listings/new` - Show create form (auth required)
- `POST /listings` - Create new listing (auth required)
- `GET /listings/:id` - Show specific listing
- `GET /listings/:id/edit` - Show edit form (owner only)
- `PUT /listings/:id` - Update listing (owner only)
- `DELETE /listings/:id` - Delete listing (owner only)

### Reviews
- `POST /listings/:id/reviews` - Add review (auth required)
- `DELETE /listings/:id/reviews/:reviewId` - Delete review (author only)

### Users
- `GET /signup` - Show signup form
- `POST /signup` - Register new user
- `GET /login` - Show login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kahan Dave**
- GitHub: [@davekahan](https://github.com/davekahan)

## 🙏 Acknowledgments

- Design inspired by Airbnb
- Built with guidance from web development tutorials
- Icons from Font Awesome
- UI components from Bootstrap

## 📸 Screenshots

*(Add screenshots of your application here)*

---

Made with ❤️ by Kahan Dave