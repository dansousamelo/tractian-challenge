# 🚀 Tractian Challenge - Tree View Application

![Next.js](https://img.shields.io/badge/Next.js-14.0.1-blue) ![React](https://img.shields.io/badge/React-18.0.0-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.0-blue) ![Framer Motion](https://img.shields.io/badge/Framer--Motion-10.16.4-blue) ![Zustand](https://img.shields.io/badge/Zustand-4.5.5-blue) ![Typescript](https://img.shields.io/badge/Typescript-5.0-blue) ![License](https://img.shields.io/badge/License-MIT-green) [![Site Online](https://img.shields.io/badge/Site-Online-brightgreen)](https://tractian-challenge-ten.vercel.app/)

## 🌐 Live Demo

To see the application in action, visit the live site:
[**https://tractian-challenge-ten.vercel.app/**](https://tractian-challenge-ten.vercel.app/)

## 📖 Project Overview

The Tractian Challenge is a web application designed to visualize the hierarchy of a company’s assets, locations, and components using a tree structure. The solution provides a clear and intuitive interface for managing and viewing assets, along with powerful filtering options for better asset monitoring.

<br/>

<div align="center">
  <img src="https://github.com/user-attachments/assets/c084259c-7f43-4197-b29e-dea97f22abfa" alt="challenge" />
  <p><em>Application in Production</em></p>
</div

## ✨ Features

- **🌳 Tree View Representation**: Displays a dynamic tree structure that organizes locations, assets, and components.
- **🔍 Filtering Options**:
  - **📝 Text Search**: Allows users to search specific locations, assets, or components.
  - **⚡ Energy Sensors**: Isolates assets with energy sensors within the tree.
  - **🚨 Critical Sensor Status**: Highlights assets with critical alerts.
- **💻 Responsive and Optimized UI**: Performance-optimized tree rendering and smooth user interactions.

## 📂 Project Structure

The project is organized as follows:

```
tractian-challenge/
├── public/
│   ├── assets/
│   │   ├── animations/
│   │   ├── icons/
│   │   ├── images/
│   │   └── logo.png
├── src/
│   ├── app/
│   │   ├── companies/
│   │   │   ├── [companyId]/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   └── stores/
│   │   ├── components/
│   │   ├── types/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── types/
│   └── utils/
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://reactjs.org/)
- **Styling**: [Tailwind CSS 3.3](https://tailwindcss.com/)
- **State Management**: [Zustand 4.5](https://zustand-demo.pmnd.rs/)
- **Animation**: [Framer Motion 10.16](https://www.framer.com/motion/)
- **Type Checking**: [Typescript 5](https://www.typescriptlang.org/)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tractian-challenge.git
   ```
2. Install dependencies:
   ```bash
   cd tractian-challenge
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🎯 Usage

1. Access the application at `http://localhost:3000`.
2. Navigate through the tree view to explore locations, assets, and components.
3. Use the available filters to refine your search for specific sensors or critical alerts.

## 📡 API Endpoints

The project uses a mock API for demonstration:

- `/companies`: Returns a list of companies.
- `/companies/:companyId/locations`: Returns locations associated with the specified company.
- `/companies/:companyId/assets`: Returns assets linked to the specified company.

## 📝 Improvements

Given more time, I would focus on:

- Implementing advanced tree virtualization techniques to further enhance performance.
- Adding more granular filtering options for better data control.
- Improving accessibility features for a broader range of users.

## 🎨 Design

[View the Figma Design](https://www.figma.com/file/F52Yv8RmGoGOYcV9CiuIZ1/%5BCareers%5D-Frontend-Challenge-v2?type=design&node-id=0-1&mode=design&t=r3n2A4W0ZFUwVjAs-0)

<!-- Include a video demo of the application if available -->

## License

This project is licensed under the MIT License.
