# 🍽️ NextLevel Food

A food-sharing platform built with **Next.js** as part of **Maximilian Schwarzmüller's Next.js course**. Browse meals shared by the community, view detailed cooking instructions, and contribute your own recipes.

> ⚠️ **Note:** This project is designed for **desktop use only** and is not responsive for mobile or tablet devices.

## ✨ Features

- **Browse Meals** — Explore a curated collection of meals shared by the community, from juicy burgers to authentic pizzas.
- **Meal Details** — View full cooking instructions, ingredients summaries, and creator information for each recipe.
- **Share Recipes** — Upload your own meals with an image, title, summary, and step-by-step instructions.
- **Image Upload** — Upload meal images that are saved locally and displayed alongside the recipe.
- **Dynamic Routing** — Each meal has its own dedicated page with SEO-friendly metadata (title & description).
- **Server Actions** — Form submission and validation handled via Next.js Server Actions.
- **Streaming & Suspense** — Meals page uses React Suspense for a smooth loading experience.
- **Desktop-Only Layout** — Styled and optimized exclusively for desktop viewports.

## 🚀 Tech Stack

| Technology         | Purpose                              |
|--------------------|--------------------------------------|
| **Next.js 16**     | React framework with App Router      |
| **React 19**       | UI library                           |
| **better-sqlite3** | Lightweight local SQL database       |
| **SQLite**         | Data persistence (meals.db)          |
| **Slugify**        | URL-friendly slug generation         |
| **XSS**            | Sanitize user-submitted instructions |
| **CSS Modules**    | Scoped component styling             |
| **ESLint**         | Code linting                         |

## 📁 Project Structure

```
Foodies/
├── app/                          # App Router pages
│   ├── globals.css               # Global styles
│   ├── layout.jsx                # Root layout with header
│   ├── page.jsx                  # Home / landing page
│   ├── not-found.jsx             # Custom 404 page
│   ├── community/
│   │   └── page.jsx              # Community page
│   └── meals/
│       ├── page.jsx              # Meals listing (with Suspense)
│       ├── [mealSlug]/
│       │   └── page.jsx          # Individual meal details
│       └── share/
│           └── page.jsx          # Share a new meal form
├── assets/                       # Static images & icons
│   ├── burger.jpg, curry.jpg, …  # Meal sample images
│   ├── logo.png                  # App logo
│   └── icons/                    # Community page icons
├── components/
│   ├── images/
│   │   └── ImageSlideshow.jsx    # Hero slideshow
│   ├── mainHeader/
│   │   ├── MainHeader.jsx        # Navigation header
│   │   ├── MainHeaderBackground.jsx
│   │   └── NavLink.jsx           # Active link navigation
│   └── meals/
│       ├── MealsGrid.jsx         # Grid layout for meals
│       ├── MealItem.jsx          # Individual meal card
│       ├── ImagePicker.jsx       # Image upload field
│       └── MealsFormSubmit.jsx   # Submit button with pending state
├── lib/
│   ├── meals.js                  # Database queries & image handling
│   └── actions.js                # Server Action for sharing meals
├── public/images/                # Uploaded meal images (gitignored)
├── initdb.js                     # Database initialization with dummy data
├── meals.db                      # SQLite database file
└── next.config.js                # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18+ (or 20+ for optimal Next.js 16 compatibility)
- **npm** (or yarn / pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/youzAt/NextLevel-Food.git
   cd Foodies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize the database (seed dummy data)**
   ```bash
   node initdb.js
   ```
   This creates `meals.db` and populates it with 7 sample meals (Burger, Curry, Dumplings, Mac n Cheese, Pizza, Schnitzel, Tomato Salad).

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### Browse Meals
- Navigate to **/meals** to see all available recipes.
- Meals are loaded with a 2-second simulated delay for the loading state demo.

### View a Meal
- Click on any meal card to see full details, including the image, creator info, summary, and step-by-step instructions.

### Share a Meal
- Go to **/meals/share** and fill out the form:
  - Your name, email, meal title, short summary, cooking instructions, and an image.
- Instructions are sanitized with **XSS** protection.
- On success, you'll be redirected back to the meals list.

### Community
- Visit **/community** to learn about community perks (discover recipes, find friends, exclusive events).

## 🗄️ Database

The project uses **SQLite** via `better-sqlite3`. The database schema is simple:

```sql
CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
);
```

To reset the database, delete `meals.db` and run `node initdb.js` again.

## 📜 Available Scripts

| Script            | Description                      |
|-------------------|----------------------------------|
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run start`   | Start production server          |
| `npm run lint`    | Run ESLint                       |


## 🙌 Acknowledgments

- Built as part of **Maximilian Schwarzmüller's Next.js course** on Udemy.
- Sample food images sourced from the project assets directory.