import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Wifi, Wind, Waves, Instagram, Facebook, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Waves className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Jana's Apartment
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#gallery">Gallery</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#location">Location</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#booking">Booking</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img src="/images/rijeka-hero.jpg" alt="Rijeka seaside" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Jana's Apartment in Rijeka</h1>
          <p className="text-xl md:text-2xl mb-8">Your perfect getaway in the heart of the Mediterranean</p>
          <Button size="lg" onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}>
            Book Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About the Apartment</h2>
          <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
            Experience the charm of Rijeka in our beautifully appointed apartment. With stunning sea views and modern amenities, it's the perfect base for your Croatian adventure.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <Wifi className="mr-2" />
              <span>Free Wi-Fi</span>
            </div>
            <div className="flex items-center">
              <Wind className="mr-2" />
              <span>Air Conditioning</span>
            </div>
            <div className="flex items-center">
              <Waves className="mr-2" />
              <span>Sea View</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/rijeka-apartment-1.jpg" alt="Apartment living room" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/rijeka-apartment-2.jpg" alt="Apartment bedroom" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/rijeka-beach.jpg" alt="Rijeka beach" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/rijeka-old-town.jpg" alt="Rijeka old town" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/rijeka-harbor.jpg" alt="Rijeka harbor" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/rijeka-hero.jpg" alt="Rijeka panorama" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-4">
                Our apartment is ideally located in the heart of Rijeka, just steps away from the beautiful Adriatic Sea. Enjoy easy access to local attractions, restaurants, and shops.
              </p>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>123 Seaside Street, Rijeka, Croatia</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/images/rijeka-map.jpg" alt="Map of Rijeka" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Book Your Stay</h2>
          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="Number of Guests" type="number" />
            </div>
            <div className="mb-4">
              <Calendar mode="range" className="rounded-md border" />
            </div>
            <Textarea placeholder="Special Requests" className="mb-4" />
            <Button className="w-full">Submit Booking Request</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2023 Jana's Apartment. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;