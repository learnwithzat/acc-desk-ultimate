/** @format */

'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function SettingsPage() {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Ensure component is mounted to avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toggleTheme = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className='space-y-6'>
			<h1 className='text-3xl font-bold'>Settings</h1>
			{/* Theme Section */}
			<section className='bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded shadow'>
				<h2 className='text-xl font-semibold mb-4'>Theme</h2>
				<div className='flex items-center gap-4'>
					<span>Current Theme: {theme}</span>
					<button
						onClick={toggleTheme}
						className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'>
						Toggle Theme
					</button>
				</div>
			</section>
			{/* User Account Section */}
			<section className='bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow transition-colors duration-200'>
				<h2 className='text-xl font-semibold mb-4'>User Account</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<label className='block text-sm font-medium mb-1'>Username</label>
						<input
							type='text'
							placeholder='john.doe'
							className='w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Email</label>
						<input
							type='email'
							placeholder='john@example.com'
							className='w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Password</label>
						<input
							type='password'
							placeholder='********'
							className='w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'
						/>
					</div>
				</div>
				<button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
					Save Changes
				</button>
			</section>

			{/* Company Info Section */}
			<section className='bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow transition-colors duration-200'>
				<h2 className='text-xl font-semibold mb-4'>Company Info</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<div>
						<label className='block text-sm font-medium mb-1'>
							Company Name
						</label>
						<input
							type='text'
							placeholder='My Company'
							className='w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Address</label>
						<input
							type='text'
							placeholder='123 Main St, City'
							className='w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Phone</label>
						<input
							type='text'
							placeholder='+1234567890'
							className='w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Website</label>
						<input
							type='text'
							placeholder='https://example.com'
							className='w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'
						/>
					</div>
				</div>
				<button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
					Save Company Info
				</button>
			</section>

			{/* Preferences Section */}
			<section className='bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow transition-colors duration-200'>
				<h2 className='text-xl font-semibold mb-4'>Preferences</h2>
				<div className='space-y-3'>
					<div className='flex items-center justify-between'>
						<span>Enable Notifications</span>
						<input
							type='checkbox'
							className='h-5 w-5'
						/>
					</div>
					<div className='flex items-center justify-between'>
						<span>Dark Mode</span>
						<input
							type='checkbox'
							checked={resolvedTheme === 'dark'}
							onChange={toggleTheme}
							className='h-5 w-5'
						/>
					</div>
					<div className='flex items-center justify-between'>
						<span>Default Currency</span>
						<select className='border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded p-2'>
							<option>USD</option>
							<option>EUR</option>
							<option>GBP</option>
						</select>
					</div>
				</div>
				<button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
					Save Preferences
				</button>
			</section>
		</div>
	);
}
