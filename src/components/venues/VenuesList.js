import React, { Component } from 'react'
import VenueCard from "./VenueCard"
import "./Venues.css"
import { Button } from "reactstrap"


export default class VenuesList extends Component {

  render() {
    let currentUser = sessionStorage.getItem("username")

    return (
      <React.Fragment>
        <div className="venuesTop">
          <h1 className="venuesHeader">Venues</h1>
          <section className="newVenueButton">
            <Button
              color="info"
              size="large"
              className="btn"
              onClick={() => {
                this.props.history.push("/venues/new");
              }}
            >
              Add New Venue
            </Button>
          </section>
        </div>
        <article className="venuesList">
          {
            this.props.venues.map( venue =>
              <VenueCard key={venue.id} venue={venue} {...this.props} />
            )
          }
        </article>

      </React.Fragment>
    )
  }
}

// <React.Fragment>
//                 <section className="newsButton">
//                     <Button color="green" type="button"
//                         className="btn btn-success"
//                         onClick={() => {
//                             this.props.history.push("/news/new")
//                         }
//                         }>
//                         New Article
//                     </Button>
//                 </section>
//                 <section className="news list">
//                     {
//                         this.props.news.map(story =>  {   
//                             if (story.userId === currentUser) {
//                                 return <NewsCard key={story.id} story={story} deleteArticle={this.props.deleteArticle}{...this.props} />
//                             } else if (myFriendsUserNames.includes(story.userId)) {
//                                 return <FriendsNewsCard key={story.id} story={story} deleteArticle={this.props.deleteArticle}{...this.props} />
//                             }
//                         })
//                     }
//                 </section>
//             </React.Fragment>