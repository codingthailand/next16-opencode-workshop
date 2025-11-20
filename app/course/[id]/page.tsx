import { getCourseById } from "@/services/course-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = await getCourseById(id);

  return (
    <div className="h-full max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/course">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับไปหน้าคอร์สทั้งหมด
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              ฿{course.price.toLocaleString()}
            </Badge>
            {course.duration && (
              <Badge variant="outline" className="text-lg px-4 py-2">
                {course.duration}
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {course.instructor && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                ผู้สอน
              </h2>
              <p className="text-lg text-gray-600">{course.instructor}</p>
            </div>
          )}

          {course.description && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                รายละเอียดคอร์ส
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {course.description}
              </p>
            </div>
          )}

          <div className="pt-6 border-t">
            <Button size="lg" className="w-full md:w-auto">
              สมัครเรียนคอร์สนี้
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
