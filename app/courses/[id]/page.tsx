import { getCourse } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-2xl bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-slate-600">{course.description}</p>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="text-slate-500 font-medium">Credits: {course.credits}</span>
        {/* Вот здесь передается initialLikes */}
        <LikeButton initialLikes={course.likes} />
      </div>
    </div>
  );
}