import { useState } from "react";
import { useDispatch } from "react-redux";

function Todo({ title, id }) {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState(title);

    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleDelete = () => {
        dispatch({ type: "deleteToDo", payload: id });
    };

    const handleSave = () => {
        dispatch({ type: "updateToDo", payload: { id, title: newTitle } });
        setEdit(false);
    };

    return (
        <>
            {edit ? (
                <div className="d-flex">
                    <input
                        className="form-control"
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    {/* Save icon */}
                    <button className="icon save-icon" onClick={handleSave}>
                        <i className="fa-solid fa-check"></i>
                    </button>
                </div>
            ) : (
                <div className="d-flex">
                    {/* Check icon */}
                    {checked ? (
                        <button className="text-primary icon" onClick={() => setChecked(false)}>
                            <i className="fa-solid fa-circle-check"></i>
                        </button>
                    ) : (
                        <button className="icon text-info" onClick={() => setChecked(true)}>
                            <i className="fa-regular fa-circle"></i>
                        </button>
                    )}

                    {/* Strike the text if checked */}
                    <div className="w-100 text-start">
                        {checked ? (
                            <strike className="text-dark">{newTitle}</strike>
                        ) : (
                            newTitle
                        )}
                    </div>

                    {/* Edit icon */}
                    <button className="icon edit-icon" onClick={() => setEdit(true)}>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>

                    {/* Delete icon */}
                    <button className="icon delete-icon" onClick={handleDelete}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )}
        </>
    );
}

export default Todo;
