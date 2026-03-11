import PageHeader from "@/components/PageHeader";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-dental.jpg";
import teamImg from "@/assets/dental-team.jpg";
import smileImg from "@/assets/smile-patient.jpg";

const images = [
  { src: gallery1, alt: "Dental procedure in progress" },
  { src: gallery2, alt: "Modern clinic reception area" },
  { src: gallery3, alt: "Dental imaging equipment" },
  { src: heroImg, alt: "State-of-the-art dental operatory" },
  { src: teamImg, alt: "Our expert dental team" },
  { src: smileImg, alt: "Happy patient with beautiful smile" },
];

const Gallery = () => (
  <>
    <PageHeader title="Our Gallery" subtitle="Take a look inside our modern facility and see the quality of care we provide." />
    <section className="section-padding">
      <div className="container-dental grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div key={i} className="group overflow-hidden rounded-xl border border-border">
            <img
              src={img.src}
              alt={img.alt}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Gallery;
