/** @format */

'use client';

import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export default function Sidebar() {
	const pathname = usePathname();
	const [openModule, setOpenModule] = useState<string | null>(null);

	const toggleModule = (module: string) =null : module);
	};

	// Auto-expand module if a sub-link is active
	useEffect(() => {
		const modulePaths: Record<string, string[]> = {
			Accounting: [
				'/chart-of-accounts',
				'/general-ledger',
				'/accounts-payable',
				'/accounts-receivable',
				'/invoices',
				'/payments',
				'/bank-reconciliation',
				'/fixed-assets',
				'/budgeting',
				'/expense-management',
				'/tax-management',
				'/financial-reports',
			],
			Inventory: [
				'/products',
				'/categories',
				'/units',
				'/stock-adjustment',
				'/stock-transfer',
				'/multi-warehouse',
				'/inventory-valuation',
				'/batch-serial-tracking',
			],
			Sales: ['/customers', '/sales-orders', '/quotations', '/delivery', '/crm'],
			Purchasing: [
				'/suppliers',
				'/purchase-orders',
				'/goods-receipt',
				'/supplier-payme>ts',
			],
			Man facturing: ['/bom', '/work-orders', '/production-orders', '/mrp'],
			HR: [
				'/employees',
				'/roles-permissions',
				'/attendance',
				'/leave-management',
				'/payro{',
			],
			Projects:[
				'/project-planning',
				'/task-management',
				'/time-expense',
				'/project-billing',
			],
			Ecommerce ['/online-store', '/pos','/custoer-prtal', '/payment-gateway'],
			Logistics: [
				'/shipping-elivery',
				'/fleet-management',
				'/rote-optimization',
				'/suppir-coordination',
			],
			System: ['/users', '/roles', '/multi-company', '/localization', '/workflow', '/audit-logs', '/settings'],
		};

		for (const [module, paths] of Object.entries(modulePaths)) {
			if (paths.includes(pathname)) {
				setOpenModule(module;
				break
			}
		}
		, [pathname])setOpenModule(openModule === module ? null : module);
	};

	// Auto-expand module if a sub-link is active
	useEffect(() => {
		const modulePaths: Record<string, string[]> = {
			Accounting: [
				'/chart-of-accounts',
				'/general-ledger',
				'/accounts-payable',
				'/accounts-receivable',
				'/invoices',
				'/payments',
				'/bank-reconciliation',
				'/fixed-assets',
				'/budgeting',
				'/expense-management',
				'/tax-management',
				'/financial-reports',
			],
			Inventory: [
				'/products',
				'/categories',
				'/units',
				'/stock-adjustment',
				'/stock-transfer',
				'/multi-warehouse',
				'/inventory-valuation',
				'/batch-serial-tracking',
			],
			Sales: ['/customers', '/sales-orders', '/quotations', '/delivery', '/crm'],
			Purchasing: [
				'/suppliers',
				'/purchase-orders',
				'/goods-receipt',
				'/supplier-payments',
			],
			Manufacturing: ['/bom', '/work-orders', '/production-orders', '/mrp'],
			HR: [
				'/employees',
				'/roles-permissions',
				'/attendance',
				'/leave-management',
				'/payroll',
			],
			Projects: [
				'/project-planning',
				'/task-management',
				'/time-expense',
				'/project-billing',
			],
			Ecommerce: ['/online-store', '/pos', '/customer-portal', '/payment-gateway'],
			Logistics: [
				'/shipping-delivery',
				'/fleet-management',
				'/route-optimization',
				'/supplier-coordination',
			],
			System: ['/users', '/roles', '/multi-company', '/localization', '/workflow', '/audit-logs', '/settings'],
		};

		for (const [module, paths] of Object.entries(modulePaths)) {
			if (paths.includes(pathname)) {
				setOpenModule(module);
				break;
			}
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

				{/* Accounting & Finance */}
				<div>
					<button
						onClick={() => toggleModule('Accounting')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Accounting & Finance
						{openModule === 'Accounting' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Accounting' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/chart-of-accounts'
								className={getLinkClass('/chart-of-accounts', true)}>
								Chart of Accounts
							</Link>
							<Link
								href='/general-ledger'
								className={getLinkClass('/general-ledger', true)}>
								General Ledger
							</Link>
							<Link
								href='/accounts-payable'
								className={getLinkClass('/accounts-payable', true)}>
								Accounts Payable
							</Link>
							<Link
								href='/accounts-receivable'
								className={getLinkClass('/accounts-receivable', true)}>
								Accounts Receivable
							</Link>
							<Link
								href='/invoices'
								className={getLinkClass('/invoices', true)}>
								Invoicing / Billing
							</Link>
							<Link
								href='/payments'
								className={getLinkClass('/payments', true)}>
								Payments & Receipts
							</Link>
							<Link
								href='/bank-reconciliation'
								className={getLinkClass('/bank-reconciliation', true)}>
								Bank Reconciliation
							</Link>
							<Link
								href='/fixed-assets'
								className={getLinkClass('/fixed-assets', true)}>
								Fixed Assets
							</Link>
							<Link
								href='/budgeting'
								className={getLinkClass('/budgeting', true)}>
								Budgeting & Forecasting
							</Link>
							<Link
								href='/expense-management'
								className={getLinkClass('/expense-management', true)}>
								Expense Management
							</Link>
							<Link
								href='/tax-management'
								className={getLinkClass('/tax-management', true)}>
								Tax Management
							</Link>
							<Link
								href='/financial-reports'
								className={getLinkClass('/financial-reports', true)}>
								Financial Reports
							</Link>
						</div>
					)}
				</div>

				{/* Inventory & Warehouse */}
				<div>
					<button
						onClick={() => toggleModule('Inventory')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Inventory & Warehouse
						{openModule === 'Inventory' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Inventory' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/products'
								className={getLinkClass('/products', true)}>
								Products / Items
							</Link>
							<Link
								href='/categories'
								className={getLinkClass('/categories', true)}>
								Categories
							</Link>
							<Link
								href='/units'
								className={getLinkClass('/units', true)}>
								Units / UOM
							</Link>
							<Link
								href='/stock-adjustment'
								className={getLinkClass('/stock-adjustment', true)}>
								Stock Adjustment
							</Link>
							<Link
								href='/stock-transfer'
								className={getLinkClass('/stock-transfer', true)}>
								Stock Transfer
							</Link>
							<Link
								href='/multi-warehouse'
								className={getLinkClass('/multi-warehouse', true)}>
								Multi-Warehouse Management
							</Link>
							<Link
								href='/inventory-valuation'
								className={getLinkClass('/inventory-valuation', true)}>
								Inventory Valuation
							</Link>
							<Link
								href='/batch-serial-tracking'
								className={getLinkClass('/batch-serial-tracking', true)}>
								Batch / Serial Tracking
							</Link>
						</div>
					)}
				</div>

				{/* Sales & CRM */}
				<div>
					<button
						onClick={() => toggleModule('Sales')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Sales & CRM
						{openModule === 'Sales' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Sales' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/customers'
								className={getLinkClass('/customers', true)}>
								Customer Management
							</Link>
							<Link
								href='/sales-orders'
								className={getLinkClass('/sales-orders', true)}>
								Sales Orders
							</Link>
							<Link
								href='/quotations'
								className={getLinkClass('/quotations', true)}>
								Quotations / Estimates
							</Link>
							<Link
								href='/delivery'
								className={getLinkClass('/delivery', true)}>
								Shipping / Delivery
							</Link>
							<Link
								href='/crm'
								className={getLinkClass('/crm', true)}>
								CRM / Leads
							</Link>
						</div>
					)}
				</div>

				{/* Purchasing & Procurement */}
				<div>
					<button
						onClick={() => toggleModule('Purchasing')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Purchasing & Procurement
						{openModule === 'Purchasing' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Purchasing' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/suppliers'
								className={getLinkClass('/suppliers', true)}>
								Supplier / Vendor Management
							</Link>
							<Link
								href='/purchase-orders'
								className={getLinkClass('/purchase-orders', true)}>
								Purchase Orders
							</Link>
							<Link
								href='/goods-receipt'
								className={getLinkClass('/goods-receipt', true)}>
								Goods Receipt
							</Link>
							<Link
								href='/supplier-payments'
								className={getLinkClass('/supplier-payments', true)}>
								Supplier Payments
							</Link>
						</div>
					)}
				</div>

				{/* Manufacturing / Production */}
				<div>
					<button
						onClick={() => toggleModule('Manufacturing')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Manufacturing / Production
						{openModule === 'Manufacturing' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Manufacturing' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/bom'
								className={getLinkClass('/bom', true)}>
								Bill of Materials (BOM)
							</Link>
							<Link
								href='/work-orders'
								className={getLinkClass('/work-orders', true)}>
								Work Orders
							</Link>
							<Link
								href='/production-orders'
								className={getLinkClass('/production-orders', true)}>
								Production Orders
							</Link>
							<Link
								href='/mrp'
								className={getLinkClass('/mrp', true)}>
								Material Requirement Planning
							</Link>
						</div>
					)}
				</div>

				{/* HR & Payroll */}
				<div>
					<button
						onClick={() => toggleModule('HR')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Human Resources
						{openModule === 'HR' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'HR' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/employees'
								className={getLinkClass('/employees', true)}>
								Employee Management
							</Link>
							<Link
								href='/roles-permissions'
								className={getLinkClass('/roles-permissions', true)}>
								Roles & Permissions
							</Link>
							<Link
								href='/attendance'
								className={getLinkClass('/attendance', true)}>
								Attendance / Time Tracking
							</Link>
							<Link
								href='/leave-management'
								className={getLinkClass('/leave-management', true)}>
								Leave Management
							</Link>
							<Link
								href='/payroll'
								className={getLinkClass('/payroll', true)}>
								Payroll
							</Link>
						</div>
					)}
				</div>

				{/* Projects / Service */}
				<div>
					<button
						onClick={() => toggleModule('Projects')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Projects / Services
						{openModule === 'Projects' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Projects' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/project-planning'
								className={getLinkClass('/project-planning', true)}>
								Project Planning
							</Link>
							<Link
								href='/task-management'
								className={getLinkClass('/task-management', true)}>
								Task Management
							</Link>
							<Link
								href='/time-expense'
								className={getLinkClass('/time-expense', true)}>
								Time & Expense Tracking
							</Link>
							<Link
								href='/project-billing'
								className={getLinkClass('/project-billing', true)}>
								Project Billing
							</Link>
						</div>
					)}
				</div>

				{/* E-commerce / POS */}
				<div>
					<button
						onClick={() => toggleModule('Ecommerce')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						E-commerce / POS
						{openModule === 'Ecommerce' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Ecommerce' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/online-store'
								className={getLinkClass('/online-store', true)}>
								Online Store Integration
							</Link>
							<Link
								href='/pos'
								className={getLinkClass('/pos', true)}>
								Point of Sale
							</Link>
							<Link
								href='/customer-portal'
								className={getLinkClass('/customer-portal', true)}>
								Customer Portal
							</Link>
							<Link
								href='/payment-gateway'
								className={getLinkClass('/payment-gateway', true)}>
								Payment Gateway
							</Link>
						</div>
					)}
				</div>

				{/* Supply Chain / Logistics */}
				<div>
					<button
						onClick={() => toggleModule('Logistics')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						Supply Chain / Logistics
						{openModule === 'Logistics' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'Logistics' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/shipping-delivery'
								className={getLinkClass('/shipping-delivery', true)}>
								Shipping & Delivery
							</Link>
							<Link
								href='/fleet-management'
								className={getLinkClass('/fleet-management', true)}>
								Fleet / Vehicle Management
							</Link>
							<Link
								href='/route-optimization'
								className={getLinkClass('/route-optimization', true)}>
								Route Optimization
							</Link>
							<Link
								href='/supplier-coordination'
								className={getLinkClass('/supplier-coordination', true)}>
								Supplier Coordination
							</Link>
						</div>
					)}
				</div>

				{/* System / Settings */}
				<div>
					<button
						onClick={() => toggleModule('System')}
						className='w-full flex justify-between items-center py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-gray-800 transition-colors'>
						System / Settings
						{openModule === 'System' ?
							<HiChevronUp />
						:	<HiChevronDown />}
					</button>
					{openModule === 'System' && (
						<div className='ml-4 mt-2 space-y-1 text-sm'>
							<Link
								href='/users'
								className={getLinkClass('/users', true)}>
								User Management
							</Link>
							<Link
								href='/roles'
								className={getLinkClass('/roles', true)}>
								Roles & Permissions
							</Link>
							<Link
								href='/multi-company'
								className={getLinkClass('/multi-company', true)}>
								Multi-Company / Branch
							</Link>
							<Link
								href='/localization'
								className={getLinkClass('/localization', true)}>
								Localization (Currency / Language / Taxes)
							</Link>
							<Link
								href='/workflow'
								className={getLinkClass('/workflow', true)}>
								Workflow Automation
							</Link>
							<Link
								href='/audit-logs'
								className={getLinkClass('/audit-logs', true)}>
								Audit Logs
							</Link>
							<Link
								href='/settings'
								className={getLinkClass('/settings', true)}>
								Settings
							</Link>
						</div>
					)}
				</div>
			</nav>

			<div className='p-4 border-t border-blue-500 dark:border-gray-800 text-sm transition-colors'>
				© {new Date().getFullYear()}
			</div>
		</aside>
	);
}
