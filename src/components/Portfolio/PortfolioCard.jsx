import { GitHub } from "@material-ui/icons"

export default function PortfolioItem({ appUrl, appImg, appTitle, githubLink}) {
    return (
        <div className="item">
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <img src={appImg} alt=""/>
            </a>
            <h3> {appTitle}
                <a className="github" href={githubLink} target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </a>
            </h3>
        </div>
    )
}