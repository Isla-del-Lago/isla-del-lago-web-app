import './BillInfoButton.css';

import rightArrow from '../Assets/right-arrow.png';

export default function BillInfoButton({ dataTitle, dataInfo, billPrice }) {
    return (
        <>
            <div className="billList-bill_resume">
                <div className="billList-bill_resume-bill_data">
                    <div className="bill_data-title">
                        <p>{dataTitle}</p>
                    </div>
                    <div className="bill_data-info">
                        <p>{dataInfo}</p>
                    </div>
                </div>
                <div className="billList-bill_resume-bill_price">
                    <p>{billPrice}</p>
                </div>
                <div className="bill_right-arrow">
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        </>
    );
}
