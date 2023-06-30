import { useSelector } from 'react-redux'
import { StyledAboutPage } from './StyledAboutPage'
import HeaderWithPaintStreaks from '@/components/title/headerWithPaint'
import QuoteSvg from './assets/QuoteSvg'
import { AboutPageProps } from '@/utils/types/redux'

const AboutPageView = () => {
    const aboutPageData = useSelector((state: any) => state.aboutPage)

    return (
        <StyledAboutPage>
            <HeaderWithPaintStreaks title="About Me" />

            {aboutPageData.map((data: AboutPageProps, index: number) => {
                return (
                    <div className={`image-about-content-${index}`} key={index}>
                        <img
                            src={data.profileImg}
                            alt="alt text"
                            className="image"
                        />
                        <div className="about">
                            <div className="header-content">
                                <div className="quote">
                                    <QuoteSvg />
                                </div>
                            </div>
                            <div className="body-content">
                                <h2 className="header">{data.header}</h2>
                                {/* iGotYouOnTheNextLine */}
                                <h2 className="subHeader">{data.subHeader}</h2>
                                <div className="background-info-container">
                                    <p className="background-info">
                                        {data.info}
                                    </p>
                                </div>
                            </div>
                            <div className="role-name-content">
                                <span className="name">{data.name}</span>
                                <span className="role">{data.role}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </StyledAboutPage>
    )
}

export default AboutPageView
