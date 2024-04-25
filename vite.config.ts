import path from "path";
import react from "@vitejs/plugin-react";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ command, mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react(), svgr()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        server: {
            port: env.PORT ?? 5170,
        },
    };
});
