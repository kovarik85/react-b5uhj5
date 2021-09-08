import React from 'react';
import './style.css';
import Skeleton from './Skeleton';
import Cards from './Cards';
import CardTitle from './CardTitle';

export default function App() {
  return (
    <>
      <Skeleton>
       <div>
          <Cards
          image={
            'https://lh3.googleusercontent.com/proxy/on0cfF3yEFqCopDqQtnjafFWCZQgx49RWBOcSMOeDAssSflBn8td_-609RGrIHuVvALAWKGOZYNLQLTkznqQvkAcAm7m8R1PQmVcSqq0dEDJmh_e-VYjHhaw0oMAfhe1bBrTJubLuRYCJykP'
          }
        />
        <CardTitle text="Első kép címe" />
      </div>
       <div>

        <Cards image="https://t4.ftcdn.net/jpg/02/66/76/83/360_F_266768305_jxxjP3ivAYLHxbOejYQ4095SvaGfTjc3.jpg" />
        <CardTitle text="Második kép címe" />
       </div>

       <div>

        <Cards />
        <CardTitle text="Harmadik kép címe" />
       </div>

       <div>

        <Cards />
        <CardTitle text="Negyedik kép címe" />
       </div>

       <div>

        <Cards />
        <CardTitle text="Ötödik kép címe" />
       </div>
       <div>

        <Cards />
        <CardTitle text="Hatodik kép címe" />
       </div>

      </Skeleton>
    </>
  );
}
