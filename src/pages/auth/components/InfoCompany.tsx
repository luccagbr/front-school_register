import { useRef, useState } from "react";
interface IImage {
    id: number;
    alt: string;
}

export function InfoCompany() {
    const [image, setImage] = useState(0);

    const backgroundRef: React.LegacyRef<HTMLDivElement> | null = useRef(null);

    let images: any = [
        {
            id: 0,
            alt: "Imagem teste 1",
        },
        {
            id: 1,
            alt: "Imagem teste 2",
        },
        {
            id: 2,
            alt: "Imagem teste 3",
        },
    ];

    const handleChangeImage = (id: number) => {
        if (id !== image) {
            backgroundRef.current.style.background =
                id === 0
                    ? "src('https://plus.unsplash.com/premium_photo-1710385174838-f50a7886700d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                    : id === 1
                      ? "src('https://plus.unsplash.com/premium_photo-1674086521319-f0595cc0a578?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
                      : "src('https://images.unsplash.com/photo-1711139299064-f60e2753163f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";

            setImage((val) => (val = id));
        }
    };

    return (
        <div ref={backgroundRef} className='flex flex-col w-full h-auto sm:h-full bg-green-700 justify-end'>
            <div className='flex flex-col w-full items-center h-auto sm:h-2/6 gap-20'>
                <div className='flex flex-col gap-8'>
                    <div className='text-3xl'>
                        <h1 className='font-semibold text-zinc-50'>Bem vindo(a) ao FAVENI TOOLS</h1>
                    </div>

                    <div className='flex w-4/7'>
                        <p className='text-sm w-full text-center text-purple-200'>
                            Desenvolvemos esta ferramenta para você. <br />
                            Nela você poderá ter acesso à diversas funcionalidades que <br />
                            vão te ajudar no dia a dia
                        </p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <button
                        onClick={(_) => handleChangeImage(0)}
                        className={`w-3 h-3 border border-black rounded-full ${image === 0 ? "bg-white" : ""}`}></button>
                    <button
                        onClick={(_) => handleChangeImage(1)}
                        className={`w-3 h-3 border border-black rounded-full ${image === 1 ? "bg-white" : ""}`}></button>
                    <button
                        onClick={(_) => handleChangeImage(2)}
                        className={`w-3 h-3 border border-black rounded-full ${image === 2 ? "bg-white" : ""}`}></button>
                </div>
            </div>
        </div>
    );
}
