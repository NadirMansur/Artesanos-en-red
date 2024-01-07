"use client";
import { Avatar,Card } from "keep-react";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const Square = () => {
  return (
    <Card className='max-w-[250px] p-6'>
      <Card.Container className='flex items-center justify-center'>
        <Avatar
          shape='circle'
          img='https://randomuser.me/api/portraits/men/50.jpg'
          statusPosition='bottom-right'
          size='2xl'
        />
      </Card.Container>
      <Card.Container className='text-center'>
        <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
          Khairul Islam Ridoy
        </Card.Title>
        <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
          UI/UX Designer
        </Card.Title>
      </Card.Container>
      <Card.Container className='circled mx-auto flex max-w-[220px] items-center justify-center divide-x divide-metal-200 rounded-md border border-metal-200 p-1 md:p-2'>
        <Card.Link
          className='flex items-center justify-center px-3 py-1'
          icon={<LinkedinLogo size={24} color='#0072b1' weight='fill' />}
          href='#'
        />
        <Card.Link
          className='flex items-center justify-center px-3 py-1'
          icon={<FacebookLogo size={24} color='#0C63D4' weight='fill' />}
          href='#'
        />
        <Card.Link
          className='flex items-center justify-center px-3 py-1'
          icon={<TwitterLogo size={24} color='#0C8BD9' weight='fill' />}
          href='#'
        />
      </Card.Container>
    </Card>
  );
};
 export default Square