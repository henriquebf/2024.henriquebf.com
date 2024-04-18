import Container from "@/components/layout/Container";
import Header from "./(header)/header";
import Footer from "./(footer)/footer";
import ConnectWithStrava from "@/components/buttons/ConnectWithStrava";

export default function Admin() {
  return (
    <Container>
      <Header />
      <ConnectWithStrava />
      <Footer />
    </Container>
  );
}
