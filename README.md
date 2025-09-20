# 🎯 Assessment Test Unit

<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/License-Educational-yellow?style=for-the-badge" alt="License">
</div>

<div align="center">
  <h3>แบบทดสอบสัมภาษณ์บริษัท Unit** มีวัตถุประสงค์เพื่อทดสอบความสามารถในการพัฒนาเว็บแอปพลิเคชัน</h3>
  <p>Built with Node.js, Express, PostgreSQL, and modern web technologies</p>
</div>

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
cd database && docker-compose up -d && cd ../backend && npm install && npm start
# Then open frontend/index.html in your browser
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
cd database
docker-compose up -d

# Verify database is running
docker ps
```

### Step 3: 📦 Install Dependencies
```bash
cd ../backend
npm install
```

### Step 4: 🌐 Open Frontend
```bash
# Navigate to frontend directory
cd ../frontend

# Open the HTML files directly in your browser
# You can either:
# 1. Double-click on login.html or index.html to open in browser
# 2. Right-click and select "Open with" → your preferred browser
# 3. Or use the file path directly in your browser:
#    file:///path/to/Assessment-Test-Unit/frontend/login.html
```

**Frontend Access Options:**
- **login.html** - Login page (start here for new users)
- **index.html** - Main dashboard (after login)  
- **register.html** - Registration page for new accounts

### Step 5: 🚀 Launch Backend Server
```bash
cd ../backend
npm start
```

### Step 7: 🎉 Access Application
- **Frontend**: Open `frontend/login.html` in your browser to start
- **Backend API**: http://localhost:4000
- **Database**: localhost:5432

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
