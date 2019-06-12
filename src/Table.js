import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Importador</th>
                <th>Hawb</th>
                <th>Representante</th>
                <th>Data</th>
                
                
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.representante}</td>
                <td>{row.hawb}</td>
                <td>{row.importador}</td>
                <td>{row.data}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;