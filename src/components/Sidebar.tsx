import React from 'react'
import UserItem from './UserItem'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Bell, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from 'lucide-react'


const Sidebar = () => {

  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile"
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox"
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing"
        },
        {
          link: "/",
          icon: <Bell />,
          text: "Notifications"
        },
      ]
    },

    {
      group: 'Settings',
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings"
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy"
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs"
        },
      ]
    }
  ]

  return (
    <div className='fixed flex gap-4 flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4'>
      <div>
        <UserItem />
      </div>
      <div className='grow'>

        <Command>
          <CommandList>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem className='flex gap-2 cursor-pointer' key={optionKey}>
                    {option.icon}
                    {option.text}
                  </CommandItem>

                ))}

              </CommandGroup>

            ))}

          </CommandList>
        </Command>


      </div>
      <div>Settings</div>
    </div>
  )
}

export default Sidebar