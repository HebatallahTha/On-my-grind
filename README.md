# On My Grind ☕️

Created by: **Hebatallah Tharhan**  
🛠️ A project from **CodePath Web Development 102**

---

## 🎯 Goals

By the end of this project, I was able to:

- Build React forms from scratch and dynamically populate answer choices
- Create custom components and pass props/state between them
- Use controlled inputs and `useState()` to manage form data
- Import and use external `.json` data files
- Dynamically update the UI based on user input and state
- Provide visual feedback (correct/wrong) using conditional styling

---

## ✨ App Description

**On My Grind** is a fun coffee-themed quiz app where users try to guess the correct ingredients of a drink — like a barista! Users are shown one random drink at a time and must pick the right temperature, syrup, milk, and blending options. After submitting, the app tells them which choices were correct or wrong, and they can keep trying with new drinks.

---

## 🚀 Features

### ✅ Required Features
- A drink is displayed one at a time
- Users select one answer per category
- Selected answers show up in answer boxes
- "Check Answer" button evaluates answers
- Visual feedback indicates correctness
- "New Drink" button resets for a new challenge

### 🌟 Stretch Goals
- Support for typed custom input instead of just radio buttons
- Input validation for custom values

---

## 📁 File Structure Highlights
src/
├── App.jsx
├── BaristaForm.jsx
├── RecipeChoices.jsx
├── drinks.json
└── styles.css

yaml
Copy
Edit

---


## 🧠 Concepts Used
- React functional components
- `useState` for state management
- Form event handling
- Dynamic rendering with `.map()`
- CSS Flexbox + conditional styling with `id`s
- Data-driven UI using `.json` files

---

## 💅 Styling

The app uses:
- A warm latte-inspired color palette ☕  
- Flexbox for layout  
- Google Fonts: `Poppins` (optional fallback available)

---

## 🔧 Installation & Setup

```bash
git clone https://github.com/your-username/on-my-grind.git
cd on-my-grind
npm install
npm run dev
📚 Credits
☕ Inspired by CodePath Web Dev 102 Lab

💻 Built with React + Vite
