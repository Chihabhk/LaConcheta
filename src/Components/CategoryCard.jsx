import { useDispatch } from "react-redux";
import { selectCategory } from "../features/menuSlice";
import styled from "styled-components";

const Wrapper = styled.div`
    min-width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-image: url(${(props) => props.backgroundUrl});
        background-size: cover;
        background-position: center;
        filter: blur(15px);
    }

    &:hover {
        background-color: #a3a9a3;
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
    const dispatch = useDispatch();

    const handleOnClick = () => {
        const { data } = category;
        dispatch(selectCategory({ data }));
    };

    return (
        <Wrapper
            $backgroundUrl={basePath + category.url}
            onClick={handleOnClick}>
            <h6>{category.name}</h6>
            {/* <img src={category.url} alt={category.name} /> */}
        </Wrapper>
    );
};
