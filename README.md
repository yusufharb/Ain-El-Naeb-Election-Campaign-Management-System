# عين النائب - Ain El-Naeb
## Election Campaign Management System (نظام تتبع اللجان الانتخابية)

**Ain El-Naeb** is a comprehensive, proprietary full-stack system designed to streamline the management, monitoring, and analysis of election campaigns. It connects campaign administrators with committee representatives in real-time, ensuring efficient data flow and decision-making during the electoral process.

---

## 🚀 Key Features

### 🔐 Authentication & Security
- **Secure Logins**: Robust email and password authentication powered by Firebase Auth.
- **Role-Based Access Control forms (RBAC)**: Distinct interfaces and permissions for **Admins** and **Committee Representatives**.
- **Admin Approval Workflow**: New user registrations are set to `pending` status by default, requiring administrative approval to access system features, ensuring security and vetting.

### 👥 User Roles
1.  **Administrator (Admin)**
    - Access to the **Dashboard** (`dashboard.html`).
    - Ability to approve/reject new user registrations.
    - View and manage admin privileges requests.
    - Oversee all campaign data and metrics.

2.  **Committee Representative (Rep)**
    - Access to the **Committee Panel** (`committee.html`).
    - Responsible for data entry and updates specific to their assigned committee.
    - Real-time communication of status and results.

### 📊 Dashboard & Monitoring
- **Real-time Analytics**: Monitor campaign progress as data is entered.
- **Committee Tracking**: Track the performance and status of individual electoral committees.

---

## 🛠️ Technology Stack

This project leverages modern web technologies for a fast, responsive, and serverless architecture:

- **Frontend**: 
  - **HTML5** (Semantic structure)
  - **CSS3** (Custom styling, responsive design)
  - **JavaScript (ES6+)** (Core logic, DOM manipulation)
- **Backend & Database**:
  - **Firebase Authentication**: User identity management.
  - **Firebase Firestore**: NoSQL cloud database for real-time data syncing.

---

## 📂 Project Structure

```text
├── index.html       # Landing page (Login & Registration)
├── dashboard.html   # Main control panel for Administrators
├── committee.html   # Interface for Committee Representatives
├── firebase.js      # Firebase configuration and initialization
├── style.css        # Global styles and themes
└── README.md        # Project documentation
```

---

## ⚙️ Setup & Installation

Since this project relies on client-side technologies and Firebase, it is easy to set up:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yusufharb/Ain-El-Naeb-Election-Campaign-Management-System.git
    ```
2.  **Serve Locally**
    - You can use any static file server (e.g., VS Code "Live Server", Python `http.server`, or `serve`).
    - Open `index.html` in your browser.
3.  **Firebase Configuration**
    - Ensure `firebase.js` contains valid configuration keys for your Firebase project.

---

## 🛡️ License & Rights

This project is **Proprietary Software**.

- The source code is available for **viewing purposes only**.
- Any use, modification, reproduction, or distribution without explicit written permission from the author is **strictly prohibited**.

---
*Created by Yusuf Harb*
