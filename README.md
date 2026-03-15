# CrowdCube -- Crowdfunding Platform

CrowdCube is a full‑stack crowdfunding web application that allows users
to create campaigns and raise funds for personal projects, startups, and
creative ideas. Users can explore campaigns, contribute donations, and
manage their own fundraising campaigns through an intuitive dashboard.

------------------------------------------------------------------------

## 🔗 Live Links

-   Live Website: https://crowd-cube-app.web.app
-   Server API: https://crowdcube-server.onrender.com
-   Client Repository: https://github.com/arman685913/CrowdCube-client
-   Server Repository: https://github.com/arman685913/CrowdCube-server

------------------------------------------------------------------------

# ✨ Features

-   User Authentication (Email & Password)
-   Create, Update, and Delete Campaigns
-   Browse all campaigns
-   Sort campaigns by minimum donation
-   Donate to campaigns
-   Personal donation history
-   Responsive design (Mobile / Tablet / Desktop)
-   Modern UI with notifications and carousel banner
-   Dark / Light mode

------------------------------------------------------------------------

# 🛠 Tech Stack

## Frontend

-   React.js
-   React Router
-   Tailwind CSS
-   Axios
-   React Icons
-   React Toastify

## Backend

-   Node.js
-   Express.js
-   MongoDB
-   JWT Authentication

## Other Tools

-   Firebase (Authentication & Hosting)
-   Render (Backend Hosting)
-   Git & GitHub

------------------------------------------------------------------------

# 📂 Project Structure

    CrowdCube
    │
    ├── client
    │   ├── src
    │   │   ├── components
    │   │   ├── pages
    │   │   ├── hooks
    │   │   ├── routes
    │   │   └── assets
    │
    ├── server
    │   ├── routes
    │   ├── controllers
    │   ├── middleware
    │   ├── models
    │   └── config

------------------------------------------------------------------------

# ⚙️ Installation & Setup

## Clone the Repository

``` bash
git clone https://github.com/arman685913/CrowdCube-client.git
git clone https://github.com/arman685913/CrowdCube-server.git
```

## Install Dependencies

### Client

``` bash
cd CrowdCube-client
npm install
```

### Server

``` bash
cd CrowdCube-server
npm install
```

## Environment Variables

Create a `.env` file in the server folder:

    PORT=5000
    DB_USER=your_mongodb_user
    DB_PASS=your_mongodb_password
    JWT_SECRET=your_secret_key

## Run the Project

### Start Server

``` bash
nodemon index.js
```

### Start Client

``` bash
npm run dev
```

------------------------------------------------------------------------

# 🚀 Future Improvements

-   Payment Gateway Integration
-   Admin Dashboard
-   Campaign analytics
-   Social sharing
-   Email notification system

------------------------------------------------------------------------

# 👨‍💻 Author

Arman Farazi\
GitHub: https://github.com/arman685913

------------------------------------------------------------------------
