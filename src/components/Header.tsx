'use client'
import React, { useState } from 'react'
import { BellIcon } from 'lucide-react'
import { CommandDemo } from './CommandDemo'
import { Button } from './ui/button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {

    const [notifications, setNotifications] = useState<any>([
        {
            text: 'This is a notifications',
            date: '02-01-2015',
            read: true,
        },
        {
            text: 'This is another notifications',
            date: '02-01-2015',
            read: true,
        },
    ])

    return (
        <div className='grid grid-cols-2 gap-4 p-4 border-b'>
            <CommandDemo />

            <div className='flex items-center justify-end'>


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className='relative' variant="outline" size="icon">
                            <div className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${notifications.find((x: any) => x.read === true) ? 'bg-green-500' : 'bg-neutral-200'}`}>

                            </div>
                            <BellIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        {notifications.map((item: any, key: number) => (
                            <DropdownMenuItem key={key} className='flex  gap-2 flex-wrap items-start py-2 px-3 cursor-pointer hover:bg-neutral-50 transition'>
                                <div className={`h-3 w-3 rounded-full my-1 ${!item.read ? 'bg-green-500' : 'bg-neutral-200'}`}>

                                </div>
                                <div className="flex flex-col gap-1">

                                    <p>{item.text}</p>
                                    <p className='text-xs text-neutral-500'>{item.date}</p>
                                </div>
                                {/* <span>{item.read ? 'Read' : 'Unread'}</span> */}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default Header