 import { useState, useEffect } from 'react';
 import { firebase } from '../firebase';

 const collatedTasks = () => {};

 export const useTasks = selectedProject => {
     const [tasks, setTasks] = useState([]);

     //Example: if the variable "tasks" is updated it will run this useEffect hook.
     useEffect( () => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', '1');

        // If there is no collatedTasks with the selectedProject then unsubscribe.
         // ? means then.
         // : means else/
         // moment() is a library that manages time zones.
         unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
         (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
         : selectedProject === 'TODAY'
         ? (unsubscribe = unsubscribe.where( 'date', '==', moment().format('DD/MM/YYYY')))

     }, []);
 };