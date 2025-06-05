import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path);

  const breadcrumbItems = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    const label = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { href, label };
  });

  return (
    <nav className="flex py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-[#12D9C6]">
            <HomeIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <Link
              href={item.href}
              className={`ml-2 text-sm font-medium ${
                index === breadcrumbItems.length - 1
                  ? 'text-[#082749]'
                  : 'text-gray-500 hover:text-[#12D9C6]'
              }`}
              aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}