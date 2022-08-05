import * as React from "react";
import { observer } from "mobx-react-lite";
import { GenomeBankContext, SimulationContext } from "../context";
import { useContext, useState } from "react";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faRotate } from "@fortawesome/free-solid-svg-icons/faRotate";
import { faUpload } from "@fortawesome/free-solid-svg-icons/faUpload";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Visualization } from "./cell/organism/visualization";
import { Button } from "./button";
import { Textarea } from "./form/textarea";
import { GenomeItem } from "../stores/genome-bank/genome-item";

const ListHeader = styled.div`
    display: flex;
    margin-bottom: 10px;
    gap: 5px;
`;

const ItemStyled = styled.div`
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background: #10161e;
`;

const ItemNameStyled = styled.div`
    cursor: pointer;
    white-space: pre-wrap;
`;

const ItemNameEmptyStyled = styled.div`
    font-style: italic;
    color: grey;
    cursor: pointer;
`;

const Header = styled.div`
    display: flex;
`;

const VisualizationWrapper = styled.div`
    flex-grow: 1;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ActionButton = styled(Button)`
    padding: 8px 10px;
`;

const ImportButton = styled(Button)`
    flex-grow: 1;
`;

const ItemNameFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const FormButtonsWrapper = styled.div`
    display: flex;
    gap: 5px;
`;

function download(genome: GenomeItem): void {
    const a = document.createElement('a');
    const url = window.URL.createObjectURL(
        new Blob(
            [JSON.stringify(genome.serialize())],
            {type: "octet/stream"}
        )
    );
    a.href = url;
    a.setAttribute('download', genome.getId() + '.genome');
    a.click();
    window.URL.revokeObjectURL(url);
}

const ItemName = observer(({item}: {item: GenomeItem}) => {
    const [edit, setEdit] = useState(false);
    const genomeBank = useContext(GenomeBankContext);

    if (edit) {
        const save = (value: string) => {
            item.setName(value);
            genomeBank.put(item);
            setEdit(false);
        };

        return <ItemNameForm value={item.getName()} onSave={save} onCancel={() => setEdit(false)} />
    }

    if (item.getName().length > 0) {
        return <ItemNameStyled onClick={() => setEdit(true)}>{item.getName()}</ItemNameStyled>;
    } else {
        return <ItemNameEmptyStyled onClick={() => setEdit(true)}>No description.</ItemNameEmptyStyled>;
    }
});

const ItemNameForm = observer(({value, onSave, onCancel}: {value: string, onSave: (value: string) => any, onCancel: () => any}) => {
    const [name, setName] = useState(value);

    return (
        <ItemNameFormStyled>
            <Textarea value={name} onChange={(value) => setName(value)} placeholder="Short description of this genome" />
            <FormButtonsWrapper>
                <Button width="100%" apperance="primary" onClick={() => onSave(name)}>Save</Button>
                <Button width="100%" apperance="secondary" onClick={() => onCancel()}>Cancel</Button>
            </FormButtonsWrapper>
        </ItemNameFormStyled>
    )
});

export const Item = observer(({item}: {item: GenomeItem}) => {
    const genomeBank = useContext(GenomeBankContext);

    return (
        <ItemStyled>
            <Header>
                <VisualizationWrapper>
                    <Visualization genome={item.getGenome()} />
                </VisualizationWrapper>
                <ButtonsWrapper>
                    <ActionButton onClick={() => {download(item)}}>
                        <FontAwesomeIcon icon={faDownload} />
                    </ActionButton>
                    <ActionButton onClick={() => {genomeBank.delete(item)}}>
                        <FontAwesomeIcon icon={faTrash} />
                    </ActionButton>
                </ButtonsWrapper>
            </Header>
            
            <ItemName item={item} />
        </ItemStyled>
    );
});

export const Genomes = observer(() => {
    const simulation = useContext(SimulationContext);
    const genomeBank = useContext(GenomeBankContext);

    const upload = () => {
        const input = document.createElement('input');
        input.type = 'file';

        input.addEventListener('change', (e) => {
            for (const file of input.files) {
                file.text().then((value) => {
                    try {
                        const data = JSON.parse(value) as any;

                        genomeBank.put(new GenomeItem(
                            data.name,
                            data.id,
                            data.genome,
                            +Date.now()
                        ));
                    } catch (e) {
                        alert('File parsing error');
                    }
                });
            }
        });

        input.click();
    };

    return (
        <>
            <ListHeader>
                <ImportButton apperance='primary' onClick={() => upload()}>
                    <FontAwesomeIcon icon={faUpload} /> Import
                </ImportButton>
                <Button onClick={() => genomeBank.refresh()}><FontAwesomeIcon icon={faRotate} /></Button>
            </ListHeader>
            <>
                {genomeBank.getItems().map((item) => <Item item={item} key={item.getId()} />)}
            </>
        </>
    );
});