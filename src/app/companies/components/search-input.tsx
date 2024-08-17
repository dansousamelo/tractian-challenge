import Image from "next/image";
import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: any) => void;
  onSubmit: () => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = "Buscar...",
  className = "",
}: SearchInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border rounded-b-none border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {value ? (
        <button onClick={onClear} className="absolute right-2 top-2">
          <Image
            src="/assets/icons/close-icon.svg"
            alt="Close icon"
            width={14}
            height={14}
            className="pt-1"
          />
        </button>
      ) : (
        <button onClick={onSubmit} className="absolute right-2 top-2">
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
