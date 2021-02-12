import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { display_screen } from '../../actions';



// Styles 
import '../../styles/App.css';

const Screen = () => {

    useEffect(() => {
        display_screen();
    }, []);

    return (
        <div className='screen'>
            <p className='screen__currOperation'>0</p>
            <p className='screen__display'>0</p>
        </div>
    )
}

const mapStateToProps = ({ interact }) => {
    return { interact: interact.screen }
}

export default connect(mapStateToProps, {
    display_screen
})(Screen);