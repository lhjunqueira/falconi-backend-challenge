import { UniqueEntityID } from '../../../../core/entities/unique-entity-id';
import { Profile } from '../../../domain/profile.domain';

export const MOCK_PROFILE_ID_1 = new UniqueEntityID(
  '7e4e1613-0435-4f2d-a04e-dfd30510fdfb',
);
export const MOCK_PROFILE_ID_2 = new UniqueEntityID(
  '3dc68b61-5757-4329-ae7c-41e473a11190',
);
export const MOCK_PROFILE_ID_3 = new UniqueEntityID(
  'e9d7f5b4-6f1c-4b2a-8d7e-2f3a4c1e5b2f',
);
export const MOCK_PROFILE_ID_4 = new UniqueEntityID(
  'c8e0f1b3-2a4d-4e5a-a6f9-7d3b5c1e2b3a',
);
export const MOCK_PROFILE_ID_5 = new UniqueEntityID(
  'a2b3c4d5-e6f7-8a9b-0c1d-2e3f4g5h6i7j',
);

export const MOCK_PROFILES: Profile[] = [
  new Profile({ name: 'Admin' }, MOCK_PROFILE_ID_1),
  new Profile({ name: 'Client' }, MOCK_PROFILE_ID_2),
  new Profile({ name: 'Guest' }, MOCK_PROFILE_ID_3),
  new Profile({ name: 'SuperAdmin' }, MOCK_PROFILE_ID_4),
  new Profile({ name: 'Moderator' }, MOCK_PROFILE_ID_5),
];
