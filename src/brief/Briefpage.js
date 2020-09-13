import React from "react";
import { Frame, Button, Image, Project, Table, Words } from "arwes";
import HulkImg from "../static/img/hulk.jpg";

const BriefPage = () => {
	return (
		<div style={{ width: "100%" }} className="brief-grid">
			<div style={{ width: "70%" }}>
				<Project animate header="Dashboard">
					{(anim) => (
						<Table
							show={anim.entered}
							animate
							dataset={[
								["Client", "S.H.I.E.L.D"],
								["Creator", "No selection yet"],
								["Budget", "USD $50,000"],
								["Deadline", "20 September 2021"],
								["Details", "bool"],
							]}
						/>
					)}
				</Project>
				<Project animate header="Treatments">
					{(anim) => (
						<Frame show={anim.entered} animate>
							<div className="treatment-card">
								<p>
									<Words animate>Stan Lee</Words>
								</p>
								<p>
									<Words animate>US</Words>
								</p>
								<p>
									<Words animate>9 Sept 2020</Words>
								</p>
								<Button layer="success" animate>
									View Treatment
								</Button>
							</div>
						</Frame>
					)}
				</Project>
			</div>
			<Image
				animate
				resources={HulkImg}
				style={{ width: "30%", marginLeft: "10px" }}
			>
				Hulk's 'Smashing' return
			</Image>
		</div>
	);
};
export default BriefPage;