"use client";
import Card from "@/components/card";
import Layout from "../page";
import CardData from "../../../Utills/cardData.json";

const Home = ({ isSidebarOpen }) => {
  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold text-black mb-6">
        This is the Home Page
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
      >
        {CardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            className="w-full sm:w-full md:w-1/3 lg:w-1/4"
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
