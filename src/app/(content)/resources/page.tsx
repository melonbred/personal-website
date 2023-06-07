export default function Resources() {
  return (
    <>
      <div className="flex flex-col items-center pb-5">
        <div className="pt-24 lg:pt-10"></div>
        <h1 className="pt-4 text-3xl">Resources</h1>
        <div className="p-5 md:px-20">
          <p className="py-5">
            This page includes resources for all past projects. The resources
            may include plate files, PCB files, case models, etc. These files
            are offered for user convenience. However, by downloading and/or
            using hese files, the user takes responsibility for verifying the
            files prior to use or production.
          </p>

          <h2 className="py-5 text-2xl">MB Series</h2>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="py-2 md:mr-20 md:w-1/2">
              <h3 className="text-xl">MB-44</h3>
              <ul className="list-disc">
                <div className="px-4 py-2">
                  <li>Plate Files</li>
                  <li>PCB KiCAD (Design)</li>
                  <li>PCB Gerbers (Production)</li>
                  <li>Case Model</li>
                </div>
              </ul>
            </div>
            <div className="py-2 md:mr-20 md:w-1/2">
              <h3 className="text-xl">MB-LB</h3>
              <ul className="list-disc">
                <div className="px-4 py-2">
                  <li>Plate Files</li>
                  <li>PCB KiCAD (Design)</li>
                  <li>PCB Gerbers (Production)</li>
                  <li>Case Files (Stacked Acrylic)</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
