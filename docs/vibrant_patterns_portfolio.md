# Portfolio Case Study: Vibrant Patterns Shopify Theme

## 📝 Project Overview
**Project Name:** Vibrant Patterns Custom Theme
**Role:** Lead Shopify Theme Developer
**Platform:** Shopify (Online Store 2.0)

**Vibrant Patterns** is a fully custom, modern Shopify theme designed to give merchants absolute control over their brand's presentation across all devices. Built natively on Shopify's Online Store 2.0 architecture, the project focused on creating a highly responsive, aesthetic, and modular experience for e-commerce stores without sacrificing performance.

---

## 🎯 The Objective
Modern e-commerce requires pixel-perfect layouts on both desktop and mobile. However, traditional themes often force merchants to use a single image and layout that awkwardly crops on smaller screens. 

The primary objective of this project was to build a suite of custom sections (Hero Banners, Contact Forms, About Pages, and Collection Grids) that gave merchants **independent control** over the mobile and desktop experience directly from the Theme Editor, alongside implementing a modern, AJAX-powered cart and filtering system.

---

## 💻 Core Technologies
- **Languages:** Shopify Liquid, HTML5, CSS3, Vanilla JavaScript
- **Architecture:** Shopify Online Store 2.0 (JSON Templates)
- **Tools:** Shopify CLI, Theme Access API
- **Version Control:** Git & GitHub

---

## 🚀 Key Features & Implementations

### 1. Advanced Responsive Banner Engine
Developed a custom Liquid schema that allows merchants to decouple desktop and mobile visual assets entirely. 
*   **Independent Image Pickers:** Merchants can upload a wide aspect-ratio image for desktop and a separate portrait-oriented image for mobile.
*   **Dynamic Height Controls:** Built-in sliders to set exact pixel heights for desktop (e.g., 400px) and mobile (e.g., 250px) independently.
*   **Responsive Text Alignment:** Independent text alignment settings (Left, Center, Right) for desktop and mobile to ensure readability regardless of the background image focal point.
*   **Implementation:** Used Liquid to extract settings and dynamically generate inline CSS variables (e.g., `--desktop-height`, `--mobile-text-align`), which were then interpreted by optimized media queries.

### 2. Custom JSON Templates (OS 2.0)
Leveraged Shopify 2.0 JSON templates (`page.custom-about.json`, `page.custom-contact.json`) to allow merchants to easily add, remove, and re-order blocks on static pages.
*   Transformed standard static pages into dynamic landing pages.
*   Created modular "Who We Are" sections, statistic counters, and service highlight cards that are fully configurable.

### 3. AJAX-Powered Collection Filtering & Cart
*   **Collection Filtering:** Built a seamless, page-reload-free filtering experience using the Storefront AJAX API. Users can filter by price ranges and custom tags without losing context.
*   **Custom Cart Features:** Implemented a bespoke cart layout with real-time DOM updates, interactive checkboxes, and a "Delete All" bulk action function using the Shopify Cart API.

---

## 🧠 Technical Challenges Overcome

**Challenge: Shopify CLI Dev Server Sync Conflicts**
During active development, changes made by the merchant in the live Theme Editor (like uploading banner images) were being overwritten by local `shopify theme dev` sync processes pushing empty JSON templates. 
**Solution:** Implemented strict deployment protocols using `.shopifyignore` to exclude `templates/*.json` and `config/settings_data.json` during code pushes (`shopify theme push --live`). This allowed the codebase to be continuously updated without ever wiping out the merchant's live content configurations.

---

## 📈 Results & Impact
*   **Improved Mobile UX:** By allowing dedicated mobile imagery and typography alignments, the bounce rate on mobile landing pages was significantly reduced.
*   **Merchant Autonomy:** The store owner no longer needs developer assistance to optimize hero banners for sales events; they can tweak mobile vs. desktop experiences directly in the GUI.
*   **Performance:** Relying on native CSS variables and Vanilla JS rather than heavy third-party libraries kept the theme incredibly fast and lightweight.
