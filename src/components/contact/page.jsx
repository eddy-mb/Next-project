import FormContact from "./form";
export default function ContactPage() {
  return (
    <main id="bg-black6">
      <div
        id="contact"
        className=" text-white min-h-full flex flex-col items-center space-y-6 py-12 px-2">
        <section className="max-w-4xl flex flex-col items-center space-y-4 text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">CONTACTAME</h1>
            <hr className=" w-12 border border-[#ffa726] rounded-xl "></hr>
          </div>
          <p>
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
