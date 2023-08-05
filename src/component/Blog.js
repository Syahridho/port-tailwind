import blog1 from './../asset/img/blog/1.jpg';
import blog2 from './../asset/img/blog/2.jpg';
import blog3 from './../asset/img/blog/3.jpg';



const BlogItems = ({src, title, desc, link}) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-700">
                <img src={src} alt="helicopter" className="w-full" />
                    <div className="py-6 px-4">
                        <h3>
                            <a href={src} className="mb-2 block truncate text-xl font-semibold text-dark hover:text-primary dark:text-white">
                            {title}
                            </a>
                        </h3>
                        <p className="font-base mb-4 text-base text-secondary">
                            {desc}
                        </p>
                        <a href={link} className="block w-full rounded-md bg-primary py-2 text-center text-sm font-medium text-white shadow-sm">Baca Selengkapnya</a>
                    </div>
            </div>
        </div>
    )
}



const Blog = ()=> {
    return (
        <section id="blog" className="bg-slate-100 pt-36 pb-32 dark:bg-dark">
            <div className="container">
                <div className="w-full px-4">
                    <div className="mx-auto mb-12 max-w-xl text-center xl:mb-6">
                        <h4 className="mb-2 text-xl font-semibold text-primary">Blog</h4>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                            Tulisan Terkini
                        </h2>
                        <p className="text-medium font-medium text-secondary md:text-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                            officiis dolores commodi tempore!
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center lg:px-16">
                        <BlogItems 
                            src={blog1} 
                            title={"Tips Berperang"} 
                            desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit officiis dolores commodi tempore!"} 
                            link={'#'} 
                        />
                        <BlogItems 
                            src={blog2} 
                            title={"Tips Bertahan dari Gas Beracun"} 
                            desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit officiis dolores commodi tempore!"} 
                            link={'#'} 
                        />
                        <BlogItems 
                            src={blog3} 
                            title={"Tips Mendapatkan Mendali"} 
                            desc={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit officiis dolores commodi tempore!"} 
                            link={'#'} 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Blog;