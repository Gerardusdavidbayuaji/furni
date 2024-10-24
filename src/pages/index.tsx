import FirstTitle from "@/components/FirstTitle";
import { Button } from "@/components/ui/button";
import AreaText from "@/components/AreaText";
import Layout from "@/components/Layout";
import SecondTitle from "@/components/SecondTitle";

import product1 from "/assets/product-1.jpeg";
import heroImage from "/assets/hero-1.png";

import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      <Layout>
        {/* hero section */}
        <section className="flex-grow w-full flex flex-col">
          <div className="flex-grow bg-[#395C4E] px-24">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 h-full">
              <div className="grid content-center">
                <FirstTitle
                  text="Modern Interior, Design Studio"
                  className="mb-2"
                />
                <p className="font-normal lg:text-base text-white md:font-light md:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
                <p className="font-normal lg:text-base text-white md:font-light md:text-sm">
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="font-normal lg:text-base text-white md:font-light mb-4 md:text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>

                <Button className="rounded-full bg-transparent hover:bg-[#778F86]/30 outline outline-2 outline-[#778F86] lg:w-24 md:w-20 md:mb-8 md:text-sm">
                  Explore
                </Button>
              </div>
              <div className="lg:flex items-center justify-end md:hidden sm:hidden">
                <img
                  src={heroImage}
                  alt="hero image"
                  className="max-h-[400px] max-w-[900px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-grow bg-[#F0F2F1] px-24">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 h-full">
              <article className="flex flex-col justify-start md:justify-center group relative py-5">
                <Card className="transform duration-500 mx-5">
                  <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                    <img
                      src={product1}
                      alt="product-1"
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center h-auto my-2">
                    <h3 className="font-medium lg:text-base md:text-sm">
                      Lorem Ipsum
                    </h3>
                    <AreaText text="Rp 5.000.000" className="text-[#2B2B2B]" />
                  </div>
                </Card>
              </article>

              <article className="flex flex-col justify-start md:justify-center group relative py-5">
                <Card className="transform duration-500 mx-5">
                  <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                    <img
                      src={product1}
                      alt="product-1"
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center h-auto my-2">
                    <h3 className="font-medium lg:text-base md:text-sm">
                      Lorem Ipsum
                    </h3>
                    <AreaText text="Rp 5.000.000" className="text-[#2B2B2B]" />
                  </div>
                </Card>
              </article>

              <article className="flex flex-col justify-start md:justify-center group relative py-5">
                <Card className="transform duration-500 mx-5">
                  <div className="relative h-60 md:h-48 w-full rounded-tr-xl rounded-tl-xl overflow-hidden">
                    <img
                      src={product1}
                      alt="product-1"
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center h-auto my-2">
                    <h3 className="font-medium lg:text-base md:text-sm">
                      Lorem Ipsum
                    </h3>
                    <AreaText text="Rp 5.000.000" className="text-[#2B2B2B]" />
                  </div>
                </Card>
              </article>

              <div className="flex flex-col justify-center items-end py-5 md:px-5">
                <SecondTitle text="Crafted with" className="text-[#2B2B2B]" />
                <SecondTitle
                  text="excellent material."
                  className="text-[#2B2B2B]"
                />
                <AreaText
                  text="Sed ut perspiciatis unde omnis iste"
                  className="text-[#2B2B2B]"
                />
                <AreaText
                  text="natus error sit voluptatem accusan"
                  className="text-[#2B2B2B]"
                />
                <AreaText
                  text="doloremque laudantium, totam rem"
                  className="text-[#2B2B2B] mb-4"
                />
                <Button className="rounded-full bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 w-24">
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
