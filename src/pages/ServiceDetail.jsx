import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="section-padding text-center">
        <p className="text-muted-foreground">Service not found.</p>

        <Button asChild className="mt-4" variant="outline">
          <Link to="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="bg-secondary section-padding">
        <div className="container-dental">
          <Link
            to="/services"
            className="mb-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>

          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {service.title}
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            {service.description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-dental max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            What's Included
          </h2>

          <ul className="mt-6 space-y-4">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <Button className="mt-10" size="lg" asChild>
            <Link to="/book-appointment">Book This Service</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;