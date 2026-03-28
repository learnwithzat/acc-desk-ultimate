/** @format */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

interface NavModule {
	id: string;
	label: string;
	subLinks: { href: string; label: string }[];
}

const MENU_CONFIG: NavModule[] = [
	{
		id: 'Accounting',
		label: 'Accounting & Finance',
		subLinks: [
			{ href: '/chart-of-accounts', label: 'Chart of Accounts' },
			{ href: '/general-ledger', label: 'General Ledger' },
			{ href: '/accounts-payable', label: 'Accounts Payable' },
			{ href: '/accounts-receivable', label: 'Accounts Receivable' },
			{ href: '/invoices', label: 'Invoicing / Billing' },
			{ href: '/payments', label: 'Payments & Receipts' },
			{ href: '/bank-reconciliation', label: 'Bank Reconciliation' },
			{ href: '/fixed-assets', label: 'Fixed Assets' },
			{ href: '/budgeting', label: 'Budgeting & Forecasting' },
			{ href: '/expense-management', label: 'Expense Management' },
			{ href: '/tax-management', label: 'Tax Management' },
			{ href: '/financial-reports', label: 'Financial Reports' },
		],
	},
	{
		id: 'Inventory',
		label: 'Inventory & Warehouse',
		subLinks: [
			{ href: '/products', label: 'Products / Items' },
			{ href: '/categories', label: 'Categories' },
			{ href: '/units', label: 'Units / UOM' },
			{ href: '/stock-adjustment', label: 'Stock Adjustment' },
			{ href: '/stock-transfer', label: 'Stock Transfer' },
			{ href: '/multi-warehouse', label: 'Multi-Warehouse Management' },
			{ href: '/inventory-valuation', label: 'Inventory Valuation' },
			{ href: '/batch-serial-tracking', label: 'Batch / Serial Tracking' },
		],
	},
	{
		id: 'Sales',
		label: 'Sales & CRM',
		subLinks: [
			{ href: '/customers', label: 'Customer Management' },
			{ href: '/sales-orders', label: 'Sales Orders' },
			{ href: '/quotations', label: 'Quotations / Estimates' },
			{ href: '/delivery', label: 'Shipping / Delivery' },
			{ href: '/crm', label: 'CRM / Leads' },
		],
	},
	{
		id: 'Purchasing',
		label: 'Purchasing & Procurement',
		subLinks: [
			{ href: '/suppliers', label: 'Supplier / Vendor Management' },
			{ href: '/purchase-orders', label: 'Purchase Orders' },
			{ href: '/goods-receipt', label: 'Goods Receipt' },
			{ href: '/supplier-payments', label: 'Supplier Payments' },
		],
	},
	{
		id: 'Manufacturing',
		label: 'Manufacturing / Production',
		subLinks: [
			{ href: '/bom', label: 'Bill of Materials (BOM)' },
			{ href: '/work-orders', label: 'Work Orders' },
			{ href: '/production-orders', label: 'Production Orders' },
			{ href: '/mrp', label: 'Material Requirement Planning' },
		],
	},
	{
		id: 'HR',
		label: 'Human Resources',
		subLinks: [
			{ href: '/employees', label: 'Employee Management' },
			{ href: '/roles-permissions', label: 'Roles & Permissions' },
			{ href: '/attendance', label: 'Attendance / Time Tracking' },
			{ href: '/leave-management', label: 'Leave Management' },
			{ href: '/payroll', label: 'Payroll' },
		],
	},
	{
		id: 'Projects',
		label: 'Projects / Services',
		subLinks: [
			{ href: '/project-planning', label: 'Project Planning' },
			{ href: '/task-management', label: 'Task Management' },
			{ href: '/time-expense', label: 'Time & Expense Tracking' },
			{ href: '/project-billing', label: 'Project Billing' },
		],
	},
	{
		id: 'Ecommerce',
		label: 'E-commerce / POS',
		subLinks: [
			{ href: '/online-store', label: 'Online Store Integration' },
			{ href: '/pos', label: 'Point of Sale' },
			{ href: '/customer-portal', label: 'Customer Portal' },
			{ href: '/payment-gateway', label: 'Payment Gateway' },
		],
	},
	{
		id: 'Logistics',
		label: 'Supply Chain / Logistics',
		subLinks: [
			{ href: '/shipping-delivery', label: 'Shipping & Delivery' },
			{ href: '/fleet-management', label: 'Fleet / Vehicle Management' },
			{ href: '/route-optimization', label: 'Route Optimization' },
			{ href: '/supplier-coordination', label: 'Supplier Coordination' },
		],
	},
	{
		id: 'System',
		label: 'System / Settings',
		subLinks: [
			{ href: '/users', label: 'User Management' },
			{ href: '/roles', label: 'Roles & Permissions' },
			{ href: '/multi-company', label: 'Multi-Company / Branch' },
			{
				href: '/localization',
				label: 'Localization (Currency / Language / Taxes)',
			},
			{ href: '/workflow', label: 'Workflow Automation' },
			{ href: '/audit-logs', label: 'Audit Logs' },
			{ href: '/settings', label: 'Settings' },
		],
	},
];

export default function Sidebar() {
	const pathname = usePathname();
	const [openModule, setOpenModule] = useState<string | null>(null);

	const toggleModule = (module: string) => {
		setOpenModule(openModule === module ? null : module);
	};

	useEffect(() => {
		const activeModule = MENU_CONFIG.find((module) =>
			module.subLinks.some((link) => link.href === pathname),
		);
		if (activeModule) {
			setOpenModule(activeModule.id);
		}
	}, [pathname]);

	const getLinkClass = (path: string, isSubLink = false) => {
		const isActive = pathname === path;
		const activeStyles =
			isActive ?
				'bg-blue-800 dark:bg-gray-700 font-medium'
			:	'hover:bg-blue-500 dark:hover:bg-gray-800';
		return `${isSubLink ? 'block py-1 px-2 rounded' : 'block py-2 px-4 rounded'} ${activeStyles} transition-colors`;
	};

	return (
		<aside className='w-64 bg-blue-600 dark:bg-gray-900 text-white flex flex-col md:flex-shrink-0 h-full transition-colors duration-200'>
			<div className='p-6 text-2xl font-bold border-b border-blue-500 dark:border-gray-800'>
				AccDesk Ultimate
			</div>

			<nav className='flex-1 p-4 space-y-2 overflow-auto'>
				{/* Dashboard */}
				<Link
					href='/'
					className={getLinkClass('/')}>
					Dashboard
				</Link>

				{MENU_CONFIG.map((module) => (
					<div key={module.id}>
						<button
							onClick={() => toggleModule(module.id)}
							className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
							{module.label}
							{openModule === module.id ?
								<HiChevronUp />
							:	<HiChevronDown />}
						</button>
						{openModule === module.id && (
							<div className='ml-4 mt-2 space-y-1 text-sm'>
								{module.subLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className={getLinkClass(link.href, true)}>
										{link.label}
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</nav>

			<div className='p-4 border-t border-blue-500 dark:border-gray-800 text-sm transition-colors'>
				© {new Date().getFullYear()}
			</div>
		</aside>
	);
}
