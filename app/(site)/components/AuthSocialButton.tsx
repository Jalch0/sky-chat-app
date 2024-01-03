import React from "react";
import { IconType } from "react-icons";
import clsx from "clsx";

interface AuthSocialButtonProps {
  icon: IconType,
  onClick: () => void;
  type: string,
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
  type
}) => {
  return (
    <button
    type="button"
    onClick={onClick}
    className="
    inline-flex
    w-full
    justify-center
    rounded-md
    bg-white
    px-4
    py-2
    text-amber-500
    shadow-sm
    ring-1
    ring-inset
    ring-gray-300
    hover:bg-gray-100
    transition
    focus:outline-offset-0"
    >
      <Icon />
    </button>
  )
}

export default AuthSocialButton
