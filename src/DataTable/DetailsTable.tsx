import React from 'react'
import { motion } from "motion/react"
export default function DetailsTable() {
    return (
        <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            exit={{ x: -10 }}
        >DetailsTable</motion.div>
    )
}
