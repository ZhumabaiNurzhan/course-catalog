import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="group block h-full">
      <div className="bg-white rounded-2xl p-6 h-full border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 hover:-translate-y-2 transition-all duration-300 flex flex-col">
        <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
          {title}
        </h2>
        <p className="text-slate-500 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
            <span>📚</span> {credits} Credits
          </span>
          <span className="inline-flex items-center gap-1 text-rose-500 font-medium">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            {likes}
          </span>
        </div>
      </div>
    </Link>
  );
}