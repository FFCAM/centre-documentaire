import Link from "next/link";
const NavItem = ({ text, href, active }: { text: any, href: any, active: any}) => {
  return (
    <Link href={href}>{text}</Link>
    )
}
