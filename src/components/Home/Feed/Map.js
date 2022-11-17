import React, { useState } from 'react'

function Map() {
    const list = [
        {
            id: 1,
            nameF: "phong"
        },
        {
            id: 2,
            nameF: "hùng",
        },
        {
            id: 3,
            nameF: "đình"
        }
    ]

    const [name, setName] = useState([]);

    console.log(name);

    const handleCheck = (id) => {
        setName(prev => {
            const isCheck = name.includes(id);
            if (isCheck) {
                return name.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    return (
        <div>
            {
                list.map(index => (
                    <div key={index.id}>

                        <input
                            type="checkbox"
                            checked={name.includes(index.id)}
                            onChange={() => handleCheck(index.id)}
                        />
                        {index.nameF}
                    </div>
                ))
            }

        </div>
    )
}

export default Map;