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
        <div className="flex w-screen">
            <AppSidebar items={articles} />
            <div className="flex justify-center pt-20 w-full">
                <div>
                    <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M3.66667 1V6.33333M22.3333 19.6667V25M1 3.66667H6.33333M19.6667 22.3333H25M13 1L10.4507 8.75067C10.3202 9.14735 10.0984 9.50784 9.80312 9.80312C9.50784 10.0984 9.14735 10.3202 8.75067 10.4507L1 13L8.75067 15.5493C9.14735 15.6798 9.50784 15.9016 9.80312 16.1969C10.0984 16.4922 10.3202 16.8527 10.4507 17.2493L13 25L15.5493 17.2493C15.6798 16.8527 15.9016 16.4922 16.1969 16.1969C16.4922 15.9016 16.8527 15.6798 17.2493 15.5493L25 13L17.2493 10.4507C16.8527 10.3202 16.4922 10.0984 16.1969 9.80312C15.9016 9.50784 15.6798 9.14735 15.5493 8.75067L13 1Z" stroke="#09090B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <h1 className="text-2xl font-bold">Quick test</h1>
                        </div>
                        <Button className="bg-white text-black border">X</Button>
                    </div>
                    <p className="text-gray-500 mt-2">
                        Take a quick test about your knowledge from your content
                    </p>
                    <div className="flex flex-col mt-6 gap-5 bg-white border justify-center items-center p-10 rounded-lg">
                        <title className="font-bold"></title>
                        <div className="flex gap-10">
                            <Button className="bg-white w-40 border"></Button>
                            <Button className="bg-white w-40 border"></Button>
                        </div>
                        <div className="flex gap-10">
                            <Button className="bg-white w-40 border">
                            </Button>
                            <Button className="bg-white w-40 border"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}