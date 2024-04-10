import { useState } from "react";

interface IImage {
    id: number;
}

export function InfoCompany() {
    const [image, setImage] = useState<number>(0);
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
            setImage((val) => (val = id));
        }
    };

    (function () {
        setInterval(() => {
            console.log("teste");
            let i = images[image];

            handleChangeImage(i.id === 0 ? 1 : i.id === 1 ? 2 : 0);
        }, 10000);
    })();

    return (
        <div className='flex flex-col w-full h-auto sm:h-full bg-green-700 justify-end'>
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
                        className={`w-3 h-3 border border-white rounded-full ${image === 0 ? "bg-white" : ""}`}></button>
                    <button
                        onClick={(_) => handleChangeImage(1)}
                        className={`w-3 h-3 border border-white rounded-full ${image === 1 ? "bg-white" : ""}`}></button>
                    <button
                        onClick={(_) => handleChangeImage(2)}
                        className={`w-3 h-3 border border-white rounded-full ${image === 2 ? "bg-white" : ""}`}></button>
                </div>
            </div>
        </div>
    );
}
