export enum SlidesAmount {
  AccountCertificates = 3,
  SpecialForYou = 3,
  SpecialOffers = 1,
  PopularTrainings = 4,
  LookForCompany = 4,
  CoachTrainings = 4,
  CoachCertificates = 1,
}

export const SliderConfig = {
  arrows: false,
  dots: false,
  infinite: true,
  centerMode: false,
  speed: 500,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
} as const;
