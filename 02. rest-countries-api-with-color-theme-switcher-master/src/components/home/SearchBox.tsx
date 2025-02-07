export default function SearchBox() {
  return (
    <input
      className="placeholder: text-gray-600 bg-white rounded-sm p-3 shadow-md shadow-gray-200"
      placeholder="Search for a country..."
      type="search"
      name="search"
      size={50}
    />
  );
}
