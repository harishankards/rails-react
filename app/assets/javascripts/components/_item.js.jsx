var Item = React.creatClass({

	getInitialState(){
		return {editable:false}
	},

	handleEdit(){
		if(this.state.editable){
			var name = this.refs.name.value;
			var id = this.props.item.id;
			var description = this.refs.description.value;
			var item = {id: id , name: name , description: description};
			this.props.handleUpdate(item);
		}
		this.setState({editable: !this.state.editable})
	},

	render(){
		var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
		var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;

		return(
			<div>
				h3>{item.props.name}</h3>
				<p>{item.props.description}</p>
				<button onClick={this.props.handleDelete.bind(this, item.id)}>Delete</button>
				<button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button>
			</div>
		)
	}
});