import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} pages={["about us"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {/* About hero image */}
          <div className="relative w-full rounded-xl overflow-hidden mb-12 h-48 sm:h-64 lg:h-80 bg-gray-1">
            <Image
              src="/images/about/about-hero.png"
              alt="Officeworks - Office and school stationery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1170px"
              priority
            />
          </div>

          {/* Hero intro */}
          <div className="text-center mb-16">
            <h2 className="font-semibold text-dark text-2xl sm:text-3xl lg:text-heading-3 mb-4 uppercase tracking-wide">
              Some Words About Us
            </h2>
            <p className="font-semibold text-dark text-xl sm:text-2xl mb-2">
              We are more than a Stationery Store!
            </p>
            <p className="font-medium text-blue text-lg mb-4">We love what we do</p>
            <p className="max-w-[700px] mx-auto text-dark-4 text-custom-sm sm:text-base">
              Officeworks is all kinds of office, school and computer stationery importer and distributor.
            </p>
            <Link
              href="/contact"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-3 px-9 rounded-md ease-out duration-200 hover:bg-blue-dark mt-6"
            >
              Contact us
            </Link>
          </div>

          {/* Main content */}
          <div className="bg-white rounded-xl shadow-1 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:min-w-[400px] lg:max-w-[450px] h-56 sm:h-72 lg:h-auto lg:min-h-[320px]">
                <Image
                  src="/images/categories/gen-general-stationery.png"
                  alt="Office and school stationery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-12 flex-1">
                <h3 className="font-semibold text-dark text-xl sm:text-2xl mb-2 uppercase">
                  Officeworks
                </h3>
                <h4 className="font-medium text-blue text-lg mb-6">About Us</h4>

                <div className="flex flex-col gap-6 text-dark-4 text-custom-sm sm:text-base leading-relaxed">
              <p>
                Officeworks is more than a stationery store; we&apos;re Sri Lanka&apos;s largest importer, manufacturer and direct supplier of quality office and school stationery products for home offices, students and small to large size businesses. We&apos;re part of the Officeworks International, and also one of the largest buying powers in Sri Lanka. We offer you more of the products and brands you love, at the lowest prices.
              </p>

              <p>
                Our ambition is to provide our customers with the widest range of office and school stationery products at the lowest prices every day, backed with the best service. Our Team Members are the heart and soul of our business.
              </p>

              <p>
                Our team&apos;s guiding principles are integrity, respect, teamwork, achievement and innovation. Our guiding principles are the keys to our culture and to achieving our vision.
              </p>

              <p>
                We value our Team Members&apos; contributions, recognize and reward their efforts and provide a fun, satisfying and safe workplace.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
