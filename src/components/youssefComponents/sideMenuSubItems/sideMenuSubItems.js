import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SideMenuSubItems(props){
    return(
        <>
        <ul className="sub-text">
                <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 1 }}
              >
              
              <Link to={props.link1}><li><FontAwesomeIcon icon={faUsers} className="font-space"/>{props.text1}</li></Link>
              </motion.div>


              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 2 }}
              >
              <Link to={props.link2}><li><FontAwesomeIcon icon={faUserCheck} className="font-space"/> {props.text2}</li></Link>
              </motion.div>
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 3 }}
              >
              <Link to={props.link3}> <li><FontAwesomeIcon icon={faUserXmark} className="font-space"/>{props.text3}</li></Link>
              </motion.div>
              
              </ul>
        </>
    )
}
export default SideMenuSubItems;