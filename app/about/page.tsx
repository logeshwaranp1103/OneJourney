"use client";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { FadeIn, FadeUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations/Reveals";
import { ShieldAlert, Heart, Calendar, Users, HeartHandshake, Eye, BookOpen, Star } from "lucide-react";
import { easeQuint, getAssetPath } from "@/lib/animations";

export default function AboutUs() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main className="w-full flex-grow pb-20 select-none">
          
          {/* Hero Section */}
          <section className="relative bg-primary text-on-primary overflow-hidden pt-16 pb-28 text-left">
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 100% 0%, #ffdeaa 0%, transparent 60%)" }} />
            
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Headings & stats */}
              <div className="space-y-6">
                <FadeUp>
                  <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-primary">
                    Travel Organised with Care, Experience and Trust
                  </h1>
                </FadeUp>
                
                <FadeUp delay={0.1}>
                  <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl leading-relaxed">
                    For over 15 years, OneJourney has been dedicated to crafting serene, meticulously planned spiritual journeys, ensuring comfort, safety, and deep devotion for every pilgrim, especially our senior travellers.
                  </p>
                </FadeUp>

                {/* Stats grid */}
                <StaggerContainer delay={0.2}>
                  <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    
                    <StaggerItem>
                      <div className="bg-primary-container/40 border border-outline-variant/15 rounded-xl p-4">
                        <p className="font-headline-lg text-headline-lg text-secondary-fixed font-bold">15+</p>
                        <p className="font-body-sm text-[13px] text-primary-fixed-dim leading-tight">Years Experience</p>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="bg-primary-container/40 border border-outline-variant/15 rounded-xl p-4">
                        <p className="font-headline-lg text-headline-lg text-secondary-fixed font-bold">10k+</p>
                        <p className="font-body-sm text-[13px] text-primary-fixed-dim leading-tight">Happy Travellers</p>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="bg-primary-container/40 border border-outline-variant/15 rounded-xl p-4">
                        <p className="font-headline-lg text-headline-lg text-secondary-fixed font-bold">500+</p>
                        <p className="font-body-sm text-[13px] text-primary-fixed-dim leading-tight">Tours Completed</p>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="bg-primary-container/40 border border-outline-variant/15 rounded-xl p-4">
                        <div className="flex items-center gap-1 text-secondary-fixed">
                          <p className="font-headline-lg text-headline-lg font-bold">4.8</p>
                          <Star size={16} className="fill-secondary-fixed text-secondary-fixed" />
                        </div>
                        <p className="font-body-sm text-[13px] text-primary-fixed-dim leading-tight">Average Rating</p>
                      </div>
                    </StaggerItem>

                  </div>
                </StaggerContainer>
              </div>

              {/* Right Column: Hero photo */}
              <div className="relative h-96 lg:h-auto w-full aspect-square lg:aspect-auto">
                <ScaleIn delay={0.1}>
                  <img 
                    src={getAssetPath("/images/family_temple_prayer.png")} 
                    alt="Indian family in temple praying" 
                    className="object-cover w-full h-full rounded-2xl shadow-level-2 border-4 border-surface-container-lowest/10 aspect-[4/3]"
                  />
                </ScaleIn>
              </div>

            </div>
          </section>

          {/* Core Values Section */}
          <section id="history" className="max-w-container-max mx-auto px-margin-mobile md:px-12 py-20 -mt-16 relative z-10">
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter text-left">
                
                {/* Value Card 1 */}
                <StaggerItem>
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 border border-outline-variant/10 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined text-[24px] icon-fill">shield_person</span>
                    </div>
                    <h3 className="font-headline-md text-[20px] text-primary font-bold">Unwavering Safety</h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      We prioritize your well-being with rigorous safety protocols, vetted partners, and 24/7 on-ground support, ensuring peace of mind.
                    </p>
                  </div>
                </StaggerItem>

                {/* Value Card 2 */}
                <StaggerItem>
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 border border-outline-variant/10 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined text-[24px] icon-fill">elderly</span>
                    </div>
                    <h3 className="font-headline-md text-[20px] text-primary font-bold">Senior Comfort</h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      Tailored itineraries with accessible accommodations, minimal walking requirements, and dedicated assistance for older devotees.
                    </p>
                  </div>
                </StaggerItem>

                {/* Value Card 3 */}
                <StaggerItem>
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 border border-outline-variant/10 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined text-[24px] icon-fill">volunteer_activism</span>
                    </div>
                    <h3 className="font-headline-md text-[20px] text-primary font-bold">Deep Respect</h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      Every journey is conducted with the utmost reverence for local customs, traditions, and the spiritual significance of the sites.
                    </p>
                  </div>
                </StaggerItem>

                {/* Value Card 4 */}
                <StaggerItem>
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 border border-outline-variant/10 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined text-[24px] icon-fill">visibility</span>
                    </div>
                    <h3 className="font-headline-md text-[20px] text-primary font-bold">Total Transparency</h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      Clear, upfront pricing with no hidden fees. We believe in honest communication regarding every aspect of your itinerary.
                    </p>
                  </div>
                </StaggerItem>

              </div>
            </StaggerContainer>
          </section>

          {/* Simple Devotional Philosophy section */}
          <section className="max-w-3xl mx-auto px-margin-mobile text-center py-8">
            <FadeIn>
              <h2 className="font-headline-lg text-primary font-bold mb-4">Our Spiritual Promise</h2>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                We believe that a pilgrimage is not just a holiday; it is a sacred event in one&apos;s life. Our mission is to remove all earthly concerns, so that your devotion can flow freely. With vetted properties, wheelchair-equipped vehicles, and expert guides, we stand by you in every step.
              </p>
            </FadeIn>
          </section>

        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
