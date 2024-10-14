import React from "react"
import { FileText, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Mock data for lecture materials
const lectureWeeks = [
  {
    week: 1,
    topic: "Introduction to the Course",
    materials: [
      { name: "Syllabus", url: "~momi/era-materials/week1/syllabus.pdf" },
      { name: "Lecture Slides", url: "/materials/week1/lecture_slides.pdf" },
    ],
  },
  {
    week: 2,
    topic: "Fundamental Concepts",
    materials: [
      { name: "Lecture Notes", url: "/materials/week2/lecture_notes.pdf" },
      { name: "Practice Problems", url: "/materials/week2/practice_problems.pdf" },
    ],
  },
  {
    week: 3,
    topic: "Advanced Topics",
    materials: [
      { name: "Research Paper", url: "/materials/week3/research_paper.pdf" },
      { name: "Case Study", url: "/materials/week3/case_study.pdf" },
    ],
  },
]

export default function LectureMaterials() {
  const { theme, setTheme } = useTheme()

  // Get the current week number (1-based)
  let currentWeek = React.useMemo(() => {
    const startDate = new Date("2024-10-14") // Replace with your semester start date
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return Math.ceil(diffDays / 7)
  }, [])

  currentWeek = 2;

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Lecture Materials</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Welcome to the lecture materials page. Here you can find and download all the resources for each week of the course. The current week&apos;s materials are expanded by default for your convenience.
        </p>
        <Accordion type="single" collapsible defaultValue={`week-${currentWeek}`}>
          {lectureWeeks.map((week) => (
            <AccordionItem key={week.week} value={`week-${week.week}`}>
              <AccordionTrigger className="text-left py-4 px-6 bg-white dark:bg-gray-800 rounded-t-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100">
                <div className="flex items-center">
                  <span className="text-lg font-semibold">
                    Week {week.week}: {week.topic}
                  </span>
                  {week.week === currentWeek && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-800">
                      Current
                    </span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-white dark:bg-gray-800 rounded-b-lg shadow-sm">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {week.materials.map((material, index) => (
                    <li key={index} className="py-4 px-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3" />
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {material.name}
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="ml-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <a href={material.url} download>
                          Download
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
