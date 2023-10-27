import FormContact from "./form";
export default function ContactPage() {
  return (
    <main id="bg-black6">
      <div
        id="contact"
        className=" text-white min-h-full flex flex-col items-center space-y-6 py-20 px-10">
        <section className="max-w-4xl flex flex-col items-center space-y-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-2xl font-semibold">CONTACTAME</h1>
            <hr className=" w-12 border border-[#ffa726] rounded-xl "></hr>
          </div>
          <p className="text-lg">
            ¡Envíeme un mensaje! ¿Tienes alguna pregunta o propuesta, o
            simplemente quieres saludar? Adelante!. No dude en ponerse en
            contacto conmigo enviando el siguiente formulario o mediante
            WhatsApp.
          </p>
        </section>
        <FormContact />
      </div>
    </main>
  );
}
