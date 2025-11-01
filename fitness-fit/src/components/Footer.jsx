export function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container-section flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} VIRIBUS. All rights reserved.</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#programs" className="hover:text-red-600">Programs</a>
          <a href="#plans" className="hover:text-red-600">Plans</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </div>
      </div>
    </footer>
  )
}
