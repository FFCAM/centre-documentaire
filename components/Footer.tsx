import Link from "next/link";
export default function Footer() {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><Link href="https://ffcam.fr/" className="hover:underline">FFCAM</Link>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6 ">A propos</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Donnés personnelles</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Mentions légales</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </footer>
    );
};