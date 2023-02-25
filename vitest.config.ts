import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '.',
		},
	},
	test: {
		environment: 'jsdom',
		setupFiles: './__tests__/setup.js',
		include: ['./__tests__/**/*.test.ts', './__tests__/**/*.test.tsx'],
	},
})
