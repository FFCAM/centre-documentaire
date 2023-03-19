import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo"
import Searchbar from "./Searchbar"
export default function MainNavbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={`/`}><Logo /></Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Recherche" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={"/images/profile.jpg"} alt="FFCAM" width={40} height={40} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

  )
}
