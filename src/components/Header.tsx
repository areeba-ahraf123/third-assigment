import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-black-900 text-with ">
            <nav className="containe mx-auto flex justify-between items-center bg-fuchsia-800 text-white py-4">
                <div className="texxt-2x1 font-medium">This is my Landing Page</div>
           <ul className="flex space-x-6 text-x1">

            <li><Link href="/#about" className="hover:text-green-500" >About Me</Link> </li>
            <li><Link href="/#skills" className="hover:text-green-500 ">Skills</Link></li>

           </ul>
            </nav>
        </header>
    )
}