import React, { useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io';
// import CircleType from `circletype`;
import './BackToTop.css';

const BackToTop = () => {

    useEffect(() => {

        const CircleText = document.querySelector('.CircleText span');
        CircleText.innerHTML = CircleText.innerText.split("").map(
            (char, i) => `<span style="transform:rotate(${i * 21}deg)">${char}</span>`
        ).join("");
        
        // let BackToTopHandler = () => {
        // }

        // let WrapperHandler = () => {
        //   const WrapperUpper = document.getElementById('WrapperTextUpperProjects');
        //   const WrapperLower = document.getElementById('WrapperTextLowerProjects');
      
        //   WrapperUpper.style.transform = `translateX(${window.scrollY / 32}%)`;
        //   WrapperLower.style.transform = `translateX(-${window.scrollY / 32}%)`;
        // }
    
        // window.addEventListener('scroll', WrapperHandler);
    
        // return () => window.removeEventListener('scroll', WrapperHandler);
      });

    return (
        <div className='BackTopButton'>
            <div className='CircleText'>
                <span><span className='CircleTextDark'>Back</span>•<span>To</span>•<span>Top</span>•</span>
            </div>
            <div className='Arrow'>
                <IoIosArrowUp title='Back to top!' />
            </div>
        </div>
    )
}

export default BackToTop
