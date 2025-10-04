import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import VideoReviews from "@/components/VideoReviews";
import FAQ from "@/components/FAQ";
import ReturnProcess from "@/components/ReturnProcess";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <Reviews />
        <VideoReviews />
        <FAQ />
        <ReturnProcess />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
