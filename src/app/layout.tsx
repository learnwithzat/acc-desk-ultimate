/** @format */

import MainLayout from '@/components/MainLayout';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Billing App',
	description: 'Billing and invoice management app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
