export default function NavMenu() {
  return (
    <ul className="flex gap-8 text-white items-center">
      <li className="cursor-pointer">About</li>
      <li className="cursor-pointer">Services</li>
      <li className="cursor-pointer">Projects</li>
      <li
        className="font-fraunces cursor-pointer font-bold text-black bg-white px-6 py-4 rounded-4xl
      hover:bg-[rgba(255,255,255,0.3)] hover:text-white transition-colors duration-300"
      >
        CONTACT
      </li>
    </ul>
  );
}
