// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">پیشخوان</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow">
            <h3 className="font-medium">آیتم {item}</h3>
            <p className="text-gray-600 mt-2">
              این یک کارت نمونه در پیشخوان است.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
