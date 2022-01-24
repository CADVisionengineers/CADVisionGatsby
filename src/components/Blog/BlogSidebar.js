import React, { Component } from 'react';

import Popularpost from '../popularpost';
import Categories from '../categories';
import Tags from '../Tags';


class BlogSidebar extends Component {
    
    
    render() {
        return (
            <div className="widget-area" id="secondary">
                

                {/* Popular Posts */}
            <Popularpost/>
                {/* Categories */}
              <Categories/>
               
               

                {/* Tags */}
          <Tags/>
                      </div>
        );
    }
}

export default BlogSidebar;