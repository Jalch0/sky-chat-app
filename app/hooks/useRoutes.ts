import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import {
  HiArrowLeftOnRectangle,
  HiUsers
} from 'react-icons/hi2';
import { SlLogout } from "react-icons/sl";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();


  const routes = useMemo(() => [
    {
      label: 'Chat',
      href: '/conversations',
      icon: IoChatboxEllipsesOutline,
      active: pathname === "/conversations" || !!conversationId
    },
    {
      label: 'Users',
      href: "/users",
      icon: FaUsers,
      active: pathname === "/users"
    },
    {
      label: 'Logout',
      href: "#",
      onClick: () => signOut(),
      icon: SlLogout
    }
  ], [pathname, conversationId])

  return routes
}

export default useRoutes
