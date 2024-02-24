import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className=" h-screen px-4 lg:px-6 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/bg.jpg')] bg-cover bg-top bg-no-repeat">
        <div className="px-4 lg:px-6 h-14 flex items-center z-50">
          <Link className="flex items-center justify-center" href="#">
            <MountainIcon className="h-6 w-6 text-white" />
            <span className="sr-only text-white">Acme Inc</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium text-white hover:underline underline-offset-4"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium text-white hover:underline underline-offset-4"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium text-white hover:underline underline-offset-4"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium text-white hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>

        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center lg:space-y-10">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Watch Anywhere. Cancel Anytime.
              </h1>
              <p className="text-gray-200 text-lg">
                Enjoy unlimited access to thousands of movies and TV shows.
                Watch anywhere. Cancel anytime.
              </p>
            </div>
            <form className="flex flex-col gap-2 w-[500px] items-center">
              <Input
                className="w-full"
                placeholder="Enter your email"
                type="email"
              />
              <Button size="lg" className="w-max">
                Sign Up
              </Button>
            </form>
          </div>
        </section>
      </header>
      <main className="flex-1 divide-y-2">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="450"
                src="/placeholder.svg"
                width="800"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-400 px-3 py-1 text-sm dark:bg-gray-800">
                    Action
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    The best action movies
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Get your adrenaline pumping with our collection of
                    high-octane action movies. From explosive blockbusters to
                    pulse-pounding thrillers, we&apos;ve got the
                    edge-of-your-seat entertainment you crave.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">Watch Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="450"
                src="/placeholder.svg"
                width="800"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-400 px-3 py-1 text-sm dark:bg-gray-800">
                    Comedy
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Laugh out loud with our comedy collection
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Get ready to chuckle, giggle, and guffaw with our hilarious
                    selection of comedy movies and TV shows. Whether you love
                    slapstick, satire, or romantic comedies, we&apos;ve got
                    something to tickle your funny bone.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">Watch Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="450"
                src="/placeholder.svg"
                width="800"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-400 px-3 py-1 text-sm dark:bg-gray-800">
                    Drama
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Experience the power of storytelling with our drama
                    collection
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Let your emotions run wild with our captivating drama movies
                    and TV shows. From heartwarming tales of love and friendship
                    to intense stories of triumph and tragedy, our collection
                    will keep you on the edge of your seat.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">Watch Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link
                  className="underline underline-offset-2 text-gray-900"
                  href="#"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-white">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-white hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-white hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
