import React, { useState } from 'react';
import PropTypes from 'prop-types';

CreateThoughtsForm.propTypes = {
    onThoughtsFormSubmit: PropTypes.func,
}

CreateThoughtsForm.defaultProps = {
    onThoughtsFormSubmit: null
}

function CreateThoughtsForm(props) {
    const { onThoughtsFormSubmit } = props;
    const [description, setDescription] = useState('')

    function handleValueChange(e) {
        console.log(e.target.value)
        setDescription(e.target.value)
    }


    function handleThoughtsSubmit(e) {
        e.preventDefault();
        if (!onThoughtsFormSubmit) return;
        const formValues = {
            description: description,
        };

        onThoughtsFormSubmit(formValues);
    }

    return (
        <form onSubmit={handleThoughtsSubmit}>
            <div>
                <h1>Share your thoughts...</h1>
                <textarea
                    value={description}
                    onChange={handleValueChange}
                >
                </textarea>
                <button type="submit">Post</button>
            </div>
        </form>
    );
}

export default CreateThoughtsForm;