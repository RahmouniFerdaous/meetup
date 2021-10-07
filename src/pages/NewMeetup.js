import React from 'react'
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
const history = useHistory();

    function addMeetupHandler (meetupData) {
    // we can aslo used a third party package like axios
    fetch(
        'https://react-meetup-project-53437-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',  //default js fct supported by modern browsers allows us to send HTTP request //meetups is a collection added to the api url .app/... (like folder with json extension)
        {
            method: 'POST', // indicate that we send data not GET data so 2nd argument as object
            body: JSON.stringify(meetupData), //parse our object data to json format
            headers: {
                'Content-Type': 'application/json' //highlight that this request carrees json data
                     }
        }
        ).then(()=> { //goBack() //push()
            history.replace('/'); //target path as argument '/'
        }); 
   
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage
