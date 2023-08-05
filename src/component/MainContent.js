import Hero from "./Hero";
import About from "./About";
import Portofolio from "./Portfolio";
import Client from "./Client";
import Blog from "./Blog";
import Contant from "./Contant"; 


const MainContent = ()=> {
    return (
        <div>
            <Hero/>
            <About/>
            <Portofolio/>
            <Client/>
            <Blog/>
            <Contant/>
        </div>
    )
}

export default MainContent;