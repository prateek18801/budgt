import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
    includeAssets: ['favicon.ico, apple-touch-icon.png, cashtrack.svg'],
    manifest: {
        name: 'Cashtrack',
        short_name: 'Cashtrack',
        description: 'An expense tracking app to manage monthly budget',
        icons: [
            {
                src: '192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: 'apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ],
        theme_color: '#0D3934',
        background_color: '#0D3934',
        scope: '/',
        start_url: '/',
        orientation: 'portrait'
    },
    workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    }
};

export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugin)],
});
