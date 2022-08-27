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

export const CATEGORYES = [
	{
		id: Math.random().toString(),
		title: 'Жетекчилик',
		icon: <MdOutlineManageAccounts fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Окмот',
			},
			{
				id: Math.random().toString(),
				title: 'Аппарат',
			},
			{
				id: Math.random().toString(),
				title: 'Айылдык кенеш',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'Билим беруу',
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
				title: 'Иш чаралар',
			},
			{
				id: Math.random().toString(),
				title: 'ОРТ',
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
				title: 'Дарыгердин кенеши',
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
				title: 'Коммиттет жетекчиси',
			},
			{
				id: Math.random().toString(),
				title: 'Жигердуу жаштар',
			},
			{
				id: Math.random().toString(),
				title: 'Жаштар учун сунуштар',
			},
			{
				id: Math.random().toString(),
				title: 'Спорттук иш чаралар',
			},
			{
				id: Math.random().toString(),
				title: 'Инициативалар',
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
				title: 'Адеп ахлак',
			},
			{
				id: Math.random().toString(),
				title: 'Диний иш чаралар',
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
				title: 'Мал чарба коммиттети',
			},
			{
				id: Math.random().toString(),
				title: 'Жайыт коммиттети',
			},
			{
				id: Math.random().toString(),
				title: 'Уроон чарбасы',
			},
			{
				id: Math.random().toString(),
				title: 'Мыйзамдар',
			},
			{
				id: Math.random().toString(),
				title: 'Кенештер',
			},
			{
				id: Math.random().toString(),
				title: 'Иш чаралар',
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
				title: 'Маданият уйлору',
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
				title: 'Маданий иш чаралар',
			},
			{
				id: Math.random().toString(),
				title: 'Маданий сынактар',
			},
		],
	},
	{
		id: Math.random().toString(),
		title: 'МЧС',
		icon: <TbFiretruck fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'МЧС',
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
		title: 'Жанылыктар жана кулактандыруулар',
		icon: <GiNewspaper fontSize={20} />,
		innerList: [
			{
				id: Math.random().toString(),
				title: 'Жанылыктар жана кулактандыруу',
			},
		],
	},
]
