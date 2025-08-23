import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
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

// Type for Lucide React icons and similar icon components
type IconComponent = React.ComponentType<{ size?: number; className?: string; [key: string]: any }>;

export interface ButtonProps extends React.ComponentProps<typeof AriaButton>, VariantProps<typeof buttonVariants> {
    /** Lucide React icon component to display before the button text */
    prefixIcon?: IconComponent;
    /** Lucide React icon component to display after the button text */
    suffixIcon?: IconComponent;
    /** Override default icon size (auto-calculated based on button size if not provided) */
    iconSize?: number;
    isLoading?: boolean;
    isDisabled?: boolean;
    size?: 'SMALL' | 'MEDIUM' | 'LARGE';
    variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DANGER' | 'TOOLS';
    children?: React.ReactNode;
    /** Loading spinner icon component to display during loading state */
    loader?: IconComponent;
    contentClassName?: string;
}

const getIconSize = (buttonSize: 'SMALL' | 'MEDIUM' | 'LARGE', customSize?: number): number => {
    if (customSize) return customSize;
    
    switch (buttonSize) {
        case 'SMALL': return 14;
        case 'MEDIUM': return 16;
        case 'LARGE': return 20;
        default: return 16;
    }
};

export const Button: React.FC<ButtonProps> = ({
    prefixIcon,
    suffixIcon,
    iconSize,
    isLoading,
    isDisabled,
    size = 'MEDIUM',
    variant = 'PRIMARY',
    className,
    children,
    loader,
    contentClassName,
    ...props }) => {
    
    const currentIconSize = getIconSize(size, iconSize);
    
    return (
        <AriaButton
            {...props}
            isDisabled={isDisabled}
            isPending={isLoading}
            className={buttonVariants({ size, variant, className })}
        >
            <div className={clsx(styles.content, contentClassName, { [styles.isLoading]: isLoading && loader != null })}>
                {prefixIcon && (
                    <span>
                        {React.createElement(prefixIcon, { 
                            size: currentIconSize,
                            'aria-hidden': true 
                        })}
                    </span>
                )}
                {children}
                {suffixIcon && (
                    <span>
                        {React.createElement(suffixIcon, { 
                            size: currentIconSize,
                            'aria-hidden': true 
                        })}
                    </span>
                )}
            </div>
            {isLoading && loader != null && (
                <div className={styles.loader}>
                    {React.createElement(loader, { 
                        size: currentIconSize,
                        className: 'animate-spin',
                        'aria-hidden': true 
                    })}
                </div>
            )}
        </AriaButton>
    );
}