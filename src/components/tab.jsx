import { useState } from "react";
import Automobile from "./tabcontent/automobile";
import Interiordesign from "./tabcontent/interiordesign";
import Realestate from "./tabcontent/realestate";
import TabHeader from "./tabcontent/tabHeader";
import TabButton from "./tabcontent/tabButton";
import Services from "./tabcontent/services";

const data = [
  { id: "automobile", label: "Automobile Solutions" },
  { id: "realestate", label: "Real Estate Solutions" },
  { id: "interior", label: "Interior Design" },
];
function Tab() {
  const [activeTab, setActiveTab] = useState("interior");
  function collectId(id) {
    setActiveTab(id);
  }
  return (
    <div className="bg-[#e9f0fc] pt-5">
      <div className="w-[90vw] mx-auto px-5">
        <TabHeader />
        {activeTab == "automobile" && <Automobile />}
        {activeTab == "realestate" && <Realestate />}
        {activeTab == "interior" && <Interiordesign />}
      </div>
      <div className="grid grid-cols-3  border-t-2 border-t-[rgb(4,11,113)] mt-28 md:mt-20">
        {data.map((data) => (
          <TabButton
            data={data}
            key={data.id}
            collectId={collectId}
            activeTab={activeTab}
          />
        ))}
      </div>
      <Services />
    </div>
  );
}

export default Tab;
