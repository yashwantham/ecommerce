import { useLocation } from "react-router-dom"
import "./AddressCard.css"

export function AddressCard({address}) {

    const location = useLocation();

    return(
        <>
        <div className="address-card-n-btns">
            <div className="address-card-container" key={address.id}>
                {!(location?.pathname === "/profile") && <div className="radio-input">
                    <input type="radio" name="address"/>
                </div>}
                <div className="address-details">
                    <p>{address.name}</p>
                    <p>{`${address.houseNumber}, ${address.street}`}</p>
                    <p>{`${address.city} - ${address.pinCode}`}</p>
                    <p>{address.state}</p>
                    <p>Mobile: {address.mobile}</p>
                </div>
            </div>
            <div className="edit-dlt-btn">
                <button className="edit-btn">
                    Edit
                </button>
                <button className="delete-btn">
                    Delete
                </button>
            </div>

            </div>
        </>
    )
}