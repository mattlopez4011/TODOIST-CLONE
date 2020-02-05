 import { useState, useEffect } from 'react';
 import moment from 'moment';
 import { firebase } from '../firebase';
 import { collatedTasksExist } from "../helpers";

 // const collatedTasksExist = () => {};

 export const useTasks = selectedProject => {
     const [tasks, setTasks] = useState([]);
     const [archivedTasks, setArchivedTasks] = useState([]);

     //Example: if the variable "tasks" is updated it will run this useEffect hook.
     useEffect( () => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'bigBen');

        // If there is no collatedTasks with the selectedProject then unsubscribe.
         // ? means then.
         // : means else.
         // moment() is a library that manages time zones.
         unsubscribe =
         selectedProject && !collatedTasksExist(selectedProject)
         ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
         : selectedProject === 'TODAY'
         ? (unsubscribe = unsubscribe.where(
             'date',
                 '==',
                moment().format('DD/MM/YYYY')
            ))
         : selectedProject === 'INBOX' || selectedProject === 0
         ? (unsubscribe = unsubscribe.where('date', '==', ''))
         : unsubscribe;

         unsubscribe = unsubscribe.onSnapshot(snapshot => {
             const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                 ...task.data(),
             }));

             setTasks(
                 selectedProject === 'NEXT_7'
                 ? newTasks.filter(
                     task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                     task.archived !== true
                     )
                 : newTasks.filter(task => task.archived !== true)
             );

             setArchivedTasks(newTasks.filter(task => task.archived !== false))

         });

         return () => unsubscribe();

     }, [selectedProject]);

     return { tasks, archivedTasks };
 };

 // Hook
 export const useProjects = () => {
     const [projects, setProjects] = useState([]);

     useEffect( () => {
         firebase
             .firestore()
             .collection('projects')
             .where('userId', '==', 'bigBen')
             .orderBy('projectId')
             .get()
             .then(snapshot => {
                 // Grabbing all the projects data from firebase database;
                 const allProjects = snapshot.docs.map(project => ({
                     ...project.data(),
                     docId: project.id,
                 }));

                 if (JSON.stringify(allProjects) !== JSON.stringify(projects)){
                     setProjects(allProjects)
                 }

              });

     }, [projects]);

     return { projects, setProjects };

 };