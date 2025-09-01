import React from "react";
import { Link } from "react-router-dom";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  crumbs: Crumb[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-4 mt-4">
      <ol className="flex items-center space-x-2 text-quick-silver lg:flex hidden">
        {crumbs.map((crumb, index) => {
          const isLastItem = index === crumbs.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2">
              {!isLastItem ? (
                <Link to={crumb.href || "#"} className="hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-bold text-black">{crumb.label}</span>
              )}

              {!isLastItem && <span>&gt;</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

