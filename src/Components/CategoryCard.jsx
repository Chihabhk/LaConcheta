import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-image: url(${(props) => props.backgroundUrl});
        background-size: cover;
        background-position: center;
        filter: blur(15px);
    }

    > h6 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 1.5em;
    }
`;

export const CategoryCard = ({ category }) => {
    const basePath = process.env.REACT_APP_BASE_PATH || "";

    return (
        <Wrapper $backgroundUrl={`${basePath + category.url}`}>
            <h6>{category.name}</h6>
            {/* <img src={category.url} alt={category.name} /> */}
        </Wrapper>
    );
};
