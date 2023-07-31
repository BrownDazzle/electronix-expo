import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'

const SingleSelect = ({ data, shipping, setShipping }) => {

    const [selected, setSelected] = React.useState("");


    return (
        <SelectList
            setSelected={(val) => setShipping({ ...shipping, city: val })}
            data={data}
            save="value"
            label='Select city'
        />
    )

};

const MultipleSelect = () => {

    const [selected, setSelected] = React.useState([]);

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    return (
        <MultipleSelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            onSelect={() => alert(selected)}
            label="Categories"
        />
    )

};

const AdvancedSelect = ({ data, state, setState }) => {

    const [selected, setSelected] = React.useState("");

    return (
        <SelectList
            //onSelect={() => setState(state)}
            setSelected={setState}
            fontFamily='lato'
            data={data}
            arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />}
            searchicon={<FontAwesome name="search" size={12} color={'black'} />}
            search={false}
            boxStyles={{ borderRadius: 10, borderColor: '#ccc' }} //override default styles
        // defaultOption={{ key: '1', value: 'Jammu & Kashmir' }}   //default selected option
        />
    )

};

const DatabaseSelect = () => {

    const [selected, setSelected] = React.useState("");
    const [data, setData] = React.useState([]);

    React.useEffect(() =>
        //Get Values from database
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // Store Values in Temporary Array
                let newArray = response.data.map((item) => {
                    return { key: item.id, value: item.name }
                })
                //Set Data Variable
                setData(newArray)
            })
            .catch((e) => {
                console.log(e)
            })
        , [])

    return (
        <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
    )

};

export { SingleSelect, MultipleSelect, AdvancedSelect, DatabaseSelect }