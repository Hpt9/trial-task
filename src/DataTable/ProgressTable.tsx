import "./Table.scss";
import {
    useReactTable,
    ColumnDef,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";
import { motion } from "motion/react"
import { data } from "@/data";

const columns: ColumnDef<any>[] = [
    { accessorKey: "nameSurname", header: "Name Surname" },
    {
        header: "Vacancy",
        columns: [
            { accessorKey: "VacancyAnnouncementScheduledStart", header: "Scheduled Start" },
            { accessorKey: "VacancyAnnouncementScheduledEnd", header: "Scheduled End" },
            { accessorKey: "VacancyAnnouncementActualStart", header: "Actual Start" },
            { accessorKey: "VacancyAnnouncementActualEnd", header: "Actual End" },
        ],
    },
    {
        header: "CV Evaluation",
        columns: [
            { accessorKey: "CVEvaluationScheduledStart", header: "Scheduled Start" },
            { accessorKey: "CVEvaluationScheduledEnd", header: "Scheduled End" },
            { accessorKey: "CVEvaluationActualStart", header: "Actual Start" },
            { accessorKey: "CVEvaluationActualEnd", header: "Actual End" },
        ],
    },
    {
        header: "Exam",
        columns: [
            { accessorKey: "ExamScheduledStart", header: "Scheduled Start" },
            { accessorKey: "ExamScheduledEnd", header: "Scheduled End" },
            { accessorKey: "ExamActualStart", header: "Actual Start" },
            { accessorKey: "ExamActualEnd", header: "Actual End" },
        ],
    },
    {
        header: "Phase",
        columns: [
            { accessorKey: "PhasePlannedStart", header: "Planned Start" },
            { accessorKey: "PhasePlannedEnd", header: "Planned End" },
        ],
    },
];

export default function ProgressTable() {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (

        <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            exit={{ x: -10 }}
            className="progress_table table-container text-xs">
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2} style={{ padding: "6px 21px", border: "1px solid #ccc", textAlign: "left" }} className="oneHead text-lg">
                            İşə müraciyyət edən:
                        </th>
                        <th colSpan={4} style={{ padding: "0px 25px", border: "1px solid #ccc", textAlign: "center" }} className="quadHead text-base vacancy-bg">
                            Vakansiya Elanı
                        </th>
                        <th colSpan={4} style={{ padding: "0px 25px", border: "1px solid #ccc", textAlign: "center" }} className="quadHead text-base cv-bg">
                            CV Dəyərləndirmə
                        </th>
                        <th colSpan={4} style={{ padding: "0px 25px", border: "1px solid #ccc", textAlign: "center" }} className="quadHead text-base exam-bg">
                            Imtahan
                        </th>
                        <th colSpan={2} style={{ padding: "0px 25px", border: "1px solid #ccc", textAlign: "center" }} className="doubleHead text-base phase_bg">
                            Mərhələ
                        </th>
                    </tr>
                    <tr>
                        <th className="text-xs vacancy-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Scheduled Start</th>
                        <th className="text-xs vacancy-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Scheduled End</th>
                        <th className="text-xs vacancy-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Actual Start</th>
                        <th className="text-xs vacancy-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Actual End</th>
                        <th className="text-xs cv-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Scheduled Start</th>
                        <th className="text-xs cv-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Scheduled End</th>
                        <th className="text-xs cv-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Actual Start</th>
                        <th className="text-xs cv-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Actual End</th>
                        <th className="text-xs exam-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Scheduled Start</th>
                        <th className="text-xs exam-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Scheduled End</th>
                        <th className="text-xs exam-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Actual Start</th>
                        <th className="text-xs exam-bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Actual End</th>
                        <th className="text-xs phase_bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Planned Start</th>
                        <th className="text-xs phase_bg" style={{ padding: "0px 5px", border: "1px solid #ccc", textAlign: "center" }}>Planned End</th>
                    </tr>
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell, index) => {
                                // Determine the appropriate class based on the cell's accessor key
                                const accessorKey = cell.column.columnDef.accessorKey;
                                let customClass = "";

                                if (accessorKey?.startsWith("VacancyAnnouncement")) {
                                    customClass = "vacancy_td";
                                } else if (accessorKey?.startsWith("CVEvaluation")) {
                                    customClass = "cv_td";
                                } else if (accessorKey?.startsWith("Exam")) {
                                    customClass = "exam_td";
                                } else if (accessorKey?.startsWith("Phase")) {
                                    customClass = "phase_td";
                                }

                                return (
                                    <td
                                        key={cell.id}
                                        style={{
                                            padding: "8px 25px",
                                            border: "1px solid #ccc",
                                            textAlign: "center",
                                        }}
                                        className={`${index === 0 ? 'beforeContent' : ''} text-sm ${customClass}`}
                                    >
                                        <span className="rectangle"></span>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
}
