import React from 'react'
import { AnimatePresence, motion } from "motion/react"
export default function DetailsTable() {
    return (
        <AnimatePresence>
        
        <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            exit={{ x: -10 }}
        >DetailsTable</motion.div>

        </AnimatePresence>
    )
}
