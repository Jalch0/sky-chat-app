"use client"

import useOtherUser from "@/app/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import Link from "next/link"
import { useMemo } from "react"

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}

const Header: React.FC<HeaderProps> = ({
  conversation
}) => {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if(conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return 'Active';
  }, [conversation])



  return (
    <div
    className="
      bg-white
      w-full
      flex
      border-b-[1px]
      sm:px-4
      py-3
      px-4
      lg:px-6
      justify-between
      items-center
      shadow-sm
    "
    >
      <div className="flex gap-3 items-center">
        <Link href="/conversations">

        </Link>
      </div>
    </div>
  )
}

export default Header