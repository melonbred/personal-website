import Link from "next/link";

export default function Resources() {
  return (
    <>
      <div className="flex flex-col items-center pb-5">
        <div className="pt-24 lg:pt-10"></div>
        <h1 className="pt-4 text-3xl">Resources</h1>
        <div className="p-5 md:px-20">
          <p className="py-5">
            Work in Progress! Links coming soon. Until then, please refer to the{" "}
            <Link
              href="https://github.com/melonbred/open-source-projects"
              className="underline hover:decoration-emerald-400/80 hover:decoration-4"
            >
              Open Source Projects
            </Link>{" "}
            repository on my GitHub.
          </p>
          <p className="py-5">
            This page includes resources for all past projects. The resources
            may include plate files, PCB files, case models, etc. These files
            are offered for user convenience. However, by downloading and/or
            using these files, the user agrees to the following:
          </p>
          <ul className="list-disc">
            <div className="mx-3 text-sm">
              <li>
                The user takes responsibility for verifying the resource prior
                to use or production.
              </li>
              <li>
                These resources are for peresonal use only, unless explicit
                permission has been given for commercial use.
              </li>
              <li>
                These resources may be modified provided that they are not for
                commercial use.
              </li>
            </div>
          </ul>

          <h2 className="pt-10 text-2xl">MB Series</h2>
          <hr className="pb-2"></hr>
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
          <h2 className="pt-10 text-2xl">Mythics Series</h2>
          <hr className="pb-2"></hr>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="py-2 md:mr-20 md:w-1/2">
              <h3 className="text-xl">Pegasus</h3>
              <ul className="list-disc">
                <div className="px-4 py-2">
                  <li>PCB KiCAD (Design)</li>
                  <li>PCB Gerbers (Production)</li>
                </div>
              </ul>
            </div>
            {/* <div className="py-2 md:mr-20 md:w-1/2">
              <h3 className="text-xl">MB-LB</h3>
              <ul className="list-disc">
                <div className="px-4 py-2">
                  <li>Plate Files</li>
                  <li>PCB KiCAD (Design)</li>
                  <li>PCB Gerbers (Production)</li>
                  <li>Case Files (Stacked Acrylic)</li>
                </div>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
