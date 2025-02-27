"use client";

import useTab from "@/hooks/use-tab";
import Image from "next/image";

const tabs = [
  {
    label: "Experience Managing Millions in Ad Spend",
    icon: "/icons/tab-1.svg",
    content: (
      <div className="text-center">
        <h2 className="mb-7">Experience Managing Millions in Ad Spend</h2>
        <p>
          Exceptional results demand more than unparalleled technical expertise.
          Knowing Google Ads inside and out also means knowing how to minimize
          wasted expenses that pad Google’s coffers. Plus we know how to manage
          accounts whose monthly budgets are range from $5k to $500k+. And we
          put that know-how to work for you.
        </p>
      </div>
    ),
  },
  {
    label: "Strategy-First Approach",
    icon: "/icons/tab-2.svg",
    content: (
      <div className="text-center">
        <h2 className="mb-7">Experience Managing Millions in Ad Spend</h2>
        <p>
          Exceptional results demand more than unparalleled technical expertise.
          Knowing Google Ads inside and out also means knowing how to minimize
          wasted expenses that pad Google’s coffers. Plus we know how to manage
          accounts whose monthly budgets are range from $5k to $500k+. And we
          put that know-how to work for you.
        </p>
      </div>
    ),
  },
  {
    label: "Exclusive Google Ads-Only Focus",
    icon: "/icons/tab-3.svg",
    content: (
      <div className="text-center">
        <h2 className="mb-7">Experience Managing Millions in Ad Spend</h2>
        <p>
          Exceptional results demand more than unparalleled technical expertise.
          Knowing Google Ads inside and out also means knowing how to minimize
          wasted expenses that pad Google’s coffers. Plus we know how to manage
          accounts whose monthly budgets are range from $5k to $500k+. And we
          put that know-how to work for you.
        </p>
      </div>
    ),
  },
  {
    label: "Proactive 90-Day Growth Sprints",
    icon: "/icons/tab-4.svg",
    content: (
      <div className="text-center">
        <h2 className="mb-7">Experience Managing Millions in Ad Spend</h2>
        <p>
          Exceptional results demand more than unparalleled technical expertise.
          Knowing Google Ads inside and out also means knowing how to minimize
          wasted expenses that pad Google’s coffers. Plus we know how to manage
          accounts whose monthly budgets are range from $5k to $500k+. And we
          put that know-how to work for you.
        </p>
      </div>
    ),
  },
];

export function MarketingTab() {
  const { activeTab, changeTab } = useTab(1);

  const activeTabContent = tabs[activeTab - 1].content;

  return (
    <section className="section pt-0">
      <div className="container">
        <h2 className="mb-7 max-w-[700px] text-center mx-auto">
          Here’s how we get results that <br />
          <span className="">blow away</span> the competition
        </h2>

        {/* tab buttons */}
        <div className="flex relative border-b border-border/10 overflow-x-auto overflow-y-hidden pb-10">
          {tabs.map((tab, i) => {
            return (
              <div key={tab.label} className="flex-1 min-w-[220px]">
                <button
                  onClick={() => {
                    changeTab(i + 1);
                  }}
                  className="max-w-[200px] mx-auto block"
                >
                  <Image
                    className="mx-auto mb-3"
                    width={52}
                    height={55}
                    src={tab.icon}
                    alt={tab.label}
                  />

                  <span className="font-secondary font-bold text-text-dark text-base">
                    {tab.label}
                  </span>
                </button>
              </div>
            );
          })}

          {/* active tab idication */}
          <div
            className="absolute top-full left-0 h-1 -translate-y-1/2 bg-[#8feef2] flex-none"
            style={{
              width: `${100 / tabs.length}%`,
              transform: `translateX(${(activeTab - 1) * 100}%)`,
            }}
          />
        </div>

        {/* tab content */}
        <div className="mt-10 max-w-[800px] mx-auto">{activeTabContent}</div>
      </div>
    </section>
  );
}
