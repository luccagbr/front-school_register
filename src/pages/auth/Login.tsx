import { InfoCompany } from "./components/InfoCompany";
import { LoginInfo } from "./components/LoginInfo";

export function Login() {
    // const { control } = useForm;

    return (
        <div className='w-full h-full block sm:flex'>
            <div className='w-full sm:w-3/5 h-auto sm:h-full flex'>
                <InfoCompany />
            </div>
            <div className='flex flex-1 h-auto sm:h-full items-center border border-red-400'>
                <LoginInfo />
            </div>
        </div>
    );
}
