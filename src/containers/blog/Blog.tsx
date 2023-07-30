import { Article } from "../../components";
import "./blog.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Blog = () => {
  const imageList = [blog01, blog02, blog03, blog04, blog05];
  return (
    <section className="gpt3__blog section__padding" id="blog">
      <header>
        <h2>A lot is happening, We are blogging about it.</h2>
      </header>

      <div className="gpt3__blog-container">
        {[...Array(5)].map((_, index) => (
          <Article
            key={index}
            image={imageList[index]}
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sept 3, 2021"
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
