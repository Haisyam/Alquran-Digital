import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full py-5 ">
      <p className="flex justify-center items-center text-xs text-gray-500 gap-1">
        Created by Haisyam{" "}
        <span>
          <FaHeart className="text-red-500" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
