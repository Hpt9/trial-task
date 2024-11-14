import React from 'react';
import { AnimatePresence, motion } from "motion/react";
import { Progress } from "@/components/ui/progress";
import { data2 } from '@/data';

const getColor = (value: number) => {
  if (value < 0.9) {
    return 'rgba(197, 18, 18, 1)'; // Red
  } else if (value >= 0.9 && value < 1) {
    return 'rgba(238, 190, 23, 1)'; // Yellow
  } else {
    return 'rgba(71, 230, 154, 1)'; // Green
  }
};

export default function PlanTable() {
  const headers = Array(4).fill(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        exit={{ x: -10 }}
      >
        <table className='plans_table table'>
          <thead>
            <tr>
              <th rowSpan={2} colSpan={2} style={{ backgroundColor: "rgba(34, 56, 95, 1)", color: "white", borderColor: "rgba(34, 56, 95, 1)" }}>İşə müraciyyət edən:</th>
              <th colSpan={2} className='vacancy-bg'>Vakansiya Elanı</th>
              <th colSpan={2} className='cv-bg'>CV Dəyərləndirmə</th>
              <th colSpan={2} className='exam-bg'>İmtahan</th>
              <th colSpan={2} className='phase_bg'>Mərhələ</th>
            </tr>
            <tr>
              <th className='items-center w-fit vacancy-bg'>
                <div className='flex justify-center gap-x-1'>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Plan</span>
                    <span className='plan_circle'></span>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Faktiki</span>
                    <span className='actual_circle'></span>
                  </div>
                </div>
              </th>
              <th className='w-fit vacancy-bg'>
                <div className='flex items-center gap-x-3  justify-center'>
                  <span className='text-xs'>SPI</span>
                  <span className='flex items-center'>
                    <span className='red_circle'></span>
                    <span>&gt;0.9</span>
                  </span>
                  <span className='flex items-center gap-x-1'>
                    <span className='yellow_circle'></span>
                    <span>0.9-1</span>
                  </span>
                  <span className='flex items-center'>
                    <span className='green_circle'></span>
                    <span>&gt;1</span>
                  </span>
                </div>
              </th>
              <th className='items-center w-fit cv-bg'>
                <div className='flex justify-center gap-x-1'>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Plan</span>
                    <span className='plan_circle'></span>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Faktiki</span>
                    <span className='actual_circle'></span>
                  </div>
                </div>
              </th>
              <th className='w-fit cv-bg'>
                <div className='flex items-center gap-x-3  justify-center'>
                  <span className='text-xs'>SPI</span>
                  <span className='flex items-center'>
                    <span className='red_circle'></span>
                    <span>&gt;0.9</span>
                  </span>
                  <span className='flex items-center gap-x-1'>
                    <span className='yellow_circle'></span>
                    <span>0.9-1</span>
                  </span>
                  <span className='flex items-center'>
                    <span className='green_circle'></span>
                    <span>&gt;1</span>
                  </span>
                </div>
              </th>
              <th className='items-center w-fit exam-bg'>
                <div className='flex justify-center gap-x-1'>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Plan</span>
                    <span className='plan_circle'></span>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Faktiki</span>
                    <span className='actual_circle'></span>
                  </div>
                </div>
              </th>
              <th className='w-fit exam-bg'>
                <div className='flex items-center gap-x-3  justify-center'>
                  <span className='text-xs'>SPI</span>
                  <span className='flex items-center'>
                    <span className='red_circle'></span>
                    <span>&gt;0.9</span>
                  </span>
                  <span className='flex items-center  gap-x-1'>
                    <span className='yellow_circle'></span>
                    <span>0.9-1</span>
                  </span>
                  <span className='flex items-center'>
                    <span className='green_circle'></span>
                    <span>&gt;1</span>
                  </span>
                </div>
              </th>
              <th className='items-center w-fit phase_bg'>
                <div className='flex justify-center gap-x-1'>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Plan</span>
                    <span className='plan_circle'></span>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <span className='text-xs'>Faktiki</span>
                    <span className='actual_circle'></span>
                  </div>
                </div>
              </th>
              <th className='w-fit phase_bg'>
                <div className='flex items-center gap-x-3  justify-center'>
                  <span className='text-xs'>SPI</span>
                  <span className='flex items-center'>
                    <span className='red_circle'></span>
                    <span>&gt;0.9</span>
                  </span>
                  <span className='flex items-center  gap-x-1'>
                    <span className='yellow_circle'></span>
                    <span>0.9-1</span>
                  </span>
                  <span className='flex items-center'>
                    <span className='green_circle'></span>
                    <span>&gt;1</span>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item, index) => (
              <tr className='tbody_tr' key={index}>
                <td colSpan={2}>{item.nameSurname}</td>
                <td className='td_width' style={{ width: "143px" }}>
                  <div className='flex items-center flex-col'>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.vacancyPlan} className='progress_back_plan' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.vacancyPlan}</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.vacancyActual} className='progress_indicator_actual' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.vacancyActual}</span>
                    </div>
                  </div>
                </td>
                <td className='font-semibold td_width' style={{ color: getColor(item.Vspi), width: "160px" }}>{item.Vspi}</td>
                <td className='td_width' style={{ width: "143px" }}>
                  <div className='flex items-center flex-col'>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.CVPlan} className='progress_back_plan' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.CVPlan}</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.CVActual} className='progress_indicator_actual' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.CVActual}</span>
                    </div>
                  </div>
                </td>
                <td className='font-semibold td_width' style={{ color: getColor(item.CVspi), width: "160px" }}>{item.CVspi}</td>
                <td className='td_width' style={{ width: "143px" }}>
                  <div className='flex items-center flex-col'>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.ExamPlan} className='progress_back_plan' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.ExamPlan}</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.ExamActual} className='progress_indicator_actual' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.ExamActual}</span>
                    </div>
                  </div>
                </td>
                <td className='font-semibold td_width' style={{ color: getColor(item.Espi), width: "160px" }}>{item.Espi}</td>
                <td className='td_width' style={{ width: "143px" }}>
                  <div className='flex items-center flex-col'>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.PhasePlan} className='progress_back_plan' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.PhasePlan}</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <span><Progress value={item.PhaseActual} className='progress_indicator_actual' style={{ width: "63px", height: "8px" }} /></span>
                      <span>{item.PhaseActual}</span>
                    </div>
                  </div>
                </td>
                <td className='font-semibold td_width' style={{ color: getColor(item.Pspi), width: "160px" }}>{item.Pspi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </AnimatePresence>
  );
}