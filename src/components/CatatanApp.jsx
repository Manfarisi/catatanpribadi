import React from "react";
import {getInitialData} from '../utils/index'
import ItemBody from "./ItemBody";
import Navbar from "./Navbar";

class  CatatanApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: getInitialData(),
        search: "",
      };
      
  
      this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
      this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onArchiveHandler = this.onArchiveHandler.bind(this);
      this.onActiveHandler = this.onActiveHandler.bind(this);
    }
  
    onAddNoteEventHandler({ title, body }) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              body,
              createdAt: new Date().toISOString(),
              archived: false,
            },
          ],
        };
      });
    }
  
    onSearchEventHandler({ query }) {
      this.setState(() => {
        return { search: query };
      });
    }
  
    onDeleteHandler(id) {
      const notes = this.state.notes.filter(notes => notes.id !== id)
      this.setState({notes})
    }
  
    onArchiveHandler(id) {
      this.setState({
        notes: this.state.notes.map((note) =>
          note.id === id ? { ...note, archived: true } : note
        ),
      });
    }
  
    onActiveHandler(id) {
      this.setState({
        notes: this.state.notes.map((note) =>
          note.id === id ? { ...note, archived: false } : note
        ),
      });
    }
  
    render() {
      return (
        <>
          <Navbar searchNote={this.onSearchEventHandler} />
          <ItemBody
            addNote={this.onAddNoteEventHandler}
            notes={this.state.notes}
            querySearch={this.state.search}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            onActive={this.onActiveHandler}
          />
        </>
      );
    }
  }

export default CatatanApp