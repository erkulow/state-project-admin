import React from 'react'
import styled from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import { Flex } from '../../styles/style-for-positions/style'
import { Title } from '../../styles/typography/typography'
import BreadCrumbs from '../UI/breadcrumbs/BreadCrumbs'
import SideBarNav from './SideBarNav'
import { findOneCategory } from '../../utils/helpers/general'

const TemplateLeaderShipPages = () => {
   const { pathname, state } = useLocation()
   console.log(pathname)

   const pathsArray = [
      {
         path: '/',
         name: 'Уй',
      },
      {
         path: '/jetekchilik/aiyldyk-kenesh',
         name: state.title,
      },
   ]
   const isActiveFunction = (isAcive) => (isAcive ? 'active' : '')
   return (
      <Container>
         <Header>
            <InnerHeader>
               <div>
                  <TitleHeader>{`Мады айыл өкмөтү / ${
                     findOneCategory(pathname).title
                  }`}</TitleHeader>
                  <BreadCrumbs pathsArray={pathsArray} />
               </div>
            </InnerHeader>
         </Header>
         <Flex
            margin="12px 0"
            width="100%"
            justify="center"
            mobileJustify="center"
         >
            <Flex
               mobileDirection="column"
               maxWidth="1440px"
               width="90%"
               justify="space-between"
               align="start"
            >
               <NavigationBlock>
                  <NavigationTitle>Навигация</NavigationTitle>
                  <InnerNavigationLi>
                     <SideBarNav />
                  </InnerNavigationLi>
               </NavigationBlock>
               <ContainerContent>
                  <Outlet />
               </ContainerContent>
            </Flex>
         </Flex>
      </Container>
   )
}

const TitleHeader = styled(Title)`
   color: #b5b9bb;
   @media (max-width: 800px) {
      font-size: 15px;
   }
   @media (max-width: 500px) {
      font-size: 13px;
      margin: 5px 0;
   }
`
const Container = styled.div`
   width: 100%;
   margin: 0 auto;
   @media (max-width: 800px) {
      width: 100%;
   }
`
const Header = styled.div`
   width: 100%;
   padding: 0.5rem 1rem;
   background-color: #161b22;
`
const InnerHeader = styled.div`
   max-width: 1140px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      gap: 10px;
   }
`

const ContainerContent = styled.div`
   max-width: 80%;
   width: 100%;
   background-color: #161b22;
   box-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1);
   @media (max-width: 800px) {
      max-width: 100%;
   }
`

const NavigationTitle = styled.div`
   padding: 15px 20px;
   background-color: #101520;
   color: #b5b9bb;
   border-radius: 8px 8px 0 0;
   font-weight: 400;
   font-style: normal;
   font-size: 14px;
`
const NavigationBlock = styled.div`
   width: 20%;
   min-width: 240px;
   border-radius: 10px;
   background-color: #21262c;
   color: #b5b9bb;
   margin-right: 15px;
   @media (max-width: 800px) {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
   }
`
const InnerNavigationLi = styled.ul`
   a {
      text-decoration: none;
      padding: 15px 20px;
      cursor: pointer;
      width: 100%;
      display: flex;
      color: #888a8b;
      justify-content: space-between;
      align-items: center;
      :last-child {
         border-radius: 0 0 8px 8px;
      }
      div {
         display: flex;
         transition: 0.5s;
      }
      :hover {
         background: #2b323a;
      }
      :hover div {
         transform: translateX(3px);
      }
   }
   a.active {
      background: #2b323a;
   }
   list-style: none;
`
export default TemplateLeaderShipPages
