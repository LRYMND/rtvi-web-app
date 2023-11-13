import "./../../themes.scss"
import "./navbar.scss";

const NavBar = ({ applicationSettings, view, setView }) => {

	return (
		<div className={`navbar ${applicationSettings.app.colorTheme.value}`} style={{ backgroundImage: `url(./images/navbar.png` }}>
			<button className="nav-button" onClick={() => setView('Dashboard')} style={{ fill: (view === 'Dashboard') ? 'var(--fillActive)' : 'var(--fillInactive)' }}>
				<svg xmlns="http://www.w3.org/2000/svg" className="nav-icon">
					<use xlinkHref="./svg/gauge.svg#gauge"></use>
				</svg>
			</button>

			{applicationSettings.connections.activateMMI.value ?
				<button className="nav-button" onClick={() => setView('Carplay')} style={{ fill: (view === 'Carplay') ? 'var(--fillActive)' : 'var(--fillInactive)' }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="nav-icon">
						<use xlinkHref="./svg/carplay.svg#carplay"></use>
					</svg>
				</button>
				: <></>}

			<button className="nav-button" onClick={() => setView('Settings')} style={{ fill: (view === 'Settings') ? 'var(--fillActive)' : 'var(--fillInactive)' }}>
				<svg xmlns="http://www.w3.org/2000/svg" className="nav-icon">
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
