import styled from "styled-components";

const BROverview = (props) => {
    return (
        <Overview>
            <BathroomInfo>
                <BathroomName>Bathroom #1</BathroomName>
                <BathroomDescription>Located in Ohio</BathroomDescription>
            </BathroomInfo>
            <StarRating>4.5/5.0</StarRating>
        </Overview>
    )
}

const Overview = styled.section`
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 25px 0;
    margin-bottom: 25px;
    border-bottom: 3px solid black;
`;

const BathroomInfo = styled.div`
    display: block;
    width: 70%;
`;

const BathroomName = styled.h2`
    font-size: 2.5em;
`;

const BathroomDescription = styled.p`
    font-size: 1.2em;
`;

const StarRating = styled.h2`
    font-size: 4em;
`;

export default BROverview;