import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);
  contacts.push(createFakeContact());
  const newData = JSON.stringify(contacts);
  await fs.writeFile(PATH_DB, newData);
};

await addOneContact();
