"use client";
import Layout from "../page";

const Home = () => {
  return (
    <Layout>
      <h1 className="text-center text-2xl font-bold text-black mb-6">
        This is the Home Page
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      </div>
    </Layout>
  );
};

export default Home;
