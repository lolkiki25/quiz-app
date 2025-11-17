"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AppSidebar } from "@/components/main/AppSidebar"

export default function Home() {
  const [articles, setArticles] = useState<{ title: string, url: string }[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

const handleGenerate = async () => {
  if (!title.trim() || !content.trim()) {
    return alert("Гарчиг болон текстээ бөглөнө үү.")
  }

  // AI API руу илгээх
  const res = await fetch("/api/gemini-ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  })

  const data = await res.json()

  if (data.success) {
    console.log("AI Output:", data.output)

    // ✅ AI-с ирсэн асуултыг alert биш UI-д харуулж болно
    alert("AI Questions:\n" + data.output)
  } else {
    return alert("AI error")
  }

  // Sidebar-д хадгалах
  const newItem = { title, url: "#" }
  setArticles((prev) => [newItem, ...prev])

  // Input-уудыг цэвэрлэх
  setTitle("")
  setContent("")
}

  return (
    <div className="flex w-screen ">
      <AppSidebar items={articles} />
      <div className="flex justify-center pt-20 p-50 w-full">
        <div className="border p-8 bg-white rounded-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Article Quiz Generator</h1>
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
