import Container from "@/components/layout/Container";
import Header from "./(header)/header";
import Footer from "./(footer)/footer";
import ConnectWithStrava from "@/components/buttons/ConnectWithStrava";

export default async function Admin({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { error } = await searchParams;
  return (
    <Container>
      <Header />
      {typeof error === "string" && <p role="alert">Login failed: {error}</p>}
      <ConnectWithStrava />
      <Footer />
    </Container>
  );
}
