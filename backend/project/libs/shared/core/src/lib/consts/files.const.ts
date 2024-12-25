export const ImageFile = {
  MimeTypes: ['image/png', 'image/jpeg'],
  MaxSize: 1000000,
};

export const DocumentFile = {
  MimeTypes: ['application/pdf'],
};

export const VideoFile = {
  MimeTypes: ['video/mov', 'video/mp4', 'video/avi', 'video/quicktime'],
};

export enum NotifyText {
  Min = 10,
  Max = 140,
}
