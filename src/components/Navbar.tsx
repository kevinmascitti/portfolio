export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <h1 className="text-lg sm:text-xl font-bold tracking-tight">Kevin</h1>

      <div className="flex gap-6 text-sm sm:text-base text-gray-600">
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
    </nav>
  )
}