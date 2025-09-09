import { ActiveLink } from "./ActiveLink";
import { Home, FileQuestion } from "lucide-react";

const navItems = [
  {
    label: "Home",
    icon: <Home />,
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Price",
    href: "/price",
  },
];

export function NavBar() {
  return (
    <nav className="w-full">
      <ul className="flex flex-wrap justify-center gap-4 list-none">
        {navItems.map((item) => {
          console.log('Rendering item:', item.label, item.href);
          return (
            <li key={item.href} className="px-4 hover:bg-blue-400 rounded-md min-w-fit">
              <ActiveLink path={item.href} icon={item.icon} label={item.label} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}