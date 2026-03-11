import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Services = () => (
  <>
    <PageHeader title="Our Services" subtitle="We offer a full range of dental services to meet the needs of your entire family." />
    <section className="section-padding">
      <div className="container-dental grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </section>
  </>
);

export default Services;
