import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

//rafc synchrone and fetch asynchrone so async for all the component and await before fetch is not best praqutic so we used useState for a loading variable
const AllMeetupsPage = () => {
  //useState is a Hook that allows you to change the value of a U/I variable
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //useEffect is a Hook that allows you to execute some code under certain condition (component did mount)
  useEffect(() => {
    setIsLoading(true);
    //Get DATA From FireBase after storage
    fetch(
      "https://react-meetup-project-53437-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // coz we have not an array in our firebase we have objects with id generated as key so we created
        const meetups = [];
        for (const key in data) {
          // key random id generated
          const meetup = {
            id: key,
            ...data[key], //spreading : js operator to copie all the pair key-value of the nested object into meetup object
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); // [] dependecies: to avoid loop react runs this fct when the componnt is mount for the first time

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetupsPage;
