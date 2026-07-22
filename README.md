# 🍽️ NextLevel Food

<div align="center">

A modern **meal-sharing platform** built with **Next.js App Router** that allows users to discover delicious meals and share their own recipes with the community.

This project was developed while following **Maximilian Schwarzmüller's Next.js course**, with a strong focus on Server Components, Server Actions, data handling, and modern App Router features.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react)
![SQLite](https://img.shields.io/badge/SQLite-better--sqlite3-003B57?logo=sqlite)
![License](https://img.shields.io/badge/License-Educational-blue)

</div>

---

# ✨ Overview

NextLevel Food is a full-stack educational application where users can explore meals shared by the community and contribute their own recipes.

The project demonstrates how modern Next.js applications handle server-side rendering, form submissions, file uploads, database interactions, and dynamic routing using the App Router.

---

# 🚀 Features

### 🍴 Meals

* Browse community meals
* View complete meal details
* Dynamic meal pages
* Beautiful image gallery

### ✍️ Share Meals

* Submit new recipes
* Image upload support
* Rich meal descriptions
* Form validation
* Slug generation

### ⚙️ Server Features

* Server Components
* Server Actions
* Database integration
* Secure HTML sanitization
* Image processing
* Dynamic metadata

### Navigation

* Dynamic Routes
* Nested Layouts
* Loading UI
* Error Pages
* Custom Not Found Pages

---

# 🛠 Tech Stack

| Technology     | Purpose           |
| -------------- | ----------------- |
| Next.js 16     | Framework         |
| React 19       | UI Library        |
| App Router     | Routing           |
| Better SQLite3 | Database          |
| Server Actions | Form Handling     |
| Slugify        | URL Slugs         |
| XSS            | HTML Sanitization |
| CSS Modules    | Styling           |

---

# 📂 Project Structure

```text
app/
│
├── meals/
│   ├── page.jsx
│   ├── [mealSlug]/
│   ├── share/
│   ├── loading.jsx
│   ├── error.jsx
│   └── not-found.jsx
│
├── community/
│
├── page.jsx
└── layout.jsx

components/
│
├── meals/
├── images/
├── main-header/
└── ...

lib/
│
├── meals.js
└── ...

public/
│
├── images/
└── ...
```

---

# 📚 Next.js Concepts Demonstrated

This project demonstrates several important Next.js concepts, including:

* Server Components
* Server Actions
* Dynamic Routes
* Nested Layouts
* Metadata API
* Loading UI
* Error Boundaries
* Custom Not Found Pages
* Form Handling
* File Upload
* SQLite Integration
* Data Fetching
* Cache Revalidation

---

# ⚡ Getting Started

## Clone the repository

```bash
git clone https://github.com/youzAt/NextLevel-Food.git
```

## Install dependencies

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production

```bash
npm start
```

Runs the production build.

### Lint

```bash
npm run lint
```

Runs ESLint.

---

# 🗄 Database

The project uses a local **SQLite** database powered by **better-sqlite3**.

Meals are stored locally and retrieved through reusable database utility functions.

---

# 📤 Image Upload

Users can upload an image when sharing a meal.

Uploaded images are stored locally and linked to their corresponding recipe.

---

# 🔒 Security

To prevent malicious HTML injection, meal instructions are sanitized using **xss** before being stored or rendered.

---

# 🎯 Learning Objectives

This project was built to practice:

* Server Components
* Server Actions
* File Uploads
* Form Handling
* Database CRUD
* Dynamic Routing
* Metadata API
* Cache Revalidation
* Data Fetching
* Full-stack features with Next.js

---

# 📸 Screenshots

Add screenshots or GIFs here.

Example:

```text
screenshots/
│
├── home.png
├── meals.png
├── meal-details.png
├── share-meal.png
└── mobile.png
```

---

# 🔮 Future Improvements

Potential enhancements include:

* User authentication
* Favorites
* Search meals
* Categories & filtering
* Pagination
* Rich text editor
* Cloud image storage
* Responsive improvements
* Dark mode
* API integration

---

# 🤝 Acknowledgements

This project was developed while following the excellent **Next.js course** by **Maximilian Schwarzmüller**.

The implementation has been customized as part of the learning process.

---

# 👨‍💻 Author

**Masoud Yousefi**

GitHub

https://github.com/youzAt

---

# 📄 License

This project is intended for educational purposes.

Feel free to fork it, explore the code, and use it as a learning resource.
