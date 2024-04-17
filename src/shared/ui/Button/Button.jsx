import '/src/shared/ui/Button/Button.scss'
export const Button = ({link, className, variant, label, children, ...props}) => {
    const renderClass = () => {
        switch (variant){
            case 'primary':
                return `btn btn--primary ${className || ''}`;
            case 'secondary':
                return `btn btn--secondary ${className || ''}`;
            default:
                break;        
        }
    };
    return link ? (
        <a href={link} className={renderClass()} {...props}>{label || children}</a>
    ) : (
        <button className={renderClass()} {...props}>{label || children}</button>
    );
};

