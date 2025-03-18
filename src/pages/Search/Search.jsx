import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";
import { Card } from "../../components/Card/Card.jsx";
import { searchNews } from "../../services/newsServices.js";

export function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsApi = await searchNews(title);
      setNews(newsApi.data.results);
      console.log(news);
    } catch (error) {
      console.log(error);
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {news.length
            ? `Encontramos ${news.length} ${
                news.length > 1 ? "resultados" : "rsultado"
              } para:`
            : "Não encontramos resultados para: "}
        </span>
        <h2>{title}</h2>
      </TextResults>
      <SearchNews>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </SearchNews>
    </ContainerResults>
  );
}
