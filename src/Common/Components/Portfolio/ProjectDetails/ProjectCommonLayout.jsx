import React, { useState } from "react";

const ProjectCommonLayout = ({
  title = "Project Title",
  bannerImage = "",
  projectDetails = [],
  description = [],
  // brochureText = "DOWNLOAD BROCHURE",
  // brochureFile = "/Ticket-TK718784311D84.pdf",
  galleryTabs = ["All", "Exterior", "Interior"],
  galleryImages = [],
}) => {
  const [galleryTab, setGalleryTab] = useState(galleryTabs[0]);

  // Filter gallery based on selected tab
  const filteredGallery =
    galleryTab === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === galleryTab);

  // Brochure download function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brochureFile;
    link.download = `${title}-Brochure.pdf`;
    link.click();
  };

  // Switch back to "All" tab when clicking All Projects
  const handleShowAllProjects = () => {
    setGalleryTab("All");
  };

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* background glows (same language as ServiceLayout / Portfolio) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl opacity-45" />
        <div className="absolute bottom-[-140px] right-[-100px] w-96 h-96 rounded-full bg-white/5 blur-3xl opacity-60" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-0 py-10 md:py-14">
        {/* Title */}
        <header className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/5 text-[11px] tracking-[0.22em] uppercase text-white/70">
            <span className="h-[6px] w-[6px] rounded-full bg-white/70" />
            <span>Project</span>
          </div>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight">
            {title}
          </h1>
        </header>

        {/* Banner (image or video) in hero card */}
        {bannerImage && (
          <section className="mb-10 md:mb-12">
            <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-b from-white/10 via-white/5 to-black shadow-[0_28px_80px_rgba(0,0,0,0.85)] border border-white/15">
              <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px]">
                {bannerImage.endsWith(".mp4") ? (
                  <video
                    src={bannerImage}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={bannerImage}
                    alt="Project Banner"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black via-black/80 to-transparent px-5 flex items-center justify-between text-[11px] text-white/75">
                <span className="tracking-[0.18em] uppercase">
                  Project Overview
                </span>
                <span className="hidden sm:flex items-center gap-2 tracking-[0.16em] uppercase">
                  <span className="inline-block h-[6px] w-[6px] rounded-full bg-white/80" />
                  {title}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Project Info Grid */}
        {projectDetails.length > 0 && (
          <section className="mb-10 md:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/5 border border-white/15 px-5 py-4 sm:px-6 sm:py-5 shadow-[0_18px_50px_rgba(0,0,0,0.8)]"
                >
                  <p className="text-xs sm:text-sm text-white/60 tracking-[0.16em] uppercase mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Description + Brochure CTA */}
        {/* {(description.length > 0 || brochureText) && (
          <section className="mb-12 md:mb-14">
            <div className="max-w-4xl mx-auto space-y-5">
              {description.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed md:leading-loose"
                >
                  {para}
                </p>
              ))}

              {brochureText && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleDownload}
                    className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition shadow-[0_18px_45px_rgba(0,0,0,0.7)] cursor-pointer tracking-[0.14em] uppercase"
                  >
                    {brochureText}
                  </button>
                </div>
              )}
            </div>
          </section>
        )} */}

        {/* Gallery Section */}
        <section className="mb-12 md:mb-14">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Project Gallery
          </h2>

          {/* Gallery Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-2 mb-8 text-xs sm:text-sm md:text-[13px] font-medium">
            {galleryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setGalleryTab(tab)}
                className={`px-4 py-2 rounded-full uppercase tracking-[0.18em] transition-all duration-300 border ${
                  galleryTab === tab
                    ? "bg-white text-black border-white shadow-[0_14px_40px_rgba(0,0,0,0.7)]"
                    : "border-white/25 text-white/65 hover:text-white hover:border-white/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7">
            {filteredGallery.length > 0 ? (
              filteredGallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-[22px] border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
                >
                  <div className="w-full aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.alt || `Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white/50 col-span-full">
                No images available for this category.
              </p>
            )}
          </div>
        </section>

        {/* All Projects Button (only when tab != All) */}
        {galleryTab !== "All" && (
          <div className="flex justify-center mb-10 md:mb-12">
            <button
              onClick={handleShowAllProjects}
              className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold border border-white/60 text-white hover:bg-white hover:text-black transition shadow-[0_16px_40px_rgba(0,0,0,0.75)] tracking-[0.16em] uppercase"
            >
              All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCommonLayout;
