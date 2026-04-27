import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="text-center py-12 space-y-1">
            <Image
                src={logo}
                width={300}
                height={200}
                alt="Logo"
                className="mx-auto"
            />

            <p className="font-bold text-xl"> Journalism Without Fear or Favour</p>
            <p className="font-bold"> {format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;