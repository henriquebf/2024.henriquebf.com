import Container from "@/components/layout/Container";
import ServiceItem from "@/components/shared/ServiceItem";
import styles from "./services.module.css";

const serviceItems = [
  {
    title: "MVP",
    description:
      "Get your ideas shipped within your budget and timeline, building your Minimun Viable Product with solid foundations to scale-up.",
  },
  {
    title: "SaaS",
    description:
      "Make the path to profitability implementing automations in your service subscriptions and keeping record of all user demands.",
  },
  {
    title: "Programming",
    description:
      "Add an experienced hand to your engineering and design teams to get work done with the highest quality standards.",
  },
  {
    title: "Consulting",
    description:
      "Hire a reliable partner to help designing your software architecture and improve your team development processes.",
  },
];

export default async function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <div className={styles.content}>
          <h2>Services</h2>
          <div className={styles.serviceList}>
            {serviceItems.map(({ title, description }, i) => (
              <ServiceItem key={i} title={title} description={description} />
            ))}
          </div>
          <div className={styles.note}>
            <p>
              Please get in touch to schedule a coffee or video call to discuss
              availability and hourly rates.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
