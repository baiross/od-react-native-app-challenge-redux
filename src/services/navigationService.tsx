import * as React from 'react';
import { StackActions } from '@react-navigation/native';

let navigationRef: React.RefObject<any> = React.createRef();

export function setNavigator(ref: any) {
  navigationRef.current = ref;
}

export function navigate(name: string, params?: any, key?: string | number) {
  if (!key) {
    navigationRef.current?.navigate(name, params);
    return;
  }
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function replace(...args: any[]) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}

export function navigator() {
  return navigationRef.current;
}

export function popToTop() {
  navigationRef.current?.popToTop();
}

export function pop(index?: number) {
  navigationRef.current?.pop();
}

export function reset(name: string) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name }],
  });
}
