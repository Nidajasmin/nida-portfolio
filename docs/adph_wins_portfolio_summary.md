# Infant Safety & Health Tracking Mobile Application - Portfolio Summary

## 📌 Project Purpose
A comprehensive, cross-platform mobile application designed to assist parents and caregivers in managing infant health and safety. The application serves as a central hub for critical alerts, developmental tracking, and educational resources. It is built to ensure high reliability for life-saving features like in-vehicle safety alerts and severe weather warnings, even when the app is running in the background.

## 🛠️ Technologies Used
- **Frontend Framework:** Flutter (Dart)
- **State Management:** Riverpod
- **Routing:** Deep linking and shell routing architectures
- **Backend Services:** 
  - PostgreSQL Database (with Row Level Security)
  - Secure Authentication (Biometrics, OTP, OAuth)
  - Realtime WebSockets for instant data synchronization
  - Cloud Storage for media assets
  - Serverless Edge Functions for scheduled tasks and API integrations
- **Local Storage & Caching:** Encrypted local storage and NoSQL caching for offline-first capabilities
- **Push Notifications & Analytics:** Firebase Cloud Messaging (FCM) and crash reporting
- **Native Device Integrations:** 
  - Background services for persistent execution
  - GPS, geolocation, and motion sensors
  - Biometric authentication APIs

## ✨ Key Features

### 1. 🚨 In-Vehicle Child Safety Alert System
A life-saving background monitoring feature designed to prevent infants from being accidentally left in vehicles.
- Uses a dual-process architecture to run background monitors independently of the main user interface, ensuring maximum reliability.
- Utilizes GPS and motion state machines to detect trip start and end events.
- Triggers critical, high-priority notifications that bypass standard "Do Not Disturb" settings using heartbeat and watchdog mechanisms.

### 2. 💉 Health & Developmental Tracking
- **Vaccine Reminders:** Complex scheduling logic that classifies dose requirements per child and generates localized "due soon" alerts.
- **Developmental Milestones:** Age-grouped tracking allowing parents to log child progress offline, synchronizing with the cloud when a connection is available.

### 3. 🌤️ Real-Time Contextual Alerts
- **Weather Alerts:** Integrates with third-party weather APIs via edge functions to deliver severe weather warnings based on precise GPS coordinates or county-level fallbacks.
- **Product Recalls:** Automatically syncs with government consumer safety databases to deliver keyword-filtered product recall notices directly to users.

### 4. 📚 Educational Gamification
- Interactive quizzes focused on infant safety practices (e.g., safe sleep guidelines).
- Implements a gamified progression loop with points, leveling systems, and offline-persistent scoring.

### 5. 🔔 Advanced Notification Pipeline
- **Realtime Aggregator:** Merges events from vaccines, milestones, weather, and app updates into a single unified dashboard feed using concurrent WebSocket channels.
- **Cross-Platform Fanout:** Leverages backend edge functions and cron jobs to process high-volume push notification dispatches efficiently.
