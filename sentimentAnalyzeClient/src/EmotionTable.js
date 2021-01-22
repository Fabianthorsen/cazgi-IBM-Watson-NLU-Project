import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        const emotions = this.props.emotions.result.emotion.document.emotion;
        const resKeys = Object.keys(
            this.props.emotions.result.emotion.document.emotion,
        )

        return (  
            <div>
            {/*You can remove this line and the line below. */}
            {JSON.stringify(this.props.emotions)}
            <table className="table table-bordered">
                <tbody>
                {
                    resKeys.keys.map((key, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{key}</td>
                                <td>{emotions[key]}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
            );
            }
    
}
export default EmotionTable;
