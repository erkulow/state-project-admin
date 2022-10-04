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

const {
   leadership,
   education,
   healthCare,
   religiousAffairs,
   youthAffairs,
   agriculture,
   culture,
   okm,
   cleanliness,
   celebrities,
   newsAndAnnouncements,
} = ROUTES

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
            path: youthAffairs.headOfCommittee.path,
         },
         {
            id: uuid(),
            title: 'Жигердүү жаштар',
            path: youthAffairs.activeYouth.path,
         },
         {
            id: uuid(),
            title: 'Жаштар үчүн сунуштар',
            path: youthAffairs.offersForYouth.path,
         },
         {
            id: uuid(),
            title: 'Спорттук иш-чаралар',
            path: youthAffairs.sportActivities.path,
         },
         {
            id: uuid(),
            title: 'Демилгелер',
            path: youthAffairs.initiativies.path,
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
            path: religiousAffairs.mosques.path,
         },
         {
            id: uuid(),
            title: 'Медреселер',
            path: religiousAffairs.madrasas.path,
         },
         {
            id: uuid(),
            title: 'Ажылык',
            path: religiousAffairs.pilgrimage.path,
         },
         {
            id: uuid(),
            title: 'Айт',
            path: religiousAffairs.ait.path,
         },
         {
            id: uuid(),
            title: 'Рамазан',
            path: religiousAffairs.ramadan.path,
         },
         {
            id: uuid(),
            title: 'Намаз',
            path: religiousAffairs.namaz.path,
         },
         {
            id: uuid(),
            title: 'Адеп-ахлак',
            path: religiousAffairs.morality.path,
         },
         {
            id: uuid(),
            title: 'Диний иш-чаралар',
            path: religiousAffairs.religiousActivities.path,
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
            path: agriculture.animalUsbandry.path,
         },
         {
            id: uuid(),
            title: 'Жайыт комитети',
            path: agriculture.pastureCommittee.path,
         },
         {
            id: uuid(),
            title: 'Үрөөн чарбасы',
            path: agriculture.seedsFarm.path,
         },
         {
            id: uuid(),
            title: 'Мыйзамдар',
            path: agriculture.laws.path,
         },
         {
            id: uuid(),
            title: 'Кеңештер',
            path: agriculture.agroAdvices.path,
         },
         {
            id: uuid(),
            title: 'Иш-чаралар',
            path: agriculture.agroActivities.path,
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
            path: culture.cultureHouses.path,
         },
         {
            id: uuid(),
            title: 'Музейлер',
            path: culture.museums.path,
         },
         {
            id: uuid(),
            title: 'Маданият кызматкерлери',
            path: culture.culturalWorkers.path,
         },
         {
            id: uuid(),
            title: 'Маданий иш-чаралар',
            path: culture.culturalActivities.path,
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
            path: okm.okm.path,
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
            path: cleanliness.cleanline.path,
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
            path: celebrities.celebrities.path,
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
            path: newsAndAnnouncements.newsAndAnnouncements.path,
         },
      ],
   },
]
