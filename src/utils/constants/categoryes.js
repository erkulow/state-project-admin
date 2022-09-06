import {
   MdOutlineManageAccounts,
   MdOutlineCleaningServices,
} from 'react-icons/md'
import { IoIosSchool } from 'react-icons/io'
import { FaHandHoldingMedical, FaPeopleCarry } from 'react-icons/fa'
import { HiMoon } from 'react-icons/hi'
import { GiCow, GiNewspaper } from 'react-icons/gi'
import { AiFillBank, AiFillStar } from 'react-icons/ai'
import { TbFiretruck } from 'react-icons/tb'
import uuid from 'react-uuid'
import { ROUTES } from './routes'

const { leadership, education, healthCare } = ROUTES

export const CATEGORYES = [
   {
      id: uuid(),
      title: 'Жетекчилик',
      icon: <MdOutlineManageAccounts fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Кызматкерлер',
            path: leadership.government.path,
         },
      ],
   },
   {
      id: uuid(),
      title: 'Билим берүү',
      label: 'Мады айыл окмотунун жетекчилиги',
      icon: <IoIosSchool fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Мектептер',
            path: education.schools.path,
         },
         {
            id: uuid(),
            title: 'Авто мектептер',
            path: education.drivingSchool.path,
         },
         {
            id: uuid(),
            title: 'Ийримдер',
            path: education.iyrymder.path,
         },
         {
            id: uuid(),
            title: 'Олимпиадалар',
            path: education.olympiads.path,
         },
         {
            id: uuid(),
            title: 'Бала бакчалар',
            path: education.kindergartens.path,
         },
         {
            id: uuid(),
            title: 'Иш-чаралар',
            path: education.аctivities.path,
         },
         {
            id: uuid(),
            title: 'ЖРТ (ОРТ)',
            path: education.GRT.path,
         },
      ],
   },
   {
      id: uuid(),
      title: 'Саламаттыкты сактоо',
      icon: <FaHandHoldingMedical fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Ооруканалар',
            path: healthCare.hospitals.path,
         },
         {
            id: uuid(),
            title: 'ФАПтар',
            path: healthCare.paramedicPoint.path,
         },
         {
            id: uuid(),
            title: 'ОМС',
            path: healthCare.OMS.path,
         },
         {
            id: uuid(),
            title: 'Дарыгердин кеңеши',
            path: healthCare.doctorAdvice.path,
         },
      ],
   },
   {
      id: uuid(),
      title: 'Жаштар иштери',
      icon: <FaPeopleCarry fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Комитет жетекчиси',
         },
         {
            id: uuid(),
            title: 'Жигердүү жаштар',
         },
         {
            id: uuid(),
            title: 'Жаштар үчүн сунуштар',
         },
         {
            id: uuid(),
            title: 'Спорттук иш-чаралар',
         },
         {
            id: uuid(),
            title: 'Демилгелер',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Дин иштери',
      icon: <HiMoon fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Мечиттер',
         },
         {
            id: uuid(),
            title: 'Медреселер',
         },
         {
            id: uuid(),
            title: 'Ажылык',
         },
         {
            id: uuid(),
            title: 'Айт',
         },
         {
            id: uuid(),
            title: 'Рамазан',
         },
         {
            id: uuid(),
            title: 'Намаз',
         },
         {
            id: uuid(),
            title: 'Адеп-ахлак',
         },
         {
            id: uuid(),
            title: 'Диний иш-чаралар',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Айыл чарба',
      icon: <GiCow fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Мал чарба комитети',
         },
         {
            id: uuid(),
            title: 'Жайыт комитети',
         },
         {
            id: uuid(),
            title: 'Үрөөн чарбасы',
         },
         {
            id: uuid(),
            title: 'Мыйзамдар',
         },
         {
            id: uuid(),
            title: 'Кеңештер',
         },
         {
            id: uuid(),
            title: 'Иш-чаралар',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Маданият',
      icon: <AiFillBank fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Маданият үйлөрү',
         },
         {
            id: uuid(),
            title: 'Музейлер',
         },
         {
            id: uuid(),
            title: 'Маданият кызматкерлери',
         },
         {
            id: uuid(),
            title: 'Маданий иш-чаралар',
         },
         {
            id: uuid(),
            title: 'Маданий сынактар',
         },
      ],
   },
   {
      id: uuid(),
      title: 'ӨКМ',
      icon: <TbFiretruck fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'ӨКМ',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Тазалык',
      icon: <MdOutlineCleaningServices fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Тазалык',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Атактуулар',
      icon: <AiFillStar fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Атактуулар',
         },
      ],
   },
   {
      id: uuid(),
      title: 'Жаңылыктар жана кулактандыруулар',
      icon: <GiNewspaper fontSize={20} />,
      innerList: [
         {
            id: uuid(),
            title: 'Жаңылыктар жана кулактандыруу',
         },
      ],
   },
]
