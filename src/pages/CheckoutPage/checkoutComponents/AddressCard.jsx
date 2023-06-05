import "./AddressCard.css"

export function AddressCard({address}) {

    return(
        <>
            <div className="address-card-container" key={address.id}>
                <div className="radio-input">
                    <input type="radio" name="address"/>
                </div>
                <div className="address-details">
                    <p>{address.name}</p>
                    <p>{`${address.houseNumber}, ${address.street}`}</p>
                    <p>{`${address.city} - ${address.pinCode}`}</p>
                    <p>{address.state}</p>
                    <p>Mobile: {address.mobile}</p>
                </div>
            </div>
        </>
    )
}