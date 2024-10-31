import Header from "@/components/Header";
import About from "./About/page";
import Skills from "./Skills/page";
import Footer from "@/components/Footer";

export default function(){
  return(
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8 bg-fuchsia-200">
      <About />
      <Skills />
      </main>
      <Footer />
    </div>
  );
}