import React from 'react'
import Dashbord from '../Dashbord/Dashbord'
import HeaderBar from '../Header/HeaderBar'
import SideBar from '../SidBar/SideBar'
import Accounts from '../ListSideBar/Accounts'
import AddSession from '../Body/AddSession'
import Notification from '../ListSideBar/Notification'
import { Routes, Route } from "react-router-dom";
import Participer from '../Cour/Participer'
import ListEtud from '../ListSideBar/ListEtud/ListEtud'


export default function Rania() {
  return (
    <div>
   < Routes>
      <Route path="/DashBoradEnseig">
          <Route index element={
            <>
              <Dashbord />
              <HeaderBar/>
              <SideBar/>  
            </>
          } />
      <Route path="/DashBoradEnseig/add_session" element={
            <>
              <AddSession/>
              <HeaderBar/>
              <SideBar/>  
            </>
          }/> 
 
      <Route path="/DashBoradEnseig/List_des_cours" element={ 
           <>
              <Participer/>
              <HeaderBar/>
              <SideBar/> 
             
               
           </>
      
           }/>
      <Route path="/DashBoradEnseig/student_list" element={
            <>
              <ListEtud/>
              <HeaderBar/>
              <SideBar/>  
            </>
           }/>

   <Route path="/DashBoradEnseig/Notification" element={<Notification/>}/>
   <Route path="/DashBoradEnseig/Accounts" element={
              <>
                <HeaderBar/>
                <SideBar/> 
                <Accounts/>
              </>
   
   }/>


   </Route>
   </Routes>
  
    </div>
  )
}
