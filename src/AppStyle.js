import styled from "styled-components";

export const AppWrapper = styled.div`
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: rgb(0, 0, 0); */
`;

export const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    backdrop-filter: brightness(10);
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1em;

    > img {
        width: 80%;
        max-width: 300px;
        height: 5em;
        object-fit: cover;
    }
`;
export const TelContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
    gap: 1em;

    > a {
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
        font-size: 1em;
        padding: 0.5em 1em;
        border-radius: 7px;
        background-color: #e7f1ff;
        opacity: 0.8;
        transition: all 0.3s ease;
        display: inline-block;

        &:hover {
            background-color: #cfe2ff;
            color: #0056b3;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
    }
`;

export const CategoriesWrapper = styled.section`
    position: relative;
    width: 80%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1.5em;
    padding: 1em;
    transition: grid-gap 0.3s ease;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0.5em;
        grid-gap: 1em;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const ItemsWrapper = styled.section`
    position: relative;
    width: 90%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1.5em;
    padding: 1em;
    transition: grid-gap 0.3s ease;

    > span {
        width: 15%;
        border-radius: 10px;
        background-color: #007bff;
        padding: 1em;
        cursor: pointer;
    }
`;
