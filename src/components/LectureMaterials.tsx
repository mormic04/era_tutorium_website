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
      { name: "Tutor Slides", url: materialBasePath + "w01/era_tutorslides_w01_v2.pdf" },
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
    topic: "RISC-V Deep Dive",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3212486"},
      { name: "Tutorslides", url: materialBasePath + "w03/era_tutorslides_w03_v2.pdf"},
      { name: "[Template] Aufage 1c: swap64", url: materialBasePath + "w03/swap64_template.s"},
      { name: "[Template] Aufgabe 2b: to_pascal", url: materialBasePath + "w03/to_pascal_template.s"},
      { name: "[Template] Aufgabe 2b (Extra-Aufgabe): to_c_string", url: materialBasePath + "w03/to_c_string_template.s"},
      { name: "[Lösung] Aufage 1c: swap64", url: materialBasePath + "w03/swap64_lsg.s"},
      { name: "[Lösung] Alternativlösung Aufage 1c: swap64", url: materialBasePath + "w03/swap64_alt_lsg.s"},
      { name: "[Lösung] Aufgabe 2b: to_pascal", url: materialBasePath + "w03/to_pascal_lsg.s"},
      { name: "[Lösung] Aufgabe 2b (Extra-Aufgabe): to_c_string", url: materialBasePath + "w03/to_c_string_lsg.s"},
      { name: "[Lösung] P01 Taschenrechner-Tester", url: materialBasePath + "w03/p01_lsg.s"},
      { name: "Mitschrift 04.11.2024", url: materialBasePath + "w03/era_tutor03_platz_mo.pdf"},
      { name: "Mitschrift 07.11.2024", url: materialBasePath + "w03/era_tutor03_platz_do.pdf"},
    ],
  },
  {
    week: 4,
    date: "11.11.2024",
    topic: "RISC-V Calling Convention & Rekursion",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3220223"},
      { name: "RISC-V ABIs Specification", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3219780"},
      { name: "Tutorslides", url: materialBasePath + "w04/era_tutorslides_w04.pdf"},
      { name: "[Template] ggt.s", url: materialBasePath + "w04/ggt_template.S"},
      { name: "[Template] folge.s", url: materialBasePath + "w04/folge_template.S"},
      { name: "Mitschrift 11.11.2024", url: materialBasePath + "w04/era_tutor04_platz_mo"},
      { name: "Mitschrift 14.11.2024", url: materialBasePath + "w04/era_tutor04_platz_do"},
      { name: "[Lösung] ggt tail recursive ohne stack", url: materialBasePath + "w04/ggt.s"},
      { name: "[Lösung] ggt musterlösung mit stack", url: materialBasePath + "w04/ggt_musterloesung.s"},
      { name: "[Lösung] folge", url: materialBasePath + "w04/folge_lsg.s"},
    ],
  },
  {
    week: 5,
    date: "18.11.2024",
    topic: "Caches",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/pluginfile.php/5460110/mod_resource/content/1/era_tutor05_platz.pdf"},
      { name: "Mitschrift 18.11.2024", url: materialBasePath + "w05/era_tutor05_platz_mo"},
      { name: "Mitschrift 21.11.2024", url: materialBasePath + "w05/era_tutor05_platz_do"},
      { name: "Tutorslides", url: materialBasePath + "w05/era_tutorslides_w05.pdf"}
    ],
  },
  {
    week: 6,
    date: "25.11.2024",
    topic: "Kombinatorische Schaltungen",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3228465"},
      { name: "Tutorslides", url: materialBasePath + "w06/era_tutorslides_w06.pdf"},
      { name: "Digital Handbuch", url: materialBasePath + "w06/Doc_Deutsch.pdf"},
      { name: "[Template] Aufgabe 4 - Arithmetische Schaltung", url: materialBasePath + "w06/abs_difference_template.dig"},
      { name: "[Musterlösung] Aufgabe 4 - Arithmetische Schaltung", url: materialBasePath + "w06/abs_difference.dig"},
      { name: "[Musterlösung mit Multiplexer] Aufgabe 4 - Arithmetische Schaltung", url: materialBasePath + "w06/abs_difference_multiplexer.dig"},
      { name: "[Tutorlösung] Aufgabe 4 - Arithmetische Schaltung", url: materialBasePath + "w06/abs_difference_mylsg.dig" },
      { name: "Mitschrift 25.11.2024", url: materialBasePath + "w06/era_tutor06_platz_mo.pdf"},
      { name: "Mitschrift 28.11.2024", url: materialBasePath + "w06/era_tutor06_platz_do.pdf"}
    ],
  },
  {
    week: 7,
    date: "02.12.2024",
    topic: "Sequentielle Schaltungen",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3237134"},
      { name: "Tutorslides", url: materialBasePath + "w07/era_tutorslides_w07.pdf"},
      { name: "[Template] Aufgabe 2.1", url: materialBasePath + "w07/2.1_pc_template.dig"},
      { name: "[Template] Aufgabe 2.2", url: materialBasePath + "w07/2.2_extend_template.dig"},
      { name: "[Template] Aufgabe 2.3", url: materialBasePath + "w07/2.3_extend_pc_template.dig"},
      { name: "[Lösung] Aufgabe 2.1", url: materialBasePath + "w07/2.1_pc.dig"},
      { name: "[Lösung] Aufgabe 2.2", url: materialBasePath + "w07/2.2_extend.dig"},
      { name: "[Lösung] Aufgabe 2.3", url: materialBasePath + "w07/2.3_extend_pc.dig"},
      { name: "Mitschrift 02.12.2024", url: materialBasePath + "w07/era_tutor07_platz_mo.pdf"}
    ],
  },
  {
    week: 8,
    date: "09.12.2024",
    topic: "RISC-V Single-Cycle Prozessor",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3243427"},
      { name: "Tutorslides", url: materialBasePath + "w08/era_tutorslides_w08.pdf"},
      { name: "Writeup zur BNE-Aufgabe (Presentation)", url: materialBasePath + "w08/BNE_Erweiterung_presentation"},
      { name: "Writeup zur BNE-Aufgabe (Text)", url: materialBasePath + "w08/BNE_Erweiterung_writeup"},
      { name: "Mitschrift 09.12.2024", url: materialBasePath + "w08/era_tutor08_platz_Mo"},
      { name: "Mitschrift 12.12.2024", url: materialBasePath + "w08/era_tutor08_platz_Do"}
    ],
  },
  {
    week: 9,
    date: "16.12.2024",
    topic: "RISC-V Multi-Cycle Prozessor",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/mod/resource/view.php?id=3249481"},
      { name: "RISC-V Tabellen und Prozessor-Schaltbilder", url: "https://courses.edx.org/assets/courseware/v1/f06a2dc0c856f60ec0711e9f5e1c98cf/asset-v1:HarveyMuddX+ENGR85B+1T2023+type@asset+block/FinalReferences.pdf"},
      { name: "Tutorslides", url: materialBasePath + "w09/era_tutorslides_w09.pdf"},
      { name: "[Template] Aufgabe 1d PatternRecognizer.dig", url: materialBasePath + "w09/PatternRecognizer_Template.dig"},
      { name: "[Lösung] Aufgabe 1d PatternRecognizer.dig", url: materialBasePath + "w09/PatternRecognizer_Musterlsg.dig"},
      { name: "Mitschrift 16.12.2024", url: materialBasePath + "w09/era_tutor09_platz_Mo.pdf"},
      { name: "Mitschrift 19.12.2024", url: materialBasePath + "w09/era_tutor09_platz_Do.pdf"},
    ],
  },
  {
    week: 10,
    date: "06.01.2025",
    topic: "Parallelisierung",
    materials: [
      { name: "Übungsblatt (leer)", url: "https://www.moodle.tum.de/pluginfile.php/5494257/mod_resource/content/1/era_tutor10.pdf"},
      { name: "Tutorslides", url: materialBasePath + "w10/era_tutorslides_w10.pdf"},
      { name: "Mitschrift 09.01.2025", url: materialBasePath + "w10/era_tutor10_platz_Do.pdf"}
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

  currentWeek = 10;

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