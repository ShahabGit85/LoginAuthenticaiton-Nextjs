"use client";
import Card from "@/components/card";
import Layout from "../page";
import CardData from "../../../Utills/cardData.json";
import { useAuth } from "@/context/context";


const Home = () => {
  const isAuthenticated =  useAuth() 
  console.log("is Authenticated home =>", isAuthenticated)

  return (
    <Layout>
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
