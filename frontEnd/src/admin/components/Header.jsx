// src/admin/components/Header.jsx
export default function Header() {
    return (
      <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Admin</span>
          <img
            src="https://ui-avatars.com/api/?name=Admin"
            alt="Admin Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
    );
  }
  