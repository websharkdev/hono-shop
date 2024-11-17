import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import Link from 'next/link';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 duration-300',
  {
    variants: {
      variant: {
        default: 'bg-primary text-text-accent hover:bg-primary/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        edit: 'hover:bg-primary-foreground/100 hover:text-primary',
        delete: 'hover:bg-red-100 hover:text-red-500',
        link: 'text-primary underline-offset-4 hover:underline',
        invisible: '',
        expandIcon:
          'group relative text-primary bg-primary-foreground hover:bg-primary-foreground/90 hover:ring-1 ring-primary/90 ring-offset-1',
        gooeyRight:
          'bg-primary-foreground text-primary relative z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-100 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        xs: 'h-7 rounded-md px-2 text-xs',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        smicon: 'h-8 w-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface IconProps {
  Icon: React.ReactNode;
  iconPlacement: 'left' | 'right';
}

interface IconRefProps {
  Icon?: never;
  iconPlacement?: undefined;
}

export type ButtonIconProps = IconProps | IconRefProps;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  blank?: React.HTMLAttributeAnchorTarget;
  linkClassName?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      blank = '_self',
      linkClassName = '',
      Icon,
      iconPlacement,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return href ? (
      <Link
        href={href}
        className={linkClassName}
        target={blank}
        rel="noopener noreferrer"
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {Icon && iconPlacement === 'left' && (
            <div className="group-hover:translate-x-100 w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:pr-2 group-hover:opacity-100">
              {Icon}
            </div>
          )}
          <Slottable>{props.children}</Slottable>
          {Icon && iconPlacement === 'right' && (
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
              {Icon}
            </div>
          )}
        </Comp>
      </Link>
    ) : (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === 'left' && (
          <div className="group-hover:translate-x-100 w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:pr-2 group-hover:opacity-100">
            {Icon}
          </div>
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && iconPlacement === 'right' && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            {Icon}
          </div>
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
