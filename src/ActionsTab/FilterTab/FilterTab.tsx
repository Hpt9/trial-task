import { ComboboxDemo } from './SelectMenu'
import './Filter.scss'
export interface Framework {
  value: string;
  label: string;
}
export default function FilterTab() {
  const cities:Framework[] = [
    {
      value: "baku",
      label: "Baku",
    },
    {
      value: "ganja",
      label: "Ganja",
    },
    {
      value: "lankaran",
      label: "Lankaran",
    },
    {
      value: "nakhchivan",
      label: "Nakhcihvan",
    },
    {
      value: "shaki",
      label: "Shaki",
    },
  ]
  const years = [
    {
      value: "2024",
      label: "2024",
    },
    {
      value: "2023",
      label: "2023",
    },
    {
      value: "2022",
      label: "2022",
    },
    {
      value: "2021",
      label: "2021",
    },
    {
      value: "2020",
      label: "2020",
    },
    {
      value: "2019",
      label: "2019",
    },
  ]
  const months = [
    {
      value: "dekabr",
      label: "Dekabr",
    },
    {
      value: "sentyabr",
      label: "Sentyabr",
    },
    {
      value: "avqust",
      label: "Avqust",
    },
    {
      value: "iyul",
      label: "Iyul",
    },
    {
      value: "iyun",
      label: "Iyun",
    },
    {
      value: "may",
      label: "May",
    },
  ]
  const roles = [
    {
      value: "chiefTechOfficer",
      label: "Chief Technology Office",
    },
    {
      value: "creativeDirector",
      label: "Creative Director",
    },
    {
      value: "headOfMarketing",
      label: "Head of Marketing",
    },
    {
      value: "softEngineer",
      label: "Software Engineer",
    }
  ]
  const company = [
    {
      value: "agroExp",
      label: "AgroExp",
    },
    {
      value: "bakuTech",
      label: "BakuTech",
    },
    {
      value: "bakuPearl",
      label: "Baku Pearl",
    },
    {
      value: "lenFarms",
      label: "LenFarms",
    },
    {
      value: "naxTrans",
      label: "NaxTrans",
    },
  ]
  const hr = [
    {
      value: "hr1",
      label: "Aysel Hasanova",
    },
    {
      value: "hr2",
      label: "Farid Aliyev",
    },
    {
      value: "hr3",
      label: "Sama Safarova",
    },
    {
      value: "hr4",
      label: "Hikmet Karimov",
    },
  ]
  return (
    <div className='filters_div flex gap-2 w-fit h-fit'>
      <ComboboxDemo frameworks={cities} placeHolder='Şəhər' isFirst/>
      <ComboboxDemo frameworks={years} placeHolder='İl'/>
      <ComboboxDemo frameworks={months} placeHolder='Ay'/>
      <ComboboxDemo frameworks={roles} placeHolder='Vəzifə'/>
      <ComboboxDemo frameworks={company} placeHolder='Şirkət'/>
      <ComboboxDemo frameworks={hr} placeHolder='HR mütəxəssis'/>
    </div>
  )
}
