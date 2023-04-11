import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const jobs = useLoaderData()
    // console.log(jobs);
    const [jobData, setJobData] = useState(null)
    useEffect(() => {
        if (jobs) {
            const jobsdata = jobs.find(job => job.id === id)
            setJobData(jobsdata)
        }
    }, [jobs, id])

    // console.log(jobData);

    if (!jobData) {
        return <div>Loading...</div>;
      }
    return (
        <div>
            <h1>job details: {jobData.title}</h1>
        </div>
    );
};

export default JobDetails;