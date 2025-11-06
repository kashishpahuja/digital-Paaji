'use client';
import React from 'react';
import Link from 'next/link';

const cardsData = [
  {
    title: 'Credit / Debit Cards',
    description: 'Premium metal cards designed for your lifestyle — durable, elegant, and unique.',
    image:
      'https://images.unsplash.com/photo-1479660656269-197ebb83b540?auto=compress&fit=crop&w=1000&q=80',
    link: '/credit-debit',
  },
  {
    title: 'Business Metal Cards',
    description: 'Make a lasting impression with custom metal business cards for your brand.',
    image:
      'https://images.unsplash.com/photo-1479659929431-4342107adfc1?auto=compress&fit=crop&w=1000&q=80',
    link: '/business-metal',
  },
  {
    title: 'Tap to Pay Cards',
    description: 'Experience effortless transactions with tap-to-pay-enabled metal cards.',
    image:
      'https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?auto=compress&fit=crop&w=1000&q=80',
    link: '/tap-to-pay',
  },
  {
    title: 'Card Holders',
    description: 'Keep your cards safe and stylish with our premium metal card holders.',
    image:
      'https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?auto=compress&fit=crop&w=1000&q=80',
    link: '/card-holders',
  },
];

function Cards() {
  return (
    <section className="px-4 md:px-12 xl:px-24 2xl:px-40 py-32 w-full">
       <div className="w-full text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="font-serif text-3xl md:text-4xl xl:text-5xl  text-[#bc861a] font-medium mb-3 md:mb-4 bg-clip-text">
          Our Collection
        </h1>
        <p className="text-[#eee] text-md md:text-md xl:text-lg mx-auto">
          Explore our most popular products in a stunning 3D coverflow carousel
        </p>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <Link href={card.link} key={index} className="card-wrap w-full">
            <div className="card w-full h-[280px] md:h-[400px]">
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="card-info">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Cards;