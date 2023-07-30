import "./article.css";

const Article = ({
  image,
  title,
  date,
}: {
  image: string;
  title: string;
  date: string;
}) => {
  return (
    <article className="gpt3__article">
      <div className="gpt3__image">
        <img src={image} alt="article image" loading="lazy" />
      </div>
      <div className="gpt3__article-content">
        <p>{date}</p>
        <h3>
          <a href="#">{title}</a>
        </h3>

        <a href="#" className="gpt3__article-more">
          Read Full Article
        </a>
      </div>
    </article>
  );
};

export default Article;
