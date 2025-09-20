# Assessment Test Unit

## Overview
This project is a full-stack application designed for unit assessment tests. It consists of a backend API, a PostgreSQL database, and a frontend interface. Users can register, log in, view and edit their profiles, and perform assessment tests.

## Project Structure
Assessment-Test-Unit/
├── backend/ # Node.js / Express API
├── frontend/ # HTML, CSS, JS interface
├── database/ # PostgreSQL & Docker setup
└── README.md

markdown
คัดลอกโค้ด

## Features
- User authentication with JWT (login, logout, register)
- Profile management (view and update fullname and username)
- Password hashing with bcrypt
- RESTful API endpoints
- PostgreSQL database integration
- Dockerized database setup

## Technologies
- Node.js
- Express
- PostgreSQL
- bcrypt
- JWT (JSON Web Token)
- jQuery
- HTML/CSS/JS
- Docker & Docker Compose

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/kurachatsarakarn/Assessment-Test-Unit.git
cd Assessment-Test-Unit
2. Setup Docker database
bash
คัดลอกโค้ด
docker-compose up -d
3. Install backend dependencies
bash
คัดลอกโค้ด
cd backend
npm install
4. Configure environment variables
Create a .env file in backend/ with:

ini
คัดลอกโค้ด
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
5. Run backend server
bash
คัดลอกโค้ด
npm start
6. Open frontend
Open frontend/index.html or frontend/login.html in your browser (or use Live Server).

Notes
JWT token expires in 1 hour.

Make sure Docker is running before starting the backend.

Username must be unique when updating profile.

License
This project is for educational purposes.

yaml
คัดลอกโค้ด

---

ผมสามารถช่วยทำ **เวอร์ชันสวย ๆ สำหรับ GitHub** ที่มี **screenshot, badge และ table of contents** ให้ด้วยนะ ถ้าคุณอยากได้รูปแบบนั้น  

คุณอยากให้ทำแบบนั้นไหม?






คุณพูดว่า:
ผมสามารถช่วยทำ \*\*เวอร์ชันสวย ๆ สำหรับ GitHub\*\* ที่มี \*\*screenshot, badge และ table of contents\*\* ให้ด้วยนะ ถ้าคุณอยากได้รูปแบบนั้น คุณอยากให้ทำแบบนั้นไหม?

ทำให้ที


ChatGPT พูดว่า:
ได้เลยครับ นี่คือ เวอร์ชันสวย ๆ ของ README.md สำหรับ GitHub พร้อม badge, table of contents, และตัวอย่าง screenshot (คุณสามารถเปลี่ยน path รูปภาพจริงตามโปรเจกต์ได้):

markdown
คัดลอกโค้ด
# Assessment Test Unit

![Project Badge](https://img.shields.io/badge/status-active-brightgreen) ![Node.js](https://img.shields.io/badge/node.js-v18-blue) ![License](https://img.shields.io/badge/license-educational-lightgrey)

---

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies](#technologies)
5. [Setup Instructions](#setup-instructions)
6. [Screenshots](#screenshots)
7. [Notes](#notes)
8. [License](#license)

---

## Overview
**Assessment Test Unit** is a full-stack application designed for unit assessment tests.  
Users can register, log in, view and edit their profiles, and perform assessment tests.  

---

## Features
- User authentication with JWT (login, logout, register)
- Profile management (view and update fullname and username)
- Password hashing with bcrypt
- RESTful API endpoints
- PostgreSQL database integration
- Dockerized database setup

---

## Project Structure
Assessment-Test-Unit/
├── backend/ # Node.js / Express API
├── frontend/ # HTML, CSS, JS interface
├── database/ # PostgreSQL & Docker setup
└── README.md

yaml
คัดลอกโค้ด

---

## Technologies
- Node.js & Express
- PostgreSQL
- bcrypt
- JWT (JSON Web Token)
- jQuery
- HTML / CSS / JS
- Docker & Docker Compose

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/kurachatsarakarn/Assessment-Test-Unit.git
cd Assessment-Test-Unit
2. Setup Docker database
bash
คัดลอกโค้ด
docker-compose up -d
3. Install backend dependencies
bash
คัดลอกโค้ด
cd backend
npm install
4. Configure environment variables
Create a .env file in backend/:

ini
คัดลอกโค้ด
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
5. Run backend server
bash
คัดลอกโค้ด
npm start
6. Open frontend
Open frontend/index.html or frontend/login.html in your browser (or use Live Server).

Screenshots
Login Page

Profile Page

Edit Profile

Notes
JWT token expires in 1 hour.

Make sure Docker is running before starting the backend.

Username must be unique when updating profile.

Frontend uses jQuery for AJAX calls.

