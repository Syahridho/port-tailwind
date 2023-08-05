import hero from './../asset/img/hero.png';

const Hero = ()=> {
    const url = "#contact";
    return (
        <section id="home" className="pt-44 dark:bg-dark">
            <div className="container xl:px-20">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 md:w-1/2">
                    <h1 className="text-base font-semibold text-primary md:text-xl">
                        Hallo Semua 👋, saya
                        <span className="mt-1 block text-4xl font-bold text-dark dark:text-white">Adolf Hitler</span>
                    </h1>
                    <h2 className="mb-5 text-lg font-medium text-secondary dark:text-white lg:text-2xl">
                        Art Artist & <span className="text-dark dark:text-white">Killer</span>
                    </h2>
                    <p className="mb-10 font-medium leading-relaxed text-secondary">
                        Saya yang memulai terjadinya Perang Dunia ke 2
                        <span className="font-bold text-primary"> dan kalah</span>
                    </p>
                    <a href={url} className="rounded-full bg-primary py-3 px-7 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-90 hover:shadow-lg">Hubungi Saya</a>
                    </div>
                    <div className="seft-end w-full px-4 md:w-1/2">
                    <div className="relative mt-10 lg:right-0 lg:mt-0">
                        <img src={hero} alt="adolfhitler" className="max-w-ful relative z-10 mx-auto md:scale-125" />
                        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:scale-150">
                        <svg width="400" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#DB2777"
                            d="M45,-21C58.7,-2.2,70.6,22.7,62.8,40.5C55,58.2,27.5,68.9,1.5,68C-24.5,67.1,-48.9,54.8,-61.3,34.4C-73.6,14,-73.7,-14.3,-61.5,-32.3C-49.3,-50.2,-24.6,-57.8,-4.5,-55.2C15.6,-52.6,31.3,-39.8,45,-21Z"
                            transform="translate(100 100)" />
                        </svg>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;