import { useState } from "react";
import { MdAddComment } from "react-icons/md";


export default function Add_Todo({ onNewItem }) {

    const [newItem, setItemName] = useState('');

    const [itemDate, setItemDate] = useState('');

    const handleItemName = (event) => {
        setItemName(event.target.value);
    } 

    const handleItemDate = (event) => {
        setItemDate(event.target.value);

    } 

    const handleAddCliked = () => {
        onNewItem(newItem, itemDate);
        setItemName('');
        setItemDate('');

    }


    return (<div className="container text-center">
        <div className="row">
            <div className="col-6">
                <input className='taskname'  type="text" value = {newItem} placeholder="Enter Task" onChange = {handleItemName}/>
            </div>
            <div className="col-4">
                <input className='taskdate'  type="date" value = {itemDate} onChange={handleItemDate}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-outline-success" onClick={handleAddCliked}><MdAddComment />
                </button>
            </div>
        </div>
        </div>);

}