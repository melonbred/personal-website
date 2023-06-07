import Image from "next/image";

export default function Pegasus() {
  return (
    <>
      <div className="min-w-screen flex flex-col items-center pb-5">
        <div className="h-24 lg:hidden"></div>
        <img
          alt="griffin side"
          src="/images/keyboards/pegasus/pegasus_btm_crop.png"
          width="auto"
          height="auto"
          className="rounded-3xl object-cover p-3"
        />
        <h1 className="pt-4 text-3xl">Pegasus</h1>
        <div className="min-w-screen p-4 md:p-10">
          <h2 className="pt-5 text-2xl">Overview</h2>
          <p className="pt-2">
            Pegasus is the first in the Mythics series keyboards. A 40% keyboard
            with a 12.75u &quot;WKL&quot; layout and 0.75u blockers, this
            project was as much as an experiment as all the projects that came
            before it. A 4-piece construction that offers a plate mounting
            solution, Pegasus was a premium offering into the 40% keyboard
            space.
          </p>
          <h2 className="pt-10 text-2xl">Case Construction</h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="flex flex-col lg:w-1/2">
              <p className="pt-5">
                The 4-piece construction includes components typical of many
                keyboards: top, bottom, switch plate and weight. However, what
                is unique about Pegasus is the plate mounting solution. The
                switch plate is a half plate that is integrated into the raised
                bezel commponent of the keyboard. This component is then
                sandwiched between the case and bottom components, isolated by
                open-cell foam strips. The idea was to provide a soft, flexible
                typing experience in the alphas while offering a stable platform
                in the modifiers for tap-hold functions.
              </p>
              <p className="pt-5">
                The weight featured an engraving of a Pegasus and was offered in
                raw brass and polished stainless steel.
              </p>
            </div>
            <div className="py-5">
              <img
                alt="pegasus schematic"
                src="/images/keyboards/pegasus/pegasus_schematic.png"
                width="750"
                height="500"
                className="object-fit"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="pb-5 pt-10 text-2xl">Specifications</h2>
              <div className="relative overflow-x-auto rounded-xl">
                <table className="w-full">
                  <tbody>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Layout
                      </th>
                      <td>40% WKL</td>
                    </tr>
                    <tr className="bg-slate-500">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Plate Mounting
                      </th>
                      <td>Gasket Mounted Integrated Half-Plate</td>
                    </tr>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Typing Angle
                      </th>
                      <td>6 degrees</td>
                    </tr>
                    <tr className="bg-slate-500">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Front Height
                      </th>
                      <td>20 mm</td>
                    </tr>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Effective Key Height
                      </th>
                      <td>24.2 mm</td>
                    </tr>
                    <tr className="bg-slate-500">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Case Material
                      </th>
                      <td>6063 Aluminium</td>
                    </tr>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Weight Material
                      </th>
                      <td>Brass or Polished Stainless Steel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="pt-10 text-2xl">Timeline</h2>
              <p className="pt-5">
                P3D Store was the worldwide vendor for Pegasus.{" "}
              </p>
              <ul className="ml-4 list-disc">
                <li className="pt-5">
                  Group buy was from May 21st through July 1st, 2022.
                </li>
                <li className="pt-5">
                  Group buy was fulfilled on January 1st, 2023.
                </li>
                <li className="pt-5">Extras sold on January 25th, 2023.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
