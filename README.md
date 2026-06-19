# 🚗 Figma to HTML - Car Auction Landing Page

A fully responsive car auction landing page built from a Figma design. This project showcases a clean, modern UI for browsing and bidding on vehicles, featuring active auctions, car listings by model, and a user-friendly search interface.

---

## 🌐 Live Demo
- **Live Site:** [https://figma-to-html-conversion.netlify.app](https://figma-to-html-conversion.netlify.app)
- **GitHub Repository:** [https://github.com/muhammad-shahadat/Figma-html](https://github.com/muhammad-shahadat/Figma-html)

---


## ✨ Key Features

- **🔍 Advanced Search Filters:** Search cars by Type, Make, Year, Model, and Price range with an intuitive dropdown interface.
- **🚗 Active Auctions Display:** Showcase of current vehicle auctions with bid amounts, seller information, and "Place Bid" buttons.
- **🏷️ Find Car by Model:** Interactive slider to browse vehicles by model categories (SUV, Sedan, etc.) with vehicle counts.
- **📊 Popular Makes Section:** Display of popular car manufacturers with vehicle counts and quick navigation links.
- **🌓 Fully Responsive Design:** Optimized for all screen sizes (mobile, tablet, desktop) using Bootstrap 5.
- **🎨 Pixel-Perfect Implementation:** Faithful recreation of Figma design with attention to typography, spacing, and color schemes.

---

## 🧠 Challenges & Learnings

### 📐 Converting Figma Design to Code
This project was my first attempt at converting a Figma design into a fully functional webpage. Key learnings included:
- **Pixel-Perfect Alignment:** Ensuring every element matched the design specifications using precise CSS measurements.
- **Responsive Adaptation:** Maintaining design integrity across different screen sizes while keeping the visual hierarchy intact.

### 🎯 Bootstrap 5 Integration
Working with Bootstrap 5 taught me:
- **Grid System Mastery:** Efficiently using the 12-column grid for complex layouts like the auction cards and search filters.
- **Custom Component Styling:** Overriding Bootstrap defaults while maintaining framework consistency.

### 🖼️ Slider Implementation
Building the "Find Car by Model" slider from scratch (without external libraries) was a valuable learning experience:
- **Manual Slider Logic:** Implementing smooth transitions using vanilla JavaScript and CSS transitions.
- **Responsive Slider:** Adjusting slider behavior on mobile devices using media queries.

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** (Semantic markup)
- **CSS3** (Custom styling with CSS variables)
- **JavaScript** (Vanilla JS for interactivity)
- **Bootstrap 5.3.3** (Responsive grid and components)
- **Google Fonts** (Inter font family)

### Deployment
- **Netlify** (Frontend hosting)
- **GitHub** (Version control)

---

## 📁 Project Structure

```text
Figma-html/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript interactivity
├── img/                # All images and icons
│   ├── Logo.png
│   ├── bgimg.png
│   ├── car1.png
│   ├── car2.png
│   ├── car3.png
│   └── ... (other assets)
└── README.md           # Project documentation
```
---
## 🚀 Installation & Local Setup

### 📋 Prerequisites
- A modern web browser
- Any code editor (VS Code recommended)
- Live Server extension (optional but recommended)

### 1. Clone the repository:
```bash
git clone https://github.com/muhammad-shahadat/Figma-html.git
cd Figma-html
```
### 2. Open the project:
```bash
# Open index.html directly in your browser
# OR use VS Code Live Server for better development experience
code .
```
---

### 3. Run with Live Server (VS Code):
- Install "Live Server" extension from VS Code marketplace
- Right-click on index.html
- Select "Open with Live Server"

---
## 🛠️ Troubleshooting

- **Images Not Loading:** Ensure the img/ folder is in the same directory as index.html and all image paths are correct.
- **Slider Not Working:** Make sure script.js is properly linked and contains the prevSlider() and nextSlider() functions.
- **Bootstrap Icons Not Showing:**  Check CDN links in the <head> section and ensure internet connectivity.
- **Responsive Issues:** Verify that <meta name="viewport"> tag is present in the <head> section.
---
## 👨‍💻 Author
### Shahadat Hossain
- **GitHub:** [https://github.com/muhammad-shahadat](https://github.com/muhammad-shahadat)
- **Email:** [shahadat6640@gmail.com](mailto:shahadat6640@gmail.com)


---


