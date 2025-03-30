import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function Footers() {
  return (
    <>
    <hr />
    <Footer className="px-5 md:container py-5 border-0 shadow-none overflow-hidden mx-auto">
      <FooterCopyright href="#" by="Poke Pedia™" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
    </>
  );
}

export default Footers;
