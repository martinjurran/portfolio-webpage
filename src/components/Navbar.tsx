import { Icon, LocaleSwitch, ThemeSwitch } from "@/components";
import { localeKey } from "@/config";

type NavbarProps = { locale: localeKey; routes: { name: string; href: string }[] };

export default function Navbar({ locale, routes }: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 flex justify-center pb-4 md:py-4">
      <div className="navbar w-full rounded-menubar bg-base-100/90 py-0 shadow-2xl backdrop-blur md:max-w-xl lg:max-w-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost md:hidden"
              aria-label="Menu"
            >
              <Icon name="Menu" className="size-5" />
            </div>
            <ul className="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow">
              {routes.map((item, index) => (
                <li key={index}>
                  <a key={item.name} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#top" className="text-lg font-semibold">
            Martin Jurran
          </a>
        </div>
        <div className="navbar-left ml-10 hidden md:flex">
          {routes.map((item, index) => (
            <nav key={index} className="menu menu-horizontal px-1">
              <a
                key={item.name}
                href={item.href}
                className={"btn btn-ghost rounded-full text-sm font-light"}
              >
                {item.name}
              </a>
            </nav>
          ))}
        </div>

        <div className="navbar-end h-10 scale-75 gap-3">
        <a
              href="#contact"
              className="btn btn-style-sayhello rounded-lg btn-neutral md:btn-lg"
            >
              Say Hello
            </a>
        </div>
      </div>
    </div>
  );
}
