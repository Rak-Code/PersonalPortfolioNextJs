"use client"
import { Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Card, CardContent } from "./ui/card"
import { FadeInSection } from "./animations/fade-in-section"

const testimonials = [
  {
    name: "Nikhil Shrivastav",
    feedback:
      "The portfolio is professional and elegantly showcases my finance background. The attention to detail and structured approach made the entire process smooth and efficient.",
    role: "Aspiring Investment Banking Operations Professional",
  },
  {
    name: "Abhishek Yadav",
    feedback:
      "The portfolio highlights all my full-stack projects and skills just the way I envisioned. The result was clean, responsive, and perfectly developer-friendly.",
    role: "Full Stack Developer",
  },
];

export default function Testimonial() {
  return (
    <FadeInSection>
      <section className="py-6 md:py-10 bg-background">
        <div className="container px-4 mx-auto max-w-4xl">
       
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            What Our Clients Say
          </h2>
          
          {/* Swiper for Testimonials */}
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={false}
            className="mySwiper !pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <Quote className="text-primary mb-4 h-6 w-6" />
                    <p className="text-muted-foreground italic mb-4">"{t.feedback}"</p>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </FadeInSection>
  );
}
