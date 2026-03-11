import PageHeader from "@/components/PageHeader";
import { CheckCircle } from "lucide-react";
import teamImg from "@/assets/dental-team.jpg";

const values = [
  { title: "Patient-Centered Care", desc: "Every treatment plan is tailored to your unique needs and comfort." },
  { title: "Clinical Excellence", desc: "Our team stays at the forefront of dental science and technology." },
  { title: "Compassionate Approach", desc: "We treat every patient with empathy, respect, and understanding." },
  { title: "Transparency", desc: "Clear communication about treatments, costs, and expectations." },
];

const About = () => (
  <>
    <PageHeader title="About Us" subtitle="Get to know the team behind Dental Care Clinic and our commitment to your oral health." />

    <section className="section-padding">
      <div className="container-dental grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded in 2003, Dental Care Clinic began with a simple mission: to provide exceptional dental care in a warm, welcoming environment. Over two decades later, we've grown into one of the most trusted dental practices in the region.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our team of skilled professionals combines advanced training with genuine compassion, ensuring every patient receives the personalized attention they deserve.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img src={teamImg} alt="Dental Care Clinic professional team" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/50">
      <div className="container-dental">
        <h2 className="text-center font-heading text-3xl font-bold text-foreground">Our Values</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
