import NavBarBackground from "./images/navbar.png"
import "./../../themes.scss"
import "./navbar.scss";

const NavBar = ({ applicationSettings, view, setView }) => {

	return (
		<div className={`navbar ${applicationSettings.app.colorTheme.value}`} style={{ backgroundImage: `url(${NavBarBackground})` }}>
			<button className="custom-button" onClick={() => setView('Dashboard')} style={{ fill: (view === 'Dashboard') ? 'var(--fillActive)' : 'var(--fillInactive)' }}>
				<svg xmlns="http://www.w3.org/2000/svg" className="navbar__icon">
					<use xlinkHref="./svg/gauge.svg#gauge"></use>
				</svg>
			</button>

			{applicationSettings.interface.activateMMI.value ?
				<button className="custom-button" onClick={() => setView('Carplay')} style={{ fill: (view === 'Carplay') ? 'var(--fillActive)' : 'var(--fillInactive)' }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="navbar__icon">
						<use xlinkHref="./svg/carplay.svg#carplay"></use>
					</svg>
				</button>
				: <></>}

			<button className="custom-button" onClick={() => setView('Settings')} style={{ fill: (view === 'Settings') ? 'var(--fillActive)' : 'var(--fillInactive)' }}>
				<svg xmlns="http://www.w3.org/2000/svg" className="navbar__icon">
					<use xlinkHref="./svg/settings.svg#settings"></use>
				</svg>
			</button>

			{/*
          <IconButton onClick={() => changeView('Volvo')} style={{ fill: (view === 'Volvo') ? 'var(--fillActive)' : 'var(--fillInactive)' }}>
            <svg className="navbar__icon">
              <use xlinkHref="./svg/car.svg#car"></use>
            </svg>
          </IconButton>
          */}
		</div >
	);
};


export default NavBar;
