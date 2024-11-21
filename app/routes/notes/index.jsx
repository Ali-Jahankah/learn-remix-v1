import { Link, useLoaderData } from '@remix-run/react';
import { getStoredNotes, storeNotes } from '../../helpers/notes';
import NewNoteForm from '../../components/newNoteForm';
import { links as styles } from '../../components/newNoteForm';
import { redirect } from '@remix-run/node';
export default function Notes() {
  const notes = useLoaderData();

  return (
    <>
      <NewNoteForm></NewNoteForm>
    </>
  );
}
export async function loader() {
  const notes = await getStoredNotes();
  return notes;
}
export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}
export function links() {
  return [...styles()];
}
