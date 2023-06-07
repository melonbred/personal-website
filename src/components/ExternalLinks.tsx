import GenericButton from "./GenericButton";

export default function ExternalLinks() {
  return (
    <div className="flex flex-col items-center">
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
      <GenericButton
        text="Griffin 60% Keyboard"
        href="https://geekhack.org/index.php?topic=120200.0"
        img="/icons/DocumentCheck.svg"
      />
    </div>
  );
}
