import { useForm } from "react-hook-form";
import LogoFaveniTools from "../../../../public/logo_test.svg?react";

export function LoginInfo() {
    const {
        control,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <div>
                <LogoFaveniTools width='179px' height='66px' style={{ border: "1px solid red" }} />
            </div>

            <div></div>
        </div>
    );
}
