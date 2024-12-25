import { ClassTransformOptions, plainToInstance, ClassConstructor } from 'class-transformer';
import { ValidationError } from 'class-validator';
import dayjs from 'dayjs';

type PlainObject = Record<string, unknown>;

enum DateDiffNumber {
  Min = 1,
  Max = 10,
}

export function fillDto<T, V extends PlainObject>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T;

export function fillDto<T, V extends PlainObject[]>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T[];

export function fillDto<T, V extends PlainObject>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
      excludeExtraneousValues: true,
      ...options,
  });
}

export function generateDate() {
  return dayjs()
    .subtract(
      generateRandomValue(DateDiffNumber.Min, DateDiffNumber.Max),
      'day',
    )
    .toISOString();
}

export function generateRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export function getRandomItems<T>(items: T[], count?: number): T[] {
  const startPosition = count
    ? generateRandomValue(0, items.length - count)
    : generateRandomValue(0, items.length - 1);
  const endPosition = count
    ? startPosition + count
    : generateRandomValue(startPosition + 1, items.length);
  return items.slice(startPosition, endPosition);
}

export function getRandomItem<T>(items: T[]): T {
  return items[generateRandomValue(0, items.length - 1)];
}


export function transformObjectValuesToString(items: object) {
  return Object.values(items).join(', ');
}

export function transformValidationErrors(errors: ValidationError[]) {
  return errors.map(({ property, value, constraints }) => ({
    property,
    value,
    messages: constraints ? Object.values(constraints) : [],
  }));
}

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {
    excludeExtraneousValues: true,
  });
}

export type DateTimeUnit = 's' | 'h' | 'd' | 'm' | 'y';
export type TimeAndUnit = { value: number; unit: DateTimeUnit };

export function parseTime(time: string): TimeAndUnit {
  const regex = /^(\d+)([shdmy])/;
  const match = regex.exec(time);

  if (!match) {
    throw new Error(`[parseTime] Bad time string: ${time}`);
  }

  const [, valueRaw, unitRaw] = match;
  const value = parseInt(valueRaw, 10);
  const unit = unitRaw as DateTimeUnit;

  if (isNaN(value)) {
    throw new Error(`[parseTime] Can't parse value count. Result is NaN.`);
  }

  return { value, unit };
}


