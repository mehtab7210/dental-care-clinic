import { Star } from "lucide-react";

const TestimonialCard = ({ name, text, rating, role }) => (
  <div className="rounded-xl border border-border bg-card p-6">
    <div className="mb-3 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-dental-gold text-dental-gold" : "text-muted"
          }`}
        />
      ))}
    </div>
    <p className="text-sm leading-relaxed text-muted-foreground">"{text}"</p>
    <div className="mt-4 border-t border-border pt-3">
      <p className="text-sm font-semibold text-foreground">{name}</p>
      {role && <p className="text-xs text-muted-foreground">{role}</p>}
    </div>
  </div>
);

export default TestimonialCard;