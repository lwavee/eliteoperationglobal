# 🌐 EliteOps Global (EOG) - Static Web Platform

Welcome to the **EliteOps Global (EOG)** static website repository. This website serves as the primary digital landing page and client portal showcase for EliteOps Global, a premier provider of global back-office, virtual assistance, business automation, and digital technology solutions.

---

## 📌 Project Overview

**EliteOps Global (EOG)** empowers businesses, startups, educational institutions, insurance agencies, healthcare clinics, and real estate firms with dedicated virtual staffing, custom web development, administrative back-office operations, and educational ERP solutions.

This static platform is designed with a modern, high-converting, and interactive UI/UX featuring a responsive dark/light mode engine, custom cursor animations, smooth interactive state transitions, and dedicated industry pages.

---

## ✨ Key Features & Capabilities

- 🌗 **Dynamic Theme System**: Seamless toggle between Light Mode and Dark Mode with custom CSS variable design tokens and glassmorphism styling.
- 🎯 **Industry-Specific Portals**: Targeted solutions for:
  - 🏢 Insurance Agencies (`industries/insurance.html`)
  - 🎓 Educational Institutions (`industries/education.html`)
  - 🏥 Healthcare & Clinics (`industries/healthcare.html`)
  - 🏠 Real Estate & Finance (`industries/real-estate.html`)
  - 🚀 Startups & SMEs (`industries/startups.html`)
- 💼 **Interactive Portfolio**: Filterable project showcase displaying case studies and past client deliverables (`portfolio/`).
- ⚡ **Interactive UI Micro-interactions**:
  - Trailing custom animated cursor with glow effects
  - Loading aura screen animation
  - Responsive header navbar with dropdown menus and mobile drawer menu
  - Floating consultation call-to-action buttons
  - Contact & Booking forms
- 📱 **100% Fully Responsive**: Optimised for desktops, laptops, tablets, and mobile devices.

---

## 🛠️ Technology Stack

| Category | Technology / Library |
| :--- | :--- |
| **Markup** | HTML5 (Semantic Structure) |
| **Styles** | Vanilla CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Animations) |
| **Scripts** | JavaScript (ES6+ Native DOM manipulation) |
| **Typography** | Google Fonts ([Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit)) |
| **Icons** | [FontAwesome 6 Free](https://fontawesome.com/) |

---

## 📁 Directory Structure

```text
static-site/
├── index.html            # Main landing page
├── styles.css            # Global CSS variables, design system, and component styles
├── script.js             # Theme toggle, cursor animation, menu drawer, filter logic
├── logo.png              # EliteOps Global brand logo asset
├── README.md             # Documentation for static site
├── industries/           # Industry-specific detailed pages
│   ├── education.html    # Educational solutions
│   ├── healthcare.html   # Healthcare solutions
│   ├── insurance.html    # Insurance back-office processing
│   ├── real-estate.html  # Real Estate & finance support
│   └── startups.html     # Startup scaling solutions
└── portfolio/            # Portfolio assets and screenshots
    ├── ams.png
    ├── capco.png
    └── sterling.png
```

---

## 🚀 Quick Start & Local Execution

No complex build step or `npm install` is required for this static site. You can run it locally in any of the following ways:

### Option 1: Using `serve` (Recommended)
From inside the `static-site` folder or root project directory:
```bash
npx serve static-site
```
Then open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal).

### Option 2: Live Server (VS Code Extension)
1. Open the project in VS Code / IDE.
2. Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Direct Browser Open
Simply double-click `index.html` or open it directly in any modern Web Browser.

---

## 🎨 Customizing Theme & Styles

All design tokens and color schemes are central in `styles.css`:
- `--royal-500`, `--royal-600`: Primary brand accent colors.
- `--bg-primary`, `--text-primary`: Dynamic variables for dark/light themes.
- `.dark-theme`: Class toggled on `<body>` via JavaScript to switch color palettes.

---

## 📧 Support & Contact

For questions or consultation requests:
- **Website**: [EliteOps Global](index.html#contact)
- **Consultation**: Click *"Book Free Consultation"* on the navigation bar.

---
*Developed for EliteOps Global (EOG) - All Rights Reserved.*
