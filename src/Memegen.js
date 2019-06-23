import React,{Component} from "react";
import './style.css';

class Memegen extends Component {
  constructor() {
      super();
      this.state = {
            text1 : "" ,
            text2 : "" ,
            allmeme:[] ,
            memeimg: "https://i.imgflip.com/1ur9b0.jpg"
      }
      this.Myfun = this.Myfun.bind(this);
      this.generator = this.generator.bind(this);
  }

  Myfun(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  generator(event){
      event.preventDefault();
      const ran = Math.floor( Math.random() * this.state.allmeme.length );
      const link = this.state.allmeme[ran].url;
      this.setState({ memeimg : link})
  }


  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then( response => response.json() )
    .then( response => {
        const {memes} = response.data
        this.setState({ allmeme : memes  })
    })
  }

  render(){
    return(
      <div id="myform">
        <form onSubmit={this.generator} >
        <div>
          <div id="inputarea2">
            <lable id="lab">Enter Top Text : </lable>
            <br/>
            <input type="text" maxlength="25" id="inputarea" value={this.state.text1} name="text1" placeholder="Enter Top Text" onChange = {this.Myfun} />
            <hr/>
            <lable id="lab">Enter Bottom Text : </lable>
            <br/>
            <input type="text" maxlength="25" id="inputarea" value={this.state.text2} name="text2" placeholder="Enter Bottom Text" onChange = {this.Myfun}/>
            <br/><br/>
            <button id="sub"> Generate </button>
          </div>
          <div className="meme">
            <img id="meme2" alt="404" src={this.state.memeimg}/>
            <h2 className="top"> {this.state.text1} </h2>
            <br/>
            <h2 className="bottom"> {this.state.text2} </h2>
          </div>
        </div>
        </form>
      </div>
    );
  }
}



export default Memegen;
