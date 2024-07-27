import styled from "styled-components";
import BROverview from "./BROverview";
import Summary from "./Summary";
import Review from "./Review";

const ReviewPage = (props) => {
    return (
        <Container>
            <BROverview></BROverview>
            <Summary></Summary>
            <Review />
            <Review />
            <Review />
            <Review />
        </Container>
    )
}

const Container = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ReviewPage;