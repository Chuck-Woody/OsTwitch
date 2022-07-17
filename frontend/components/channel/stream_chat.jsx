import React from "react";


class StreamChat extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      channel_id: this.props.currentChannel,
      subscription: null,
      body: "",
      channel_id: "",
      user_id: "",
      messages: [],
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
    let {currentUser} = this.props
    const channel_id = +this.props.currentChannel
    const user_id = this.props.currentUser
    // console.log(this.props)
    const message = Object.assign({},{
      body: this.state.body,
      channel_id: channel_id,
      user_id: user_id
      });
      console.log(`the current user, ${currentUser} and the message submitted is : ${JSON.stringify(message)}`)
      if (currentUser) {
         this.props.createMessage(message).then(() => {
        this.setState({body: ""})
        })
      } else {
        this.props.openModal('login')
      }
  }
  
  componentDidMount(){
    // console.log(`${JSON.stringify(this.props)}`)
    this.setState({subscription: this.props.cable.subscriptions.create({
      channel: 'StreamchatsChannel', 
      channel_id: +this.props.currentChannel
    }, 
    {
      received: (message) => this.props.receiveMessage(message)
    })},()=> console.log('the component mounted and subscribed', this.state.subscription) )
    
  }

  componentWillUnmount(){
    let {subs} = this.props
    if (subs) {
      this.props.cable.subscriptions.remove({
        channel: 'StreamchatsChannel', 
        channel_id: +this.props.currentChannel
      })
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    // console.log('prevState:',prevState.channel_id)
    // console.log('CurrentState',this.state.channel_id)
    if(prevState.channel_id !== this.state.channel_id) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevState,prevProps){
    console.log(`this is the prevState ${Object.keys(prevState)}`)
    console.log(`The prevChannel was ${prevState.currentChannel} the current channel is ${this.props.currentChannel}`)

    if (prevState.currentChannel !== this.props.currentChannel) {
      console.log(`The componentDidUpdate if statement was triggered because the channels changed`)
      this.props.cable.subscriptions.remove(this.state.subscription)
      this.props.clearMessages()
      this.setState({subscription: this.props.cable.subscriptions.create({
        channel: 'StreamchatsChannel', 
        channel_id: +this.props.currentChannel
      }, 
      {
        received: (message) => this.props.receiveMessage(message)
      })})
     
    }
    
  }

  render() {
    // console.log("StreamChat props:", this.props)
    // console.log("currentChannel", this.props.currentChannel)
    // console.log('currentUser', this.props.currentUser)
    // 
    let {darkTheme} = this.props
    console.log(`these are the messages: ${JSON.stringify(this.props.messages)}`)
    return (
      <div className="chat-container">
            <div className={`${darkTheme ? 'dark-theme': 'light-theme'} chat-header-container`}>
              Stream Chat
            </div>
            <div className={`${darkTheme ? 'dark-theme': 'light-theme'} chat-body-container`}>

              {/* for whatever reason the mapping of messages in the function below does not work */}
              { this.props.messages.map(function(message) { 
                
                {console.log(`inside the mapping function :)${message.username} ${message.body}`)}
                return (
                    <div className='message-container'>
                      <span className="message-username">{message.username} </span> 
                      <span className="message-body">{message.body}</span> 
                    </div>
                )
                  }
                )
              }
                  {/* make sure that 
                    componentwillunmount unsbuscribe the user properly 
                    same thing in the component didupdate if there is a subscription in state then we delete it before creating a new one
                    with router match.params

                    Plain english for above is that when i switch channels kill the old subscription and create a new one for the new channel.
                  */}
            </div>
            
            <form className={`${darkTheme ? 'dark-theme': 'light-theme'} chat-submit-container`} onSubmit={this.handleSubmit}>
              <input className={`${darkTheme ? 'dark-theme' : 'light-theme'} chat-message-input `} placeholder='Send a message' type="text" value={this.state.body} onChange={this.update('body')}/>
              <button className={`${darkTheme ? 'dark-theme' : 'light-theme'} chat-submit-btn`}>Chat</button>
              </form>
            
          </div> 
    )
  }
}

export default StreamChat