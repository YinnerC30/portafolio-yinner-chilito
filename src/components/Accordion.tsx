import React, { useState } from "react";

export const AccordionList: React.FC<{ list: string[] }> = ({ list = [] }) => {
  return (
    <ul key={list.length}>
      {list.map((item: string) => (
        <li key={item} className="list-disc ml-10">
          {item}
        </li>
      ))}
    </ul>
  );
};

interface ListItem {
  label: string;
  items: string[];
}

interface Props {
  lists: ListItem[];

  children?: React.ReactNode;
}

export const Accordion: React.FC<Props> = ({ lists, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <button
          type="button"
          className="cursor-pointer w-full flex items-end justify-center border-dashed border-t-2 border-t-slate-500 mt-4 "
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="accordion-content bg-slate-700 p-5 rounded-md ">
          {children}
          {lists.map((list) => (
            <>
              <h4 className="my-4 font-bold">{list.label}:</h4>
              <AccordionList list={list.items} />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
