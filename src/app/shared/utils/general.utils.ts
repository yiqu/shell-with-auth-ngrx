import { SnapshotAction } from '@angular/fire/database';

export function createInitAlias(email: string): string {
  return email.substr(0, email.indexOf("@"));
}

export function addfireKey(c: SnapshotAction<any>[]) {
  return c.map((c: SnapshotAction<any>) => {
    return (
      { fireKey: c.payload.key,
        ...c.payload.val()
      }
    )}
  );
}

export function getPureObject(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function stripCommas(val: string): number {
  let v = val+"";
  return +(v.replace(",", ""));
}

export function isNumeric(num: any){
  return !isNaN(num);
}

export function getNumeric(res: any): number {
  if (isNumeric(res)) {
    return +res;
  }
  return NaN;
}

export function replaceToZero(res): number {
  if (isNumeric(res)) {
    return +res;
  }
  return 0;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function roundTo2Places(num: number): number {
  if (num !== undefined && num !==null) {
    const n = +num;
    return Math.round((n + Number.EPSILON) * 100) / 100;
  }
  return NaN;
}

export function roundToInteger(num: number): number {
  const n = +num;
  return Math.round(n);
}
