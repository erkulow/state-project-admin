/* eslint-disable no-underscore-dangle */
import { ReactComponent as GroupsIcon } from '../../assets/icons/group.svg'
import { ReactComponent as CoursesIcon } from '../../assets/icons/courses.svg'
import { ReactComponent as TeachersIcon } from '../../assets/icons/teacher.svg'
import { ReactComponent as StudentsIcon } from '../../assets/icons/students.svg'
import { ReactComponent as TextIcon } from '../../assets/icons/simpleText.svg'
import { ReactComponent as ItalicIcon } from '../../assets/icons/italic.svg'
import { ReactComponent as UnderlineIcon } from '../../assets/icons/underline.svg'
import { ReactComponent as BoldIcon } from '../../assets/icons/bold.svg'
import { ReactComponent as UlIcon } from '../../assets/icons/ulList.svg'
import { ReactComponent as OlIcon } from '../../assets/icons/olList.svg'

export const SERVER_BASE_URL = 'https://mady-app-kutu.herokuapp.com/api'

export const _KEY_AUTH = 'STATE_PROJECT_'

export const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
export const REGEXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g

export const TEXT = 'TEXT'
export const FILE = 'FILE'
export const IMAGE = 'IMAGE'
export const LINK = 'LINK'
export const CODE = 'CODE'

export const LIST_ITEM = 'list-item'
export const ORDERED_LIST = 'orderedList'
export const UNORDERED_LIST = 'unorderedList'
export const MARK = 'mark'
export const BLOCK = 'block'
export const PARAGRAPH = ' paragraph'

export const TOOLBAR = [
   {
      id: 2,
      format: 'heading',
      type: 'mark',
      icon: <TextIcon />,
      title: 'Заголовок',
   },
   {
      id: 3,
      format: 'bold',
      type: 'mark',
      icon: <BoldIcon />,
      title: 'Жирный текст',
   },
   {
      id: 4,
      format: 'italic',
      type: 'mark',
      icon: <ItalicIcon />,
      title: 'Курсив',
   },
   {
      id: 5,
      format: 'underline',
      type: 'mark',
      icon: <UnderlineIcon />,
      title: 'Подчеркнутый текст',
   },

   {
      id: 15,
      format: ORDERED_LIST,
      type: 'block',
      icon: <OlIcon />,
      title: 'Нумерованный список',
   },
   {
      id: 16,
      format: UNORDERED_LIST,
      type: 'block',
      icon: <UlIcon />,
      title: 'Маркированный список',
   },
]
