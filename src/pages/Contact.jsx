import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, title: "Address", text: "123 Smile Street, Health City, HC 12345" },
  { icon: Phone, title: "Phone", text: "(123) 456-7890" },
  { icon: Mail, title: "Email", text: "info@dentalcareclinic.com" },
  { icon: Clock, title: "Hours", text: "Mon–Fri: 8AM–6PM | Sat: 9AM–3PM" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you soon.");
      e.target.reset();
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team — we'd love to hear from you."
      />

      <section className="section-padding">
        <div className="container-dental grid gap-12 md:grid-cols-2">
          
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Get in Touch
            </h2>

            <p className="mt-2 text-muted-foreground">
              Have questions? Reach out using any of the methods below or fill out the form.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.title}</p>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-border bg-card p-6"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Name *
              </label>
              <Input required placeholder="Your name" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Email *
              </label>
              <Input required type="email" placeholder="your@email.com" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Subject
              </label>
              <Input placeholder="How can we help?" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Message *
              </label>
              <Textarea required placeholder="Your message..." rows={5} />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

        </div>
      </section>
    </>
  );
};

export default Contact;