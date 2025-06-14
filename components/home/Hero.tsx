import Link from "next/link";

import React from "react";
import { Button } from "../ui/button";
import HeroCarusel from "./HeroCarusel";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="">
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people SHOP!!11
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae porro
          ducimus rem accusantium soluta laboriosam itaque tempore nemo magni
          veniam!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarusel />
    </section>
  );
};

export default Hero;
