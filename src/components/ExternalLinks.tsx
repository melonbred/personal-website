import GenericButton from "./GenericButton";

export default function ExternalLinks() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-6">Upcoming Group Buy</div>
      <GenericButton
        text="Shop Griffin 60%"
        href="https://p3dstore.com/products/griffin-group-buy"
        img="/icons/DocumentCheck.svg"
      />
      <div className="mt-6">External Links</div>
      <GenericButton
        text="GitHub"
        href="https://github.com/melonbred"
        img="/icons/github-mark.svg"
      />
      <GenericButton
        text="Instagram"
        href="https://www.instagram.com/melonbred.kb/"
        img="/icons/iconmonstr-instagram-11.svg"
      />
    </div>
  );
}
