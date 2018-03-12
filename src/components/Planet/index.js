import {Component} from 'react';

//const planet=(props)=>{
  class Planet extends Component {

  constructor(props) {
    super(props);
    this.state={
      show:false,
    };
  }

  showDetailsHandler=() =>{
    this.setState({
      show:!this.state.show,
    });
  }

  render() {
    return (
      <div className="row" onClick={this.showDetailsHandler} style={{width: this.props.customWidth}}>
        <div className="col-sm-6" style={{ border:'1px solid black',marginBottom:'2px'}}>
          <div style={{margin:'0 auto',fontSize:'1.25em',fontWeight:'bold'}}>
            {` ${this.props.name} (click to see details:)`}
          </div>
          <div>       
            <span>{`population = ${this.props.population}`}</span>
          </div>
        </div>  
        { this.state.show &&
          <div className="col-sm-6">
            <span>{`population = ${this.props.population}`}</span>
          </div>          
        }
      </div>     
  );
}
  }

export default Planet;
