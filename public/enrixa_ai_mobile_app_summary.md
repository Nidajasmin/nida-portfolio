# Enrixa AI — Mobile Product & Catalog Manager for Shopify

## 📌 Project Overview
Enrixa AI is an intelligent, cross-platform mobile e-commerce management application engineered for Shopify merchants to streamline product catalog management directly from their mobile devices. By combining computer vision, generative AI, and Shopify Admin & Storefront APIs, the application empowers sellers to publish rich, high-converting product listings in minutes instead of hours.

Merchants simply snap a photo of any physical product with their phone camera, and the built-in AI pipeline autonomously enhances the image, writes persuasive SEO-optimized titles and descriptions, assigns product tags and categories, and publishes or drafts the listing directly to their connected Shopify store.

---

## 🛠️ Technologies Used
- **Frontend / Mobile Framework:** Flutter (Dart)
- **State Management & Architecture:** Riverpod / Clean Architecture
- **E-Commerce APIs:** Shopify Admin API (GraphQL & REST), Storefront API, OAuth Authentication
- **AI & Vision Pipeline:** 
  - Generative Vision Models & LLMs (OpenAI / Claude Vision)
  - Custom Computer Vision preprocessing for image background cleanup and color correction
- **Backend & Cloud Infrastructure:** 
  - Node.js & Express API Gateway
  - PostgreSQL Database (Catalog state, credit quotas, merchant preferences)
  - Cloudinary / AWS S3 for high-resolution CDN-backed image delivery
- **Authentication & Security:** Shopify OAuth 2.0, Secure Token Storage, Biometric authentication

---

## ✨ Key Functionalities & Features

### 1. 📸 Snap-to-Publish AI Pipeline
- **In-App Camera Scanner:** Integrated camera viewfinder customized for physical product photography.
- **Automated Listing Generation:** Generative AI analyzes product imagery to draft comprehensive product titles, SEO-friendly marketing copy, feature bullet points, and pricing estimates.
- **Image Enhancement:** Automatically removes background distractions, balances lighting, and optimizes image dimensions for e-commerce standards.

### 2. ⚡ Direct Shopify Store Synchronization
- **One-Tap Publishing:** Instantly pushes generated products to active Shopify stores as live listings or drafts.
- **Variant & Inventory Management:** Detects and structures multi-variant attributes (sizes, weights, flavors, colors) and assigns inventory quantities.
- **Multi-Platform Ready:** Built with future-proof connectors for Shopify, WooCommerce, and Magento stores.

### 3. 📊 Real-Time Merchant Catalog Dashboard
- **Store Pulse at a Glance:** Live metrics showing total store products, published listings, items pending review, and available AI generation credits.
- **Quick Action Bar:** One-tap navigation to add products, review drafts, or contact AI support.

### 4. 🗂️ Multi-State Product Approval Workflow
- **Granular Status Filtering:** Segment store catalog by **All**, **Building**, **Needs Review**, and **Published**.
- **Interactive Review Screen:** Allows merchants to review AI-generated pricing, adjust SKU details, and approve items before publishing live.

### 5. 🤖 Context-Aware In-App AI Assistant
- **Conversational Troubleshooting:** Real-time chatbot interface providing instant guidance on listing errors, pricing rules, and catalog optimization.
- **Direct Action Triggers:** AI can prompt direct UI actions (e.g., jump directly to "Edit Price" or connect with human support).

### 6. 🎥 Tutorial Video Hub & Intelligent FAQ
- **Video Learning Center:** Categorized video walkthroughs for photo scanning, draft mastering, and API integrations.
- **AI-Powered FAQ:** Dynamic knowledge base trained on generated listings to answer inquiries regarding generation credits, billing security, and image storage.
