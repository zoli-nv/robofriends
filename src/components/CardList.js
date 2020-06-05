import React from 'react';
import Card from './Card';

class CardList extends React.Component{

  render(){ 

    return(
        <div>
          {
            this.props.robots.map((user) => {
              return (
                    <Card key={user.id}
                        id={user.id} 
                        name={user.name} 
                        email={user.email} />
                      );
            })
          }
        </div>
      );
  }
}

export default CardList;