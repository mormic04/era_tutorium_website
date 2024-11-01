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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const materialBasePath = "https://home.in.tum.de/~momi/era-materials/"

// Mock data for lecture materials
const lectureWeeks = [
  {
    week: 1,
    date: "21.10.2024",
    topic: "Zahlensysteme",
    materials: [
      { name: "Tutor Slides", url: materialBasePath + "w01/era_tutorslides_w01.pdf" },
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3192195"},
      { name: "Mitschrift 21.10.2024", url: materialBasePath + "w01/mitschrift_2024_10_21.pdf"},
      { name: "Mitschrift 24.10.2024", url: materialBasePath + "w01/mitschrift_2024_10_24.pdf"}
    ],
  },
  {
    week: 2,
    date: "28.10.2024",
    topic: "RISC-V Assembly",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3206035"},
      { name: "Tutorslides", url: materialBasePath + "w02/era_tutorslides_w02.pdf"},
      { name: "Fixkommazahlen Tabelle", url: materialBasePath + "w02/binaryFixkommazahlen.ods"},
      { name: "Zusammenfassung 'Erzeugung von 32-Bit Immediates'", url: materialBasePath + "w02/ErzeugenVon32BitImmediates.pdf"},
      { name: "Sign Extension Writeup", url: materialBasePath + "w02/SignExtensionWriteup.pdf"},
      { name: "Mitschrift 28.10.2024", url: materialBasePath + "w02/mitschrift_2024_10_28.pdf"},
      { name: "Mitschrift 31.10.2024", url: materialBasePath + "w02/mitschrift_2024_10_31.pdf"},
    ],
  },
  {
    week: 3,
    date: "04.11.2024",
    topic: "RISC-V Assembly Teil 2",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3212486"},
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
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to my ERA-Tutorium (WiSe 2024/25)</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        <section className="mb-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Slot</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Room</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Mo-1000-4</TableCell>
                <TableCell>Mondays, 10:00 - 12:00</TableCell>
                <TableCell>
                  <a href="https://nav.tum.de/room/5613.03.010#18/48.262803/11.666871" className="text-blue-600 dark:text-blue-400 hover:underline">
                    03.13.010, Seminarraum (5613.03.010)
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Do-1200-2</TableCell>
                <TableCell>Thursday, 12:00 - 14:00</TableCell>
                <TableCell>
                  <a href="https://nav.tum.de/room/5606.01.020#18/48.262264/11.668827" className="text-blue-600 dark:text-blue-400 hover:underline">
                    01.06.020, Seminarraum (5606.01.020)
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="mb-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Materials</h2>
          <Accordion type="single" collapsible defaultValue={`week-${currentWeek}`} className="space-y-4">
            {lectureWeeks.map((week) => (
              <AccordionItem key={week.week} value={`week-${week.week}`}>
                <AccordionTrigger className="text-left py-4 px-6 bg-white dark:bg-gray-800 rounded-t-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold">
                      Week {week.week} ({week.date}) - {week.topic}
                    </span>
                    {week.week === currentWeek && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-800">
                        Current
                      </span>
                    )}
                    {week.week === (currentWeek + 1) && (
                      <span className="ml-2 px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-800">
                        Future
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
                          <a href={ material.url } target="_blank" download>
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
        </section>

        <section className="mb-8 flex flex-col md:flex-row gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-4">Technical support (How can I get help?)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Google and use the Zulip search function!</li>
              <li>Ask fellow students.</li>
              <li>Ask in appropriate Zulip channels.</li>
              <li>Write to me (or any other tutor) (preferably Zulip, otherwise email)</li>
            </ol>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Michael Morandell</h3>
            <p>🗨️ Contact via: Zulip, <a href="mailto:m.morandell@tum.de" className="text-blue-600 dark:text-blue-400 hover:underline">Email</a></p>
          </div>
        </section>

        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All information (slides etc.) is provided to the best of my knowledge and belief. However, I give no guarantee for the correctness. In case of ambiguities/discrepancies, information from the lecture/ZÜ is always considered to be the correct one!
          </p>
        </section>
      </div>
    </div>
  )
}