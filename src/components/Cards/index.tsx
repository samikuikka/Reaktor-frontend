import React, { useState, useEffect } from 'react';
import PilotCard from '../PilotCard';
import io from 'socket.io-client';

const socket = io("https://reaktor-backend-kjit.onrender.com/");

export interface Pilot {
  name: string;
  phoneNumber: string;
  email: string;
  distance: number;
}

const Cards = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [pilots, setPilots] = useState<Pilot[]>([]);

  useEffect(() => {

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });



    socket.on('pilots', (res) => {
      const data = JSON.parse(res);
      setPilots(data)
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pilots');
    };
  }, []);

  console.log(pilots);
  return (
    <div className='w-full flex flex-col justify-center items-center py-10'>

      <h2 className='text-xl text-semibold pb-4'>
        Pilots who violated NDZ
      </h2>
      <div className='w-full flex flex-row flex-wrap justify-center gap-4'>
        {pilots.map((pilot, i) => {
          return <PilotCard key={i} {...pilot} />
        })}
      </div>
    </div>
  );
}

export default Cards;