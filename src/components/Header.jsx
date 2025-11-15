export default function Header() {
  return (
    <header className="bg-blue-600 text-blue py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* โลโก้ */}
        <div className="flex items-center gap-3">
          <img
            src="src/assets/SPU.png"
            alt="Header"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <h1 className="text-3xl font-extrabold tracking-wide">
            My React App
          </h1>
        </div>

        {/* ปุ่มหรือข้อความด้านขวา (เช่นชื่อผู้ใช้) */}
        <div className="text-lg font-semibold opacity-90">
          Welcome 👋
        </div>
      </div>
    </header>
  );
}
