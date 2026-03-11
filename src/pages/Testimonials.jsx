import PageHeader from "@/components/PageHeader";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  { name: "Sarah Johnson", text: "The best dental experience I've ever had. The team is incredibly professional and caring. My smile has never looked better!", rating: 5, role: "Patient since 2019" },
  { name: "Michael Chen", text: "I was terrified of dentists but the team at Dental Care Clinic made me feel completely at ease. Highly recommend!", rating: 5, role: "Patient since 2021" },
  { name: "Emily Rodriguez", text: "Fantastic results with my dental implants. The whole process was smooth and painless. Thank you!", rating: 5, role: "Patient since 2020" },
  { name: "David Williams", text: "My kids actually look forward to their dental visits now. The pediatric team is wonderful with children.", rating: 5, role: "Patient since 2018" },
  { name: "Lisa Thompson", text: "The orthodontic treatment transformed my smile. I couldn't be happier with the results!", rating: 4, role: "Patient since 2022" },
  { name: "James Park", text: "Professional, efficient, and always on time. The clear aligners worked perfectly for me.", rating: 5, role: "Patient since 2023" },
];

const Testimonials = () => (
  <>
    <PageHeader title="Patient Testimonials" subtitle="Hear from our patients about their experiences at Dental Care Clinic." />
    <section className="section-padding">
      <div className="container-dental grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  </>
);

export default Testimonials;
