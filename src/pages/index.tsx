import FirstTitle from "@/components/FirstTitle";
import { Button } from "@/components/ui/button";
import AreaText from "@/components/AreaText";
import Layout from "@/components/Layout";

import heroImage from "/assets/hero-1.png";
import product1 from "/assets/product-1.jpeg";
import product2 from "/assets/product-2.jpeg";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      <Layout>
        {/* hero section */}
        <section className="flex-grow w-full flex flex-col">
          <div className="flex-grow-2 bg-[#395C4E] px-24">
            <div className="grid grid-cols-2 h-full">
              <div className="grid content-center">
                <FirstTitle
                  text="Modern Interior, Design Studio"
                  className="mb-2"
                />
                <AreaText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" />
                <AreaText text="eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <AreaText text="Ut enim ad minim veniam, quis nostrud exercitation ullamco" />
                <AreaText text="laboris nisi ut aliquip ex ea commodo consequat. Duis" />
                <AreaText
                  text="aute irure dolor in reprehenderit in voluptate,"
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
          <div className="flex-grow-1 bg-[#F0F2F1] px-24">
            <div className="grid grid-cols-3 h-full">
              <div className="bg-yellow-200 p-5 flex justify-center">
                <Card className="h-full w-80 bg-[#DFE6E6] transform group-hover:shadow-xl transition-shadow duration-500">
                  <CardContent>
                    <div className="relative overflow-hidden h-[150px] w-full">
                      <img
                        src={product1}
                        alt="product-1"
                        className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </div>
              <div className="bg-yellow-300">tes 2</div>
              <div className="bg-yellow-400">tes 3</div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
