// import Header from "./Header";

const ButtonTop = ()=> {


    const url = "#home";
    return (
        <a id="toTop" href={url} className="fixed text-white bottom-4 right-4 z-[9999] h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse">
           <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384 512" className="items-center justify-center mx-auto mt-1 fill-white">
                {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
            </svg>
        </a>
    )
}

export default ButtonTop;