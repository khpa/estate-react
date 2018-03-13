import React from 'react';
import Select from 'material-ui/Select';


const propertyTypeCombo = ({ onChange, value }) => {
    const types = ['FLAT', 'DETACHED', 'SEMI-DETACHED', 'TERASED'];

    const options = types.map((e, index) => <option key={index} value={e}>{e}</option>)

    return (<Select native onChange={onChange} name="type" defaultValue={value}>
        {options}
    </Select>
    )
}

export default propertyTypeCombo;