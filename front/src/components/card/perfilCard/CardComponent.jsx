"use client";
import { Avatar, Card } from "keep-react";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import { Link } from "react-router-dom";

const CardComponent = (props) => {
  return (
    <>
      <Card className='max-w-xs p-6 md:max-w-lg'>
        <Card.Description>
          Component design systems can help developers to be more productive by
          providing them with a ready-made set of components to use. This can
          save time and effort, and it can also help to reduce the risk of
          errors.
        </Card.Description>
        <Card.Container className='flex items-center'>
          <Avatar
            size='lg'
            shape='circle'
            img='https://randomuser.me/api/portraits/men/11.jpg'
          />
          <Card.Container className='ml-3'>
            <Link to={`/detail/${props.id}`}>
              <Card.Title className='text-body-5 font-semibold text-metal-800 md:text-body-4'>
                Md Ariful Islam
              </Card.Title>
            </Link>

            <Card.Title className='!text-body-6 font-normal text-metal-400 md:text-body-5'>
              Product Designer
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};

export default CardComponent;
