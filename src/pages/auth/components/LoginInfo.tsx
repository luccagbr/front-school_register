import { useForm } from "react-hook-form";
import LogoFaveniTools from "../../../../public/logo_test.svg?react";

export function LoginInfo() {
    const {
        control,
        formState: { errors },
    } = useForm();

    return (
        <div className='flex flex-col w-full h-auto sm:h-4/5 items-center justify-center border border-red-500'>
            <div>
                <LogoFaveniTools width='179px' height='66px' style={{ border: "1px solid red" }} />
            </div>

            <div></div>
        </div>
    );
}
