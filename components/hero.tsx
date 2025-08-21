import Image from "next/image";
import perfil from '@/assets/foto1.png';
const Hero = () => {
     return (
        <div className=" flex flex-row justify-around items-center max-w-8xl mx-auto bg-blue-700 ">
            <div className=" w-100 y-20 gap-5 text-gray-300 flex flex-col box-border size-auto border-4 p-10 rounded-lg bg-gray-300">
                <div className="text-black font-bold">  

                <h1>Desenvolvedor e analista de projetos</h1>
            
            
                </div>
                <div className="text-black">
                    <h1>
                        Olá, eu sou o Lucas.  
                        Sou analista de projetos da Seed a Bit, a empresa júnior que mais cresce em Pernambuco. Venha conhecer mais sobre mim!
                    </h1>

                </div>
                <div className="flex flex-row gap-5 ">
                    <button className="bg-blue-700 p-5 rounded-lg" >Projetos</button>
                    <button className="bg-blue-700 p-5 rounded-lg">Linkedin</button>

                </div>
    
            </div>
            <div className="br-50">
                <Image src={perfil} alt="Hero Image" width={400} height={400}/>
            </div>
        </div>
     )


}
export default Hero;