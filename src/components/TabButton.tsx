import { ReactNode, MouseEventHandler } from "react";

type TabButtonProps = {
  active: boolean;
  selectTab: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active ? "text-white border-b border-slate-400" : "text-[#ADB87E]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
