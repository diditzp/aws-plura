import Image from "next/image";

export default function Home() {
  return (
<>
<section className="h-full w-full pt-45 relative flex items-center justify-center flex-col">
  <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
  <p className="mt-8">Tour and Travel Agency</p>
  <div className='pt-45 bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text relative'>
    <h1 className='text-9xl font-bold text-center md:text-[300px]'>Salwa</h1>
  </div>
  <div className="flex justify-center items-center relative mt-12 md:mt-[-70px]">
    <img
      src='/assets/preview.png'
      alt="banner image"
      height={1200}
      width={1200}
      className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
    />
    <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
  </div>
</section>
<section className="flex justify-center items-center flex-col gap-4 mt-12 md:mt-20">
  <h2 className="text-4xl text-center">Choose what fits you right</h2>
  <p className="text-muted-foreground text-center">
    Our straightforward pricing plans are tailored to meet your needs. If
    {" you're"} not <br />
    ready to commit you can get started for free.
  </p>
</section>
</>
)
}
