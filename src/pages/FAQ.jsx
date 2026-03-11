import PageHeader from "@/components/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How often should I visit the dentist?", a: "We recommend visiting the dentist every six months for a routine check-up and professional cleaning. However, some patients may need more frequent visits depending on their oral health." },
  { q: "Does teeth whitening damage enamel?", a: "Professional teeth whitening performed by our dentists is safe and does not damage your enamel. We use clinically proven products and carefully monitor the process." },
  { q: "What should I do in a dental emergency?", a: "Contact us immediately at (123) 456-7890. We offer same-day emergency appointments. In the meantime, rinse your mouth with warm water and apply a cold compress if there's swelling." },
  { q: "Do you accept dental insurance?", a: "Yes, we accept most major dental insurance plans. Our team will help verify your coverage and maximize your benefits. We also offer flexible payment plans." },
  { q: "At what age should my child first visit the dentist?", a: "The American Dental Association recommends a child's first dental visit by their first birthday or within six months of the first tooth appearing." },
  { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. They have a success rate of over 95% and are the most durable tooth replacement option available." },
  { q: "Are you accepting new patients?", a: "Absolutely! We welcome new patients and families. You can book your first appointment online or by calling our office." },
];

const FAQ = () => (
  <>
    <PageHeader title="Frequently Asked Questions" subtitle="Find answers to the most common questions about our dental services." />
    <section className="section-padding">
      <div className="container-dental mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default FAQ;
