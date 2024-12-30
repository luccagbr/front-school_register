import { ComponentProps } from "react";

type TControlProps = {
    name: string;
    type?: "text" | "password";
} & ComponentProps<"input">;

export default function Control({ name, type = "text" }: TControlProps) {
    return <input name={name} type={type} />;
}
