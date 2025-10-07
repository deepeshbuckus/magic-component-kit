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
      'ds-search-bar': LocalJSX.DsSearchBar & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'ds-input': LocalJSX.DsInput & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'ds-report-card': LocalJSX.DsReportCard & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'ds-button': LocalJSX.DsButton & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'pp-button': LocalJSX.PpButton & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'pp-dialog': LocalJSX.PpDialog & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'pp-dialog-header': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'pp-dialog-footer': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'pp-dialog-title': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'pp-dialog-description': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      'pp-slider': LocalJSX.PpSlider & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
