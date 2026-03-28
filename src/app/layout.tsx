/** @format */

import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Billing App',
	description: 'Simple billing and invoice management app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-50 min-h-screen`}>
				<header className='bg-blue-600 text-white p-4 shadow-md'>
					<div className='container mx-auto flex justify-between items-center'>
						<h1 className='text-xl font-bold'>Billing App</h1>
						<nav className='space-x-4'>
							<a
								href='/'
								className='hover:underline'>
								Dashboard
							</a>
							<a
								href='/invoices'
								className='hover:underline'>
								Invoices
							</a>
							<a
								href='/customers'
								className='hover:underline'>
								Customers
							</a>
							<a
								href='/products'
								className='hover:underline'>
								Products
							</a>
						</nav>
					</div>
				</header>

				<main className='container mx-auto p-6'>{children}</main>

				<footer className='bg-gray-100 text-gray-600 p-4 text-center'>
					© {new Date().getFullYear()} Billing App. All rights reserved.
				</footer>
			</body>
		</html>
	);
}
