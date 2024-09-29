import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this);
  }

  onQueryChangeEventHandler(event) {
    const newQuery = event.target.value;
    this.setState({ query: newQuery }, () => {
      if (typeof this.props.searchNote === 'function') {
        this.props.searchNote({ query: newQuery });
      } else {
        console.error("Prop 'searchNote' is not a function");
      }
    });
  }

  render() {
    return (
       <nav className="bg-red-200 px-5 sm:px-24 py-5 mb-9 ">
       <div className="container flex flex-wrap justify-between items-center mx-auto gap-5 sm:gap-0">
           <a href="/" className="flex items-center">
               <span className="self-center text-gray-800 text-3xl font-extrabold tracking-wider uppercase transition duration-300">
                   Catatan
               </span>
           </a>
           <div className="relative w-full max-w-xs">
               <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
               <svg className="w-5 h-5 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg>
               </div>
               <input
              className="block p-2 pl-10 w-full text-red-900 bg-white border border-red-300 rounded-lg sm:text-sm focus:ring-red-400 focus:border-red-400 transition duration-300 ease-in-out"
              type="search"
              placeholder="Cari catatan..."
              aria-label="Search"
              value={this.state.query}
              onChange={this.onQueryChangeEventHandler}
            />
           </div>
       </div>
   </nav>
    );
  }
}

export default Navbar;
