import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: 'El equipo de DiverMente generó la confianza que mi familia necesitaba. El acompañamiento fue profesional y muy humano.',
    author: 'María L.',
    role: 'Madre de familia'
  },
  {
    quote: 'Sentí un cambio real en el desarrollo emocional de mi hijo. Las actividades son creativas y el seguimiento impecable.',
    author: 'Jorge R.',
    role: 'Padre de familia'
  },
  {
    quote: 'Encontré un espacio seguro y cálido. El proceso terapéutico me ayudó a reconectar conmigo y con las personas que me rodean.',
    author: 'Sofía G.',
    role: 'Joven'
  }
];

function TestimonialCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      className="rounded-[34px] bg-white p-8 shadow-soft"
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.author}>
          <div className="space-y-6">
            <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
            <div className="space-y-1">
              <p className="text-xl font-semibold text-deepblue">{item.author}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.role}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonialCarousel;
