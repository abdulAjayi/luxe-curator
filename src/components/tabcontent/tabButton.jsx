function TabButton({ data, collectId, activeTab }) {
  //   console.log(setActiveTab);

  return (
    <div
      className={`p-5 text-center h-full leading-6 font-normal ${activeTab === data.id ? "text-[rgb(255,255,255)] bg-[rgb(4,11,113)]" : "text-[rgb(4,11,113)]"} cursor-pointer `}
      onClick={() => collectId(data.id)}
    >
      <button className="cursor-pointer">{data.label}</button>
    </div>
  );
}

export default TabButton;
