import { ReactNode } from "react";


export const Card = ({ children}: {children: ReactNode}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 dark:text-white">
       {children}
    </div>
  );
};
