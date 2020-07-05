import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    linkUrl: 'hats',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    linkUrl: 'jackets',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    linkUrl: 'sneakers',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    linkUrl: 'womens',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    linkUrl: 'mens',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                { 
                this.state.sections.map(({ id, title, imageUrl, linkUrl}) => (
                    <MenuItem 
                        key={id} 
                        title={title} 
                        imageUrl={imageUrl}
                        linkUrl={linkUrl} />
                )) 
                }
            </div>
        )
    }
}

export default Directory;