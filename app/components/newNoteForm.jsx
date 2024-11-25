import { Form, useActionData, useNavigation } from '@remix-run/react';
import styles from './newNoteForm.css';
const NewNoteForm = () => {
  const navigate = useNavigation();
  const errorData = useActionData();
  const isDisabled = navigate.state === 'submitting';
  console.log(errorData);
  return (
    <Form method="post" className="form" reloadDocument={false}>
      <div className="form-div">
        {errorData?.message && (
          <p className="error-text">{errorData.message}</p>
        )}
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

      <button disabled={isDisabled} className="form-submit-btn">
        Submit
      </button>
    </Form>
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
