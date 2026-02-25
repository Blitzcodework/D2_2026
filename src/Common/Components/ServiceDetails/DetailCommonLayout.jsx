import React from "react";

const DetailCommonLayout = ({
  title,
  heroImage,
  description,
  subSectionTitle,
  subSectionText,
  galleryImages,
}) => {
  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-white/8 blur-3xl opacity-35" />
        <div className="absolute bottom-[-160px] right-[-120px] w-[360px] h-[360px] rounded-full bg-white/5 blur-3xl opacity-45" />
      </div>

      {/* Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">

        {/* Header */}
        <header className="pt-12 md:pt-16">
          <p className="text-[11px] tracking-[0.24em] uppercase text-white/55 mb-2 text-center md:text-left">
            Service Detail
          </p>
          <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-light leading-tight">
            {title}
          </h1>
        </header>

        {/* HERO IMAGE — FULL COVER */}
        <section className="mt-10 md:mt-12">
          <div className="relative rounded-3xl overflow-hidden border border-white/12 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.9)]">

            {/* FIXED HEIGHT BOX + FULL-SIZE IMAGE COVER */}
            <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[460px]">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top glow */}
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/20 via-white/8 to-transparent opacity-75 pointer-events-none" />

            {/* Bottom caption */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black via-black/85 to-transparent px-5 flex items-center justify-between text-[11px] text-white/70">
              <span className="tracking-[0.16em] uppercase">
                Featured Visual
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-[6px] w-[6px] rounded-full bg-white/70" />
                <span className="tracking-[0.14em] uppercase">{title}</span>
              </span>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="mt-12 md:mt-14 text-center">
          <h2 className="text-sm tracking-[0.2em] uppercase text-white/55 mb-4">
            Overview
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed italic max-w-3xl mx-auto">
            {description}
          </p>
        </section>

        {/* SUB SECTION */}
        <section className="mt-14 md:mt-16 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.2em] uppercase mb-2">
              {subSectionTitle}
            </h3>
            <div className="h-[2px] w-16 bg-white/65 mb-4 rounded-full" />
            <p className="text-xs text-white/50 tracking-[0.18em] uppercase">
              Key Information
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/78 leading-relaxed md:leading-loose">
            {subSectionText}
          </p>
        </section>

        {/* Divider */}
        <div className="mt-14 md:mt-16 flex justify-center">
          <div className="h-px w-32 bg-white/25" />
        </div>

        {/* GALLERY */}
        {galleryImages?.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-[0.16em] uppercase">
                  Gallery
                </h3>
                <p className="mt-2 text-xs text-white/55 tracking-[0.14em] uppercase">
                  Visual references
                </p>
              </div>
              <p className="text-xs text-white/45 tracking-[0.16em] uppercase">
                {galleryImages.length} Image{galleryImages.length > 1 && "s"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 shadow-[0_20px_55px_rgba(0,0,0,0.8)]"
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.18em] text-white/80 opacity-0 group-hover:opacity-100 duration-300">
                    Image {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BACK BUTTON */}
        <div className="flex justify-center mt-14 pb-10">
          <button
            className="px-8 py-2.5 text-sm border border-white/35 rounded-full hover:bg-white hover:text-black transition tracking-[0.2em] uppercase text-white/80"
            onClick={() => window.history.back()}
          >
            ← Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCommonLayout;
