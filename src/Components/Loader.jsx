import './Loader.css'
export default function Loader() {
    return (
        <>
            <div className="loader-background">
                <div className="loader-container">
                    <div className="loader-arm loader-arm-vertical arm-1"></div>
                    <div className="loader-arm loader-arm-diagonal arm-2"></div>
                    <div className="loader-arm loader-arm-horizontal arm-3"></div>
                    <div className="loader-arm loader-arm-diagonal-2 arm-4"></div>
                    <div className="loader-arm loader-arm-vertical arm-5"></div>
                    <div className="loader-arm loader-arm-diagonal arm-6"></div>
                    <div className="loader-arm loader-arm-horizontal arm-7"></div>
                    <div className="loader-arm loader-arm-diagonal-2 arm-8"></div>
                </div>
            </div>
        </>
    )
}