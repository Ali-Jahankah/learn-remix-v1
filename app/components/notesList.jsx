import { Link } from '@remix-run/react';
import styles from './notesList.css';
const NotesList = ({ notes }) => {
  return (
    <section className="notes-section">
      {notes.length ? (
        notes.map((note, index) => {
          return (
            <div className="note-div" key={index + note.id}>
              <Link to={note.id}>
                <h6 className="note-index">#{index + 1}</h6>
                <h3 className="note-title">{note.title}</h3>
                <p className="note-description">{note.description}</p>
              </Link>
            </div>
          );
        })
      ) : (
        <h1>There is no data yet!</h1>
      )}
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
export default NotesList;
