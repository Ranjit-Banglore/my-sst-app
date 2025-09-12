import React, {useState} from "react";

interface FormData {
    name: string;
    description: string;
}

const ItemForm: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        description: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted name: ', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
                ...prev,
                [name]: value,
            })
        );
    };

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Name: </label>
                <input type="text"
                       id="name"
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                />
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input type="text"
                       id="description"
                       name="description"
                       value={formData.description}
                       onChange={handleChange}
                       required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );

};

export default ItemForm;