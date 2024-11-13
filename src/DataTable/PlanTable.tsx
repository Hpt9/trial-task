import React from 'react'
import { AnimatePresence, motion } from "motion/react"
export default function PlanTable() {
  return (
    <AnimatePresence>
        
        <motion.div
            initial={{ x: -10 }}
            animate={{ x: 0 }}
            exit={{ x: -10 }}
        >PlansTable</motion.div>

        </AnimatePresence>
  )
}
