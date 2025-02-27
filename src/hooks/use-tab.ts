import { useState } from "react";

const useTab = (initialTab: number = 0) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab);

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  return { activeTab, changeTab };
};

export default useTab;
