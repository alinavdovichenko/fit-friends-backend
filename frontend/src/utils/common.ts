import { STATIC_URL } from '../consts';
import { FileData } from '../types/file-data';

export const getFileUrl = (file: FileData): string =>
  `${STATIC_URL}/${file.subDirectory}/${file.hashName}`;
