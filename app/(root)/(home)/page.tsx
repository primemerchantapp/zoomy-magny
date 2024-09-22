'use client'

import { useState, useEffect } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null); // Ban đầu null
  const [isClient, setIsClient] = useState(false); // Kiểm tra xem client-side rendering đã hoàn thành chưa

  useEffect(() => {
    setIsClient(true); // Đánh dấu rằng component đã render trên client
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Xóa timer khi unmount
  }, []);

  if (!isClient) {
    // Trong quá trình server-side rendering, không render thời gian
    return null;
  }

  // Chỉ định dạng thời gian khi đã có `currentTime`
  const time = currentTime ? currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : '';
  const date = currentTime ? (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(currentTime) : '';

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
