import Mapa from "@/components/googleMap/Mapa";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";

export default function page() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-28 container">
        <div className="md:flex-1 p-4">
          <ul>
            <li className="flex items-center mt-4">
              <MapPinIcon className="h-10 w-15 text-primary  inline mx-2" />
              <div className="">
                <span className="font-semibold">AREQUIPA: </span>Avenida
                prohogar plaza Manco Cápac 917-A - Miraflores
              </div>
            </li>
            <li className="flex items-center mt-4">
              <MapPinIcon className="h-10 w-15 text-primary  inline mx-2" />
              <div className="">
                <span className="font-semibold">PUNO: </span>Jr. Vilcanota S/N, Urb Taparachi 3ra etapa- Juliaca - San Roman
              </div>
            </li>
            <li className="flex items-center mt-4">
              <MapPinIcon className="h-10 w-15 text-primary inline mx-2" />
              <div className="">
                <span className="font-semibold">CUSCO: </span>Psje Inca Roca i7 - Wanchaq
              </div>
            </li>
          </ul>

          <p className="mt-4">
            <DevicePhoneMobileIcon className="h-10 w-10 text-primary inline mx-2" />{" "}
            951281080
          </p>
          <p className="mt-4">
            <DevicePhoneMobileIcon className="h-10 w-10 text-primary inline mx-2" />{" "}
            980751403
          </p>
          <p className="mt-4">
            <span className="font-semibold">
              <EnvelopeIcon className="h-10 w-10 m-2 text-primary inline mx-2" />
            </span>{" "}
            AsesorDeServicios@EmcoMineral.com
          </p>
        </div>

        <div className="md:flex-1 flex">
          <div className="w-full bg-gray-300">
            <Mapa/>
          </div>
        </div>
      </div>
    </div>
  );
}
