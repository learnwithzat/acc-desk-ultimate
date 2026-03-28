/** @format */

import React from 'react';

export default function DashboardPage() {
	return (
		<div className='space-y-6'>
			<h1 className='text-3xl font-bold'>Dashboard</h1>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div className='p-4 bg-white dark:bg-gray-800 dark:text-white rounded shadow transition-colors duration-200'>
					<h3 className='text-lg font-medium'>Total Customers</h3>
					<p className='text-3xl font-bold mt-2'>120</p>
				</div>

				<div className='p-4 bg-white dark:bg-gray-800 dark:text-white rounded shadow transition-colors duration-200'>
					<h3 className='text-lg font-medium'>Total Invoices</h3>
					<p className='text-3xl font-bold mt-2'>85</p>
				</div>

				<div className='p-4 bg-white dark:bg-gray-800 dark:text-white rounded shadow transition-colors duration-200'>
					<h3 className='text-lg font-medium'>Total Revenue</h3>
					<p className='text-3xl font-bold mt-2'>$15,430</p>
				</div>
			</div>

			<div className='mt-6 bg-white dark:bg-gray-800 dark:text-white rounded shadow p-4 transition-colors duration-200'>
				<h3 className='text-lg font-medium mb-2'>Recent Invoices</h3>
				<table className='w-full text-left border-collapse dark:text-gray-200'>
					<thead>
						<tr className='border-b dark:border-gray-700'>
							<th className='py-2 px-4'>Invoice #</th>
							<th className='py-2 px-4'>Customer</th>
							<th className='py-2 px-4'>Amount</th>
							<th className='py-2 px-4'>Status</th>
							<th className='py-2 px-4'>Date</th>
						</tr>
					</thead>
					<tbody>
						<tr className='border-b'>
							<td className='py-2 px-4'>INV-001</td>
							<td className='py-2 px-4'>John Doe</td>
							<td className='py-2 px-4'>$500</td>
							<td className='py-2 px-4 text-green-600 font-semibold'>Paid</td>
							<td className='py-2 px-4'>2026-03-28</td>
						</tr>
						<tr className='border-b'>
							<td className='py-2 px-4'>INV-002</td>
							<td className='py-2 px-4'>Jane Smith</td>
							<td className='py-2 px-4'>$750</td>
							<td className='py-2 px-4 text-yellow-600 font-semibold'>
								Pending
							</td>
							<td className='py-2 px-4'>2026-03-27</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
