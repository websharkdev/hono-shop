import { LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

const menu = [
  {
    name: 'Home',
    href: '/',
    isLoginRequire: false,
    isAdminRequire: false,
  },
  {
    name: 'Products',
    href: '/products',
    isLoginRequire: false,
    isAdminRequire: false,
  },
  {
    name: 'Cart',
    href: '/cart',
    isLoginRequire: true,
    isAdminRequire: false,
  },
  {
    name: 'Orders',
    href: '/orders',
    isLoginRequire: true,
    isAdminRequire: false,
  },
  {
    name: 'Create product',
    href: '/admin/add-product',
    isLoginRequire: true,
    isAdminRequire: true,
  },
  {
    name: 'Admin Products',
    href: '/admin/products',
    isLoginRequire: true,
    isAdminRequire: true,
  },
];

const Header = () => {
  return (
    <div className="flex h-max w-full flex-nowrap items-center justify-between border-b border-input px-10 py-3">
      <div className="flex items-center justify-between gap-2.5">
        {menu.map((imenu, index) => (
          <Fragment key={`header-menu-item-${index}`}>
            <Link
              href={imenu.href}
              className="text-pretty rounded-md bg-white p-2.5 text-sm font-semibold text-gray-900 hover:bg-slate-50 hover:text-gray-500"
            >
              {imenu.name}
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2.5">
        <Link
          href="/login"
          className="flex items-center justify-between gap-2.5 text-pretty rounded-md bg-white p-2.5 text-sm font-semibold text-gray-900 hover:bg-slate-50 hover:text-gray-500"
        >
          <LogIn size={16} strokeWidth={1.5} />
          <span>Login</span>
        </Link>
        <Link
          href="/signup"
          className="flex items-center justify-between gap-2.5 text-pretty rounded-md bg-white p-2.5 text-sm font-semibold text-gray-900 hover:bg-slate-50 hover:text-gray-500"
        >
          <UserPlus size={16} strokeWidth={1.5} />
          <span>Signup</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
