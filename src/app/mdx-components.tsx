import type { MDXComponents } from 'mdx/types'
import Link from 'next/link';
import Image from 'next/image';
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...props }) => {
      return (
        // @ts-expect-error
        <Link {...props} href={props.href || ''}>
          {children}
        </Link>
      );
    },
    img: ({ children, ...props }) => {
      return (
        // @ts-expect-error
        <Image
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          {...props}
        />
      );
    },
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}