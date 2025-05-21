// src/services/databaseService.js
import { db } from '../firebase'; // Ensure this path is correct
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where
} from 'firebase/firestore';

// ... (all your existing functions: createSurvey, getAllSurveys, etc.) ...
export const createSurvey = async (surveyData) => {
  try {
    const docRef = await addDoc(collection(db, "surveys"), {
      name: surveyData.name,
      topics: surveyData.topics,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding survey: ", error);
    throw error;
  }
};

export const getAllSurveys = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "surveys"));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error getting surveys: ", error);
    throw error;
  }
};

export const getSurveyById = async (surveyId) => {
  try {
    const docRef = doc(db, "surveys", surveyId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error("Survey not found");
    }
  } catch (error) {
    console.error("Error getting survey: ", error);
    throw error;
  }
};

export const deleteSurvey = async (surveyId) => {
  try {
    const questionsSnapshot = await getDocs(
      query(collection(db, "questions"), where("surveyId", "==", surveyId))
    );
    const deleteQuestions = questionsSnapshot.docs.map(qDoc =>
      deleteDoc(qDoc.ref)
    );
    await Promise.all(deleteQuestions);
    await deleteDoc(doc(db, "surveys", surveyId));
    // Also delete associated user submissions (optional, but good practice for cleanup)
    const submissionsQuery = query(collection(db, "users"), where("surveyId", "==", surveyId));
    const submissionsSnapshot = await getDocs(submissionsQuery);
    const deleteSubmissions = submissionsSnapshot.docs.map(subDoc => deleteDoc(subDoc.ref));
    await Promise.all(deleteSubmissions);
    console.log(`Deleted survey ${surveyId} and its associated questions and user submissions.`);
    return true;
  } catch (error) {
    console.error("Error deleting survey and associated data:", error);
    throw error;
  }
};

export const addQuestion = async (surveyId, questionData) => {
  try {
    const docRef = await addDoc(collection(db, "questions"), {
      surveyId,
      question: questionData.question,
      buttons: questionData.buttons,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding question: ", error);
    throw error;
  }
};

export const getQuestionsForSurvey = async (surveyId) => {
  try {
    const q = query(
      collection(db, "questions"),
      where("surveyId", "==", surveyId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(qDoc => ({
      id: qDoc.id,
      ...qDoc.data()
    }));
  } catch (error) {
    console.error("Error getting questions: ", error);
    throw error;
  }
};

export const deleteQuestion = async (questionId) => {
  try {
    await deleteDoc(doc(db, "questions", questionId));
    return true;
  } catch (error) {
    console.error("Error deleting question: ", error);
    throw error;
  }
};

export const updateQuestion = async (questionId, questionData) => {
  try {
    await updateDoc(doc(db, "questions", questionId), {
      question: questionData.question,
      buttons: questionData.buttons,
      updatedAt: new Date()
    });
    return true;
  } catch (error) {
    console.error("Error updating question:", error);
    throw error;
  }
};

export const saveUserSurveySubmission = async (submissionData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      surveyId: submissionData.surveyId,
      surveyName: submissionData.surveyName,
      userName: submissionData.userName,
      userEmail: submissionData.userEmail,
      topicResults: submissionData.topicResults,
      answerHistory: submissionData.answerHistory,
      finalResult: submissionData.finalResult,
      submittedAt: new Date()
    });
    console.log("User survey submission saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving user survey submission: ", error);
    throw error;
  }
};

// NEW FUNCTION to get submissions for a specific survey
export const getSurveySubmissions = async (surveyId) => {
  try {
    const q = query(collection(db, "users"), where("surveyId", "==", surveyId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error getting submissions for survey ${surveyId}:`, error);
    throw error;
  }
};