import styles from './newNoteForm.css';

const NewNoteForm = () => {
  return (
    <form method="POST" className="form">
      <div className="form-div">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter the title"
          required
          className="form-input"
        />
      </div>

      <div className="form-div">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter the description"
          rows="5"
          required
          className="form-input"
        ></textarea>
      </div>

      <button type="submit" className="form-submit-btn">
        Submit
      </button>
    </form>
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
export default NewNoteForm;
