import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2">
          Master the Future of Web
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Explore our advanced curriculum. Learn React, Next.js, AI integration, and robust backend architectures.
        </p>
      </div>
      
      <div className="flex gap-4 pt-4">
        <Link 
          href="/courses" 
          className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
        >
          Explore Courses
        </Link>
        <Link 
          href="/about" 
          className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300"
        >
          About Project
        </Link>
      </div>
    </div>
  );
}