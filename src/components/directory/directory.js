import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => (

    <div className='directory-menu'>
        {
            this.state.sections.map(({ id, title, imageUrl, linkUrl }) => (
                <MenuItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl}
                    linkUrl={linkUrl} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({ 
    sections: selectDirectorySections
}); 

export default connect(mapStateToProps)(Directory);