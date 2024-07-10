import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);
  const lastContact = contacts.pop(); // Видаляємо останній контакт
  const newData = JSON.stringify(contacts);
  await fs.writeFile(PATH_DB, newData);
};

await removeLastContact();
