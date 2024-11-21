import fs from 'fs/promises';
import path from 'path';
const filePath = path.join(process.cwd(), 'app', 'data', 'notes.json');

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile(filePath, {
    encoding: 'utf-8'
  });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile(filePath, JSON.stringify({ notes: notes || [] }));
}
