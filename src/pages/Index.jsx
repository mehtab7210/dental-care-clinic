import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/data/services";
import heroImg from "@/assets/hero-dental.jpg";
import smileImg from "@/assets/smile-patient.jpg";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "15K+", label: "Happy Patients" },
  { value: "6", label: "Expert Dentists" },
  { value: "98%", label: "Satisfaction Rate" },
];

const testimonials = [
  { name: "Sarah Johnson", text: "The best dental experience I've ever had. The team is incredibly professional and caring. My smile has never looked better!", rating: 5, role: "Patient since 2019" },
  { name: "Michael Chen", text: "I was terrified of dentists but the team at Dental Care Clinic made me feel completely at ease. Highly recommend!", rating: 5, role: "Patient since 2021" },
  { name: "Emily Rodriguez", text: "Fantastic results with my dental implants. The whole process was smooth and painless. Thank you so much!", rating: 5, role: "Patient since 2020" },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern dental clinic interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#1c2e40b3]/70"/>
      </div>
      <div className="container-dental relative z-10 py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Welcome to Dental Care Clinic
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Your Smile,{" "}
            <span className="text-primary">Our Passion</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/80">
            Experience world-class dental care in a warm, welcoming environment. Our expert team is dedicated to helping you achieve the healthy, beautiful smile you deserve.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black hover:text-white hover:bg-primary-foreground/10" asChild>
              <a href="tel:+11234567890">
                <Phone className="mr-2 h-4 w-4" /> Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-card">
      <div className="container-dental grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* About snippet */}
    <section className="section-padding">
      <div className="container-dental grid items-center gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img src={smileImg} alt="Smiling patient with perfect teeth" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Trusted Dental Care for the Whole Family
          </h2>
          <p className="mt-4 text-muted-foreground">
            For over 20 years, Dental Care Clinic has been providing comprehensive dental services with a patient-first approach. Our state-of-the-art facility and experienced team ensure you receive the highest quality care.
          </p>
          <ul className="mt-6 space-y-3">
            {["Advanced technology & equipment", "Experienced, compassionate team", "Comfortable, stress-free environment", "Flexible payment options"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" /> {item}
              </li>
            ))}
          </ul>
          <Button className="mt-8" variant="outline" asChild>
            <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-secondary/50">
      <div className="container-dental">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Dental Services
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container-dental">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Our Patients Say
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary section-padding text-center">
      <div className="container-dental">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready for a Healthier Smile?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Schedule your appointment today and take the first step toward the smile you've always wanted.
        </p>
        <Button size="lg" variant="secondary" className="mt-8" asChild>
          <Link to="/book-appointment">Book Your Appointment</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Index;
