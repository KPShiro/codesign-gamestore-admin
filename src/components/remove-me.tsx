import { useState } from 'react';

const RemoveMe = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-dvh gap-4">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <h1 className="text-3xl font-bold underline">Vite + React</h1>
            <button
                className="rounded h-10 px-4 transition-all select-none active:scale-95 bg-black text-white"
                onClick={() => setCount((count) => count + 1)}
            >
                count is {count}
            </button>
            <p className="bg-black/5 w-fit p-6 rounded">
                Edit <code>src/app.tsx</code> and save to test HMR
            </p>
        </div>
    );
};

export default RemoveMe;
