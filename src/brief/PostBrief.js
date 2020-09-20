import React, { useState } from "react";
import {
	Appear,
	Button,
	Heading,
	Frame,
	Loading,
	Words,
	withSounds,
} from "arwes";
import { useForm } from "react-hook-form";

const PostBrief = withSounds()((props) => {
	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const { register, handleSubmit, errors, formState } = useForm();

	const onSubmit = (data) => {
		setLoading(true);
		setTimeout(() => {
			setSubmitted(true);
			setLoading(false);
			console.log(data);
		}, 2000);
	};

	if (submitted) {
		props.sounds.information.play();
	}

	if (submitted) {
		return (
			<Frame
				style={{
					width: "50%",
					marginRight: "auto",
					marginLeft: "auto",
				}}
				animate
				show
				level={2}
				corners={4}
				layer="primary"
			>
				<Appear animate>
					<Words animate style={{ padding: "20px" }}>
						Brief submitted succesfully
					</Words>
				</Appear>
			</Frame>
		);
	}

	return (
		<div>
			<Frame
				style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}
				animate
				show
				level={2}
				corners={4}
				layer="primary"
			>
				<form className="form-style" onSubmit={handleSubmit(onSubmit)}>
					<Heading animate node="h1">
						Create a Brief
					</Heading>
					<div>
						<label>
							<Words animate>Brief Name</Words>
						</label>
						<br />
						<input
							className="form-input"
							type="text"
							name="briefName"
							ref={register({ required: true })}
						></input>{" "}
						{errors.briefName && (
							<Words animate layer="alert">
								This field is required
							</Words>
						)}
					</div>

					<div>
						<label>
							<Words animate>Video Type</Words>
						</label>
						<br />
						<select
							className="form-input"
							name="videoType"
							ref={register({ required: true })}
						>
							<option></option>
							<option>Brand Video</option>
							<option>Music Video</option>
						</select>{" "}
						{errors.videoType && (
							<Words animate layer="alert">
								This field is required
							</Words>
						)}
					</div>

					<div>
						<label>
							<Words animate>Budget</Words>
						</label>
						<br />
						<input
							className="form-input"
							type="number"
							name="budget"
							ref={register({ required: true })}
						></input>{" "}
						{errors.budget && (
							<Words animate layer="alert">
								This field is required
							</Words>
						)}
					</div>

					<div>
						<label>
							<Words animate>Agency Name</Words>
						</label>
						<br />
						<input
							className="form-input"
							type="text"
							name="agencyName"
							ref={register({ required: true })}
						></input>{" "}
						{errors.agencyName && (
							<Words animate layer="alert">
								This field is required
							</Words>
						)}
					</div>

					<div>
						<label>
							<Words animate>Deadline</Words>
						</label>
						<br />
						<input
							className="form-input"
							type="date"
							name="deadline"
							ref={register({ required: true })}
						></input>{" "}
						{errors.deadline && (
							<Words animate layer="alert">
								This field is required
							</Words>
						)}
					</div>

					<div>
						<label>
							<Words animate>Details</Words>
						</label>
						<br />
						<textarea
							className="form-input multiline"
							name="details"
							ref={register({ required: true })}
						></textarea>
						<br />
						{errors.details && (
							<Words animate layer="alert">
								This field is required
							</Words>
						)}
					</div>
					{loading ? (
						<Loading
							animate
							small
							style={{
								float: "right",
								marginRight: "50px",
								marginBottom: "20px",
							}}
						/>
					) : (
						<Button
							animate
							style={{
								marginTop: "15px",
								marginBottom: "15px",
								float: "right",
							}}
							type="submit"
						>
							Submit Treatment
						</Button>
					)}
				</form>
			</Frame>
		</div>
	);
});
export default PostBrief;
