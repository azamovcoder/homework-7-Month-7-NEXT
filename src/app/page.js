import About from "@/components/about/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Popular from "@/components/popular/Popular";
import Products from "@/components/products/Products";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <About />
      <Testimonials />
      <Popular />
    </div>
  );
}
