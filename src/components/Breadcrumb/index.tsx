import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

type Crumb = {
  label: string;
  href?: string; 
};

type Props = {
  crumbs: Crumb[];
};

const Breadcrumb: React.FC<Props> = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb" className="my-6">
      <ol className="flex items-center text-sm text-gray-500 space-x-2 flex-wrap">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <FaChevronRight className="mx-2 text-gray-400" />}
            {crumb.href ? (
              <Link to={crumb.href} className="hover:text-black hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-bold text-black">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;