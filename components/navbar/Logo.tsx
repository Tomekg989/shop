import Link from "next/link";
import { Button } from "../ui/button";
import { LuArmchair } from "react-icons/lu";
import { VscCode } from "react-icons/vsc";
const Logo = () => {
  return (
    <Button asChild size="icon">
      <Link href="/">
        <VscCode className="w-6 h-6" />
      </Link>
    </Button>
  );
};

export default Logo;
