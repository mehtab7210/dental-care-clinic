import { Link } from "react-router-dom";
import {
  ArrowRight,
  Stethoscope,
  Sparkles,
  AlignCenter,
  CircleDot,
  Baby,
  Syringe,
} from "lucide-react";

const iconMap = {
  Stethoscope,
  Sparkles,
  AlignCenter,
  CircleDot,
  Baby,
  Syringe,
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || Stethoscope;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-4 inline-flex rounded-lg bg-secondary p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="font-heading text-lg font-semibold text-foreground">
        {service.title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {service.shortDescription}
      </p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
};

export default ServiceCard;