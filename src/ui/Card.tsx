import { ReactNode } from "react";


export const Card = ({ children}: {children: ReactNode}) => {
  return (
    // <div className="bg-gray-200 rounded-xl overflow-hidden dark:bg-gray-800 dark:text-white">
     <div className="bg-gray-200 rounded-xl overflow-hidden">
       {children}
    </div>
  );
};
