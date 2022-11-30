import React from "react";
import { Note } from "../../types/note";
import Checkbox from "../input/checkbox/checkbox";
import TextInput from "../input/text/textInput";
import "./noteRow.css";

interface NoteRowProps {
	onNoteUpdated: (note: Note) => void;
	note: Note;
}

class NoteRow extends React.Component<NoteRowProps> {
	onCompleteStatusChange = (newValue: boolean) => {
		const updatedNote: Note = {
			...this.props.note,
			isComplete: newValue,
		};
		this.props.onNoteUpdated(updatedNote);
	};

	onNodeContentChange = (nodeConent: Note["content"]) => {
		const updatedNote: Note = {
			...this.props.note,
			content: nodeConent,
		};
		this.props.onNoteUpdated(updatedNote);
	};

	render() {
		const { note } = this.props;

		return (
			<div className="note-row">
				<div className="note-status">
					<Checkbox
						isChecked={note.isComplete}
						onChange={this.onCompleteStatusChange}
					/>
				</div>
				<div className="note-content">
					<TextInput value={note.content} onChange={this.onNodeContentChange} />
				</div>
			</div>
		);
	}
}

export default NoteRow;
