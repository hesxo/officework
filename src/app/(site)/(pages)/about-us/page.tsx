import AboutUs from "@/components/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Officeworks - Office & School Stationery",
  description:
    "Officeworks is more than a stationery store; we're Sri Lanka's largest importer, manufacturer and direct supplier of quality office and school stationery products.",
};

const AboutUsPage = () => {
  return (
    <main>
      <AboutUs />
    </main>
  );
};

export default AboutUsPage;
