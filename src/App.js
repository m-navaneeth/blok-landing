import logo from './Assets/Images/logo.svg';
import people from './Assets/Images/people.svg';
import android from './Assets/Images/android.png';
import apple from './Assets/Images/apple.png';
import { LockFilled } from '@ant-design/icons';
import icon1 from "./Assets/Images/icon1.png";
import icon2 from "./Assets/Images/icon2.png";


import './App.css';

function App() {
  return (
    <div className='bg-[#ffd580]  min-h-[100vh] w-full pb-10'>
      <div className='min-h-[100%] w-full bg relative  lg:bg-bottom bg-top'>

        <div className='bg-transparent pl-4 pt-4'>
          <div className='w-24 '>
            <a href='/'><img src={logo} className='bg-transparent' alt="logo" /></a>
          </div>
        </div>

        <h1 className='heading ml-6'>
          <span className='heading'>Play More</span>
          <span className='heading '>Hassle Less</span>
        </h1>

        <div className='w-[80%] static mx-auto lg:w-[30%] lg:absolute lg:bottom-[10%] lg:right-[5%] '>
          <img src={people} alt="dfdf" />
        </div>


        <div className='descreption  lg:w-[50%] lg:ml-7 mx-2 mt-10 font-semibold lg:font-medium'>
          <p>Your All-in-One Court Booking Solution - Unlock the Joy of Sports with Effortless Reservations! </p>
        </div>

        <div className='w-[90%] lg:w-[40%] flex justify-around items-center ml-7 mt-10'>
          <div className='flex items-center'>
            <img src={icon1} className='w-[4.5rem]' alt=""/>
            <p className='icon-text'>Play with players around you</p>
          </div>
          <div className='flex items-center'>
            <img src={icon2} className='w-[4.5rem]' alt="" />
            <p className='icon-text'>Book sports venues nearby</p>
          </div>
        </div>

{/*border-2 border-[rgb(37,50,56,0.3)] rounded-3xl*/}
        <div className="w-[80%]  lg:w-[40%] xl:w-[30%] lg:ml-20 mx-auto  mt-14 ">

          <h2 className='appinfo'>Coming Sooon!!!</h2>
          <div className='masked p-2  mt-3 rounded-3xl  '>

            <div className='flex justify-center'>
              <LockFilled style={{ "color": "#253238", "fontSize": "20px" }} />
            </div>

            <div className='flex items-center justify-around mt-6 mb-6 w-full pointer-events-none'>
              <a href="https://play.google.com/store/apps/details?id=your-android-app-id" class="">
                <img src={android} alt="Android App" class="w-36 " />
              </a>
              <a href="https://apps.apple.com/us/app/your-ios-app-name/idyour-ios-app-id" class="">
                <img src={apple} alt="Apple App" class="w-36 " />
              </a>
            </div>
          </div>


        </div>




      </div>

    </div>
  );
}

export default App;
