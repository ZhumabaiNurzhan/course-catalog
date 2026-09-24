import { getCourses } from "@/lib/courses";
import CourseList from "@/components/CourseList";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Available Courses</h1>
        <p className="text-slate-500 text-lg">Find the perfect course to advance your skills.</p>
      </div>
      
      <CourseList initialCourses={courses} />
    </div>
  );
}