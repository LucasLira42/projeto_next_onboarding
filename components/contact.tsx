
const Contact = () => {
    return(
        <div className="text-black flex flex-col items-center justify-center h-screen bg-blue-700">
            <h1 className="text-4xl font-bold mb-4">Fale comigo!</h1>
            <p className="text-lg mb-8">Quer trabalhar comigo e a Seed no seu próximo projeto? fale comigo!</p>
            <form className="w-full max-w-md">
                <input type="text" placeholder="Seu nome" className="w-full p-2 mb-4 border rounded" />
                <input type="email" placeholder="Seu melhor Email" className="w-full p-2 mb-4 border rounded" />
                <textarea placeholder="Sua messagem" className="w-full p-2 mb-4 border rounded"></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Enviar mensagem</button>
            </form>
        </div>
    )
}

export default Contact;
