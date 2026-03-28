/** @format */

'use client';

import React, { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import { HiMenu } from 'react-icons/hi';

interface MainLayoutProps {
	children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className='flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200'>
			{/* Sidebar for desktop */}
			<div className='hidden md:flex'>
				<Sidebar />
			</div>

			{/* Mobile sidebar overlay */}
			{sidebarOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden'
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			{/* Mobile sidebar */}
			<div
				className={`fixed z-20 top-0 left-0 h-full md:hidden transform bg-blue-600 dark:bg-gray-900 text-white w-64 transition-transform duration-300 ${
					sidebarOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-colors duration-200 shadow-xl`}>
				<Sidebar />
			</div>

			{/* Main content */}
			<div className='flex-1 flex flex-col'>
				{/* Top bar for mobile */}
				<header className='bg-white dark:bg-gray-800 dark:text-white shadow-md p-4 flex items-center md:hidden transition-colors duration-200'>
					<button
						onClick={() => setSidebarOpen(!sidebarOpen)}
						className='text-2xl text-blue-600 dark:text-blue-400'>
						<HiMenu />
					</button>
					<h1 className='ml-4 text-xl font-bold'>AccDesk Ultimate</h1>
				</header>

				<main className='flex-1 overflow-auto p-6 text-gray-900 dark:text-gray-100'>
					{children}
				</main>
			</div>
		</div>
	);
}
