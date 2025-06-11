# 🧾 Form Builder Component Library

A customizable, reusable form builder built with **React** and **Firebase**. Designed to help developers and teams generate and manage dynamic forms without writing extra UI code.

---

## ✨ Features

- 🔧 Create and manage dynamic forms
- 🎨 Built with modular React components
- 🧩 Supports text fields, numbers, checkboxes, dropdowns, and more
- 🔐 Firebase integration for auth, Firestore, and storage
- 🗃️ Saves and retrieves form structures and responses
- 👁️ Includes response viewer and editor
- 🧑‍🤝‍🧑 Role-based permissions _(optional if supported)_

---

## 📸 Screenshots

<!-- Add images if available -->
<!-- ![Form Builder Screenshot](./assets/screenshot1.png) -->
<!-- ![Response Viewer Screenshot](./assets/screenshot2.png) -->

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/akselipalmer/form-builder.git
cd form-builder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env` file in the root of the project and add your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ Make sure you've set up Firestore and enabled Authentication (Email/Password or your preferred provider).

### 4. Start the dev server

```bash
npm run dev
```

## 🛠 Tech Stack

- ⚛️ React
- 🔥 Firebase (Auth, Firestore, Storage)
- 🌬 Tailwind CSS
- 🪝 React Hook Form
- 🗓 Day.js (for date handling, if used)

## 📂 Project Structure

```bash
src/
├── components/          # Reusable form components
│   ├── inputs/          # Input elements like Text, Number, Select
│   └── FormBuilder.jsx  # Main form builder logic
├── pages/               # Page-level components
├── utils/               # Utility functions
├── hooks/               # Custom hooks
└── App.jsx              # Root application component
```

## 🧠 Use Cases

- Admin dashboards with customizable inputs
- Internal tools and CRMs
- Research/survey data collection
- Fieldwork tools for museums or sustainability orgs
- MVPs needing flexible form generation

## ✅ Todo / Future Improvements

- Add drag-and-drop UI builder
- Add response export (CSV/JSON)
- Add form sharing via public/private links
- Add analytics or usage tracking

## 📄 License

This project is open source under the MIT License.

## 🙋‍♂️ Author

**Akseli Palmer**

- 🌐 [LinkedIn](https://www.linkedin.com/in/akselipalmer/)
- 💻 [GitHub](https://github.com/akselipalmer)

I'm open to freelance, contract, and collaborative roles—especially with organizations doing impactful work. Feel free to connect!
