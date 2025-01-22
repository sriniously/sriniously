import React from "react";

interface GridProps {
  items: {
    title: string;
    link: string;
    header: React.ReactNode;
  }[];
}

const Grid = ({ items }: GridProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <a
          href={item.link}
          key={item.title}
          rel="noopener noreferrer"
          target="_blank"
          className="h-fit w-32 bg-gray-100 p-4 rounded-md overflow-hidden hover:scale-105"
        >
          <div className="h-24 w-24">{item.header}</div>
          <h3 className="mt-2">{item.title}</h3>
        </a>
      ))}
    </div>
  );
};

export default Grid;
