export default function page() {
  return (
    <div>
      <div
        className="h-screen flex items-center bg-cover bg-center "
        style={{
          backgroundImage:
            'url("/images/contacto.jpg")',
        }}
      >
        <div className="text-white container bg-stone-900 bg-opacity-25">
          <h1 className="text-4xl font-bold ">Certificados</h1>
          <p className="text-xl mt-6">
            Revisa y visita la página para comprobar loss certificados.
          </p>
          <p className="border-2 border-white p-2 mt-6 inline-block rounded-lg">
            
            <a href="https://www.certificados.emcomineral.com">VERIFICAR</a>
          </p>
        </div>
      </div>
    </div>
  );
}
