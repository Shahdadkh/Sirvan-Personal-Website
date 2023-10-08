"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SubMenu = () => {
  const pathname = usePathname();
  const subMenu = [
    { name: "صفحه اصلی", url: "/Home" },
    { name: "بیوگرافی", url: "/Biography" },
    { name: "آلبوم‌ها", url: "/Albums" },
    { name: "گالری", url: "/Gallery" },
    { name: "تماس با ما", url: "/ContactUs" },
  ];
  return (
    <div className="w-full h-12 overflow-hidden backgroundColor1 absolute bottom-0">
      <div className="flex justify-around mt-2 flex-row-reverse">
        {subMenu
          .filter((name) => !name.url.includes(pathname))
          .map((menu, i) => (
            <Link
              href={menu.url}
              key={i}
              className="text-white font-thin text-lg"
            >
              {`[ ${menu.name} ]`}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SubMenu;
