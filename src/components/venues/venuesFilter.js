import React, { Component } from 'react';
import APIManager from "./../../managers/APIManager"
import VenuesManager from "./../../managers/VenuesManager"

export default class venuesFilter extends Component {


    venueFilter() {
      
    }

    render() {

      return (






      <div>
        
      </div>
    )


  } 
}


// example of onClick:               
onClick={() => {
  this.props.history.push("/venues/new");
}}

onClick={
  () => {
    


}}


VenuesManager.getAll()

// getJournalEntries: ()=> {
//   return fetch("http://localhost:8088/entries")
//   .then(entryDataJson => entryDataJson.json())
//   // .then((entryData) => entryData)
// },



const RenderDom = {
  addJournalEntry: (entries) => {
    const entryLog = document.querySelector(".entryLog");
    entryLog.innerHTML = ""
    entries.forEach(entry => {
      // calls the create function inside the add function
      entryLog.innerHTML += DomManager.createJournalEntry(entry);
    });
  }
}



export default class Mood {
  static moodFilter() {
  let moodButton = document.getElementsByName("moodButton")
  moodButton.forEach((button) => {
    button.addEventListener("click", mood => {
      let moodType = mood.target.value;
      console.log(moodType)
// Call filter function to display only selected entries and render to dom
      API.getJournalEntries()
      .then(entries => entries.filter((currentEntry)=> currentEntry.mood === moodType)).then(filteredEntries => RenderDom.addJournalEntry(filteredEntries))
    })
  })
}
}

--

render() {
  let currentUser = sessionStorage.getItem("username")
  let getFirstOne = false
  let highlight = false
  let myFriendsUserNames = this.props.friends.filter(friend => {
    if (friend.username === currentUser) {
      return true
    } else {
      return false
    }
  }).map(friend => {
    return friend.friendname
  })