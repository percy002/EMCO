export default function page() {
  return (
    <div>
      <div
        className="h-screen flex items-center bg-cover bg-center "
        style={{
          backgroundImage:
            'url("/images/servicios/soldadura.jpg")',
        }}
      >
        <div className="text-white container bg-stone-900 bg-opacity-25">
          <h1 className="text-4xl font-bold ">Trabaja con Nosotros</h1>
          <p className="text-xl mt-6">
            Únete a EMCO y genera impacto en el futuro de la minería
          </p>
          <p className="border-2 border-white p-2 mt-6 inline-block rounded-lg">
            Escribe a: <span>trabajo@emcomineral.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
