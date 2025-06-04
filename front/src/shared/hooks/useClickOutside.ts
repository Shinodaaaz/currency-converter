import {useEffect} from "react";
import type {RefObject} from 'react';

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>, // 👈 вот здесь
  callback: () => void,
) {
  useEffect(() => {
      function handleClickOutside(event: MouseEvent | TouchEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      }

      document.addEventListener('mousedown',
        handleClickOutside);
      document.addEventListener('touchstart',
        handleClickOutside);

      return () => {
        document.removeEventListener('mousedown',
          handleClickOutside);
        document.removeEventListener('touchstart',
          handleClickOutside);
      };
    },
    [ref, callback]);
}
