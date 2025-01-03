import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  createContactsController,
  deleteContactController,
  patchContactController,
  getContactsController,
  getContactsByIdController,
} from '../controllers/contacts.js';

import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(getContactsController));
router.get('/:contactId', isValidId, ctrlWrapper(getContactsByIdController));

router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactsController),
);

router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;
