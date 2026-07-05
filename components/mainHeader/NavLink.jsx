"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavLink.module.css";

const NavLink = ({ children, href }) => {
	const path = usePathname();
	return (
		<Link
			href={href}
			className={`${styles.link} ${path.startsWith(href) ? styles.active : ""}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
