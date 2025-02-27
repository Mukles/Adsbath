"use client";

import React, { useState } from "react";

const Accordion = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion ${show && "active"} ${className}`}>
      <button
        className="accordion-header text-xl font-bold"
        onClick={() => setShow(!show)}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={17}
          height={15}
          fill="none"
          className="accordion-icon flex-none size-6"
        >
          <path
            fill="#262626"
            d="M11.053 13.47a3 3 0 0 1-5.1 0L.832 5.179A3 3 0 0 1 3.38.602h10.242a3 3 0 0 1 2.552 4.576l-5.121 8.292Z"
          />
        </svg>
      </button>
      <div className="accordion-content">
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
