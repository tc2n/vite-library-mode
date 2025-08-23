import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { Button as AriaButton } from 'react-aria-components';
import clsx from 'clsx';
import styles from './Button.module.css';

const buttonVariants = cva(styles.base, {
    variants: {
        size: {
            SMALL: styles.small,
            MEDIUM: styles.medium,
            LARGE: styles.large
        },
        variant: {
            PRIMARY: styles.primary,
            SECONDARY: styles.secondary,
            TERTIARY: styles.tertiary,
            DANGER: styles.danger,
            TOOLS: styles.tools
        }
    }
});

export interface ButtonProps extends React.ComponentProps<typeof AriaButton>, VariantProps<typeof buttonVariants> {
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    isLoading?: boolean;
    isDisabled?: boolean;
    size?: 'SMALL' | 'MEDIUM' | 'LARGE';
    variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DANGER' | 'TOOLS';
    children?: React.ReactNode;
    loader?: React.ReactNode;
    contentClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
    prefixIcon,
    suffixIcon,
    isLoading,
    isDisabled,
    size = 'MEDIUM',
    variant = 'PRIMARY',
    className,
    children,
    loader,
    contentClassName,
    ...props }) => {
    return (
        <AriaButton
            {...props}
            isDisabled={isDisabled}
            isPending={isLoading}
            className={buttonVariants({ size, variant, className })}
        >
            <div className={clsx(styles.content, contentClassName, { [styles.isLoading]: isLoading && loader != null })}>
                {prefixIcon && <span>{prefixIcon}</span>}
                {children}
                {suffixIcon && <span>{suffixIcon}</span>}
            </div>
            {isLoading && loader != null && (
                <div className={styles.loader}>
                    {loader}
                </div>
            )}
        </AriaButton>
    );
}