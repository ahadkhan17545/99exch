// import '../../../App.css'
import '../../App.css'
import {  useState } from 'react';
import Profile from './profile';
import AccountStatement from './account-statement';
import ActivityLog from './activity-log';

function MyAccount() {
    const [activeTab, setActiveTab] = useState('profile')
  
    
    return (
        <>
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  mx-[.5rem]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 lg:col-span-3 lg:px-[10px] '>
                    <div className='relative flex flex-col min-w-[0] [word-wrap:break-word] bg-[#fff] [background-clip:initial] border-[1px] border-[solid] border-[rgba(0,0,0,.125)] rounded-[.25rem] mb-[1.5rem]'>
                        <div className='bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] font-bold text-[0.938rem] px-[10px] py-[5px] [word-wrap:break-word]'>
                            <span className='text-[#ffffff] font-bold text-[0.938rem]  py-[5px] [word-wrap:break-word]'> My Account</span>
                        </div>
                        <div className='m-0 p-0 w-full bg-[#fff] h-full overflow-auto text-[#1e1e1e]'>
                            <button className={`w-full  text-[#1e1e1e] text-[0.813rem] font-normal block border-b-[1px] border-b-[#ccc] px-[10px] py-[5px] no-underline text-center lg:text-start lg:hover:bg-[#e6efd1] ${activeTab == 'profile' && 'bg-[#d1ddef] lg:hover:bg-[#d1ddef]'}`} onClick={() => setActiveTab('profile')}>My Profile</button>
                            <button className={`w-full text-[#1e1e1e] text-[0.813rem] font-normal block border-b-[1px] border-b-[#ccc] px-[10px] py-[5px] no-underline text-center lg:text-start lg:hover:bg-[#e6efd1] ${activeTab == 'account-statement' && 'bg-[#d1ddef] lg:hover:bg-[#d1ddef]'}`} onClick={() => setActiveTab('account-statement')}>Account Statement</button>
                            <button className={`w-full text-[#1e1e1e] text-[0.813rem] font-normal block border-b-[1px] border-b-[#ccc] px-[10px] py-[5px] no-underline text-center lg:text-start lg:hover:bg-[#e6efd1] ${activeTab == 'activity-log' && 'bg-[#d1ddef] lg:hover:bg-[#d1ddef]'}`} onClick={() => setActiveTab('activity-log')}>Activity Log</button>
                        </div>
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-9 lg:px-[10px]'>
                    {
                        activeTab == 'profile' && (
                            <Profile />
                        )
                    }
                    {
                        activeTab == 'account-statement' && (
                            <AccountStatement />
                        )
                    }
                    {
                        activeTab == 'activity-log' && (
                            <ActivityLog />
                        )
                    }
                </div>
            </div >
        </>
    );
}

export default MyAccount;
