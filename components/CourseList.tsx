'use client'; 

import { useState } from "react";
import CourseCard from "./CourseCard";
import type { Course } from "@/lib/courses";

type CourseListProps = {
  initialCourses: Course[];
};

export default function CourseList({ initialCourses }: CourseListProps) {
  // Состояние для хранения текста из строки поиска
  const [searchQuery, setSearchQuery] = useState("");

  // Фильтруем курсы: оставляем только те, в названии которых есть введенный текст
  const filteredCourses = initialCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative max-w-xl">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-slate-400">🔍</span>
        </div>
        <input
          type="text"
          placeholder="Search courses by title (e.g. Frontend, API)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm text-slate-700 transition-all"
        />
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              credits={course.credits}
              likes={course.likes}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-3 bg-white rounded-2xl border border-slate-100">
          <span className="text-4xl">📭</span>
          <p className="text-slate-500 text-lg">No courses found matching "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="text-indigo-600 font-medium hover:underline mt-2"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}