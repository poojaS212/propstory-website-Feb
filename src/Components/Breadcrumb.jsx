import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <div className="flex items-center gap-2 text-md mt-10 text-gray-600">
      <Link
        to="/"
        className="hover:text-black transition"
      >
        Home
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center gap-2">
            <FaChevronRight size={10} />

            {isLast ? (
              <span className="font-medium text-black capitalize">
                {value.replace(/-/g, " ")}
              </span>
            ) : (
              <Link
                to={to}
                className="hover:text-black capitalize"
              >
                {value.replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}