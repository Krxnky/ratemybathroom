import styled from "styled-components";

const Summary = (props) => {
    return (
        <Container>
            <BathroomImage src="https://images.victorianplumbing.co.uk/images/230268fc-2d08-4b1b-84d5-d6753de30273/a1a1b8d5-c9fa-432c-a69a-0f51fd9af9f4/azlbsgl.jpg?origin=azlbsgl.png&h=620&w=620" alt="Bathroom Image"/>
            <ReviewSummary>
                <Cleanliness>Cleanliness: 9/10</Cleanliness>
                <Location>Location: 7/10</Location>
                <Traffic>Traffic: 3/10</Traffic>
                <Size>Size: 7/10</Size>
                <Privacy>Privacy: 6/10</Privacy>
            </ReviewSummary>
        </Container>
    )
}

const Container = styled.section`
    border: 1px solid black;
    width: 50%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5em;
    border-radius: 15px;
    margin-bottom: 50px;
`;

const BathroomImage = styled.img`
    height: 90%;
    max-height: 300px;
    border: 5px solid black;
`;

const ReviewSummary = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Cleanliness = styled.h4`
    letter-spacing: 1.7px;
    text-align: right;
    font-size: 1.2em;
`;

const Location = styled.h4`
    letter-spacing: 1.7px;
    text-align: right;
    font-size: 1.2em;
`;

const Traffic = styled.h4`
    letter-spacing: 1.7px;
    text-align: right;
    font-size: 1.2em;
`;

const Size = styled.h4`
    letter-spacing: 1.7px;
    text-align: right;
    font-size: 1.2em;
`;

const Privacy = styled.h4`
    letter-spacing: 1.7px;
    text-align: right;
    font-size: 1.2em;
`;

export default Summary;