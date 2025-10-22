import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Registration from "@/components/Registration";
import Challenges from "@/components/Challenges";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Rules />
        <Registration />
        <Challenges />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
