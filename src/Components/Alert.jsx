import './Alert.css'
export default function Alert(props) {
    const { image, title, subtitle, footer } = props
    return (
        <>
            <div className="alert-background">
                <div className="alert">
                    <div className="alert-body">
                        <img src={image} alt={image} />
                        <h1 className="alert-title">{title}</h1>
                        <h2 className="alert-subtitle">{subtitle}</h2>
                    </div>
                    <div className="alert-footer">
                        <h1 className="alert-footer-text">{footer}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}