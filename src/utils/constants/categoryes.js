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
import { ROUTES } from './routes'

const { leadership } = ROUTES

export const CATEGORYES = [
	{
		id: Math.random().toString(),
		title: 'Жетекчилик',
		icon: <MdOutlineManageAccounts fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Өкмөт',
				path: leadership.government.path,
			},
			{
				id: Math.random().toString(),
				title: 'Аппарат',
				path: leadership.government_apparatus.path,
			},
			{
				id: Math.random().toString(),
				title: 'Айылдык кеңеш',
				path: leadership.villageCouncil.path,
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Билим берүү',
		icon: <IoIosSchool fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Мектептер',
			},
			{
				id: Math.random().toString(),
				title: 'Авто мектептер',
			},
			{
				id: Math.random().toString(),
				title: 'Ийримдер',
			},
			{
				id: Math.random().toString(),
				title: 'Олимпиадалар',
			},
			{
				id: Math.random().toString(),
				title: 'Бала бакчалар',
			},
			{
				id: Math.random().toString(),
				title: 'Иш-чаралар',
			},
			{
				id: Math.random().toString(),
				title: 'ЖРТ (ОРТ)',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Саламаттыкты сактоо',
		icon: <FaHandHoldingMedical fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Ооруканалар',
			},
			{
				id: Math.random().toString(),
				title: 'ФАПтар',
			},
			{
				id: Math.random().toString(),
				title: 'ОМС',
			},
			{
				id: Math.random().toString(),
				title: 'Дарыгердин кеңеши',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Жаштар иштери',
		icon: <FaPeopleCarry fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Комитет жетекчиси',
			},
			{
				id: Math.random().toString(),
				title: 'Жигердүү жаштар',
			},
			{
				id: Math.random().toString(),
				title: 'Жаштар үчүн сунуштар',
			},
			{
				id: Math.random().toString(),
				title: 'Спорттук иш-чаралар',
			},
			{
				id: Math.random().toString(),
				title: 'Демилгелер',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Дин иштери',
		icon: <HiMoon fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Мечиттер',
			},
			{
				id: Math.random().toString(),
				title: 'Медреселер',
			},
			{
				id: Math.random().toString(),
				title: 'Ажылык',
			},
			{
				id: Math.random().toString(),
				title: 'Айт',
			},
			{
				id: Math.random().toString(),
				title: 'Рамазан',
			},
			{
				id: Math.random().toString(),
				title: 'Намаз',
			},
			{
				id: Math.random().toString(),
				title: 'Адеп-ахлак',
			},
			{
				id: Math.random().toString(),
				title: 'Диний иш-чаралар',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Айыл чарба',
		icon: <GiCow fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Мал чарба комитети',
			},
			{
				id: Math.random().toString(),
				title: 'Жайыт комитети',
			},
			{
				id: Math.random().toString(),
				title: 'Үрөөн чарбасы',
			},
			{
				id: Math.random().toString(),
				title: 'Мыйзамдар',
			},
			{
				id: Math.random().toString(),
				title: 'Кеңештер',
			},
			{
				id: Math.random().toString(),
				title: 'Иш-чаралар',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Маданият',
		icon: <AiFillBank fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Маданият үйлөрү',
			},
			{
				id: Math.random().toString(),
				title: 'Музейлер',
			},
			{
				id: Math.random().toString(),
				title: 'Маданият кызматкерлери',
			},
			{
				id: Math.random().toString(),
				title: 'Маданий иш-чаралар',
			},
			{
				id: Math.random().toString(),
				title: 'Маданий сынактар',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'ӨКМ',
		icon: <TbFiretruck fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'ӨКМ',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Тазалык',
		icon: <MdOutlineCleaningServices fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Тазалык',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Атактуулар',
		icon: <AiFillStar fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Атактуулар',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Жаңылыктар жана кулактандыруулар',
		icon: <GiNewspaper fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Жаңылыктар жана кулактандыруу',
			},
		],
	},
]
