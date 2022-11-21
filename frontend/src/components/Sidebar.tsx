
export default function SideBar (){

    return (
            <div className="openSidebarContent">
                <ul>
                    <li>
                        <a className="sidebarList" href="/">Home</a>
                    </li>
                    <li>
                        <a className="sidebarList" href="/how-to">How to snoople?</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a className="sidebarListSmall" href="https://snoople-app.com/nutzungsbedingungen-app" target="_blank" rel="noopener noreferrer">Terms of use</a>
                    </li>
                    <li>
                        <a className="sidebarListSmall" href="https://snoople-app.com/datenschutzerklarung-app" target="_blank" rel="noopener noreferrer">Data Privacy</a>
                    </li>
                </ul>
            </div>
    );
};

