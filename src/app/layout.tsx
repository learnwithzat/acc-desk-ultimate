/** @format */

'use client';

import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from '@/components/MainLayout';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body>
				<ThemeProvider>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
