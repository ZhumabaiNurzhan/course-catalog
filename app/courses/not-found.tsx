import Link from "next/link";

// Next.js покажет эту страницу, если мы вызовем notFound()
export default function CourseNotFound() {
  return (
    <div className="flex flex-col items-center py-20">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Курс не найден</h2>
      <Link href="/courses" className="text-blue-600 underline">
        Вернуться к списку курсов
      </Link>
    </div>
  );
}

