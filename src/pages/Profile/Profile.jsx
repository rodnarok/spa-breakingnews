import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfilePosts,
  ProfileUser,
} from "./ProfileStyled";
import { getAllNewsByUser } from "../../services/newsServices";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";

export function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  async function findAllNewsByUser() {
    const newsResponse = await getAllNewsByUser();
    setNews(newsResponse.data.postsByUser);
  }

  useEffect(() => {
    findAllNewsByUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>

        <ProfileBackground src={user.background} alt="" />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <Link to="/manage-news/add/news">
            <ProfileIconAdd>
              <i className="bi bi-plus-circle"></i>
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>

      <ProfilePosts>
        {news.length === 0 && <h3>Você ainda não criou nenhuma noticia...</h3>}

        {news.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
              actions={true}
            />
          );
        })}
      </ProfilePosts>
    </ProfileContainer>
  );
}
