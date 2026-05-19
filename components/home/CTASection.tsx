'use client';

import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5f9] via-white to-[#fff0f6] py-24">
      
      {/* Background Glow Effects */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          
          {/* Facebook / Main CTA Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-pink-100 bg-white/90 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8">
            
            {/* Glow */}
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-pink-100/40 blur-3xl"></div>

            <div className="relative">
              
              {/* Header */}
              <div className="mb-8 flex items-start gap-5">
                
                {/* Facebook Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-white shadow-2xl shadow-pink-500/30">
                  <span className="text-4xl font-black">f</span>
                </div>

                {/* Heading */}
                <div>
                  <div className="mb-3 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C2185B]">
                    Follow Us
                  </div>

                  <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                    Dlamvuzo High School
                    <span className="block bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] bg-clip-text text-transparent">
                      On Facebook
                    </span>
                  </h2>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                    Stay updated with school achievements, academic
                    excellence, learner activities, leadership programs,
                    and community events.
                  </p>
                </div>
              </div>

            {/* Facebook Embed */}
<div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-slate-100 shadow-inner h-[500px]">
  <iframe
    title="Dlamvuzo High School Facebook Page"
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D100063753323896&tabs=timeline&width=560&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    className="h-full w-full border-0"
    loading="lazy"
    scrolling="no"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  />
</div>
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  Visit Facebook
                </Button>

                <Button variant="secondary" size="lg">
                  Contact School
                </Button>
              </div>

              {/* Bottom Accent */}
              <div className="mt-10 h-1 w-40 rounded-full bg-gradient-to-r from-[#E5006D] to-[#C2185B]"></div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div>
            
            {/* Gallery Header */}
            <div className="mb-8">
              <div className="mb-4 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C2185B]">
                School Gallery
              </div>

              <h3 className="text-3xl font-black text-slate-900">
                Life At
                <span className="block bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] bg-clip-text text-transparent">
                  Dlamvuzo High
                </span>
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore moments of excellence, innovation, leadership,
                sports, and student life across our vibrant school community.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              
              {[
                {
                  src: '/dlavuzo.jpg',
                  alt: 'Students presenting projects',
                },
                {
                  src: '/dlavuzo.jpg',
                  alt: 'School community event',
                },
                {
                  src: '/dlavuzo.jpg',
                  alt: 'Students in classroom',
                },
                {
                  src: '/dlavuzo.jpg',
                  alt: 'School campus exterior',
                },
                
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-xl"
                >
                  
                  {/* Image */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70"></div>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#E5006D] to-[#C2185B] transition-all duration-500 group-hover:w-full"></div>

                  {/* Label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                      Dlamvuzo High
                    </div>
                  </div>
                </div>
              ))}
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
}