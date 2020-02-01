import React, {PropsWithChildren} from 'react';

interface Props {
    centered?: boolean;
    className?: string;
}

const ButtonsGroup = ({ children, centered, className }: PropsWithChildren<Props>) => (
    <div className={`buttons-group ${centered ? 'is-centered' : ''} ${className}`}>
        {children}
    </div>
);

export default ButtonsGroup;