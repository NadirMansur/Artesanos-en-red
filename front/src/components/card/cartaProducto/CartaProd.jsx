"use client";
import { Badge, Button, Card, PlayButton, Progress } from "keep-react";
import ws from "../../../assets/ws/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.png";
import {
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Users,
} from "phosphor-react";

const CartaProd = () => {
  return (
    <div>
      {/*=== PRODUCT CARD ONE=== */}
      <Card
        className='max-w-xs overflow-hidden rounded-md'
        imgSrc='https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format'
        imgSize='md'
      >
        <Card.Container className='absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50'>
          <Heart size={20} weight='bold' color='white' />
        </Card.Container>
        <Card.Container className='p-6'>
          <Card.Container className='flex items-center justify-between'>
            <Badge size='xs' colorType='light' color='gray'>
              For Sale
            </Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className='my-3'>
            <Card.Title>Men Nike Shoe</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the
              risk of errors.
            </Card.Description>
          </Card.Container>

          <a
            aria-label='Chat on WhatsApp'
            href='https://wa.me/2235162544?text=Hola%2C%20como%20estas%3F%2C%20te%20vi%20en%20la%20pagina%20Sol%20de%20Mayo%2C%20y%20tengo%20interés%20en%20tus%20productos.'
          >
            <img alt='Chat on WhatsApp' src={ws} />
          </a>
        </Card.Container>
      </Card>
    </div>
  );
};

export default CartaProd;
