import styled from '@emotion/styled'

export const StyledFileDragAndDrop = styled.div`
    height: 16rem;
    width: 28rem;
    max-width: 100%;
    text-align: center;
    position: relative;

    .fileInput {
        display: none;
    }

    .fileLabel {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-width: 2px;
        border-radius: 1rem;
        border-style: dashed;
        border-color: #cbd5e1;
        background-color: #f8fafc;

        &.active {
            background-color: #ffffff;
        }
    }

    #dragElement {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }

    /* .upload-button {
        cursor: pointer;
        padding: 0.25rem;
        font-size: 1rem;
        border: none;
        font-family: 'Oswald', sans-serif;
        background-color: transparent;
    }

    .upload-button:hover {
        text-decoration-line: underline;
    } */
`
