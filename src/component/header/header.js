import React from 'react';
import '../header/header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';

const Header =() => {
    return (
        <>
        <header>
            <div className='container-fluid'>

                <div className='row'>

                    <div className='col-sm-2'>
                      <img src={Logo}/>
                    </div>

                    {/*headerSearch start here*/}
                    <div className='col-sm-5'>

                    <div className='headerSearch d-flex align-items-center'>
                      <Select/>

                        <div className='search'>
                            <input type='text' placeholder='Search for items...'/>
                            <SearchIcon className="searchIcon cursor"/>
                        </div>

                    </div>

                    </div>
                    
                    {/*headerSearch start here*/}
                    <div className='ml-auto'>
                    <div className='col-sm-5 d-flex align items-center'>
                       <ul className='list list-inline mb-0 header-tabs'>
                        <li className='list-inline-item'><span>Compare</span></li>
                       </ul>             
                                    
                   </div>
                 </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;