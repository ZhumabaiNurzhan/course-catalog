import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 animate-fade-in">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">About the Project</h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6 text-lg text-slate-600 leading-relaxed">
        <p>
          This catalog is built as a semester project for the <strong className="text-indigo-600 font-semibold">Advanced Web Technologies</strong> course.
        </p>
        <p>
          Currently, it uses Next.js 16 with the App Router, Server/Client components, and mock data. 
          Later in the course, it will be connected to a real Python FastAPI backend for persistent data storage.
        </p>
        
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium">Next.js 16</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium">Tailwind CSS</span>
            <span className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium">TypeScript</span>
          </div>
          <Link href="/courses" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            &larr; Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
}