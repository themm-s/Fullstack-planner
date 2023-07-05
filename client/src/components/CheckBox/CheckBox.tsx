import { ReactNode } from "react";

interface Props {
  children?: ReactNode,
  className?: string,
  value?: string | boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({ children, className, value, onChange, ...props }: Props) => {
  return (
    <>
      <input type="checkbox" id="checkboxprop" onChange={onChange} className="w-4 h-4 bg-gray-100 border-gray-300 rounded" />
      <label htmlFor="checkboxprop" className={`ml-2 text-gray-900 dark:text-gray-300 ${className}`} {...props}>{children}</label >
    </>
  );
};