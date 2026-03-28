/** @format */

'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className='flex h-screen bg-gray-50'>
			{/* Mobile Overlay */}
			{sidebarOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-30 z-10'
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			{/* Sidebar */}
			<aside
				className={`fixed z-20 top-0 left-0 h-full w-64 bg-blue-600 text-white transform ${
					sidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex md:flex-col`}>
				<div className='p-6 text-2xl font-bold border-b border-blue-500'>
					Billing App
				</div>
				<nav className='flex-1 p-4 space-y-2'>
					<Link
						href='/'
						className='block py-2 px-4 rounded hover:bg-blue-500'>
						Dashboard
					</Link>
					<Link
						href='/invoices'
						className='block py-2 px-4 rounded hover:bg-blue-500'>
						Invoices
					</Link>
					<Link
						href='/customers'
						className='block py-2 px-4 rounded hover:bg-blue-500'>
						Customers
					</Link>
					<Link
						href='/products'
						className='block py-2 px-4 rounded hover:bg-blue-500'>
						Products
					</Link>
				</nav>
				<div className='p-4 border-t border-blue-500 text-sm'>
					© {new Date().getFullYear()}
				</div>
			</aside>

			{/* Main Content */}
			<div className='flex-1 flex flex-col'>
				{/* Top bar */}
				<header className='bg-white shadow-md p-4 flex items-center md:hidden'>
					<button
						onClick={() => setSidebarOpen(!sidebarOpen)}
						className='text-2xl text-blue-600'>
						<HiMenu />
					</button>
					<h1 className='ml-4 text-xl font-bold'>Billing App</h1>
				</header>

				<main className='flex-1 overflow-auto p-6'>{children}</main>
			</div>
		</div>
	);
}
