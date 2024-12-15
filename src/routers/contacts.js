import { Router } from 'express';
import { ctrlWrapper } from '../utils/crtlWrapper.js';

import {
  createContactsController,
  deleteContactController,
  patchContactController,
  getContactsController,
  getContactsByIdController,
} from '../controllers/contacts.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactsByIdController));

router.post('/contacts', ctrlWrapper(createContactsController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
