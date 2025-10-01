import { JSX as LocalJSX } from '@stencil/core';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  };
};

// Extend React types to allow 'slot' attribute on all elements
declare module 'react' {
  interface HTMLAttributes<T> {
    slot?: string;
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {
      'ds-category-pill': LocalJSX.DsCategoryPill & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
