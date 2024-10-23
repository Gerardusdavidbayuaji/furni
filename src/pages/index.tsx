import FirstTitle from "@/components/FirstTitle";
import { Button } from "@/components/ui/button";
import AreaText from "@/components/AreaText";
import Layout from "@/components/Layout";
import SecondTitle from "@/components/SecondTitle";

import product1 from "/assets/product-1.jpeg";
import product2 from "/assets/product-2.jpeg";
import heroImage from "/assets/hero-1.png";

import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      <Layout>
        {/* hero section */}
        <section className="flex-grow w-full flex flex-col">
          <div className="flex-grow bg-[#395C4E] px-24">
            <div className="grid grid-cols-2 h-full">
              <div className="grid content-center">
                <FirstTitle
                  text="Modern Interior, Design Studio"
                  className="mb-2"
                />
                <AreaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" />
                <AreaText text="eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <AreaText
                  text="Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                  className="mb-4"
                />

                <Button className="rounded-full bg-transparent hover:bg-[#778F86]/30 outline outline-2 outline-[#778F86] w-24">
                  Explore
                </Button>
              </div>
              <div className="flex items-center justify-end">
                <img
                  src={heroImage}
                  alt="hero image"
                  className="max-h-[400px] max-w-[900px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-grow bg-[#F0F2F1] px-24">
            <div className="grid grid-cols-4 h-full">
              <article className="flex justify-center group relative p-5 mx-5">
                <Card className="transform duration-500">
                  <CardContent>
                    <div className="relative h-60 md:h-48 w-80 md:w-72 rounded-tr-xl rounded-tl-xl overflow-hidden">
                      <img
                        src={product1}
                        alt="product-1"
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="font-medium text-base">Lorem Ipsum</h3>
                      <p className="font-normal text-sm">Rp 5.000.000</p>
                    </div>
                  </CardContent>
                </Card>
              </article>
              <article className="flex justify-center group relative p-5">
                <Card className="transform duration-500">
                  <CardContent>
                    <div className="relative h-60 md:h-48 w-80 md:w-72 rounded-tr-xl rounded-tl-xl overflow-hidden">
                      <img
                        src={product2}
                        alt="product-1"
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="font-medium text-base">Lorem Ipsum</h3>
                      <p className="font-normal text-sm">Rp 5.000.000</p>
                    </div>
                  </CardContent>
                </Card>
              </article>
              <article className="flex justify-center group relative p-5">
                <Card className="transform duration-500">
                  <CardContent>
                    <div className="relative h-60 md:h-48 w-80 md:w-72 rounded-tr-xl rounded-tl-xl overflow-hidden">
                      <img
                        src={product1}
                        alt="product-1"
                        sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                        className="rounded-xl w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-5 text-center">
                      <h3 className="font-medium text-base">Lorem Ipsum</h3>
                      <p className="font-normal text-sm">Rp 5.000.000</p>
                    </div>
                  </CardContent>
                </Card>
              </article>
              <div className="flex flex-col justify-center items-end p-5">
                <SecondTitle text="Crafted with" className="text-[#2B2B2B]" />
                <SecondTitle
                  text="excellent material."
                  className="text-[#2B2B2B]"
                />
                <AreaText
                  text="Lorem ipsum dolor sit amet,"
                  className="text-[#2B2B2B]"
                />
                <AreaText
                  text="consectetur adipiscing elit."
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
