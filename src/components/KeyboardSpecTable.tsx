type SpecTableProps = {
  layout: string;
  mounting: string;
  angle: string;
  height: string;
  ekh: string;
  caseMaterial: string;
  weightMaterial: string;
};

export default function KeyboardSpecTable({
  layout,
  mounting,
  angle,
  height,
  ekh,
  caseMaterial,
  weightMaterial,
}: SpecTableProps) {
  return (
    <div className="relative overflow-x-auto rounded-xl lg:text-base">
      <table className="w-full">
        <tbody>
          <tr className="bg-slate-600">
            <th scope="row" className="px-5 py-3 text-left uppercase">
              Layout
            </th>
            <td>{layout}</td>
          </tr>
          <tr className="bg-slate-500">
            <th scope="row" className="px-5 py-3 text-left uppercase">
              Plate Mounting
            </th>
            <td>{mounting}</td>
          </tr>
          <tr className="bg-slate-600">
            <th scope="row" className="px-5 py-3 text-left uppercase">
              Typing Angle
            </th>
            <td>{angle}</td>
          </tr>
          <tr className="bg-slate-500">
            <th scope="row" className="px-5 py-3 text-left uppercase">
              Front Height
            </th>
            <td>{height}</td>
          </tr>
          <tr className="bg-slate-600">
            <th scope="row" className="px-5 py-3 text-left uppercase">
              Effective Key Height
            </th>
            <td>{ekh}</td>
          </tr>
          <tr className="bg-slate-500">
            <th scope="row" className="px-5 py-3 text-left uppercase">
              Case Material
            </th>
            <td>{caseMaterial}</td>
          </tr>
          <tr className="bg-slate-600">
            <th scope="row" className="px-5 py-3 text-left uppercase">
              Weight Material
            </th>
            <td>{weightMaterial}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
