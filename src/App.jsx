import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEndPkpxU-FDOQK0acJ6iuFECTI914xOelQ&s",
      companyName: "Google",
      jobTitle: "Frontend Developer",
      postedDate: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$22 / hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      jobTitle: "Software Engineer Intern",
      postedDate: "1 week ago",
      tag1: "Internship",
      tag2: "Entry Level",
      pay: "$15 / hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      jobTitle: "Senior React Engineer",
      postedDate: "3 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$35 / hour",
      location: "Gurugram, India",
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      jobTitle: "UI Engineer",
      postedDate: "2 weeks ago",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$28 / hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://i.ytimg.com/vi/GV3HUDMQ-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDX0meXWntQams20Wn3jArUnablg",
      companyName: "Netflix",
      jobTitle: "Frontend Performance Engineer",
      postedDate: "4 days ago",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$40 / hour",
      location: "Remote, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqcmzPSuXI2tc0I589pbBeKTQTTtAjeg3lrw&s",
      companyName: "Microsoft",
      jobTitle: "Junior Web Developer",
      postedDate: "6 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$24 / hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&sm",
      companyName: "Uber",
      jobTitle: "Frontend Engineer",
      postedDate: "3 weeks ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$30 / hour",
      location: "Pune, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLuPLtsqm9ImBFMQ1iTh61M3LSB7uAEAxQA&s",
      companyName: "Airbnb",
      jobTitle: "Senior UI Engineer",
      postedDate: "10 days ago",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$38 / hour",
      location: "Remote, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVer_wMBRrUuTJfkLE_pq1nZRrlaHrWVkNUA&s",
      companyName: "Oracle",
      jobTitle: "Associate Frontend Developer",
      postedDate: "8 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$20 / hour",
      location: "Lucknow, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZk18axFbwloR8J_NvRhGry9B1bBUx0X5nQ&s",
      companyName: "Salesforce",
      jobTitle: "Frontend Developer Intern",
      postedDate: "2 days ago",
      tag1: "Internship",
      tag2: "Student Level",
      pay: "$12 / hour",
      location: "Jaipur, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (el, idx) {
        return (
         <div key={idx}>
            <Card
            logo={el.brandLogo}
            company={el.companyName}
            post={el.postedDate}
            role={el.jobTitle}
            tag1={el.tag1}
            tag2={el.tag2}
            payment={el.pay}
            location={el.location}
          />
         </div>
        );
      })}
    </div>
  );
};

export default App;
