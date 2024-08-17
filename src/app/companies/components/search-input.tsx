import Image from "next/image";
import React, { useState } from "react";
import { useFilterStore } from "../stores/useFilterStore";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  placeholder = "Buscar...",
  className = "",
}: SearchInputProps) {
  const { handleSearchSubmit, clearSearch } = useFilterStore();
  const [localInput, setLocalInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setLocalInput(e.target.value);
      handleSearchSubmit("");
      return;
    }

    setLocalInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit(localInput);
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-b-none border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
        value={localInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      {localInput ? (
        <button
          onClick={() => {
            clearSearch();
            setLocalInput("");
          }}
          className="absolute right-2 top-2"
        >
          <Image
            src="/assets/icons/close-icon.svg"
            alt="Close icon"
            width={14}
            height={14}
            className="pt-1"
          />
        </button>
      ) : (
        <button
          onClick={() => handleSearchSubmit(localInput)}
          className="absolute right-2 top-2"
        >
          <Image
            src="/assets/icons/search-icon.svg"
            alt="Search icon"
            width={14}
            height={14}
            className="pt-1"
          />
        </button>
      )}
    </div>
  );
}
