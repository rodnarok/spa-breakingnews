import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
//import { news } from "../../Datas";
import { getAllNews } from "../../services/newsServices";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  console.log(news);

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
