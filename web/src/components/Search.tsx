import { useEffect, useState } from "react";
interface SearchProps {
  items?: Array<File>;
  setFilteredFiles: Function;
}
function Search({ items, setFilteredFiles }: SearchProps) {
  const [search, setSearch] = useState("");

  const searchFiles = (search: string) => {
    if (!items) return;
    if (!search) return setFilteredFiles(items);

    const flatItems = (items: Array<File>): Array<File> => {
      return items
        .flatMap((item: File): Array<File> => {
          return item.children ? [item, ...flatItems(item.children)] : [item];
        })
        .flat();
    };

    const filteredItems = flatItems(items).filter((file) => {
      if (
        file.name.toLowerCase().includes(search.toLowerCase()) ||
        file.extension?.toLowerCase().includes(search.toLowerCase())
      )
        return true;

      return false;
    });

    setFilteredFiles(filteredItems);
  };

  useEffect(() => {
    searchFiles(search);
  }, [search, items]);

  return (
    <>
      <input
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </>
  );
}
export default Search;
