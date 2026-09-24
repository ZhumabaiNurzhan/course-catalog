# Course Catalog — Advanced Web Technologies (Lab 1)

This project is a semester course catalog application built as part of the "Advanced Web Technologies" course, practicing modern web development patterns with Next.js 16 and React.

## 🚀 Features Implemented
* **Project Setup:** Initialized with Next.js 16 (App Router), TypeScript, and Tailwind CSS.
* **File-Based Routing:** 
  * `/` — Home page.
  * `/about` — Information about the project and course.
  * `/courses` — List of available technical courses.
  * `/courses/[id]` — Dynamic route for individual course details with static generation (`generateStaticParams`).
* **Server & Client Component Architecture:** Most parts are Server Components for performance, while the interactive like button (`LikeButton.tsx`) and course search feature (`CourseList.tsx`) are Client Components.
* **UX & Error Handling:** Configured `loading.tsx` (utilizing a simulated 300ms backend delay) and `not-found.tsx` for handling invalid course IDs.
* **Bonus:** Client-side real-time course title search and custom smooth Tailwind CSS styling.

## 🛠️ Tech Stack
* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Deployment:** [Add Vercel deployment link here if deployed]

## 💻 Getting Started
1. Clone the repository:
   ```bash
   git clone [https://github.com/ZhumabaiNurzhan/course-catalog.git](https://github.com/ZhumabaiNurzhan/course-catalog.git) 