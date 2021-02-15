import React from 'react';
import { ReactComponent as GitLogo } from '../../assets/img/SVG/github-logo.svg';
const Copy = () => {
    return (
        <div className='copy'>
            <a className='copy__link' href='https://github.com/edXmO/react-calculator'>
                <GitLogo className='copy__icon' />
            </a>
            <p className='copy__text'>
                Built by edXmO, 2021
            </p>
        </div>
    )
}

export default Copy;