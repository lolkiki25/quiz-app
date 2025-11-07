"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AppSidebar } from "@/components/main/AppSidebar"

export default function Home() {
    const [articles, setArticles] = useState<{ title: string, url: string }[]>([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")


    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}