import styled from 'styled-components';

export const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
`;

export const Slide = styled.div<{ src: string; active: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    transition: opacity 1s ease;
    opacity: ${props => (props.active ? 1 : 0)};
`;

export const PrevButton = styled.button`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    font-size: 20px;
    border-radius: 50%;
`;

export const NextButton = styled(PrevButton)`
    left: auto;
    right: 10px;
`;
