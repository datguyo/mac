import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	border: none;
`;

const ResumeContent = () => {
	return (
		<BodyContent>
			<Iframe
				src="https://firebasestorage.googleapis.com/v0/b/boidushya.appspot.com/o/Resume_Boidushya_Bhattacharyay.pdf?alt=media"
				frameBorder="0"
				title="Boidushya's Resume"
			></Iframe>
		</BodyContent>
	);
};

export default ResumeContent;
