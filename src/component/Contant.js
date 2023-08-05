const Contant = ()=> {
    return (
        <section id="contact" className="pt-36 pb-32 dark:bg-slate-800">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-xl text-center xl:mb-6">
                    <h4 className="mb-2 text-xl font-semibold text-primary">Contact</h4>
                    <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                        Hubungi Kami
                    </h2>
                    <p className="text-medium font-medium text-secondary md:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    </div>
                </div>

                <form>
                    <div className="w-full lg:mx-auto lg:w-2/3">
                    <div className="mb-8 w-full px-4">
                        <label htmlFor="name" className="font-base text-bold text-primary">Nama</label>
                        <input type="text" id="name"
                        className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                    </div>
                    <div className="mb-8 w-full px-4">
                        <label htmlFor="email" className="font-base text-bold text-primary">Email</label>
                        <input type="text" id="email"
                        className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                    </div>
                    <div className="mb-8 w-full px-4">
                        <label htmlFor="msg" className="font-base text-bold text-primary">Pesan</label>
                        <textarea type="textarea" id="msg"
                        className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                        </textarea>
                    </div>
                    <div className="w-full px-4">
                        <button
                        className="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                        Kirim
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contant;