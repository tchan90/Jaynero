import React from "react";
import { Link } from "react-router-dom";

import { Heading, Puffs, Frame, Image, Button } from "arwes";
import HulkImg from "../static/img/hulk.jpg";

const Home = () => {
	return (
		<div>
			<Puffs style={{ height: "100vh" }}>
				<Heading node="h1">Your Briefs</Heading>
				<div className="home-card">
					<Frame animate={true} level={2} corners={4} layer="primary">
						<div className="home-card-grid">
							<Image animate resources={HulkImg}>
								Hulk's 'Smashing' return
							</Image>
							<p style={{ padding: "3px", textAlign: "center" }}>
								Hulk's PR needs a new spin on his campaign.
							</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								paddingBottom: "10px",
							}}
						>
							<Link to="brief">
								<Button layer="success" animate>
									Go to Brief
								</Button>
							</Link>
						</div>
					</Frame>
				</div>
			</Puffs>
		</div>
	);
};
export default Home;
