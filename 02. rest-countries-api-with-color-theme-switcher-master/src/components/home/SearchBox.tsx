import { PrimitiveAtom, useAtom } from "jotai";

interface Props {
  keyword: PrimitiveAtom<string>;
}

export default function SearchBox({ keyword }: Props) {
  const [atom, setAtom] = useAtom<string>(keyword);

  return (
    <input
      className="placeholder: text-gray-600 bg-white rounded-sm p-3 shadow-md shadow-gray-200"
      placeholder="Search for a country..."
      type="search"
      name="search"
      size={50}
      value={atom}
      onChange={(e) => setAtom(e.target.value)}
    />
  );
}
