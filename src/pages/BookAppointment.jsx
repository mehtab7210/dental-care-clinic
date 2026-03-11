import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/services";
import { toast } from "sonner";

const BookAppointment = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Appointment request submitted! We'll contact you shortly.");
      e.target.reset();
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Fill out the form below and we'll get back to you to confirm your appointment."
      />

      <section className="section-padding">
        <div className="container-dental mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name *
                </label>
                <Input required placeholder="John Doe" />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Email *
                </label>
                <Input required type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Phone *
                </label>
                <Input required type="tel" placeholder="(123) 456-7890" />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Preferred Date *
                </label>
                <Input required type="date" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Service
              </label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>

              <Textarea
                placeholder="Any specific concerns or questions?"
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Request Appointment"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;