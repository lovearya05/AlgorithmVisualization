import { fontSize } from '@mui/system';
import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                <span style={{color:"black",
                    fontWeight:700,
                    fontSize:30
                }}>
                    Your number is {this.props.res}
                </span> <br />
                <button
                    className='btn btn-warning btn-lg'
                    onClick={this.props.onRestart}
                >
                    Restart
                </button>
            </div>
        );
    }
}

export default Result;