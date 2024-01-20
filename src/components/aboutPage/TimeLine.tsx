'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

export default function TimeLine() {
  return (
    <div className="px-8 mt-8">
      <Timeline horizontal>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} className='text-primary' style={{ color: 'red' }}/>
          <Timeline.Content>
            <Timeline.Time className='text-primary font-bold md:text-2xl'>2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} className=''/>
          <Timeline.Content>
            <Timeline.Time className='text-primary font-bold md:text-2xl'>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} className=''/>
          <Timeline.Content>
            <Timeline.Time className='text-primary font-bold md:text-2xl'>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} className=''/>
          <Timeline.Content>
            <Timeline.Time className='text-primary font-bold md:text-2xl'>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        
      </Timeline>
    </div>
  );
}
