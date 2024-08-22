import React, { useState } from 'react';
import '../selectDrop/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Select =()=>{

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setselectedIndex]=useState(0);
    const [selectedItem, setselectedItem]=useState('All Categories');

    const openSelect=()=>{
        setisOpenSelect(!isOpenSelect)
    }

    const closeSelect=(index,name)=>{
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }


    return(
    <div className='selecrDrop cursor position-relative'>
       <span className='openSelect' onClick={openSelect}>{selectedItem} < KeyboardArrowDownIcon className='arrow'/></span> 
       {
        isOpenSelect==true &&
     
     <div className='selectDrop'>
        <div className='searchField'>
           <input type='text' placeholder='Search here..'/>
        </div>
        <ul className='searchResults'>
            <li onClick={()=>closeSelect(0,'All Categories')} className={`${selectedIndex === 0 ? 'active' : ''}`}>All Categories</li>
            <li onClick={()=>closeSelect(1,'Fresh Seafood')} className={`${selectedIndex === 1 ? 'active' : ''}`}>Fresh Seafood</li>
            <li onClick={()=>closeSelect(2,'Fast Food')} className={`${selectedIndex === 2 ? 'active' : ''}`}>Fast Food</li>
            <li onClick={()=>closeSelect(3,'Vegetables')} className={`${selectedIndex === 3 ? 'active' : ''}`}>Vegetables</li>
            <li onClick={()=>closeSelect(4,'Fresh Fruit')} className={`${selectedIndex === 4 ? 'active' : ''}`}>Fresh Fruit</li>
            <li onClick={()=>closeSelect(5,'Bread and Juice')} className={`${selectedIndex === 5 ? 'active' : ''}`}>Bread and Juice</li>
           </ul>
     </div>
       }
 </div>
    )
}

export default Select;