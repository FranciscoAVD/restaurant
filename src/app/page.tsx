import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Calendar, Menu } from "lucide-react";
import hero from "/public/hero-bg.jpg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full text-white bg-neutral-900/70 border-b border-neutral-700 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 px-4 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-white font-playfair uppercase">
              Il Baccalao
            </span>
          </Link>
          <nav className="hidden text-sm md:flex gap-6">
            <Link href="#about" className="">
              About
            </Link>
            <Link href="#menu">Menu</Link>
            <Link href="#reservations">Reservations</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="secondary" className="hidden md:flex">
              Reserve a Table
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col p-4 bg-neutral-900 text-white border-neutral-700"
              >
                <SheetHeader className="px-0">
                  <SheetTitle className="text-lg text-white uppercase">
                    Il Baccalao
                  </SheetTitle>

                  <SheetDescription className="text-neutral-400 text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illo sunt reiciendis, facilis expedita nam quis eligendi
                    perspiciatis ex. Pariatur, sunt?
                  </SheetDescription>
                </SheetHeader>

                <nav className="grid gap-6">
                  <Link href="#about" className="">
                    About
                  </Link>
                  <Link href="#menu">Menu</Link>
                  <Link href="#reservations">Reservations</Link>
                  <Link href="#contact">Contact</Link>
                </nav>
                <Button variant="secondary" className="mt-auto">
                  Reserve a Table
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="bg-neutral-900 font-lato">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={hero}
              alt="Hero image"
              className="h-full object-cover [mask-image:linear-gradient(to_bottom_right,black,transparent_50%)] lg:[mask-image:linear-gradient(to_bottom_right,black,transparent_60%)]"
            />
          </div>
          <div className="container mx-auto relative z-10 flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-48 lg:py-56">
            <div className="space-y-2">
              <h1 className="uppercase text-white text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                Il Baccalao
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-neutral-300">
                Authentic Spanish cuisine with a modern twist
              </p>
            </div>
            <div className="space-x-4">
              <Button variant={"secondary"} asChild>
                <Link href="#menu">View Menu</Link>
              </Button>
              <Button className="border border-neutral-700" asChild>
                <Link href="#reservations">Reserve a Table</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-4 text-justify">
                <h2 className="text-3xl text-white font-bold sm:text-4xl">
                  Our Story
                </h2>
                <p className="text-neutral-400">
                  Founded in 2010, Il Baccalao brings the rich flavors of
                  Spanish coastal cuisine to your table. Our name pays homage to
                  the beloved salt cod that has been a staple of Mediterranean
                  cooking for centuries.
                </p>
                <p className="text-neutral-400">
                  Our head chef, Maria Gonzalez, trained in Barcelona and Madrid
                  before bringing her passion for authentic Spanish flavors to
                  our kitchen. Each dish is crafted with locally sourced
                  ingredients and traditional techniques.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-[4/3]">
                <Image
                  src={hero}
                  alt="Chef preparing food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className=" py-16 md:py-24">
          <div className="container mx-auto px-4 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-white text-3xl font-bold sm:text-4xl">
                Menu Highlights
              </h2>
              <p className="mx-auto max-w-[700px] text-neutral-400">
                Our menu changes seasonally to showcase the freshest
                ingredients, but these signature dishes are always available.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Paella Valenciana",
                  description:
                    "Traditional Spanish rice dish with saffron, chicken, rabbit, and seasonal vegetables",
                  price: "$28",
                },
                {
                  title: "Bacalao al Pil Pil",
                  description:
                    "Our signature salt cod dish with garlic, olive oil, and chili, creating a delicate emulsion",
                  price: "$32",
                },
                {
                  title: "Pulpo a la Gallega",
                  description:
                    "Galician-style octopus with paprika, olive oil, and boiled potatoes",
                  price: "$26",
                },
                {
                  title: "Gambas al Ajillo",
                  description:
                    "Sizzling garlic shrimp with olive oil and red pepper flakes",
                  price: "$24",
                },
                {
                  title: "Tortilla Española",
                  description:
                    "Classic Spanish omelet with potatoes, onions, and free-range eggs",
                  price: "$18",
                },
                {
                  title: "Crema Catalana",
                  description:
                    "Traditional Catalan custard dessert with caramelized sugar crust",
                  price: "$14",
                },
              ].map((dish, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={hero}
                      alt={dish.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{dish.title}</h3>
                      <span className="text-primary">{dish.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-500">
                      {dish.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant={"secondary"}>View Full Menu</Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-[4/3]">
                <Image
                  src={hero}
                  alt="Restaurant dining area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 md:px-0 space-y-4 text-justify">
                <h2 className="text-white text-3xl font-bold sm:text-4xl">
                  The Experience
                </h2>
                <p className="text-neutral-400">
                  At Il Baccalao, we believe dining is more than just food—it's
                  an experience. Our restaurant offers an intimate atmosphere
                  with warm lighting, authentic Spanish décor, and attentive
                  service.
                </p>
                <p className="text-neutral-400">
                  Every Thursday evening, enjoy live flamenco music as you dine.
                  Our wine list features carefully selected Spanish wines to
                  complement your meal perfectly.
                </p>
                <div className="flex flex-col space-y-2 text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>Open Tuesday - Sunday, 5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>123 Seaside Avenue, Coastal City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reservations" className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl text-white font-bold sm:text-4xl">
                Reserve Your Table
              </h2>
              <p className="mx-auto max-w-[700px] text-neutral-400">
                Experience the authentic flavors of Spain at Il Baccalao.
                Reservations recommended, especially for weekend dining.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="secondary" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-white bg-neutral-900">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Il Baccalao</h3>
              <p className="text-sm text-neutral-400">
                Authentic Spanish cuisine with a modern twist, bringing the
                flavors of coastal Spain to your table.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Hours</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>Tuesday - Thursday: 5:00 PM - 10:00 PM</li>
                <li>Friday - Sunday: 5:00 PM - 11:00 PM</li>
                <li>Monday: Closed</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li>(555) 123-4567</li>
                <li>info@ilbaccalao.com</li>
                <li>123 Seaside Avenue, Coastal City</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Il Baccalao. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
