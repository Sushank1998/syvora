import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { followerAdd } from "../features/followingSlice"; 

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();

  const data = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Redux",
    "GraphQL",
    "MongoDB",
    "Firebase",
  ];

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setResults([]);
      setQuery("")
      return;
    }
    setResults(
      data.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleSelect = (item) => {
    setQuery(item);
    console.log("Selected Item:", item);
    dispatch(followerAdd(item)); 
    setHide(false);
  };

  return (
    <div className="relative flex items-center border border-gray-300 px-3 py-2 bg-black">
      <FiSearch className="text-gray-500" />
      <input
        type="text"
        placeholder="Search friend..."
        className="ml-2 w-full outline-none text-white"
        onFocus={() => setHide(true)}
        onBlur={() => setTimeout(() => setHide(false), 200)}
        value={query}
        onChange={handleSearch}
      />

      {hide && results.length > 0 && (
        <ul className="absolute right-12 top-12 w-72 bg-white border border-gray-300 mt-1 shadow-md z-10">
          {results.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
