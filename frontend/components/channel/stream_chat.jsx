import React from "react";


class StreamChat extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      channel_id: this.props.currentChannel,
      subscription: null,
      body: "",
      channel_id: "",
      user_id: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
   
    e.preventDefault();
    const channel_id = +this.props.currentChannel
    const user_id = this.props.currentUser
    // console.log(this.props)
    const message = Object.assign({},{
      body: this.state.body,
      channel_id: channel_id,
      user_id: user_id
      });
    
   this.props.createMessage(message).then(() => this.setState({body: ""}))
  }
  
  componentDidMount(resubscribe){
    let sub = this.props.cable.subscriptions.create({
      channel: 'StreamchatsChannel', 
      channel_id: +this.props.currentChannel
    }, 
    {
      received: (message) => this.props.receiveMessage(message)
    })
    this.setState({subscription: sub}, () => console.log(this.state.subscription))
    console.log("the sub is", sub)
    
    console.log(" the cable is",this.props.cable)
    
  }

  componentWillUnmount(){
    this.props.cable.subscriptions.remove({
      channel: 'StreamchatsChannel', 
      channel_id: +this.props.currentChannel
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('prevState:',prevState.channel_id)
    console.log('CurrenState',this.state.channel_id)
    if(prevState.channel_id !== this.state.channel_id) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevSate,prevProps,resubscribe){
    if (resubscribe) {
      this.props.cable.subscriptions.remove({
        channel: 'StreamchatsChannel', 
        channel_id: +this.props.currentChannel
      })
      let sub = this.props.cable.subscriptions.create({
        channel: 'StreamchatsChannel', 
        channel_id: +this.props.currentChannel
      }, 
      {
        received: (message) => this.props.receiveMessage(message)
      })
      
    }
  }

  render() {
    // console.log("StreamChat props:", this.props)
    // console.log("currentChannel", this.props.currentChannel)
    // console.log('currentUser', this.props.currentUser)
    // 
    return (
      <div className="chat-container">
            <div className="chat-header-container">
              Stream Chat
            </div>
            <div className="chat-body-container">
                  {this.props.messages.map(message => (<div> {message.body} </div>))}
                  {/* make sure that 
                    componentwillunmount unsbuscribe the user properly 
                    same thing in the component didupdate if there is a subscription in state then we delete it before creating a new one
                    with router match.params

                  */}
            </div>
            
            <form className="chat-submit-container" onSubmit={this.handleSubmit}>
              <input className="chat-message-input" type="text" value={this.state.body} onChange={this.update('body')}/>
              <button className='chat-submit-btn'>Chat</button>
              </form>
            
          </div> 
    )
  }
}

export default StreamChat