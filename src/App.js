import heroImg from "./images/image-web-3-desktop.jpg";
import PCImg from "./images/image-retro-pcs.jpg";
import laptopImg from "./images/image-top-laptops.jpg";
import pandemicImg from "./images/image-gaming-growth.jpg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import NewsSectionItem from "./components/NewsSectionItem";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="mx-auto max-w-7xl">
        <div className="flex mb-20">
          <MainSection
            title="The future of Web 3.0?"
            description="We dive into the next evolution of the web that claims to put
                      the power of the platforms back into the hands of the people.
                      But is it really fulfilling its promise?"
            imgUrl={heroImg}
          />
          <div className="flex mb-20">
            <section className="bg-[#00001a] ml-8 flex flex-col max-auto max-w-4xl">
              <div className="px-5">
                <h1 className="text-[#e9ab53] font-extrabold text-4xl py-8">
                  New
                </h1>
                <NewsSectionItem
                  title="Hydrogen VS Electric Cars"
                  description="Will hydrogen-fueled cars ever catch up to EVs?"
                />
                <div className="bg-[#c5c6ce] h-[1px] mt-6 mb-6"></div>
                <NewsSectionItem
                  title="The Downsides of AI Artistry"
                  description="What are the possible adverse effects of on-demand AI image
                      generation?"
                />
                <div className="bg-[#c5c6ce] h-[1px] mt-6 mb-6"></div>
                <NewsSectionItem
                  title="Is VC Funding Drying Up?"
                  description="Private funding by VC firms is down 50% YOY. We take a look at
                      what that means"
                />
              </div>
            </section>
          </div>
        </div>

        <section className="flex h-44 w-[100%]">
          <NewsCard
            num="01"
            title="Reviving Retro PCs"
            description="What happens when old PCs are given modern upgrades?"
            imgUrl={PCImg}
          />
          <NewsCard
            num="02"
            title="Top 10 Laptops of 2022"
            description="Our best picks for various needs and budgets"
            imgUrl={laptopImg}
          />
          <NewsCard
            num="03"
            title="The Growth of Gaming"
            description="How the pandemic has sparked fresh opportunities"
            imgUrl={pandemicImg}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
