import { Link, useLoaderData } from '@remix-run/react';
import { getStoredNotes, storeNotes } from '../helpers/notes';
import NewNoteForm from '../components/newNoteForm';
import { links as formStyles } from '../components/newNoteForm';
import { redirect } from '@remix-run/node';
import NotesList, { links as notesListStyles } from '../components/notesList';
export default function Notes() {
  console.log('Notes');
  const notes = useLoaderData();
  return (
    <>
      <NewNoteForm></NewNoteForm>
      <NotesList notes={notes} />
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
  console.log(noteData);
  if (noteData.title.trim().length < 2) {
    return { message: 'Please enter the title' };
  }
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes');
}
export function links() {
  return [...formStyles(), ...notesListStyles()];
}
