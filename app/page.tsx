import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'
import { getAllProducts } from '@/lib/actions'
import ProductCard from '@/components/ProductCard'

const Home =  async() => {
  const allProducts = await getAllProducts();
  return (
    <>
    <section className="px-6 md:px-20 py-24">
      <div className="flex max-xl:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className="small-text">
            The Start To A Smart Shopping Alternative Is Here:
            <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
            />
          </p>
          <h1 className='head-text'>
            Test Out The Limits Of
            <span className="text-primary"> BargainBuddy</span>
          </h1>
          <p className="mt-6">A powerful tool to keep the loads off your wallet. Find the best price of what you are looking for. 
          </p>
          <Searchbar/>
        </div>
        <HeroCarousel/>
      </div>
    </section>
    <section className="trending-section">
      <h2 className="section-text">Trending</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-14">
        {allProducts?.map((product)=>(
          <ProductCard key={product._id} product = {product}/>
        ))}
      </div>
    </section>
    </>
  )
}

export default Home