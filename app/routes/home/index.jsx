import { Button } from '@capgeminiuk/dcx-react-library';
import { Link } from '@remix-run/react';

const Home = () => {
  return (
    <article className="home-article">
      <h1>HELLO REMIX | CONTENTFUL</h1>
      <Button label="DCX Button" />
      <Link to="/notes">Go To Notes</Link>
    </article>
  );
};

export default Home;
