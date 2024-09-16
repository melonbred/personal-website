import Link from "next/link";

export default function Resources() {
  return (
    <>
      <head>
        <title>MelonBred Keyboards - Resources</title>
        <meta
          name="desription"
          content="MelonBred Keyboards - Source for open source assets related to MelonBred projects"
        />
        <meta
          name="og:desription"
          content="MelonBred Keyboards - Source for open source assets related to MelonBred projects"
        />
      </head>
      <div className="flex h-full min-w-full flex-col items-center p-5 md:p-10">
        <h1 className="text-3xl xl:text-6xl">Resources</h1>
        <div className="md:px-10">
          <p className="py-5">
            This page includes links to resources for all past projects. The
            resources may include plate files, PCB files, case models, etc.
            These files are offered for user convenience. However, by
            downloading and/or using these files, the user agrees to the
            following:
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
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/mb44/switch%20plates"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      Plate Files
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/mb44/kicad"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      PCB KiCAD (Design)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/mb44/pcb_production"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      PCB Gerbers (Production)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/mb44/case"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      Case Models
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className="py-2 md:mr-20 md:w-1/2">
              <h3 className="text-xl">MB-LB</h3>
              <ul className="list-disc">
                <div className="px-4 py-2">
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/blob/main/keyboards/mblb/stacked%20acrylic%20case/MBLB_Plate.dxf"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      Plate Files
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/mblb/kicad"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      PCB KiCAD (Design)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/mblb/pcb_production"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      PCB Gerbers(Production)
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/mblb/stacked%20acrylic%20case"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      Case Files (Stacked Acrylic)
                    </Link>
                  </li>
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
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/pegasus/kicad"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      PCB KiCAD (Design)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/pegasus/kicad/Production"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      PCB Gerbers (Production)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/melonbred/open-source-projects/tree/main/keyboards/pegasus/case"
                      className="underline hover:decoration-emerald-400/80 hover:decoration-4"
                      target="_blank"
                    >
                      Case Files
                    </Link>
                  </li>
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
