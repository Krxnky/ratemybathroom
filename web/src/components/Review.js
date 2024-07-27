import styled from "styled-components";

const Review = (props) => {

    return (
        <Container>
            <ReviewSummary>
                <p id="cleanliness">Cleanliness: <span>7/10</span></p>
                <p id="location">Location: <span>7/10</span></p>
                <p id="traffic">Traffic: <span>7/10</span></p>
                <p id="size">Size: <span>7/10</span></p>
                <p id="privacy">Privacy: <span>7/10</span></p>
            </ReviewSummary>
            <ReviewInfo>
                <Username>krxnkyrylan</Username>
                <UserReview>
                    review review review review review review review review review review 
                </UserReview>
            </ReviewInfo>
        </Container>
    )
}

const Container = styled.section`
    width: 90%;
    max-width: 1350px;
    background-color: #f1f1f1;
    padding: 25px;
    border-radius: 25px;
    display: flex;
    gap: 5%;
    margin-bottom: 25px;
`;

const ReviewSummary = styled.div`
    width: 30%;
    border-right: 2px solid rgb(100,100,100);
`;

const ReviewInfo = styled.div``;

const Username = styled.h3`
    margin-bottom: 10px;
`;

const UserReview = styled.p``;

export default Review;