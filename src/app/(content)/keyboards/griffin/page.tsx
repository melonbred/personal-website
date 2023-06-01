import Image from "next/image";

export default function MB44() {
  return (
    <>
      <div className="min-w-screen flex flex-col items-center pb-5 pt-24">
        <h1 className="pt-4 text-3xl">Griffin</h1>
        <div className="min-w-screen p-4 md:p-10">
          <h2 className="pt-5 text-2xl">Overview</h2>
          <p className="pt-5">
            Griffin is the second in the Mythics series, and was a product of
            combined efforts from some great friends in the keyboard community.
            Approched by{" "}
            <a
              href="https://p3dstore.com/"
              target="_blank"
              className="underline"
            >
              P3D Store
            </a>
            , the idea was to provide a highly customizable keyboard with a
            simple and unique construction.
          </p>
          <p className="pt-5">
            Griffin offers the unique aesthetic found in all Mythic series
            projects in a tried and true 60% layout.
          </p>
          <div className="flex flex-col pt-10 md:flex-row ">
            <div className="pr-5">
              <h2 className="text-2xl">Case Construction</h2>
              <p className="pt-5">
                The case construction was simplified to a 3-piece construction
                that consists of the top, bottom and weight. By implementing the
                popular gummy o-ring plate mounting solution, the top piece acts
                as a sleeve for the bottom.
              </p>
              <p className="pt-5">
                The weight is offered in brass and features art by
                OneCreativeMind.
              </p>
              <p className="pt-5">
                This project comes bundled with the{" "}
                <a
                  href="https://github.com/dededecline/SST60"
                  target="_blank"
                  className="underline"
                >
                  SST60 PCB
                </a>{" "}
                developed by Dededecline and OJ Designs, providing multi-layout
                and Tsangan bottom row support. However, Griffin is compatible
                with all common PCBs with gummy o-ring support such as the
                Bakenko or H60.
              </p>
            </div>
            <Image
              src="/images/keyboards/griffin/griffin_components.jpeg"
              alt="griffin components"
              width="500"
              height="200"
              className="pt-5"
            />
          </div>
          <h2 className="pt-10 text-2xl">Specifications</h2>
          <div className="pt5 relative overflow-x-auto rounded-xl">
            <table className="w-full">
              <tbody>
                <tr className="bg-slate-600">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 uppercase"
                  >
                    Layout
                  </th>
                  <td>60%</td>
                </tr>
                <tr className="bg-slate-500">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 uppercase"
                  >
                    Plate Mounting
                  </th>
                  <td>Gummy O-Ring</td>
                </tr>
                <tr className="bg-slate-600">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 uppercase"
                  >
                    Typing Angle
                  </th>
                  <td>6 degrees</td>
                </tr>
                <tr className="bg-slate-500">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 uppercase"
                  >
                    Front Height
                  </th>
                  <td>16.8 mm</td>
                </tr>
                <tr className="bg-slate-600">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 uppercase"
                  >
                    Effective Key Height
                  </th>
                  <td>21.6 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
