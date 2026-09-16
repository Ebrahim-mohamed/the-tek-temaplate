// components/FormInput.tsx
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

type FormInputProps = InputProps | TextareaProps;

const FormInput = ({
  label,
  name,
  required = false,
  className = "",
  as = "input",
  ...rest
}: FormInputProps) => {
  const baseStyles =
    "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition";

  if (as === "textarea") {
    return (
      <textarea
        id={name}
        name={name}
        placeholder={`${label}${required ? "*" : ""}`}
        required={required}
        className={`${baseStyles} resize-none min-h-[140px] ${className}`}
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      id={name}
      name={name}
      placeholder={`${label}${required ? "*" : ""}`}
      required={required}
      className={`${baseStyles} ${className}`}
      {...(rest as InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};

export default FormInput;