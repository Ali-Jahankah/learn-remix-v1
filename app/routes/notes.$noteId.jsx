import { json } from '@remix-run/node';
import { Link, useCatch } from '@remix-run/react';
import styles from '../styles/singleNote.css';
const SingleNote = () => {
  return (
    <section className="note-section">
      <div>
        <h1>Single Note</h1>
      </div>
      <h1>
        <Link to="/notes">Return to notes</Link>
      </h1>
    </section>
  );
};
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ];
}
export function loader() {
  throw json(
    { message: 'Single note component is not implemented yet!' },
    { status: 404, statusText: 'Single note not found' }
  );
}
export function CatchBoundary() {
  const res = useCatch();

  return (
    <section className="error-section">
      <div>
        <h1> There is an error in the app:</h1>
        <h3>{res.data?.message}</h3>
      </div>
    </section>
  );
}
export default SingleNote;
