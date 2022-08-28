import React from 'react';
import styles from "./PackageDetailsBottom.module.css";

const PackageDetailsBottom = () => {
    return (
        <div className={styles.PackageDetailsBottom}>
            <div>
                <h2 className={styles.PackageDetailsBottomh2}>Overview</h2>
                <div className={styles.PackageDetailsBottomTop}>
                    <p>The wave we have been eagerly waiting for is finally here. It is time to beat the stress and look forward to happy and safe days ahead with a much-awaited holiday or a short weekend getaway. Indias first City on the Sea is ready to welcome you on board from September 2021 onwards. Get ready to cruise to fabulous holiday destinations with Cordelia Cruises.
                    </p>
                    <p>
                        Why choose your regular vacation, when you can enjoy a seacation. Discover unlimited experiences on your cruise holiday. Onboard Cordelia Cruises, your health, and safety are our top priority. Get ready for one of the safest holiday destinations for your holiday.
                    </p>
                </div>
                <div className='accordian'>
                {
                    data.map((item) => (
                        <div className='item'>
                            <div className='title'>
                                <h3>{item.question}</h3>
                            </div>
                            <div className='content'>
                            {item.answer}
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>

            <div className={styles.PackageDetailsMiddle}>
               
            </div>
        </div>
    )
}

export default PackageDetailsBottom;

const data = [
    {
        question: "day 1",
        answer:
            "Set sail for an incredible cruise experience onboard India's first premium cruise liner. Embarkation at Mumbai Cordelia Cruises will give you the much-needed combination of adventure, fun, and entertainment in the middle of the ocean Overnight on board cruise"
    },
    {
        question: "day 2",
        answer:
            "Sail the high seas onboard 'The Empress'. We have got entertainment and experiences for all age groups. Try out your luck at the casino onboard or Experience the glitz and glamour of the Balle Balle musical shows or enjoy Live music at the lounges. We do not want you to miss out on movie nights. Watch your favorite movies on the big screen under the stars or Dance and party all-night long and much much more."
    },
    {
        question: "day 3",
        answer:
            "We hope you had a memorable experience onboard and look forward to see you soon again"
    }
]