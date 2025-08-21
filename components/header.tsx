const Header = () => {
   return ( 
            <nav className="w-full">
            <div className="max-w-8x1 mx-auto flex flex-row justify-around p-4 bg-blue-400 ">
               <div className="">
                <h2 className=' bg-blue-700 p-4 rounded-lg text-white '>Lucas Lira</h2>
               </div>
                <div className="flex flex-row gap-10 text-white">
                    <a className='bg-blue-700 p-4 rounded-lg' href="">Projetos</a>
                    <a className="bg-blue-700 p-4 rounded-lg" href="">Sobre mim</a>
                    <a className="bg-blue-700 p-4 rounded-lg" href="">CV</a>
                    <a className="bg-blue-700 p-4 rounded-lg"href="">Contato</a>
                </div>
            </div>
        </nav>

)
}

export default Header;