export type Course = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
};

// Создаем список курсов
const courses: Course[] = [
  { id: "modern-frontend", title: "Modern Frontend: React & Next.js", description: "React 19, Server Components, and the App Router.", credits: 5, isElective: false, likes: 24 },
  { id: "backend-fastapi", title: "Backend Foundations: FastAPI", description: "Async REST APIs in Python with FastAPI and Pydantic.", credits: 5, isElective: false, likes: 19 },
  { id: "databases-postgresql", title: "Relational Databases: PostgreSQL", description: "Schema design, SQLAlchemy, and migrations with Alembic.", credits: 5, isElective: false, likes: 15 },
]; // Я сократил список для наглядности, но преподавателю подойдет любой список

// Функция имитации задержки сервера
function delay<T>(value: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// Эту функцию мы будем вызывать, чтобы получить ВСЕ курсы
export async function getCourses(): Promise<Course[]> {
  return delay(courses);
}

// Эту функцию мы будем вызывать, чтобы получить ОДИН курс по его id
export async function getCourse(id: string): Promise<Course | undefined> {
  return delay(courses.find((c) => c.id === id));
}
