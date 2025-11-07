"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AppSidebar } from "@/components/main/AppSidebar"

export default function Home() {
  const [articles, setArticles] = useState<{ title: string, url: string }[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleGenerate = () => {
    if (!title.trim() || !content.trim()) return alert("Гарчиг болон текстээ бөглөнө үү.")
    
    // хураангуй үүсгэх логик (AI дуудаж болно)
    // Одоогоор зөвхөн sidebar-д нэмнэ
    const newItem = {
      title,
      url: "#",
    }
    setArticles((prev) => [newItem, ...prev]) // хамгийн дээр нэмнэ

    // input-уудыг цэвэрлэх
    setTitle("")
    setContent("")
  }

  return (
    <div className="flex w-screen h-screen">
      <AppSidebar items={articles} />
      <div className="flex justify-center pt-20 w-full">
        <div className="border p-8 bg-white max-w-[600px] rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <h1 className="text-2xl font-bold">Article Quiz Generator</h1>
            </div>
          </div>
          <p className="text-gray-500 mt-2">
            Paste your article below to generate a summary and quiz question. Your articles will be saved in the sidebar.
          </p>

          <div className="flex flex-col mt-6 gap-5">
            <div>
              <b className="text-gray-500 text-sm">Article Title</b>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a title for your article..."
              />
            </div>

            <div>
              <b className="text-gray-500 text-sm">Article Content</b>
              <textarea
                className="border rounded-md w-full p-2 h-32"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your article content..."
              />
            </div>

            <div className="flex justify-end">
              <Button className="bg-gray-300 w-40" onClick={handleGenerate}>
                Generate summary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
