const PageHeader = ({ title, subtitle }) => (
  <section className="bg-secondary section-padding text-center">
    <div className="container-dental">
      <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">{title}</h1>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  </section>
);

export default PageHeader;