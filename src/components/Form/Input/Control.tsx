import { ComponentProps } from "react";

interface TControlProps extends React.ComponentProps<"input"> {
    name: string;
    type?: "text" | "password";
}

export const Control: React.FC<TControlProps> = ({ name, type = "text", ...props }) => {
    return <input name={name} type={type} {...props} />;
};

export default Control;
