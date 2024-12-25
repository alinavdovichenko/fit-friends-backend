import { Location } from './types/location';

export const REQUIRED_INPUT_MESSAGE = 'Поле обязательно для заполнения';
export const BACKEND_URL = 'http://localhost:4000';
export const REQUEST_TIMEOUT = 5000;
export const STATIC_URL = `${BACKEND_URL}/static`;
export const SALE_PERCENT = 20;
export const IMAGE_PLACEHOLDER = 'https://placehold.co/600x600.png';

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Register: '/register',
  Questionary: '/questionary',
  MyPurchases: '/account/my-purchases',
  Orders: '/account/my-orders',
  Balance: '/account/balance',
  Main: '/main',
  Friends: '/account/friends',
  Account: '/account',
  TrainingCatalog: '/training-сatalog',
  CardUser: '/card-user',
  Trainings: '/trainings',
  Users: '/users',
  CoachTrainings: '/account/my-trainings',
  CreateTraining: '/account/create-training',
} as const;

export enum PopupKey {
  Feedback = 'popup-feedback',
  Buy = 'popup-buy',
  Locations = 'location-popup',
  DefaultPopup ='popup-default',
  Certificates = 'certificates-popup',
}

export const AvatarMaxSize = {
  ForHuman: '1 мегабайт',
  ToCheck: 8388608,
} as const;


export enum MetroStation {
  Petrogadskaya = 'Петроградская',
  Pionerskaya = 'Пионерская',
  Sportivnaya = 'Спортивная',
  Udelnaya = 'Удельная',
  Zvyozdnaya = 'Звёздная',
}

export const MAP_ZOOM = 17;

type MetroLocation = {
  [name in MetroStation]: Location;
};

export const MetroLocation: MetroLocation = {
  [MetroStation.Petrogadskaya]: {
    latitude: 59.966422177556346,
    longitude: 30.31126748292901,
  },
  [MetroStation.Pionerskaya]: {
    latitude: 60.00437727171317,
    longitude: 30.29614854464556,
  },
  [MetroStation.Sportivnaya]: {
    latitude: 59.948332787863144,
    longitude: 30.28381254926065,
  },
  [MetroStation.Udelnaya]: {
    latitude: 60.0180783488178,
    longitude: 30.318212639724226,
  },
  [MetroStation.Zvyozdnaya]: {
    latitude: 59.833000780098885,
    longitude: 30.351706821603226,
  },
} as const;

export const TRAINING_TYPE_MAX_AMOUNT = 3;

export enum UserRole {
  Coach = 'тренер',
  Default = 'пользователь',
}

export enum UserSex {
  Male = 'мужской',
  Female = 'женский',
  Other = 'неважно',
}

export enum UserLevel {
  Beginner = 'новичок',
  Amateur = 'любитель',
  Pro = 'профессионал',
}

export enum PasswordLength {
  Min = 6,
  Max = 12,
}

export enum NameLength {
  Min = 1,
  Max = 15,
}

export enum CaloriesValue {
  Min = 1000,
  Max = 5000,
}

export enum CoachAchievementsLength {
  Min = 10,
  Max = 140,
}

export enum CommentTextLength {
  Min = 10,
  Max = 140,
}

export enum UserDescriptionLength {
  Min = 10,
  Max = 140,
}

export enum RequestStatus {
  Default = 'на рассмотрении',
  Rejected = 'отклонён',
  Accepted = 'принят',
}

export enum RequestStatusText {
  ForUser = 'Запрос на совместную тренировку',
  ForCoach = 'Запрос на персональную тренировку',
}

export enum UserStatus {
  Ready = 'Готов к тренировке',
  NotReady = 'Не готов к тренировке',
}

export const RoleInputLabel = {
  [UserRole.Default]: 'Я хочу тренироваться',
  [UserRole.Coach]: 'Я хочу тренировать',
} as const;

export enum TrainingType {
  Yoga = 'йога',
  Running = 'бег',
  Box = 'бокс',
  Stretching = 'стрейчинг',
  Crossfit = 'кроссфит',
  Aerobic = 'аэробика',
  Pilates = 'пилатес',
  Strength = 'силовые',
}

export enum TrainingDuration {
  Short = '10-30',
  Medium = '30-50',
  Long = '50-80',
  Extra = '80-100',
}

export enum TrainingSexFor {
  Male = 'мужчинам',
  Female = 'женщинам',
  All = 'всем',
}

export enum TrainingTitleLength {
  Min = 1,
  Max = 15,
}

export enum TrainingDescriptionLength {
  Min = 10,
  Max = 140,
}

export enum PriceValue {
  Min = 0,
  Max = 50000,
}

export enum RatingValue {
  Default = 0,
  Min = 1,
  Max = 5,
}

export enum FeedbackTextLength {
  Min = 10,
  Max = 140,
}

export enum NameSpace {
  AppData = 'APP_DATA',
  MainData = 'MAIN_DATA',
  UserForm = 'USER_FORM',
  UserData = 'USER_DATA',
  BalancesList = 'BALANCES_LIST',
  CatalogData = 'CATALOG_DATA',
  UsersList = 'USERS_LIST',
  UserInfo = 'USER_INFO',
  TrainingForm = 'TRAINING_FORM',
  TrainingInfo = 'TRAINING_INFO',
  TrainingsList = 'TRAININGS_LIST',
  OrdersList = 'ORDERS_LIST',
  OrderForm = 'ORDER_FORM',
  CommentForm = 'COMMENT_FORM',
}

export const ListItemsPortion = {
  Default: 6,
  CoachTrainings: 6,
  CoachOrders: 4,
  UserBalances: 8,
  Friends: 9,
  AllTrainings: 6,
  AllUsers: 12,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const APIRoute = {
  CheckAuth: '/auth/login',
  Login: '/auth/login',
  Register: '/auth/register',
  AuthUser: '/users/my-data',
  QuestionaryUser: 'users/questionary-user',
  QuestionaryCoach: 'users/questionary-coach',
  UpdateUser: '/users/update',
  UploadCertificate: '/users/certificates/upload',
  DeleteCertificate: '/users/certificates/delete',
  UpdateCertificate: '/users/certificates/update',
  TrainingsForUser: '/trainings/for-user',
  SpecialTrainings: '/trainings/special',
  PopularTrainings: '/trainings/popular',
  ReadyUsers: '/users/ready-users',
  Balances: '/balance',
  DecreaseBalance: '/balance/decrease',
  Users: '/users',
  Trainings: '/trainings',
  Friends: '/friends',
  CheckSubscription: '/subscribe/check',
  TrainingsFromCoach: '/trainings/from-coach',
  Comments: '/comments',
  CoachTrainings: '/trainings/my-trainings',
  UpdateTraining: '/trainings/update',
  UpdateTrainingVideo: '/trainings/update-video',
  CoachOrders: '/orders/my-orders',
  CreateOrder: '/orders',
  AddFriend: '/friends/add',
  RemoveFriend: '/friends/remove',
  CreateTrainingRequest: '/training-requests',
  UpdateTrainingRequest: '/training-requests',
  SubscribeTo: '/subscribe/add',
  UnsubscribeFrom: '/subscribe/remove',
  Notifications: '/notifications',
} as const;

export enum TrainingsSortType {
  PriceDown = 'down',
  PriceUp = 'up',
  Free = 'free',
}

export enum OrdersSortType {
  Sum = 'sum',
  Count = 'count',
}

export enum OrderType {
  Default = 'абонемент',
}

export enum PaymentType {
  Visa = 'visa',
  Mir = 'mir',
  Umoney = 'umoney',
}

export enum OrderCountValue {
  Min = 1,
  Max = 50,
}
