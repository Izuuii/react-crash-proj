import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import AddJobPage from './pages/AddJobPage'
import MainLayout from './layouts/MainLayout'
import EditJobPage from './pages/EditJobPage'

// Add Job
function App() {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST', //Send data
      headers: {
        'Content-Type': 'application/json', //used to tell the server that the data we're sending is in JSON format. 
      },
      body: JSON.stringify(newJob), //This is the data being sent in the request.
    });
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT', //Update an existing resource on the server.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Route>
      )
    )  
  return (
    <RouterProvider router={router}/> 
  )
}

export default App
