import project1 from './../asset/img/portfolio/1.jpg';
import project2 from './../asset/img/portfolio/2.jpg';
import project3 from './../asset/img/portfolio/3.jpg';
import project4 from './../asset/img/portfolio/4.jpg';

const Portofolio = ()=> {
    return (
        <section id="portfolio" className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-16 max-w-xl text-center">
                        <h4 className="mb-2 text-lg font-semibold text-primary lg:text-xl">
                            Portfolio
                        </h4>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                            Project Dahulu
                        </h2>
                        <p className="text-medium font-medium text-secondary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                            expedita molestias, nesciunt aspernatur iure facere veritatis aut
                            ipsa itaque atque.
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-wrap justify-center px-4 lg:mx-auto lg:w-10/12">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src={project1} alt="landing page" width="w-full" />
                        </div>
                        <h3 className="mt-4 mb-2 text-xl font-semibold text-dark dark:text-white">
                            Landing Page Adolf Hitler
                        </h3>
                        <p className="text-sm font-normal text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus nemo rem iusto.
                        </p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src={project2} alt="landing page" width="w-full" />
                        </div>
                        <h3 className="mt-4 mb-2 text-xl font-semibold text-dark dark:text-white">
                            Landing Page Adolf Hitler
                        </h3>
                        <p className="text-sm font-normal text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus nemo rem iusto.
                        </p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src={project3} alt="landing page" width="w-full" />
                        </div>
                        <h3 className="mt-4 mb-2 text-xl font-semibold text-dark dark:text-white">
                            Landing Page Adolf Hitler
                        </h3>
                        <p className="text-sm font-normal text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus nemo rem iusto.
                        </p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <img src={project4} alt="landing page" width="w-full" />
                        </div>
                        <h3 className="mt-4 mb-2 text-xl font-semibold text-dark dark:text-white">
                            Landing Page Adolf Hitler
                        </h3>
                        <p className="text-sm font-normal text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus nemo rem iusto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portofolio;