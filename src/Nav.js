import React from "react";
import { Button } from "arwes";
import NavLinks from "./static/json/nav.json";

export default function Nav() {
	const links = NavLinks.links;
	return (
		<div className="sideNav">
			<div className="sidenav-btn">
				{links.map((link) => {
					return (
						<div className="sidenav-grid">
							<Button layer="primary" animate>
								<span className="link-icon">
									<i className={link.icon}></i>
								</span>
							</Button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
