export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} SQLMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}