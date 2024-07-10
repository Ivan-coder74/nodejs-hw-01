import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts));
    console.log('Contacts list was successfully removed');
  } catch (error) {
    console.log(error.message);
  }
};

removeAllContacts();
