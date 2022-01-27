
// ---------- Layouts ------ //

//import IndexStudent from 'Layouts/Student Dashboard/Files/IndexStudent';
import MainLayout from './Layouts/Main Theme/MainLayout';
import AdminDashboardLayout from './Layouts/Admin Dashboard/AdminDashboardLayout';
import TeacherDashboardLayout from './Layouts/Teacher Dashboard/TeacherDashboardLayout';
import StudentDashboardLayout from './Layouts/Student Dashboard/StudentDashboardLayout';

// ----- Main Website Files -----//

//import Header from './Header';
import Home from './Home';
import Registration from './Registration';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
import Teacher from './Teacher';
import PlacementTest from './PlacementTest';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Course from './Course';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import PersonalInformation from './PersonalInformation';
import CourseDetailSchools from './CourseDetailSchools';
import CourseDetailJunior from './CourseDetailJunior';
import CourseDetailGeneral from './CourseDetailGeneral';
import CourseDetailBusiness from './CourseDetailBusiness';
import CourseDetailExamination from './CourseDetailExamination';
import CourseDetailSpecial from './CourseDetailSpecial';
import CourseDetailIelts from './CourseDetailIelts';
import PlacementTestQuestions from './Admission Test/PlacementTestQuestions';
import PaymentComponent from './PaymentComponent';
//import Testing from './Testing';
import Checkout from './Checkout';
import RegistrationAuth from './Auth/components/RegistrationAuth';
import LoginAuth from './Auth/components/LoginAuth';
import LoginAuthFunctional from 'Auth/components/LoginAuthFunctional';
import SchoolRegistrationForm from './Dynamics/SchoolRegistrationForm'
import AudioTest from './AudioTest';
import QA from './Answer Section/QA';
import FillInTheBlanks from './Answer Section/FillInTheBlanks';
import MCQ from './Answer Section/MCQ';
import Pronunciaition from './Answer Section/Pronunciation';
import AudioRecorder from './Plugins/Audio Recording For Contact Us/AudioRecorder'
import EmailTest from './EmailTest';
import ResettPasswordRequestAuth from './Auth/components/ResetPasswordRequestAuth';
import ResetPasswordAuth from './Auth/components/ResetPasswordAuth';
import TestingTest from './TestingTest';
import LoginAuthFunctionalAdmin from 'Auth/components/LoginAuthFunctionalAdmin';
import LoginAuthFunctionalTeacher from 'Auth/components/LoginAuthFunctionalTeacher';

// ------------------------------ //

// ------- Teacher Dashboard Files ------------//


import ContactDetails from './Layouts/Teacher Dashboard/Files/Views/ContactDetails';
import PersonalInfoData from './Layouts/Teacher Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResults from './Layouts/Teacher Dashboard/Files/Views/PlacementTestResults'
import RegistrationData from './Layouts/Teacher Dashboard/Files/Views/RegistrationsData'
import TeacherData from './Layouts/Teacher Dashboard/Files/Views/TeacherData'
import ViewQuestionsStudents from './Layouts/Teacher Dashboard/Files/Views/ViewQuestionsStudents'
import ViewInvoice from './Layouts/Teacher Dashboard/Files/Views/ViewInvoice'
import CreatePlacementTest from './Layouts/Teacher Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetails from './Layouts/Teacher Dashboard/Files/Views/PlacementQuestionDetails';
import CoursePlanningContent from './Layouts/Teacher Dashboard/Files/Views/Content Section/CoursePlanningContent';
import CoursePlanningContentDetails from './Layouts/Teacher Dashboard/Files/Views/Content Section/CoursePlanningContentDetails';
import Blog from './Layouts/Teacher Dashboard/Files/Views/Blogs/Blog';
import BlogList from './Layouts/Teacher Dashboard/Files/Views/Blogs/BlogList';
import CurrentBlogView from './Layouts/Teacher Dashboard/Files/Views/Blogs/CurrentBlogView';
import EditBlog from './Layouts/Teacher Dashboard/Files/Views/Blogs/EditBlog';
import VideoChat from './Layouts/Teacher Dashboard/Files/Views/Plugins/VideoChat';
import CourseContentAdultTextQA from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultTextQA';
import CourseContentAdultHandwriting from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultHandwriting';
import CourseContentAdultMCQ from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultMCQ';
import CourseContentAdultBlanks from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultBlanks';
import Pronunciation from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/Pronunciation';
import CourseContentAdultAudioForTeachers from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultAudio';
import CourseContentAdultVideoForTeachers from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/Text/CourseContentAdultVideoForTeachers';
import ViewAnswersMCQ from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersMCQ";
import ViewAnswersBlanks from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersBlanks";
import ViewAnswersPronunciation from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersPronunciation";
import ViewAnswersQA from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersQA";
import ViewAnswersOfQuestionForTeachers from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersOfQuestionForTeachers';
import ViewAnswersHandWriting from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewAnswersHandWriting";
import EditContentQA from "./Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentQA";
import EditContentHandWriting from "./Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentHandWriting";
import EditContentMCQ from './Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentMCQ';
import EditContentBlanks from './Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentBlanks';
import EditContentPronunciation from './Layouts/Teacher Dashboard/Files/Views/Content Section/Edit Questions/EditContentPronunciation';
import FileUploadNewForTeacher from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/File Upload/FileUploadNew';
import filesUploadComponent from './Layouts/Teacher Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Sections/File Upload/filesUploadComponent';
import ViewContentList from './Layouts/Teacher Dashboard/Files/Views/Content Section/ViewContentList';
import ViewCurrentContent from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentContent";
import ListOfStudentAnswers from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ListOfStudentAnswers";
import ViewCurrentAnswer from "./Layouts/Teacher Dashboard/Files/Views/Content Section/ViewCurrentAnswer";
import Container from './Layouts/Teacher Dashboard/Files/Views/Plugins/White Board/components/container/Container';
import KeyboardUrdu from './Layouts/Teacher Dashboard/Files/Views/Plugins/Virtual Key Board/KeyboardUrdu';
import HandWritingDemoStudentsLinguistics from './Layouts/Teacher Dashboard/Files/Demo/HandWritingDemo';
import TeacherDashboard from './Layouts/Teacher Dashboard/Files/Views/TeacherDashboard';
import { TodoList } from './Layouts/Teacher Dashboard/Files/Views/Testing';
import NotificationListForTeachers from './Layouts/Teacher Dashboard/Files/Views/Notifications/NotificationList';
import AnswerQueryForTeachers from './Layouts/Teacher Dashboard/Files/Views/Notifications/AnswerQuery';
import ClassScheduleForTeachers from './Layouts/Teacher Dashboard/Files/Views/Schedule Class/ClassSchedule';
import ClassScheduleListForTeachers from './Layouts/Teacher Dashboard/Files/Views/Schedule Class/ClassScheduleList';



// ------------------------------------------- //

// --------------- Student Dashboard ----------------//

/*

import StudentDashboard from 'Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/StudentDashboard';
import ContactDetailsStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/ContactDetails';
import PersonalInfoDataStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/PersonalInfoData';
import PlacementTestResultsStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/PlacementTestResults';
import RegistrationsStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/RegistrationsData';
import ViewQuestionsStudentsStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/ViewQuestionsStudents';
import CreatePlacementTestStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/PlacementQuestionDetails';
import CoursePlanningContentStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/CoursePlanningContent';
import TestimonialsStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Testimonials/Testimonials';
import TestimonialListStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Testimonials/TestimonialList';
import EditTestimonialStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Testimonials/EditTestimonial';
import CurrentTestimonialViewStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Testimonials/CurrentTestimonialView';
import AudioToTextStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Plugins/AudioToText';
import CourseContentStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/CourseContent';
import QAStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/QA';
import HandwritingStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Handwriting';
import MCQStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/MCQ';
import FillInTheBlanksStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/FillInTheBlanks';
import PronunciaitionStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Pronunciation';
import AnswersStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Student Section/Answers';
import AnswersMCQStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Student Section/AnswersMCQ';
import AnswersFillInTheBlankStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Student Section/AnswersFillInTheBlank';
import AnswerPronunciationStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Student Section/AnswerPronunciation';
import AnswerVideoStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Student Section/AnswerVideo';
import ResultsStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Views/Student Section/Results';
import FileUploadTestingStudentsLinguistics from './Layouts/Student Dashboard/Files/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/File Uploads/FileUploadTesting';
//import HandWritingDemoStudentsLinguistics from 'Layouts/Student Dashboard/Files/Student Dashboard/Files/Demo/HandWritingDemo';

*/

import Perfomance from './Layouts/Student Dashboard/Files/Views/Performance/Perfomance';
import PerformanceForTest from './Layouts/Student Dashboard/Files/Views/Performance/PerformanceForTest';
import PerfomanceForAssignment from './Layouts/Student Dashboard/Files/Views/Performance/PerfomanceForAssignment';
import CategoryForPerfomance from './Layouts/Student Dashboard/Files/Views/Performance/CategoryForPerfomance';
import HomeForStudent from './Layouts/Student Dashboard/Files/Views/Home';
import StudentDashboard from './Layouts/Student Dashboard/Files/Views/StudentDashboard'
import SidebarForStudent from './Layouts/Student Dashboard/Files/Views/Sidebar';
import ContactDetailsForStudent from './Layouts/Student Dashboard/Files/Views/ContactDetails'
import PersonalInfoDataForStudent from './Layouts/Student Dashboard/Files/Views/PersonalInfoData'
import PlacementTestResultsForStudent from './Layouts/Student Dashboard/Files/Views/PlacementTestResults'
import RegistrationDataForStudent from './Layouts/Student Dashboard/Files/Views/RegistrationsData'
import TeacherDataForStudent from './Layouts/Student Dashboard/Files/Views/TeacherData'
import ViewQuestionsStudentsForStudent from './Layouts/Student Dashboard/Files/Views/ViewQuestionsStudents'
import ViewInvoiceForStudent from './Layouts/Student Dashboard/Files/Views/ViewInvoice'
import NotificationsCategoryForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/NotificationsCategoryForStudent';
import NotificationSubjectSelectionForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/NotificationSubjectSelectionForStudent';
import CreateNotificationsForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/CreateNotification';
import NotificationListForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/NotificationList';
import EditNotificationForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/EditNotification';
import CurrentNotificationViewForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/CurrentNotificationView';
import ViewQueryResponseForStudent from './Layouts/Student Dashboard/Files/Views/Notifications/ViewQueryResponse';
import CreatePlacementTestForStudent from './Layouts/Student Dashboard/Files/Views/CreatePlacementTest';
import PlacementQuestionDetailsForStudent from './Layouts/Student Dashboard/Files/Views/PlacementQuestionDetails';
import CoursePlanningContentForStudent from './Layouts/Student Dashboard/Files/Views/CoursePlanningContent';
import TestimonialsForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/Testimonials';
import TestimonialListForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/TestimonialList';
import EditTestimonialForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/EditTestimonial';
import CurrentTestimonialViewForStudent from './Layouts/Student Dashboard/Files/Views/Testimonials/CurrentTestimonialView';
import AudioToTextForStudent from './Layouts/Student Dashboard/Files/Views/Plugins/AudioToText';
import CourseContentForStudent from "./Layouts/Student Dashboard/Files/Views/CourseContent";
import ListOfSubjectsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/ListOfSubjects';
import QAForStudent from "./Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/QA";
import AnswerTypeVideoForStudents from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Video/AnswerTypeVideoForStudents';
import AnswerTypeVideoForStudentsForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Video For Test/AnswerTypeVideoForStudentsForTest';
import AnswerTypeAudioForStudents from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Audio/AnswerTypeAudioForStudents';
import AnswerTypeAudioForStudentsForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Audio For Test/AnswerTypeAudioForStudentsForTest';
import HandwritingForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Handwriting';

import ListOfAssignmentResultsForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/Assignment Section/ListOfAssignmentResultsForStudents';
import ListOfAssignmentsForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/Assignment Section/ListOfAssignmentsForStudents';

import MCQForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/MCQ';
import FillInTheBlanksForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/FillInTheBlanks';
import QAForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/QAForTests';
import HandwritingForStudentForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/HandwritingForTests';
import MCQForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/MCQForTests';
import FillInTheBlankForTestsForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/FillInTheBlankForTests';
import FileUploadAnswerTypeForStudent from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/File Uploads/FileUploadAnswerTypeForStudent';
import FileUploadAnswerTypeForStudentForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/File Uploads/FileUploadAnswerTypeForStudentForTest';

import ViewCurrentAnswerAttachmentsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Content/ViewCurrentAnswerAttachmentsForStudent';
import ViewCurrentAnswerForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Content/ViewCurrentAnswerForStudent';

import ViewCurrentTestAttachmentsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Test/ViewCurrentTestAttachmentsForStudent';
import ViewCurrentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/View Answer For Test/ViewCurrentTestForStudent';

import ViewCurrentAnswerForStudentsForAssignment from './Layouts/Student Dashboard/Files/Views/Student Section/Assignment Section/ViewCurrentAnswerForStudentsForAssignment';


import AnswersForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Answers';
import AnswersMCQForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersMCQ';
import AnswersFillInTheBlankForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersFillInTheBlank';
import AnswerVideoForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/AnswerVideo';
import AnswerDigitalUrdu from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Digital Urdu/AnswerDigitalUrdu';
import AnswersFillInTheBlankForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersFillInTheBlankForTest';
import AnswersHandwritingForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersHandwritingForTest';
import AnswersAudioForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersAudioForTest';
import AnswersQAForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersQAForTest';
import AnswersMCQForTest from './Layouts/Student Dashboard/Files/Views/Student Section/AnswersMCQForTest';
import ViewAnswerUrduDigital from './Layouts/Student Dashboard/Files/Views/Student Section/ViewAnswerUrduDigital';
import ResultsCategoryForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/ResultCategoryForStudents';
import ResultsForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Results';
import ResultsForTestForStudents from './Layouts/Student Dashboard/Files/Views/Student Section/ResultsForTest';
import SubjectsForContent from './Layouts/Student Dashboard/Files/Views/Student Section/Subjects For Results/SubjectsForContent';
import SubjectsForTest from './Layouts/Student Dashboard/Files/Views/Student Section/Subjects For Results/SubjectsForTest';

import CreateStudentGroup from './Layouts/Student Dashboard/Files/Views/Student Section/Student Groups/CreateStudentGroup';

import Grade1ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade1Content';
import Grade2ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade2Content';
import Grade3ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade3Content';
import Grade4ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade4Content';
import Grade5ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade5Content';
import Grade6ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade6Content';
import Grade7ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade7Content';
import Grade8ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade8Content';
import Grade9ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade9Content';
import Grade10ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade11Content';
import Grade11ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade11Content';
import Grade12ContentForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects/Grade12Content';
import Grade1ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade1ContentTest';
import Grade2ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade2ContentTest';
import Grade3ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade3Content';
import Grade4ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade4Content';
import Grade5ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade5Content';
import Grade6ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade6Content';
import Grade7ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade7Content';
import Grade8ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade8Content';
import Grade9ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade9Content';
import Grade10ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade10Content';
import Grade11ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade11Content';
import Grade12ContentTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/Grade12Content';
import ListOfSubjectsForTestForStudent from './Layouts/Student Dashboard/Files/Views/Student Section/Classes And Subjects For Tests/ListOfClassesForTest';
import FlipBookForStudents from './Layouts/Student Dashboard/Files/Views/Plugins/Flip Book/FlipBook';
import Testing from './Layouts/Student Dashboard/Files/Views/Python Plugins/Testing';
import ConferenceCall from './Layouts/Student Dashboard/Files/Views/ConferenceCall';
import HomeVideoForStudent from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/HomeVideoForStudent';
import Video from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/Video';
import ListOfSubjectsForFlipBook from './Layouts/Student Dashboard/Files/Views/Plugins/Flip Book/List Of Subjects/ListOfSubjectsForFlipBook';
import AnswerDrawing from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Drawing/AnswerDrawing';
import DrawingPage from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/Answer Drawing/DrawingPage';
import AnswerDrawingTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Drawing For Test/AnswerDrawingTest';
import DrawingPageTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Drawing For Test/DrawingPage';
import AnswerDigitalUrduForTest from './Layouts/Student Dashboard/Files/Courses Content/SchoolsTraining/AdultTraining/Answer Types/For Tests/Answer Digital Urdu For Test/AnswerDigitalUrduForTest';
import LiveClassForStudents from './Layouts/Student Dashboard/Files/Views/LiveClassForStudents';
import SubjectCategoryForStudents from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/Live Class Links For Students/SubjectCategoryForStudents'
import ListOfLinksForLiveClass from './Layouts/Student Dashboard/Files/Views/Plugins/Video Call/Live Class Links For Students/ListOfLinksForLiveClass';
import LoginChatForStudent from './Layouts/Student Dashboard/Files/Views/Chat For Student/LoginChatForStudent';
import ChatWindowForStudent from './Layouts/Student Dashboard/Files/Views/Chat For Student/ChatWindowForStudent';

import ViewSubjectFlipBook from './Layouts/Student Dashboard/Files/Views/Plugins/Flip Book/List Of Subjects/ViewSubjectFlipBook';
// --------------- Admin Dashboard ----------------//


import ContactsForAdmin from './Layouts/Admin Dashboard/Files/Contacts/Contacts';
import ViewContactDetailsForAdmin from './Layouts/Admin Dashboard/Files/Contacts/ViewContactDetails';
import AnswerQueryForAdmin from './Layouts/Admin Dashboard/Files/Contacts/AnswerQuery';
import PersonalInfoDataForAdmin from './Layouts/Admin Dashboard/Files/Views/PersonalInfoData';
import PlacementTestResultsForAdmin from './Layouts/Admin Dashboard/Files/Views/PlacementTestResults';
import RegistrationsDataForAdmin from './Layouts/Admin Dashboard/Files/Views/RegistrationsData';
import BlogsForAdmin from './Layouts/Admin Dashboard/Files/Views/Blogs';
import TeacherDataForAdmin from './Layouts/Admin Dashboard/Files/Views/TeacherData';
import ViewQuestionsStudentsForAdmin from './Layouts/Admin Dashboard/Files/Views/ViewQuestionsStudents';
import CreatePlacementTestForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/CreatePlacementTest';
import PlacementsForAdmin from './Layouts/Admin Dashboard/Files/Views/Placements';
import PlacementTestQAForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Question Creation/Text/PlacementTestQA';
import PlacementTestMCQForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Question Creation/Text/PlacementTestMCQ';
import PlacementTestBlanksForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Question Creation/Text/PlacementTestBlanks';
import PronunciationForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Question Creation/Text/Pronunciation';
import ViewAnswersMCQForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ViewAnswersMCQ';
import ViewAnswersBlanksForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ViewAnswersBlanks';
import ViewAnswersPronunciationForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ViewAnswersPronunciation';
import ViewAnswersQAForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ViewAnswersQA';
import EditContentQAForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Edit Questions/EditContentQA';
import EditContentMCQForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Edit Questions/EditContentQA';
import EditContentBlanksForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Edit Questions/EditContentBlanks';
import EditContentPronunciationForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Edit Questions/EditContentPronunciation';
import filesUploadComponentForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/Question Creation/File Upload/filesUploadComponent';
import ViewContentListForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ViewContentList';
import ViewCurrentContentForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ViewCurrentContent';
import ListOfStudentAnswersForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ListOfStudentAnswers';
import ViewCurrentAnswerForAdmin from './Layouts/Admin Dashboard/Files/Views/Content Section/ViewCurrentAnswer';

//------Importing Components of Courses and Sections---------//

//-----Schools Adult Training Section

import SectionForMaleStudentForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SchoolsTraining/AdultTraining/Sections/SectionForMaleStudentAdult';
import SectionForFemaleStudentsAdultForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SchoolsTraining/AdultTraining/Sections/SectionForFemaleStudentsAdult';

//----------

//-----Schools Junior Training Seciton
import SectionForFemaleStudentsJuniorForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SchoolsTraining/JuniorTraining/Sections/SectionForFemaleStudentsJunior';
import SectionForMaleStudentsJuniorForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SchoolsTraining/JuniorTraining/Sections/SectionForMaleStudentsJunior';

//----------

//-----Business Seciton

import BusinessSectionsGroupMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Business/Group-Month/BusinessSectionsGroupMonth';
import BusinessSectionsGroupWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Business/Group-Week/BusinessSectionsGroupWeek';
import BusinessSectionsOneToOneMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Business/One-One-Month/BusinessSectionsOneToOneMonth';
import BusinessSectionsOneToOneWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Business/One-One-Week/BusinessSectionsOneToOneWeek';

//----------

//-----Examination Seciton

import ExaminationsFourGroupMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Examinations/Four-Group-Month/ExaminationsFourGroupMonth';
import ExaminationsOneGroupWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Examinations/One-Group-Month/ExaminationsOneGroupWeek';
import ExaminationsOneMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Examinations/One-Month/ExaminationsOneMonth';
import ExaminationsOneWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/Examinations/One-Week/ExaminationsOneWeek';

//----------

//-----General English

import EnglishGroupMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/GeneralEnglish/Group-Month/EnglishGroupMonth';
import EnglishGroupWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/GeneralEnglish/Group-Week/EnglishGroupWeek';
import EnglishOneToOneMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/GeneralEnglish/One-One-Month/EnglishOneToOneMonth';
import EnglishOneToOneWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/GeneralEnglish/One-One-Week/EnglishOneToOneWeek';

//----------


//-----IELTS

import IELTSTwentyTwoSixMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/IELTS/TwentyTwo-Six-Month/IELTSTwentyTwoSixMonth';
import IELTSTwentyTwoTenMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/IELTS/TwentyTwo-Ten-Month/IELTSTwentyTwoTenMonth';

//----------


//-----Junior Training

import JuniorTrainingGroupMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/JuniorTraining/Group-Month/JuniorTrainingGroupMonth';
import JuniorTrainingGroupWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/JuniorTraining/Group-Week/JuniorTrainingGroupWeek';
import JuniorTrainingOneToOneMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/JuniorTraining/One-One-Month/JuniorTrainingOneToOneMonth';
import JuniorTrainingOneToOneWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/JuniorTraining/One-One-Week/JuniorTrainingOneToOneWeek';


//----------

//-----Specialized Examination

import SpecialExaminationsGroupMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SpecializedExaminations/Group-Month/SpecialExaminationsGroupMonth';
import SpecialExaminationsGroupWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SpecializedExaminations/Group-Week/SpecialExaminationsGroupWeek';
import SpecialExaminationsOneToOneMonthForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SpecializedExaminations/One-One-Month/SpecialExaminationsOneToOneMonth';
import SpecialExaminationsOneToOneWeekForAdmin from './Layouts/Admin Dashboard/Files/Sections for Courses/Courses/SpecializedExaminations/One-One-Week/SpecialExaminationsOneToOneWeek';


//----------

//-----------------------End of Components---------------------------------



function App() {
  return (
    <div className="App">
      <div>
      <Router >
      <Switch>
        <Route exact path="/"><Redirect to="/home" /></Route> 

        {/* ------------- Main Theme Layout Files ----------- */}

        <MainLayout exact path="/home" component={Home} />
        <MainLayout path="/main/aboutus" component={AboutUs} />
        <MainLayout path="/main/registration" component={Registration} />
        <MainLayout path="/main/teachers" component={Teacher} />
        <MainLayout path="/main/placementtest" component={PlacementTest} />
        <MainLayout path="/main/contact" component={ContactUs} />
        <MainLayout path="/main/course" component={Course} />
        <MainLayout path="/main/policy" component={PrivacyPolicy} />
        <MainLayout path="/main/terms" component={TermsAndConditions} />
        <MainLayout path="/main/personalinfo" component={PersonalInformation} />
        <MainLayout path="/main/course-detail-schools" component={CourseDetailSchools} />
        <MainLayout path="/main/course-detail-junior" component={CourseDetailJunior} />
        <MainLayout path="/main/course-detail-general" component={CourseDetailGeneral} />
        <MainLayout path="/main/course-detail-business" component={CourseDetailBusiness} />
        <MainLayout path="/main/course-detail-examination" component={CourseDetailExamination} />
        <MainLayout path="/main/course-detail-special" component={CourseDetailSpecial} />
        <MainLayout path="/main/course-detail-ielts" component={CourseDetailIelts} />
        <MainLayout path="/main/placement-questions" component={PlacementTestQuestions} />
        <MainLayout path="/main/payment-options" component={PaymentComponent} />
        <MainLayout path="/main/testing" component={Testing} />
        <MainLayout path="/main/stripe-checkout" component={Checkout} />
        <MainLayout path="/main/dynamics-school" component={SchoolRegistrationForm} />
        <MainLayout path="/main/registration-auth" component={RegistrationAuth} />
        <MainLayout path="/main/login-auth-student" component={LoginAuthFunctional} />
        <MainLayout path="/main/login-auth-teacher" component={LoginAuthFunctionalTeacher} />
        <MainLayout path="/main/abc" component={AudioTest} />
        <MainLayout path="/main/view-question-type-qa" component={QA} />
        <MainLayout path="/main/view-question-type-mcq" component={MCQ} />
        <MainLayout path="/main/view-question-type-blanks" component={FillInTheBlanks} />
        <MainLayout path="/main/view-question-type-pronunciation" component={Pronunciaition} />
        <MainLayout path="/main/testing-audio" component={AudioRecorder} />
        <MainLayout path="/main/testing-email" component={EmailTest} />
        <MainLayout path="/main/reset-password-confirmation" component={ResettPasswordRequestAuth} />
        <MainLayout path="/main/reset-password/:id" component={ResetPasswordAuth} />
   
        <TeacherDashboardLayout path="/teacher/contact/:id" component={ContactDetails} /> 
        <TeacherDashboardLayout path="/teacher/personal-info/:id" component={PersonalInfoData} /> 
        <TeacherDashboardLayout path="/teacher/placement-results/:id" component={PlacementTestResults} /> 
        <TeacherDashboardLayout path="/teacher/registration-data/:id" component={RegistrationData} /> 
        <TeacherDashboardLayout path="/teacher/teachers-data/:id" component={TeacherData} /> 
        <TeacherDashboardLayout path="/teacher/invoice/:id" component={ViewInvoice} /> 
        <TeacherDashboardLayout path="/teacher/questions-list/:id" component={ViewQuestionsStudents} /> 
        <TeacherDashboardLayout path="/teacher/create-placement-test/:id" component={CreatePlacementTest} /> 
        <TeacherDashboardLayout path="/teacher/placement-question-details/:id" component={PlacementQuestionDetails} /> 
        <TeacherDashboardLayout path="/teacher/course-planning-content/:id" component={CoursePlanningContent}/>
        <TeacherDashboardLayout path="/teacher/course-planning-content-detatails/:id" component={CoursePlanningContentDetails}/>
        <TeacherDashboardLayout path="/teacher/blog-list/:id" component={Blog} />
        <TeacherDashboardLayout path="/teacher/blogs/:id" component={BlogList} />
        <TeacherDashboardLayout path="/teacher/current-blog-view/:id" component={CurrentBlogView} />
        <TeacherDashboardLayout path="/teacher/edit-current-blog/:id" component={EditBlog} />
        <TeacherDashboardLayout path="/teacher/videochat/:id" component={VideoChat} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-text-qa/:id" component={CourseContentAdultTextQA} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-text-handwriting/:id" component={CourseContentAdultHandwriting} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-text-mcq/:id" component={CourseContentAdultMCQ} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-text-blanks/:id" component={CourseContentAdultBlanks} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-text-pronunciation/:id" component={Pronunciation} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-text-audio/:id" component={CourseContentAdultAudioForTeachers} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-text-video/:id" component={CourseContentAdultVideoForTeachers} />
        <TeacherDashboardLayout path="/teacher/view-answers-mcq/:id" component={ViewAnswersMCQ} />
        <TeacherDashboardLayout path="/teacher/view-answers-blanks/:id" component={ViewAnswersBlanks} />
        <TeacherDashboardLayout path="/teacher/view-answers-qa/:id" component={ViewAnswersOfQuestionForTeachers} />
        <TeacherDashboardLayout path="/teacher/view-answers-handwriting/:id" component={ViewAnswersHandWriting} />
        <TeacherDashboardLayout path="/teacher/view-answers-pronunciation/:id" component={ViewAnswersPronunciation} />
        <TeacherDashboardLayout path="/teacher/adult-course-content-file-upload/:id" component={FileUploadNewForTeacher} />
        <TeacherDashboardLayout path="/teacher/view-question-type-qa-edit/:id" component={EditContentQA} />
        <TeacherDashboardLayout path="/teacher/view-question-answer-type-handwriting-edit/:id" component={EditContentHandWriting} />
        <TeacherDashboardLayout path="/teacher/view-question-answer-type-mcq-edit/:id" component={EditContentMCQ} />
        <TeacherDashboardLayout path="/teacher/view-question-answer-type-blanks-edit/:id" component={EditContentBlanks} />
        <TeacherDashboardLayout path="/teacher/view-question-answer-type-pronunciation-edit/:id" component={EditContentPronunciation} />
        <TeacherDashboardLayout path="/teacher/content-list/:id" component={ViewContentList} />
        <TeacherDashboardLayout path="/teacher/view-results/:id" component={ListOfStudentAnswers} />
        <TeacherDashboardLayout path="/teacher/view-current-answer/:id" component={ViewCurrentAnswer} />
        <TeacherDashboardLayout path="/teacher/view-current-content/:id" component={ViewCurrentContent} />
        <TeacherDashboardLayout path="/teacher/white-board/:id" component={Container} />
        <TeacherDashboardLayout path="/teacher/keyboard/:id" component={KeyboardUrdu} />
        <TeacherDashboardLayout path="/teacher/handwriting-demo/:id" component={HandWritingDemoStudentsLinguistics} />
        <TeacherDashboardLayout path="/teacher/notification-list/:id" component={NotificationListForTeachers} />
        <TeacherDashboardLayout path="/teacher/notification-answer/:id" component={AnswerQueryForTeachers} />
        <TeacherDashboardLayout path="/teacher/class-schedule/:id" component={ClassScheduleForTeachers} />
        <TeacherDashboardLayout path="/teacher/class-schedule-list/:id" component={ClassScheduleListForTeachers} />
        <TeacherDashboardLayout path="/teacher/teacherDashboard/:id" component={TeacherDashboard} />
        <Route path="/testing/:id" component = {TodoList} />
    

            {/*}
              <StudentDashboardLayout path="/student/contac/:idt" component={ContactDetailsStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/personal-info/:id" component={PersonalInfoDataStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/placement-results/:id" component={PlacementTestResultsStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/registration-data/:id" component={RegistrationsStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/questions-list/:id" component={ViewQuestionsStudentsStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/create-placement-test/:id" component={CreatePlacementTestStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/placement-question-details/:id" component={PlacementQuestionDetailsStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/course-planning-question-details/:id" component={CoursePlanningContentStudentsLinguistics} /> 
              <StudentDashboardLayout path="/student/testimonials/:id" component={TestimonialsStudentsLinguistics} />
              <StudentDashboardLayout path="/student/testimonial-list/:id" component={TestimonialListStudentsLinguistics} />
              <StudentDashboardLayout path="/student/edit-current-testimonial/:id" component={EditTestimonialStudentsLinguistics} />
              <StudentDashboardLayout path="/student/current-testimonial-view/:id" component={CurrentTestimonialViewStudentsLinguistics} />
              <StudentDashboardLayout path="/student/audiototext/:id" component={AudioToTextStudentsLinguistics} />
              <StudentDashboardLayout path="/student/course-content/:id" component={CourseContentStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-question-type-qa/:id" component={QAStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-question-type-handwriting/:id" component={HandwritingStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-question-type-mcq/:id" component={MCQStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-question-type-blanks/:id" component={FillInTheBlanksStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-question-type-pronunciation/:id" component={PronunciaitionStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-question-type-video/:id" component={AnswerVideoStudentsLinguistics} />
              <StudentDashboardLayout path="/student/answer-list/:id" component={ResultsStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-current-answer/:id" component={AnswersStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-current-answer-mcq/:id" component={AnswersMCQStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-current-answer-blanks/:id" component={AnswersFillInTheBlankStudentsLinguistics} />
              <StudentDashboardLayout path="/student/view-current-answer-pronunciation/:id" component={AnswerPronunciationStudentsLinguistics} />
              <StudentDashboardLayout path="/student/testing/:id" component={FileUploadTestingStudentsLinguistics} />
              <StudentDashboardLayout path="/student/handwriting-demo/:id" component={HandWritingDemoStudentsLinguistics} />
              <StudentDashboardLayout path="/student/studentDashboard/:id" component={StudentDashboard} />

            */}



            
              <StudentDashboardLayout exact path="/student/studentDashboard/:id" component={StudentDashboard} /> 
              <StudentDashboardLayout path="/student/studentPerformance/:id" component={Perfomance} /> 
              <StudentDashboardLayout path="/student/studentPerformance-test/:id" component={PerformanceForTest} /> 
              <StudentDashboardLayout path="/student/studentPerformance-assignment/:id" component={PerfomanceForAssignment} /> 
              <StudentDashboardLayout path="/student/category-for-performance/:id" component={CategoryForPerfomance} /> 
              <StudentDashboardLayout path="/student/contact/:id" component={ContactDetailsForStudent} /> 
              <StudentDashboardLayout path="/student/personal-info/:id" component={PersonalInfoDataForStudent} /> 
              <StudentDashboardLayout path="/student/placement-results/:id" component={PlacementTestResultsForStudent} /> 
              <StudentDashboardLayout path="/student/registration-data/:id" component={RegistrationDataForStudent} /> 
              <StudentDashboardLayout path="/student/teachers-data/:id" component={TeacherDataForStudent} /> 
              <StudentDashboardLayout path="/student/notifications-category-students/:id" component={NotificationsCategoryForStudent} /> 
              <StudentDashboardLayout path="/student/notifications-subject-students/:id" component={NotificationSubjectSelectionForStudent} /> 
              <StudentDashboardLayout path="/student/create-notifications/:id" component={CreateNotificationsForStudent} /> 
              <StudentDashboardLayout path="/student/notification-list/:id" component={NotificationListForStudent} /> 
              <StudentDashboardLayout path="/student/notification-response/:id" component={ViewQueryResponseForStudent} /> 
              <StudentDashboardLayout path="/student/invoice/:id" component={ViewInvoiceForStudent} /> 
              <StudentDashboardLayout path="/student/questions-list/:id" component={ViewQuestionsStudentsForStudent} /> 
              <StudentDashboardLayout path="/student/create-placement-test/:id" component={CreatePlacementTestForStudent} /> 
              <StudentDashboardLayout path="/student/placement-question-details/:id" component={PlacementQuestionDetailsForStudent} /> 
              <StudentDashboardLayout path="/student/course-planning-question-details/:id" component={CoursePlanningContentForStudent} /> 
              <StudentDashboardLayout path="/student/testimonials-creation/:id" component={TestimonialsForStudent} />
              <StudentDashboardLayout path="/student/testimonial-list/:id" component={TestimonialListForStudent} />
              <StudentDashboardLayout path="/student/edit-current-testimonial/:id" component={EditTestimonialForStudent} />
              <StudentDashboardLayout path="/student/current-testimonial-view/:id" component={CurrentTestimonialViewForStudent} />
              <StudentDashboardLayout path="/student/audiototext/:id" component={AudioToTextForStudent} />
              <StudentDashboardLayout path="/student/course-content/:id" component={CourseContentForStudent} />
              <StudentDashboardLayout path="/student/list-of-subjects/:id" component={ListOfSubjectsForStudent} />
              <StudentDashboardLayout path="/student/list-of-subjects-for-test/:id" component={ListOfSubjectsForTestForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-qa/:id" component={QAForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-drawing/:id" component={AnswerDrawing} />
              <StudentDashboardLayout path="/student/view-question-type-handwriting/:id" component={HandwritingForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-mcq/:id" component={MCQForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-blanks/:id" component={FillInTheBlanksForStudent} />
              
              <StudentDashboardLayout path="/student/view-question-type-video/:id" component={AnswerTypeVideoForStudents} />
              <StudentDashboardLayout path="/student/view-question-type-audio/:id" component={AnswerTypeAudioForStudents} />
              <StudentDashboardLayout path="/student/view-question-type-digitalUrdu/:id" component={AnswerDigitalUrdu} />
              <StudentDashboardLayout path="/student/view-question-type-file-upload/:id" component={FileUploadAnswerTypeForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-file-upload-test/:id" component={FileUploadAnswerTypeForStudentForTest} />
              
              
              <StudentDashboardLayout path="/student/list-of-subjects-for-assignments/:id" component={ListOfAssignmentsForStudents} />
              <StudentDashboardLayout path="/student/answer-list-assignments/:id" component={ListOfAssignmentResultsForStudents} />
              <StudentDashboardLayout path="/student/view-current-answer-assignments/:id" component={ViewCurrentAnswerForStudentsForAssignment} />
              
              


              <StudentDashboardLayout path="/student/view-question-type-qa-test/:id" component={QAForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-handwriting-test/:id" component={HandwritingForStudentForTest} />
              <StudentDashboardLayout path="/student/view-question-type-mcq-test/:id" component={MCQForTestsForStudent} />
              <StudentDashboardLayout path="/student/view-question-type-blanks-test/:id" component={FillInTheBlankForTestsForStudent} />
              
              <StudentDashboardLayout path="/student/create-student-group/:id" component={CreateStudentGroup} />
              


              <StudentDashboardLayout path="/student/view-question-type-digitalurdu-test/:id" component={AnswerDigitalUrduForTest} />
              <StudentDashboardLayout path="/student/view-question-type-audio-test/:id" component={AnswerTypeAudioForStudentsForTest} />
              <StudentDashboardLayout path="/student/view-question-type-video-test/:id" component={AnswerTypeVideoForStudentsForTest} />
              <StudentDashboardLayout path="/student/view-question-type-drawing-test/:id" component={AnswerDrawingTest} />
              <StudentDashboardLayout path="/student/Grade-1-content/:id" component={Grade1ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-2-content/:id" component={Grade2ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-3-content/:id" component={Grade3ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-4-content/:id" component={Grade4ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-5-content/:id" component={Grade5ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-6-content/:id" component={Grade6ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-7-content/:id" component={Grade7ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-8-content/:id" component={Grade8ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-9-content/:id" component={Grade9ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-10-content/:id" component={Grade10ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-11-content/:id" component={Grade11ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-12-content/:id" component={Grade12ContentForStudent} />
              <StudentDashboardLayout path="/student/Grade-1-content-test/:id" component={Grade1ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-2-content-test/:id" component={Grade2ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-3-content-test/:id" component={Grade3ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-4-content-test/:id" component={Grade4ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-5-content-test/:id" component={Grade5ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-6-content-test/:id" component={Grade6ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-7-content-test/:id" component={Grade7ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-8-content-test/:id" component={Grade8ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-9-content-test/:id" component={Grade9ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-10-content-test/:id" component={Grade10ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-11-content-test/:id" component={Grade11ContentTestForStudent} />
              <StudentDashboardLayout path="/student/Grade-12-content-test/:id" component={Grade12ContentTestForStudent} />
              <StudentDashboardLayout path="/student/results-category-students/:id" component={ResultsCategoryForStudents} />
              <StudentDashboardLayout path="/student/answer-list/:id" component={ResultsForStudent} />
              <StudentDashboardLayout path="/student/answer-list-test/:id" component={ResultsForTestForStudents} />
              <StudentDashboardLayout path="/student/subject-list/:id" component={SubjectsForContent} />
              <StudentDashboardLayout path="/student/subject-list-test/:id" component={SubjectsForTest} />
              <StudentDashboardLayout path="/student/view-current-answer-mcq/:id" component={AnswersMCQForStudent} />
              
              <StudentDashboardLayout path="/student/view-current-answer/:id" component={ViewCurrentAnswerForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer-attachment/:id" component={ViewCurrentAnswerAttachmentsForStudent} />

              <StudentDashboardLayout path="/student/view-current-answer-test/:id" component={ViewCurrentTestForStudent} />
              <StudentDashboardLayout path="/student/view-current-answer-attachment-test/:id" component={ViewCurrentTestAttachmentsForStudent} />



              <StudentDashboardLayout path="/student/view-current-answer-digitalUrdu/:id" component={ViewAnswerUrduDigital} />
              <StudentDashboardLayout path="/student/view-current-answer-blanks/:id" component={AnswersFillInTheBlankForStudent} />
             
              <StudentDashboardLayout path="/student/view-current-answer-qa-test/:id" component={AnswersQAForTest} />
              <StudentDashboardLayout path="/student/view-current-answer-mcq-test/:id" component={AnswersMCQForTest} />
              <StudentDashboardLayout path="/student/view-current-answer-blanks-test/:id" component={AnswersFillInTheBlankForTest} />
             
              
              <StudentDashboardLayout path="/student/flip-book/:id" component={FlipBookForStudents} />
              <StudentDashboardLayout path="/student/flip-book-view/:id" component={ViewSubjectFlipBook} />
              <StudentDashboardLayout path="/student/conferenceCall/:id" component={ConferenceCall} />
              <StudentDashboardLayout path="/student/live-class/:id" component={LiveClassForStudents} />
              <StudentDashboardLayout path="/student/subject-category-liveClass/:id" component={SubjectCategoryForStudents} />
              <StudentDashboardLayout path="/student/list-of-links-liveClass/:id" component={ListOfLinksForLiveClass} />
              
              <Route path="/student/conference-call/" exact component={HomeVideoForStudent} />
				    	<Route path="/student/conference-call/:url" component={Video} />
              
              <StudentDashboardLayout path="/student/list-of-subjects-flipbook/:id" component={ListOfSubjectsForFlipBook} />
              <Route path="/student/draw-page/:id" component={DrawingPage} />
              <Route path="/student/draw-page-test/:id" component={DrawingPageTest} />
              <Route path = "/pythonTesting" component = {Testing} />
              <Route path = "/student/chat-student" component = {ChatWindowForStudent} />

           <AdminDashboardLayout path="/admin/contacts-admin" component={ContactsForAdmin} /> 
           <AdminDashboardLayout path="/admin/view-contact-details" component={ViewContactDetailsForAdmin} /> 
           <AdminDashboardLayout path="/admin/answer-query" component={AnswerQueryForAdmin} /> 
           <AdminDashboardLayout path="/admin/personal-info" component={PersonalInfoDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/placement-results" component={PlacementTestResultsForAdmin} /> 
           <AdminDashboardLayout path="/admin/registration-data" component={RegistrationsDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/teachers-data" component={TeacherDataForAdmin} /> 
           <AdminDashboardLayout path="/admin/questions-list" component={ViewQuestionsStudentsForAdmin} /> 
           <AdminDashboardLayout path="/admin/create-placement-test" component={CreatePlacementTestForAdmin} /> 
           <AdminDashboardLayout path="/admin/blogs" component={BlogsForAdmin} />
           <AdminDashboardLayout path="/admin/view-placement-registrations" component={PlacementsForAdmin} />
           <AdminDashboardLayout path="/admin/placement-test-content-text-qa" component={PlacementTestQAForAdmin} />
           <AdminDashboardLayout path="/admin/placement-test-content-text-mcq" component={PlacementTestMCQForAdmin} />
           <AdminDashboardLayout path="/admin/placement-test-content-text-blanks" component={PlacementTestBlanksForAdmin} />
           <AdminDashboardLayout path="/admin/placement-test-content-text-pronunciation" component={PronunciationForAdmin} />
           <AdminDashboardLayout path="/admin/placement-test-content-file-upload" component={filesUploadComponentForAdmin} />
           <AdminDashboardLayout path="/admin/view-answers-mcq" component={ViewAnswersMCQForAdmin} />
           <AdminDashboardLayout path="/admin/view-answers-blanks" component={ViewAnswersBlanksForAdmin} />
           <AdminDashboardLayout path="/admin/view-answers-qa" component={ViewAnswersQAForAdmin} />
           <AdminDashboardLayout path="/admin/view-answers-pronunciation" component={ViewAnswersPronunciationForAdmin} />
           <AdminDashboardLayout path="/admin/view-question-type-qa-edit" component={EditContentQAForAdmin} />
           <AdminDashboardLayout path="/admin/view-question-answer-type-mcq-edit" component={EditContentMCQForAdmin} />
           <AdminDashboardLayout path="/admin/view-question-answer-type-blanks-edit" component={EditContentBlanksForAdmin} />
           <AdminDashboardLayout path="/admin/view-question-answer-type-pronunciation-edit" component={EditContentPronunciationForAdmin} />
           <AdminDashboardLayout path="/admin/placement-test-list" component={ViewContentListForAdmin} />
           <AdminDashboardLayout path="/admin/view-results" component={ListOfStudentAnswersForAdmin} />
           <AdminDashboardLayout path="/admin/view-current-answer" component={ViewCurrentAnswerForAdmin} />
           <AdminDashboardLayout path="/admin/view-current-content" component={ViewCurrentContentForAdmin} />
           {/*Start of AdminDashboardLayout Calls for Classes Sections and Courses */}
           {/*---------------School Adult---------- */}
           <AdminDashboardLayout path="/admin/section-school-adult-male" component={SectionForMaleStudentForAdmin} />
           <AdminDashboardLayout path="/admin/section-school-adult-female" component={SectionForFemaleStudentsAdultForAdmin} />
           {/*---------------School Junior---------- */}
           <AdminDashboardLayout path="/admin/section-school-junior-female" component={SectionForFemaleStudentsJuniorForAdmin} />
           <AdminDashboardLayout path="/admin/section-school-junior-male" component={SectionForMaleStudentsJuniorForAdmin} />
           {/*---------------Business---------- */}
           <AdminDashboardLayout path="/admin/section-business-group-month" component={BusinessSectionsGroupMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-business-group-week" component={BusinessSectionsGroupWeekForAdmin} />
           <AdminDashboardLayout path="/admin/section-business-one-month" component={BusinessSectionsOneToOneMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-business-one-week" component={BusinessSectionsOneToOneWeekForAdmin} />
           {/*---------------Examination---------- */}
           <AdminDashboardLayout path="/admin/section-examination-group-month" component={ExaminationsFourGroupMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-examination-group-week" component={ExaminationsOneGroupWeekForAdmin} />
           <AdminDashboardLayout path="/admin/section-examination-one-month" component={ExaminationsOneMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-examination-one-week" component={ExaminationsOneWeekForAdmin} />
           {/*---------------General English---------- */}
           <AdminDashboardLayout path="/admin/section-english-group-month" component={EnglishGroupMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-english-group-week" component={EnglishGroupWeekForAdmin} />
           <AdminDashboardLayout path="/admin/section-english-one-month" component={EnglishOneToOneMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-english-one-week" component={EnglishOneToOneWeekForAdmin} />
           {/*---------------IELTS---------- */}
           <AdminDashboardLayout path="/admin/section-ielts-twentytwo-sixmonth" component={IELTSTwentyTwoSixMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-ielts-twentytwo-tenmonth" component={IELTSTwentyTwoTenMonthForAdmin} />
           {/*---------------Junior Training---------- */}
           <AdminDashboardLayout path="/admin/section-junior-group-month" component={JuniorTrainingGroupMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-junior-group-week" component={JuniorTrainingGroupWeekForAdmin} />
           <AdminDashboardLayout path="/admin/section-junior-one-month" component={JuniorTrainingOneToOneMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-junior-one-week" component={JuniorTrainingOneToOneWeekForAdmin} />
           {/*---------------Specialized Examinations---------- */}
           <AdminDashboardLayout path="/admin/section-special-examinations-group-month" component={SpecialExaminationsGroupMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-special-examinations-group-week" component={SpecialExaminationsGroupWeekForAdmin} />
           <AdminDashboardLayout path="/admin/section-special-examinations-one-month" component={SpecialExaminationsOneToOneMonthForAdmin} />
           <AdminDashboardLayout path="/admin/section-special-examinations-one-week" component={SpecialExaminationsOneToOneWeekForAdmin} />
            {/*------------------------------------------------------*/}
        </Switch>
      </Router>

      </div>
    </div>
  );
}

export default App;
