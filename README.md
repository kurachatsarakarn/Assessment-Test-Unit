# 🎯 Assessment Test Unit

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/License-Educational-yellow?style=for-the-badge" alt="License">
</div>

<div align="center">
  <h3>🚀 A modern full-stack assessment platform with authentication & profile management</h3>
  <p>Built with Node.js, Express, PostgreSQL, and modern web technologies</p>
</div>

---

## 📋 Table of Contents

- [🎯 Assessment Test Unit](#-assessment-test-unit)
  - [📋 Table of Contents](#-table-of-contents)
  - [📖 Overview](#-overview)
  - [✨ Features](#-features)
  - [🏗️ Project Structure](#️-project-structure)
  - [🛠️ Technologies](#️-technologies)
  - [⚡ Quick Start](#-quick-start)
  - [🔧 Detailed Setup](#-detailed-setup)
  - [📱 Screenshots](#-screenshots)
  - [📚 API Endpoints](#-api-endpoints)
  - [⚠️ Important Notes](#️-important-notes)
  - [🤝 Contributing](#-contributing)
  - [📜 License](#-license)

---

## 📖 Overview

**Assessment Test Unit** is a comprehensive full-stack web application designed for conducting unit assessment tests. The platform provides a secure environment for user registration, authentication, profile management, and assessment execution.

### 🎯 Key Objectives
- Provide secure user authentication and authorization
- Enable seamless profile management
- Deliver a responsive and intuitive user interface
- Ensure scalable and maintainable code architecture

---

## ✨ Features

### 🔐 Authentication & Security
- **JWT-based Authentication** - Secure login/logout system
- **Password Hashing** - bcrypt encryption for user safety
- **Token Management** - Automatic token expiration (1 hour)

### 👤 User Management
- **User Registration** - Easy account creation process
- **Profile Management** - Update fullname and username
- **Unique Username Validation** - Prevents duplicate usernames

### 🏗️ Technical Features
- **RESTful API** - Clean and organized endpoints
- **Database Integration** - PostgreSQL with Docker support
- **Responsive Design** - Works on all devices
- **AJAX Interactions** - Smooth user experience with jQuery

---

## 🏗️ Project Structure

```
Assessment-Test-Unit/
├── 📁 backend/              # Node.js & Express API Server
│   ├── 📄 server.js         # Main server file
│   ├── 📁 routes/           # API route handlers
│   ├── 📁 models/           # Database models
│   ├── 📁 middleware/       # Authentication middleware
│   └── 📄 package.json     # Dependencies & scripts
│
├── 📁 frontend/             # Client-side Application
│   ├── 📄 index.html        # Main dashboard
│   ├── 📄 login.html        # Login page
│   ├── 📄 register.html     # Registration page
│   ├── 📁 css/              # Stylesheets
│   ├── 📁 js/               # JavaScript files
│   └── 📁 assets/           # Images & resources
│
├── 📁 database/             # Database Configuration
│   ├── 📄 docker-compose.yml # PostgreSQL container setup
│   └── 📄 init.sql          # Database initialization
│
└── 📄 README.md            # Project documentation
```

---

## 🛠️ Technologies

### Backend Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | v18+ | Runtime Environment |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | v4.x | Web Framework |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white) | v13+ | Database |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white) | Latest | Authentication |

### Frontend Stack
| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Functionality |
| ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white) | AJAX & DOM |

### DevOps & Tools
| Tool | Purpose |
|------|---------|
| ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) | Containerization |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) | Version Control |

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- Docker & Docker Compose
- Git

### 🚀 One-Command Setup
```bash
# Clone and setup everything
git clone https://github.com/kurachatsarakarn/Assessment-Test-Unit.git
cd Assessment-Test-Unit
docker-compose up -d && cd backend && npm install && npm start
```

---

## 🔧 Detailed Setup

### Step 1: 📥 Clone Repository
```bash
git clone https://github.com/kurachatsarakarn/Assessment-Test-Unit.git
cd Assessment-Test-Unit
```

### Step 2: 🐳 Setup Database
```bash
# Start PostgreSQL container
docker-compose up -d

# Verify database is running
docker ps
```

### Step 3: 📦 Install Dependencies
```bash
cd backend
npm install
```

### Step 4: ⚙️ Environment Configuration
Create `.env` file in the `backend/` directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=assessment_test_db

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret_key
JWT_EXPIRE=1h

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

### Step 5: 🚀 Launch Application
```bash
# Start backend server
npm start

# Open another terminal and serve frontend
cd ../frontend
# Open index.html with Live Server or serve with:
python -m http.server 8080
```

### Step 6: 🎉 Access Application
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000
- **Database**: localhost:5432

---

## 📱 Screenshots

### 🔐 Login Page
> *Clean and modern login interface*

![Login Page](./screenshots/login.png)

### 👤 User Dashboard
> *Intuitive dashboard with profile management*

![Dashboard](./screenshots/dashboard.png)

### ✏️ Profile Editor
> *Easy-to-use profile editing interface*

![Profile Edit](./screenshots/profile-edit.png)

---

## 📚 API Endpoints

### 🔐 Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/register` | Register new user | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `POST` | `/api/auth/logout` | User logout | ✅ |

### 👤 User Management
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/user/profile` | Get user profile | ✅ |
| `PUT` | `/api/user/profile` | Update profile | ✅ |
| `POST` | `/api/user/change-password` | Change password | ✅ |

### 📊 Assessment
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/tests` | Get available tests | ✅ |
| `POST` | `/api/tests/:id/submit` | Submit test results | ✅ |

---

## ⚠️ Important Notes

> **🕐 Token Expiration**: JWT tokens expire after 1 hour for security
> 
> **🐳 Docker Dependency**: Ensure Docker is running before starting the backend
> 
> **👤 Unique Usernames**: Username must be unique when updating profile
> 
> **🌐 CORS**: Frontend and backend must run on specified ports for proper CORS handling
> 
> **🔒 Environment Variables**: Never commit `.env` file to version control

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### 📝 Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 📜 License

This project is created for **educational purposes** only.

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/kurachatsarakarn">Kurachat Sarakarn</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

---

<div align="center">
  <img src="https://img.shields.io/badge/Built%20with-❤️-red?style=for-the-badge" alt="Built with Love">
</div>
