import { Tooltip as AriaTooltip, OverlayArrow, TooltipTrigger, Focusable } from "react-aria-components";
import type { TooltipProps as AriaTooltipProps } from "react-aria-components";
import React from "react";
import { Button } from "../Button";
import styles from "./Tooltip.module.css";

// Helper function to detect if an element is focusable
const isFocusableElement = (child: React.ReactNode): boolean => {
    if (!React.isValidElement(child)) return false;
    
    // Check if it's already a Focusable component
    if (child.type === Focusable) return true;
    
    // Check if it's our Button component
    if (child.type === Button) return true;
    
    // Check if it's a native focusable HTML element
    const focusableElements = ['button', 'a', 'input', 'select', 'textarea', 'details', 'summary'];
    if (typeof child.type === 'string' && focusableElements.includes(child.type)) return true;
    
    // Check props with proper type checking
    const props = child.props as Record<string, any>;
    
    // Check if it has tabIndex prop (makes it focusable)
    if (props && typeof props.tabIndex === 'number') return true;
    
    // Check if it has href (for links)
    if (props && props.href) return true;
    
    return false;
};

// Helper function to make an element focusable
const makeFocusable = (child: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(child)) return child;
    
    if (isFocusableElement(child)) return child;
    
    // For non-focusable elements, wrap with Focusable only if it's a native DOM element
    if (typeof child.type === 'string') {
        const props = child.props as Record<string, any>;
        
        // Create enhanced child with accessibility attributes
        const enhancedChild = React.cloneElement(
            child as React.ReactElement<Record<string, any>>, 
            {
                role: props?.role || 'button',
                tabIndex: props?.tabIndex ?? 0
            }
        );
        
        return React.createElement(Focusable, { children: enhancedChild as any });
    }
    
    // For other React components, return as-is to avoid breaking them
    return child;
};

type TooltipProps = {
    /** 
     * The element that triggers the tooltip.
     * Automatically detects and wraps non-focusable elements with Focusable for proper accessibility.
     */
    children: React.ReactNode;
    /** If provided, this ReactNode will be rendered as the tooltip content (takes precedence) */
    content?: React.ReactNode;
    /** Heading text for the tooltip (used if content is not provided) */
    heading?: string;
    /** Optional icon component to render next to the heading */
    headingIcon?: React.ComponentType<{ size?: number; className?: string }>;
    /** Paragraph/body text for the tooltip (used if content is not provided) */
    para?: React.ReactNode;
    /** Optional button to render in the tooltip (used if content is not provided) */
    button?: React.ReactElement<typeof Button>;
    /** Tooltip placement relative to trigger. Supports automatic collision detection. */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Distance between tooltip and trigger element */
    offset?: number;
    /** Additional props for TooltipTrigger */
    triggerProps?: React.ComponentProps<typeof TooltipTrigger>;
    /** Additional props for AriaTooltip */
    tooltipProps?: Omit<AriaTooltipProps, "children">;
};

export const Tooltip: React.FC<TooltipProps> = ({
    children,
    content,
    heading,
    headingIcon: HeadingIcon,
    para,
    button,
    placement = 'top',
    offset = 10,
    triggerProps,
    tooltipProps,
}) => {
    const focusableChild = makeFocusable(children);
    
    return (
        <TooltipTrigger delay={100} {...triggerProps}>
            {focusableChild}
            <AriaTooltip 
                className={styles.tooltip} 
                placement={placement}
                offset={offset} 
                {...tooltipProps}
            >
                <OverlayArrow className={styles.arrow}>
                    <svg width="12" height="10" viewBox="0 0 12 10">
                        <path d="M6.86824 8.98057C6.48435 9.65239 5.51565 9.65239 5.13176 8.98058L0 -5.24537e-07L12 5.29973e-07L6.86824 8.98057Z" />
                    </svg>
                </OverlayArrow>
                {content ? (
                    content
                ) : (
                    <div className={styles.content}>
                        {(heading || HeadingIcon) && (
                            <div className={styles.heading}>
                                {HeadingIcon && <HeadingIcon size={16} aria-hidden="true" />}
                                {heading && <span>{heading}</span>}
                            </div>
                        )}
                        {para && <div className={styles.para}>{para}</div>}
                        {button && <div>{button}</div>}
                    </div>
                )}
            </AriaTooltip>
        </TooltipTrigger>
    );
};