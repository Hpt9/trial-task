import React from 'react';
import { AnimatePresence, motion } from "motion/react";
import "./Table.scss";
import {
    useReactTable,
    ColumnDef,
    getCoreRowModel,
    flexRender,
} from "@tanstack/react-table";
import { data } from "@/data";

export default function DetailsTable() {
    // Define columns based on your data structure
    const columns = [
        {
            accessorKey: 'nameSurname',
            header: 'İşə müraciyyət edən',
        },
        {
            accessorKey: 'city',
            header: 'Şəhər adı',
        },
        {
            accessorKey: 'company',
            header: 'Şirkətin adı',
        },
        {
            accessorKey: 'hr',
            header: 'HR mütəxəssis',
        },
        {
            accessorKey: 'role',
            header: 'Vəzifə',
        },
        {
            accessorKey: 'reference',
            header: 'Müraciət mənbəyi',
        },
        {
            accessorKey: 'VacancyAnnouncementScheduledStart',
            header: 'Vakansiya paylaşma tarixi',
        },
        {
            accessorKey: 'VacancyAnnouncementActualStart',
            header: 'Müraciətin tarixi',
        },
        {
            accessorKey: 'VacancyAnnouncementScheduledEnd',
            header: 'Vakansiya',
        },
        {
            accessorKey: 'PhasePlannedEnd',
            header: 'Baxılma',
        },
    ];

    // Set up the table using useReactTable
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                exit={{ x: -10 }}
                className="table-container"
            >
                <table className="details_table table">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </AnimatePresence>
    );
}
