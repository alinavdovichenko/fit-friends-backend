import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { TrainingType } from '../../shared/core/src/lib/types/training-type';
import { TrainingDuration } from '../../shared/core/src/lib/types/training-duration';
import { TrainingSexFor } from '../../shared/core/src/lib/types/training-sex-for';
import { UserRole } from '../../shared/core/src/lib/types/user-role';
import { UserLevel } from '../../shared/core/src/lib/types/user-level';
import { UserSex } from '../../shared/core/src/lib/types/user-sex';
import { MetroStation } from '../../shared/core/src/lib/types/metro-station';
import { OrderType } from '../../shared/core/src/lib/types/order-type';
import { PaymentType } from '../../shared/core/src/lib/types/payment-type';
import { RequestStatus } from '../../shared/core/src/lib/types/request-status';

const ITEM_COUNT = 10;

const prisma = new PrismaClient();

async function fiilDb() {
  // clean db
  await prisma.$transaction([
    prisma.user.deleteMany(),
    prisma.feedback.deleteMany(),
    prisma.order.deleteMany(),
    prisma.personalOrder.deleteMany(),
    prisma.training.deleteMany(),
  ]);

  // create items
  for (let i = 0; i < ITEM_COUNT; i++) {
    const qtt = faker.number.int({ min: 1, max: 10 });
    const priceTemp = faker.number.int({ min: 0, max: 1000 });
    const userRole = faker.helpers.enumValue(UserRole);

    await prisma.user.create({
      data: {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        passwordHash: faker.internet.password(),
        sex: faker.helpers.enumValue(UserSex),
        birthDate: faker.date.birthdate(),
        role: userRole,
        description: faker.lorem.paragraph(4),
        location: faker.helpers.enumValue(MetroStation),
        level: faker.helpers.enumValue(UserLevel),
        typesOfTraining: faker.helpers.arrayElements(
          ['бокс', 'аэробика', 'силовые', 'стрейчинг', 'фитнес', 'йога', 'бег'],
          { min: 1, max: 3 },
        ),
        client: {
          create:
            userRole === UserRole.Default
              ? {
                  timeOfTraining: faker.helpers.enumValue(TrainingDuration),
                  caloryLosingPlanTotal: faker.number.int({
                    min: 1000,
                    max: 5000,
                  }),
                  caloryLosingPlanDaily: faker.number.int({
                    min: 1000,
                    max: 2000,
                  }),
                  isReady: faker.helpers.arrayElement([true, false]),
                }
              : undefined,
        },
        trainer: {
          create:
            userRole === UserRole.Coach
              ? {
                  certificate: faker.helpers.arrayElements(
                    [
                      'sertificate1.pdf',
                      'sertificate2.pdf',
                      'sertificate3.pdf',
                    ],
                    { min: 1, max: 3 },
                  ),
                  merits: faker.lorem.paragraph(1),
                  isPersonalTraining: faker.helpers.arrayElement([true, false]),
                }
              : undefined,
        },
        orders: {
          create: [
            {
              type: faker.helpers.enumValue(OrderType),
              trainerId: faker.number.int({ min: 1, max: 100 }),
              trainingId: i ? i + 1 : 1,
              price: priceTemp,
              quantity: qtt,
              sumPrice: priceTemp * qtt,
              typeOfPayment: faker.helpers.enumValue(PaymentType),
              createdAt: faker.date.past({ years: 1 }),
            },
            {
              type: faker.helpers.enumValue(OrderType),
              trainerId: faker.number.int({ min: 1, max: 100 }),
              trainingId: i + 2,
              price: priceTemp + 100,
              quantity: qtt + 1,
              sumPrice: priceTemp * qtt,
              typeOfPayment: faker.helpers.enumValue(PaymentType),
              createdAt: faker.date.past({ years: 1 }),
            },
          ],
        },
        personalOrders: {
          create: [
            {
              targetId: faker.number.int({ min: 1, max: 10000 }),
              createdAt: faker.date.past({ years: 1 }),
              updateAt: faker.date.past({ years: 1 }),
              orderStatus: faker.helpers.arrayElement([
                'принят',
                'отклонен',
                'на рассмотрении',
              ]),
            },
            {
              targetId: faker.number.int({ min: 1, max: 10000 }),
              createdAt: faker.date.past({ years: 1 }),
              updateAt: faker.date.past({ years: 1 }),
              orderStatus: faker.helpers.enumValue(RequestStatus),
            },
          ],
        },
        balance: {
          create: [
            {
              trainingId: i + 1,
              trainingQtt: faker.number.int({ min: 1, max: 10 }),
            },
            {
              trainingId: i + 2,
              trainingQtt: faker.number.int({ min: 1, max: 10 }),
            },
          ],
        },
        friends: {
          create: [
            {
              friendId: i + 1,
              isConfirmed: faker.helpers.arrayElement([true, false]),
            },
            {
              friendId: i + 2,
              isConfirmed: faker.helpers.arrayElement([true, false]),
            },
          ],
        },
      },
    });

    await prisma.training.create({
      data: {
        title: faker.lorem.word(2),
        backgroundPicture: faker.image.avatar(),
        levelOfUser: faker.helpers.enumValue(UserLevel),
        typeOfTraining: faker.helpers.enumValue(TrainingType),
        duration: faker.helpers.enumValue(TrainingDuration),
        price: faker.number.int({ min: 0, max: 1000 }),
        caloriesQtt: faker.number.int({ min: 1000, max: 2000 }),
        description: faker.lorem.paragraph(4),
        sex: faker.helpers.enumValue(TrainingSexFor),
        video: faker.helpers.arrayElement([
          'running.mov',
          'boxing.mov',
          'yoga.mov',
          'swimming.mov',
          'jogging.mov',
        ]),
        rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
        trainerId: i ? i : i + 1,
        isPromo: faker.helpers.arrayElement([true, false]),
        feedbacks: {
          create: [
            {
              userId: i ? i : i + 1,
              rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
              text: faker.lorem.paragraph(2),
              createdAt: faker.date.past({ years: 1 }),
            },
            {
              userId: i ? i + 2 : i + 3,
              rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
              text: faker.lorem.paragraph(2),
              createdAt: faker.date.past({ years: 1 }),
            },
          ],
        },
      },
    });
  }
  console.info('🤘️ Database was filled');
}

fiilDb()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();

    globalThis.process.exit(1);
  });
