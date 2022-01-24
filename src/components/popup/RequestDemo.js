import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const RequestDemo = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
             Request Demo
            </h1>
          </header>
        )}

<iframe src='https://businesso.vigilant-burnell.147-182-171-252.plesk.page/request-demo' frameBorder='0'  width='100%' height='550' allowtransparency='true'/>


      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default RequestDemo
