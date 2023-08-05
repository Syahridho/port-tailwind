import client1 from './../asset/img/client/1.png';
import client2 from './../asset/img/client/2.png';
import client3 from './../asset/img/client/3.png';



const Clients = ()=> {
    const url = "#";
    return (
        <section id="client" className="bg-slate-700 pt-36 pb-32 dark:bg-slate-300">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-xl text-center xl:mb-6">
                    <h4 className="mb-2 text-lg font-semibold text-primary">Clients</h4>
                    <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark lg:text-4xl">
                        Yang Pernah Berkerjasama
                    </h2>
                    <p className="text-medium font-medium text-secondary md:text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos ad
                        culpa quo.
                    </p>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="flex flex-wrap items-center justify-center">
                    <a href={url}
                        className="mx-4 w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                        <img src={client1} alt="japan" />
                    </a>
                    <a href={url}
                        className="mx-4 w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                        <img src={client2}alt="nazi" />
                    </a>
                    <a href={url}
                        className="mx-4 w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
                        <img src={client3} alt="italy" />
                    </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;