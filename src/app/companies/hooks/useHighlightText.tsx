export const useHighlightText = () => {
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) => (
      <span
        key={index}
        className={
          part.toLowerCase() === query.toLowerCase()
            ? "bg-blue-dark-tractian text-white"
            : ""
        }
      >
        {part}
      </span>
    ));
  };

  return { highlightText };
};
