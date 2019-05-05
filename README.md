# uPlan

__Problem Statement__  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Disorganization among students often leads to stress, self-esteem issues, and failing grades.1  Over the past decade, students have increasingly reported feelings of being overwhelmed and depressed.2   Missing assignments due to disorganization can lead to students feeling as though they are spiraling out of control with no chance of catching back up. After missing a few assignments the student may feel that missing one more assignment is not going to make a big difference, so why bother? Each missed assignment leads to a greater feeling of hopelessness and increases the likelihood of the student simply giving up.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The academic success of a student is the result of a variety of factors, but at the center of academic success is organization.  A student’s ability to remain organized can greatly improve their ability to meet their potential and deliver results.  Despite the necessity of students to remain organized, universities rarely offer cohesive tools to assist in this endeavor. Professors often adopt a variety of different methods for providing information to students, increasing the amount of effort required for a student to keep track of basic information relevant to a course such as upcoming assignments, grades, groups, etc. The disparity between teacher’s methods for distributing assignments makes it easy for students to lose track of important information and fail to reach their full potential.


__Team Roles & Responsibilities__  
+ Joey Wilson - Architect
+ Chris Vennel - Engineer
+ Gregory Warchol - Engineer


__Personas__

| User | Description |
| :---: | :-: |
| Student | The typical user would be someone who wants to stay organized and be able to properly manage their time. They would like placing tasks in lists and being able to check through a list of completed items and non complete items. |
| Instructor | The typical user would want to be able to provide an easy space where their students can find all of their tasks and due dates related to the course. The instructors are not required for students to use this tool. The instructor would be the type of person to want to go that extra step for the students. |


__Features__

| User | Feature Name | Description | 
| :---: | :-: | :-: |
| Student | View Schedule | As a student, I would like to view all of my upcoming scheduled events. |
| Student | View TODO List | As a student, I would like to view my current TODO items |
| Student/Instructor | Add Schedule Item | As a student/instructor, I would like to be able to add items to my schedule. |
| Student | Add TODO Item | As a student, I would like to be able to add a TODO items that I would like to track. |
| Instructor | Create Class | As an instructor, I would like to be able to create a class for students to join. |
| Student | Join a Class | As a student, I would like to be able to join an existing class to receive updates. |


<img src="https://raw.githubusercontent.com/gang-of-3/uPlan/master/Architectural%20Diagram.png" alt="drawing" width="600"/>

__Figure 1. Architectural Overview__

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The system shall be divided into three primary layers. The Presentation Layer will encompass a web application responsible for displaying data to the end-user and prompting the end-user for data input. The web application will communicate with REST services for all necessary data retrieval and updates.  Server-side service and business logic shall be contained by the application layer and expressed through a variety of specialized services.  All interaction with the database shall be conducted by the entity layer which will be out of scope for this project and instead mock-data will be utilized.  Although the entity layer will not be developed, interfaces to the entity layer will be established such that, in the future, a full implementation of the entity layer could be easily conducted.  In Figure 1, the layers are displayed as well as generalized services that will be provided.  Figure 1 highlights the delineation of responsibilities between UI components, application components, and entity components.


<img src="https://raw.githubusercontent.com/gang-of-3/uPlan/master/Basic%20Sequence%20Diagram.png" alt="drawing" width="400"/>

__Figure 2. Schedule Sequence Diagram__

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Figure 2, above, the general architecture diagram shown in Figure 1 is further decomposed to demonstrate the communication flow for a use case involving viewing a schedule.  Other use cases may follow a similar flow to that of Figure 2 but may involve other UI elements and REST services.  When the user navigates to the schedule page a REST call will be made to retrieve all events from a schedule service.  The schedule service is responsible for ensuring the validity of the received request and delivering the requested information.  The schedule service will request data from the entity layer via an established interface with a Schedule Data Access Object.


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After relevant data is retrieved the service will be responsible for performing any filtering and decoration necessary for proper presentation back to the UI.  For example, the service API may allow for the specification of a date range of desired events, or for a specification of event types that are desired.  The service layer shall then be responsible for either requesting the correct data of the DAO, or in some scenarios performing the necessary filters.  Decoration tasks may also be required to decode fields that are not human readable, such as type identifiers.  After all transformations of the data have occurred the service shall respond to the requestor with a well-formed JSON response.

__Patterns & Tactics__

Layer Pattern
	
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The uPlan system is first and foremost designed around a layer pattern.  Three distinct layers were identified; the Presentation Layer, Application Layer, and the Entity Layer. The Presentation Layer shall encompass all UI components, the Application Layer will include the logic of the system, and the entity layer will provide all interactions with the database.  By compartmentalizing tasks between layers the development team can simultaneously develop each component and take a divide and conquer approach. Additionally, by separating duties between components future modifications should not have unintended consequences across the various layers which will simplify expansion. While the layer pattern required some planning ahead, the extra effort devoted to planning will be more than made up for in future simplification and time savings.

SOA Architecture
	
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The uPlan system will rely on a variety of service providers for data retrieval and updates.  A number of stateless, autonomous services with explicit contracts will be available for consumption by the web-application that will allow for simplified communication between the services and consumers.  Each service will be responsible for a focused purpose, such as retrieving or updating a specific dataset and applying necessary transformations. The system requires a variety of data for distinct purposes, so having specialized services for each need will allow for easy modification and extensibility.  As each service is entirely independent from the other services of the project, the development of each service will be able to be carried out independently.  Also, interfaces for each service will be established early in project development, such that service development does not hinder the development of the web application, as only an interface will be required during early development phases.

Client-Server Pattern

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a web based application, uPlan will primarily be accessed via a browser.  To provide a rich and interactive experience a client side application will be developed allowing for input and display of data received from a server side application.  Data will be provided to the web application via REST endpoints allowing for a clean separation of client and server responsibilities.  As the system requires numerous users to be able to simultaneously interact with the system, utilization of the client-server pattern will allow for optimal performance and scalability.  Placing the main processing on the server side will allow for less user side processing. This will make the application low cost on the user side, but the server may become a bottleneck. However, It is easier to increase the performance on the server side after release. This will allow more devices to utilize our application. Also, having such a separation will allow for easy scalability of the system as more users are introduced.

