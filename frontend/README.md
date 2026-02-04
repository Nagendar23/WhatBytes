# Whatbytes Frontend Assignment

A responsive e-commerce frontend built using **Next.js (App Router)** and **Tailwind CSS**, implementing product listing, filtering, cart functionality, and dynamic routing as part of the Whatbytes internship assignment.

## 🔗 Live Demo
https://your-vercel-url.vercel.app

## 📦 Features

- Product listing with responsive grid layout
- Category and price-based filtering
- Search functionality with string matching
- URL-based filters using query parameters
- Dynamic product detail pages
- Global cart state with persistence (Zustand + localStorage)
- Cart page with quantity controls and price summary
- Conditional UI rendering for empty states
- Fully responsive design (desktop, tablet, mobile)

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS**
- **Zustand** (state management)
- **lucide-react** (icons)

## 📁 Project Structure

src/
├── app/
│ ├── page.tsx
│ ├── product/[id]/page.tsx
│ ├── cart/page.tsx
│ └── layout.tsx
├── components/
├── data/
├── store/
└── types/

## Screenshots

<p align="center">
  <img src="./public/screenshots/home.png" alt="Home page" width="300" style="margin:8px; box-shadow:0 6px 18px rgba(6,88,168,0.15); border-radius:6px;" />
  <img src="./public/screenshots/product.png" alt="Product page" width="300" style="margin:8px; box-shadow:0 6px 18px rgba(6,88,168,0.15); border-radius:6px;" />
  <img src="./public/screenshots/cart.png" alt="Cart page" width="300" style="margin:8px; box-shadow:0 6px 18px rgba(6,88,168,0.15); border-radius:6px;" />
</p>

## 🚀 Getting Started

```bash
git clone https://github.com/Nagendar23/WhatBytes
cd your-repo-name
npm install
npm run dev


