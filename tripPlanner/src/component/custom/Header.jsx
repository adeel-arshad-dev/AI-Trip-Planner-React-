import Button from "../Button.jsx";
import { Link } from "react-router-dom";
export default function Header() {
return(
   <>
    <div className="flex justify-between items-center bg-gray-800 p-2 text-white">
        <Link to={"/"}>
  <img className="m-1 mt-2 p-1 cursor-pointer" src="/logo.svg" alt="Logo" />
</Link>

        

    <Button
    
    >Sign Up</Button>
    </div>
        </>
)
}