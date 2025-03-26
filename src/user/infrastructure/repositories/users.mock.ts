import { UniqueEntityID } from '../../../core/entities/unique-entity-id';
import { User } from '../../domain/user.domain';
import {
  MOCK_PROFILE_ID_1,
  MOCK_PROFILE_ID_2,
  MOCK_PROFILE_ID_3,
  MOCK_PROFILE_ID_4,
  MOCK_PROFILE_ID_5,
} from './profiles.mock';

export const MOCK_USERS: User[] = [
  new User(
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('a1b2c3d4-e5f6-7890-1234-56789abcdef0'),
  ),
  new User(
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('b2c3d4e5-f678-9012-3456-789abcdef012'),
  ),
  new User(
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('c3d4e5f6-7890-1234-5678-9abcdef01234'),
  ),
  new User(
    {
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bob.brown@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('d4e5f678-9012-3456-789a-bcdef0123456'),
  ),
  new User(
    {
      firstName: 'Charlie',
      lastName: 'Davis',
      email: 'charlie.davis@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('e5f67890-1234-5678-9abc-def012345678'),
  ),
  new User(
    {
      firstName: 'Diana',
      lastName: 'Evans',
      email: 'diana.evans@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('f6789012-3456-789a-bcde-f01234567891'),
  ),
  new User(
    {
      firstName: 'Ethan',
      lastName: 'Foster',
      email: 'ethan.foster@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('67890123-4567-89ab-cdef-0123456789ac'),
  ),
  new User(
    {
      firstName: 'Fiona',
      lastName: 'Garcia',
      email: 'fiona.garcia@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('78901234-5678-9abc-def0-123456789abd'),
  ),
  new User(
    {
      firstName: 'George',
      lastName: 'Harris',
      email: 'george.harris@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('89012345-6789-abcd-ef01-23456789abce'),
  ),
  new User(
    {
      firstName: 'Hannah',
      lastName: 'Irvine',
      email: 'hannah.irvine@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('90123456-789a-bcde-f012-3456789abcef'),
  ),
  new User(
    {
      firstName: 'Ian',
      lastName: 'Jackson',
      email: 'ian.jackson@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('01234567-89ab-cdef-0123-456789abcdf0'),
  ),
  new User(
    {
      firstName: 'Julia',
      lastName: 'King',
      email: 'julia.king@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('12345678-9abc-def0-1234-56789abcdf01'),
  ),
  new User(
    {
      firstName: 'Kevin',
      lastName: 'Lewis',
      email: 'kevin.lewis@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('23456789-abcd-ef01-2345-6789abcdf012'),
  ),
  new User(
    {
      firstName: 'Laura',
      lastName: 'Morris',
      email: 'laura.morris@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('3456789a-bcde-f012-3456-789abcdf0123'),
  ),
  new User(
    {
      firstName: 'Michael',
      lastName: 'Nelson',
      email: 'michael.nelson@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('456789ab-cdef-0123-4567-89abcdf01234'),
  ),
  new User(
    {
      firstName: 'Nina',
      lastName: 'Owens',
      email: 'nina.owens@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('56789abc-def0-1234-5678-9abcdf012345'),
  ),
  new User(
    {
      firstName: 'Oscar',
      lastName: 'Perez',
      email: 'oscar.perez@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('6789abcd-ef01-2345-6789-abcdf0123456'),
  ),
  new User(
    {
      firstName: 'Paula',
      lastName: 'Quinn',
      email: 'paula.quinn@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('789abcde-f012-3456-789a-bcdf01234567'),
  ),
  new User(
    {
      firstName: 'Quentin',
      lastName: 'Roberts',
      email: 'quentin.roberts@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('89abcdef-0123-4567-89ab-cdf012345678'),
  ),
  new User(
    {
      firstName: 'Rachel',
      lastName: 'Stewart',
      email: 'rachel.stewart@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('9abcdef0-1234-5678-9abc-df0123456789'),
  ),
  new User(
    {
      firstName: 'Steven',
      lastName: 'Taylor',
      email: 'steven.taylor@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('abcdef01-2345-6789-abcd-f01234567890'),
  ),
  new User(
    {
      firstName: 'Tina',
      lastName: 'Upton',
      email: 'tina.upton@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('bcdef012-3456-789a-bcde-012345678901'),
  ),
  new User(
    {
      firstName: 'Victor',
      lastName: 'Vargas',
      email: 'victor.vargas@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('cdef0123-4567-89ab-cdef-123456789012'),
  ),
  new User(
    {
      firstName: 'Wendy',
      lastName: 'White',
      email: 'wendy.white@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('def01234-5678-9abc-def0-234567890123'),
  ),
  new User(
    {
      firstName: 'Xander',
      lastName: 'Young',
      email: 'xander.young@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('ef012345-6789-abcd-ef01-345678901234'),
  ),
  new User(
    {
      firstName: 'Yvonne',
      lastName: 'Zimmerman',
      email: 'yvonne.zimmerman@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('f0123456-789a-bcde-f012-456789012345'),
  ),
  new User(
    {
      firstName: 'Zachary',
      lastName: 'Adams',
      email: 'zachary.adams@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('01234567-89ab-cdef-0123-567890123456'),
  ),
  new User(
    {
      firstName: 'Abigail',
      lastName: 'Baker',
      email: 'abigail.baker@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('12345678-9abc-def0-1234-678901234567'),
  ),
  new User(
    {
      firstName: 'Benjamin',
      lastName: 'Carter',
      email: 'benjamin.carter@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('23456789-abcd-ef01-2345-789012345678'),
  ),
  new User(
    {
      firstName: 'Charlotte',
      lastName: 'Dixon',
      email: 'charlotte.dixon@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('3456789a-bcde-f012-3456-890123456789'),
  ),
  new User(
    {
      firstName: 'Daniel',
      lastName: 'Edwards',
      email: 'daniel.edwards@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('456789ab-cdef-0123-4567-901234567890'),
  ),
  new User(
    {
      firstName: 'Eleanor',
      lastName: 'Fisher',
      email: 'eleanor.fisher@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('56789abc-def0-1234-5678-012345678901'),
  ),
  new User(
    {
      firstName: 'Frank',
      lastName: 'Gibson',
      email: 'frank.gibson@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('6789abcd-ef01-2345-6789-123456789012'),
  ),
  new User(
    {
      firstName: 'Grace',
      lastName: 'Henderson',
      email: 'grace.henderson@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('789abcde-f012-3456-789a-234567890123'),
  ),
  new User(
    {
      firstName: 'Henry',
      lastName: 'Ingram',
      email: 'henry.ingram@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('89abcdef-0123-4567-89ab-345678901234'),
  ),
  new User(
    {
      firstName: 'Isla',
      lastName: 'Jones',
      email: 'isla.jones@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('9abcdef0-1234-5678-9abc-456789012345'),
  ),
  new User(
    {
      firstName: 'Jack',
      lastName: 'Kelly',
      email: 'jack.kelly@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('abcdef01-2345-6789-abcd-567890123456'),
  ),
  new User(
    {
      firstName: 'Katherine',
      lastName: 'Lee',
      email: 'katherine.lee@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('bcdef012-3456-789a-bcde-678901234567'),
  ),
  new User(
    {
      firstName: 'Liam',
      lastName: 'Martin',
      email: 'liam.martin@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('cdef0123-4567-89ab-cdef-789012345678'),
  ),
  new User(
    {
      firstName: 'Mia',
      lastName: 'Nelson',
      email: 'mia.nelson@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('def01234-5678-9abc-def0-890123456789'),
  ),
  new User(
    {
      firstName: 'Nathan',
      lastName: 'Owens',
      email: 'nathan.owens@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_4,
    },
    new UniqueEntityID('ef012345-6789-abcd-ef01-901234567890'),
  ),
  new User(
    {
      firstName: 'Olivia',
      lastName: 'Parker',
      email: 'olivia.parker@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_3,
    },
    new UniqueEntityID('f0123456-789a-bcde-f012-012345678901'),
  ),
  new User(
    {
      firstName: 'Patrick',
      lastName: 'Quinn',
      email: 'patrick.quinn@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_5,
    },
    new UniqueEntityID('01234567-89ab-cdef-0123-123456789012'),
  ),
  new User(
    {
      firstName: 'Quinn',
      lastName: 'Reed',
      email: 'quinn.reed@example.com',
      isActive: false,
      profileId: MOCK_PROFILE_ID_1,
    },
    new UniqueEntityID('12345678-9abc-def0-1234-234567890123'),
  ),
  new User(
    {
      firstName: 'Rebecca',
      lastName: 'Scott',
      email: 'rebecca.scott@example.com',
      isActive: true,
      profileId: MOCK_PROFILE_ID_2,
    },
    new UniqueEntityID('23456789-abcd-ef01-2345-345678901234'),
  ),
];
